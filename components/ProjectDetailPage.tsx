import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { updateProject, deleteProject } from '../services/storageService';
import { compressImageDataUrl, getImageAspectRatio } from '../utils/imageCompress';
import { isStorageUrl, uploadImageToStorage } from '../services/supabase';
import { useIsMobile } from '../hooks/useMediaQuery';
import RichTextEditor from './RichTextEditor';
import LocationsField from './admin/LocationsField';
import { PortfolioData, Project } from '../types';
import { projectPath } from '../utils/slug';
import { PALETTE, HUES, hueForYear } from '../constants';
import Arrow from './Arrow';
import TopRibbon from './optc/TopRibbon';
import Footer from './optc/Footer';
import CapV2 from './optc/CapV2';
import TagPillV2 from './optc/TagPillV2';
import MarkerTitleV2 from './optc/MarkerTitleV2';
import AdminBtn from './optc/admin/AdminBtn';

interface ProjectDetailPageProps {
  project: Project;
  onRefresh: (updatedData?: PortfolioData) => void;
  nextProject?: Project;
  /** 0-based index of this project in the full data.projects list. */
  index?: number;
  /** Total number of projects (for the `NN / NN` counter in the breadcrumb strip). */
  total?: number;
}

/** Convert HTML/plain to paragraphs of plain text. */
function paragraphs(raw: string): string[] {
  if (!raw) return [];
  const hasTags = /<[a-z][\s\S]*>/i.test(raw);
  if (hasTags) {
    const matches = raw.match(/<p[^>]*>([\s\S]*?)<\/p>/gi);
    const stripTag = (s: string) =>
      s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
    if (matches?.length) return matches.map(stripTag).filter(Boolean);
    return [stripTag(raw)].filter(Boolean);
  }
  return raw.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project: initialProject,
  onRefresh,
  nextProject,
  index = 0,
  total = 1,
}) => {
  const positionLabel = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  const isMobile = useIsMobile();
  const { isAdmin } = useAdminAuth();
  const navigate = useNavigate();
  const showAdminActions = isAdmin && !isMobile;
  const [isEditing, setIsEditing] = useState(false);
  const [editProject, setEditProject] = useState<Project>(initialProject);
  const [isSaving, setIsSaving] = useState(false);
  const [isEditUploading, setIsEditUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const project = isEditing ? editProject : initialProject;
  const hue = hueForYear(project.year);
  const plates = project.gallery.length;
  const place = project.locations?.length ? project.locations.join(' · ') : '';

  const handleCoverFile = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';
    const dataUrl = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    });
    const compressed = await compressImageDataUrl(dataUrl);
    const ratio = await getImageAspectRatio(compressed).catch(() => undefined);
    setEditProject((p) => ({ ...p, imageUrl: compressed, coverAspectRatio: ratio }));
  }, []);

  const handleEditGalleryFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;
    setIsEditUploading(true);
    const loaded: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(files[i]);
      });
      loaded.push(await compressImageDataUrl(base64));
    }
    setEditProject((p) => ({
      ...p,
      gallery: [...p.gallery, ...loaded],
      imageUrl: p.imageUrl || loaded[0],
    }));
    setIsEditUploading(false);
  };

  const handleRemoveImage = (index: number) => {
    if (editProject.gallery.length <= 1) return;
    const next = editProject.gallery.filter((_, i) => i !== index);
    setEditProject((p) => ({ ...p, gallery: next, imageUrl: next[0] ?? p.imageUrl }));
  };

  const handleSave = async () => {
    if (!editProject.title?.trim()) {
      alert('Please provide a project title.');
      return;
    }
    if (editProject.gallery.length === 0) {
      alert('Please provide at least one image.');
      return;
    }
    try {
      setIsSaving(true);
      // For each gallery image:
      //   - If it's already a Storage URL, keep it (no-op).
      //   - If it's a base64 data URL, compress then upload → use the Storage URL.
      // This keeps the JSON row tiny so the upsert never hits the statement timeout.
      const uploadedGallery = await Promise.all(
        editProject.gallery.map(async (url) => {
          if (isStorageUrl(url)) return url;
          const compressed = await compressImageDataUrl(url);
          return uploadImageToStorage(compressed, editProject.id);
        })
      );
      const coverIndex = editProject.gallery.findIndex((u) => u === editProject.imageUrl);
      const nextCover = isStorageUrl(editProject.imageUrl)
        ? editProject.imageUrl
        : (coverIndex >= 0 ? uploadedGallery[coverIndex] : uploadedGallery[0]);
      const toSave = {
        ...editProject,
        gallery: uploadedGallery,
        imageUrl: nextCover,
      };
      await updateProject(toSave.id, toSave);
      onRefresh();
      setIsEditing(false);
      toast.success('Project saved');
    } catch (err) {
      console.error(err);
      if (err instanceof DOMException && err.name === 'QuotaExceededError') {
        toast.error('Storage limit reached.');
      } else {
        toast.error(err instanceof Error ? err.message : 'Failed to update project.');
      }
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Delete this project?')) return;
    try {
      setIsDeleting(true);
      const updatedData = await deleteProject(initialProject.id);
      onRefresh(updatedData);
      toast.success('Project deleted');
      navigate('/');
    } finally {
      setIsDeleting(false);
    }
  };

  const ink = PALETTE.textPrimary;
  const muted = PALETTE.textSecondary;
  const paper = PALETTE.backgroundMain;

  const meta: Array<[string, string]> = [];
  if (project.year) meta.push(['Year', project.year]);
  if (project.medium) meta.push(['Medium', project.medium]);
  if (plates > 0) meta.push(['Plates', `${String(plates).padStart(2, '0')} in series`]);
  if (place) meta.push(['Place', place]);

  // Pull quote = the entire first paragraph of the description (verbatim).
  // Body = every paragraph after it.
  const allParas = paragraphs(project.description);
  const pullQuote = allParas[0] ?? '';
  const bodyParas: string[] = allParas.slice(1);

  // ── Mobile path ────────────────────────────────────────────────
  if (isMobile) {
    return (
      <div className="fixed inset-0 flex flex-col overflow-y-auto" style={{ background: paper, color: ink }}>
        <TopRibbon active="works" />
        <div style={{ padding: '12px 20px', borderBottom: `1px solid ${ink}`, display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Arrow dir="left" size={11} stroke={muted} />
            <CapV2 size={9} color={muted}>Works</CapV2>
          </Link>
          <CapV2 size={9} color={muted}>/</CapV2>
          <CapV2 size={9} color={muted}>{project.year}</CapV2>
          <CapV2 size={9} color={muted}>/</CapV2>
          <CapV2 size={9}>{project.title}</CapV2>
        </div>

        {/* HERO — title + meta only (cover plate image removed per request) */}
        <section style={{ padding: '20px 20px 28px', borderBottom: `1px solid ${ink}` }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
            <TagPillV2 hue={hue} label={project.year} size={10} chip={10} />
          </div>
          <MarkerTitleV2 title={project.title} hue={hue} size={64} washHeight={0.5} />
          {meta.length > 0 && (
            <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '72px 1fr', rowGap: 10, columnGap: 12 }}>
              {meta.map(([k, v], i) => (
                <React.Fragment key={i}>
                  <CapV2 size={9} color={muted}>{k}</CapV2>
                  <span style={{ fontFamily: '"abril-text", ui-serif, Georgia, serif', fontSize: 13, color: ink, lineHeight: 1.3 }}>{v}</span>
                </React.Fragment>
              ))}
            </div>
          )}
        </section>

        {/* STATEMENT — pull quote + body (no second horizontal divider) */}
        {allParas.length > 0 && (
          <section style={{ borderBottom: `1px solid ${ink}` }}>
            <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '18px 20px' }}>
              <TagPillV2 hue={HUES.yellow} label="Statement" size={10} chip={10} />
            </header>
            <div style={{ padding: '8px 20px 0' }}>
              <h2 style={{ margin: 0, fontFamily: '"sarvatrik-latin-variable", ui-serif, Georgia, serif', fontSize: 32, fontWeight: 400, fontStyle: 'italic', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{pullQuote}</h2>
            </div>
            <div style={{ padding: '20px 20px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {bodyParas.map((p, i) => (
                <p key={i} style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>{p}</p>
              ))}
            </div>
          </section>
        )}

        {/* PLATES — full-bleed stack, no pill header */}
        {(project.gallery.length > 0 || isAdmin) && (
          <section style={{ borderBottom: `1px solid ${ink}` }} id="plates">
            {project.gallery.length > 0 ? (
              project.gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} plate ${i + 1}`}
                  style={{ width: '100%', display: 'block' }}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
              ))
            ) : (
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <CapV2 size={10} color={muted}>Upload plates via Admin</CapV2>
              </div>
            )}
          </section>
        )}

        {/* Bottom nav — back to All works + Next project */}
        <section style={{ padding: '20px', borderBottom: `1px solid ${ink}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 'auto' }}>
          <Link to="/" style={{ textDecoration: 'none', color: ink, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Arrow dir="left" size={18} stroke={ink} />
            <span style={{ fontFamily: '"abril-text", ui-serif, Georgia, serif', fontSize: 18, fontWeight: 500 }}>All works</span>
          </Link>
          {nextProject ? (
            <Link
              to={projectPath(nextProject)}
              style={{ textDecoration: 'none', color: ink, display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <span style={{ fontFamily: '"abril-text", ui-serif, Georgia, serif', fontSize: 18, fontWeight: 500 }}>Next</span>
              <Arrow dir="right" size={18} stroke={ink} />
            </Link>
          ) : null}
        </section>

        <Footer />
      </div>
    );
  }

  // ── Desktop path ───────────────────────────────────────────────

  // Editing inline edit view (preserve existing flow, gated)
  if (showAdminActions && isEditing) {
    return (
      <div className="fixed inset-0 flex flex-col overflow-y-auto" style={{ background: paper, color: ink }}>
        <TopRibbon active="works" />
        <section style={{ padding: '32px 40px', borderBottom: `1px solid ${ink}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <CapV2 size={10} color={muted}>Editing project</CapV2>
            <h1 style={{ margin: 0, fontFamily: '"abril-display", ui-serif, Georgia, serif', fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>{editProject.title || initialProject.title}</h1>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <AdminBtn danger onClick={handleDelete} disabled={isDeleting}>{isDeleting ? 'Deleting…' : 'Delete'}</AdminBtn>
            <AdminBtn onClick={() => { setIsEditing(false); setEditProject(initialProject); }}>Discard</AdminBtn>
            <AdminBtn primary onClick={handleSave} disabled={isSaving}>{isSaving ? 'Saving…' : 'Save & publish'}</AdminBtn>
          </div>
        </section>
        <section style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr' }}>
          <div style={{ borderRight: `1px solid ${ink}`, padding: '32px 32px 40px', display: 'flex', flexDirection: 'column', gap: 24 }}>
            {([
              ['Title', editProject.title, (v: string) => setEditProject((p) => ({ ...p, title: v }))],
              ['Year', editProject.year, (v: string) => setEditProject((p) => ({ ...p, year: v }))],
              ['Medium', editProject.medium ?? '', (v: string) => setEditProject((p) => ({ ...p, medium: v }))],
            ] as const).map(([label, value, setter]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <CapV2 size={10} color={muted}>{label}</CapV2>
                <input
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  style={{
                    fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif',
                    fontSize: 18,
                    padding: '12px 14px',
                    background: paper,
                    border: `1px solid ${ink}`,
                    color: ink,
                    outline: 'none',
                    borderRadius: 0,
                  }}
                />
              </div>
            ))}
            {/* Locations — city + country chips */}
            <LocationsField
              value={editProject.locations ?? []}
              onChange={(next) => setEditProject((p) => ({ ...p, locations: next.length ? next : undefined }))}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <CapV2 size={10} color={muted}>Statement</CapV2>
              <RichTextEditor
                value={editProject.description}
                onChange={(html) => setEditProject((p) => ({ ...p, description: html }))}
                placeholder="Project description…"
                minHeight="12rem"
              />
            </div>
          </div>
          <div style={{ padding: '32px 32px 40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <CapV2 size={10}>Plates · {String(editProject.gallery.length).padStart(2, '0')}</CapV2>
              <label style={{ cursor: 'pointer' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 14px', border: `1px solid ${ink}`, fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: ink }}>+ Upload</span>
                <input type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={handleEditGalleryFiles} />
              </label>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {editProject.gallery.map((src, i) => (
                <div key={i} style={{ position: 'relative', border: `1px solid ${ink}`, aspectRatio: '4/5', overflow: 'hidden' }}>
                  <img src={src} alt={`Plate ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', top: 8, left: 8 }}>
                    <CapV2 size={9} color={paper}>{String(i + 1).padStart(2, '0')}</CapV2>
                  </div>
                  <div style={{ position: 'absolute', bottom: 8, right: 8, display: 'flex', gap: 4 }}>
                    <button
                      type="button"
                      onClick={() => setEditProject((p) => ({ ...p, imageUrl: src }))}
                      style={{ background: paper, border: `1px solid ${ink}`, padding: '4px 8px', fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer' }}
                    >
                      {editProject.imageUrl === src ? '★' : 'Cover'}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(i)}
                      style={{ background: paper, border: `1px solid ${PALETTE.destructive}`, padding: '4px 8px', fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: PALETTE.destructive, cursor: 'pointer' }}
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
              <label style={{ cursor: 'pointer', aspectRatio: '4/5', border: `1px dashed ${ink}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, color: muted, background: 'rgba(0,0,0,0.02)' }}>
                <span style={{ fontSize: 32, fontWeight: 300 }}>+</span>
                <CapV2 size={9} color={muted}>Drop image</CapV2>
                <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleCoverFile} />
              </label>
            </div>
            {isEditUploading && (
              <div style={{ marginTop: 12 }}>
                <CapV2 size={10} color={muted}>Uploading…</CapV2>
              </div>
            )}
          </div>
        </section>
        <Footer floatToBottom />
      </div>
    );
  }

  // Default desktop public view
  return (
    <div className="fixed inset-0 flex flex-col overflow-y-auto" style={{ background: paper, color: ink }}>
      <TopRibbon active="works" />

      {/* Breadcrumb */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 40px',
          borderBottom: `1px solid ${ink}`,
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Arrow dir="left" size={13} stroke={muted} />
            <CapV2 size={11} color={muted}>Works</CapV2>
          </Link>
          <CapV2 size={11} color={muted}>/</CapV2>
          <CapV2 size={11} color={muted}>{project.year}</CapV2>
          <CapV2 size={11} color={muted}>/</CapV2>
          <CapV2 size={11}>{project.title}</CapV2>
        </div>
        {showAdminActions ? (
          <button
            type="button"
            onClick={() => { setEditProject(initialProject); setIsEditing(true); }}
            style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', color: ink, display: 'inline-flex', alignItems: 'center', gap: 6 }}
          >
            <CapV2 size={11}>Edit</CapV2>
            <Arrow dir="right" size={13} stroke={ink} />
          </button>
        ) : (
          <CapV2 size={11} color={muted}>{positionLabel}</CapV2>
        )}
      </div>

      {/* HERO — title + meta only (cover plate image + counter removed per request) */}
      <section style={{ background: paper, borderBottom: `1px solid ${ink}`, padding: '40px 40px 56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: 32 }}>
          <TagPillV2 hue={hue} label={project.year} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <MarkerTitleV2 title={project.title} hue={hue} size={120} washHeight={0.5} />
          {meta.length > 0 && (
            <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: '100px 1fr', rowGap: 16, columnGap: 16, maxWidth: 520 }}>
              {meta.map(([k, v], i) => (
                <React.Fragment key={i}>
                  <CapV2 size={10} color={muted}>{k}</CapV2>
                  <span style={{ fontFamily: '"abril-text", ui-serif, Georgia, serif', fontSize: 15, color: ink, lineHeight: 1.3 }}>{v}</span>
                </React.Fragment>
              ))}
            </div>
          )}
          {plates > 0 && (
            <a
              href="#plates"
              style={{
                marginTop: 36,
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 18px',
                background: ink,
                color: paper,
                textDecoration: 'none',
              }}
            >
              <CapV2 size={11} color={paper}>Browse all {String(plates).padStart(2, '0')} plates</CapV2>
              <Arrow dir="right" size={13} stroke={paper} />
            </a>
          )}
        </div>
      </section>

      {/* STATEMENT + PLATES — merged 2-col: left 2/5 statement text, right 3/5 stacked plates */}
      {(allParas.length > 0 || project.gallery.length > 0) && (
        <section style={{ borderBottom: `1px solid ${ink}` }} id="plates">
          {allParas.length > 0 && (
            <>
              <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '32px 40px', gap: 20 }}>
                <TagPillV2 hue={HUES.yellow} label="Statement" />
              </header>
              <div style={{ padding: '32px 40px 32px', borderBottom: `1px solid ${ink}` }}>
                {/* Editorial pull quote: lighter weight, italic, generous leading — easier to read for long sentences. */}
                <h2 style={{ margin: 0, fontFamily: '"sarvatrik-latin-variable", ui-serif, Georgia, serif', fontSize: 68, fontWeight: 400, fontStyle: 'italic', letterSpacing: '-0.025em', lineHeight: 1.18, maxWidth: 1100 }}>{pullQuote}</h2>
              </div>
            </>
          )}
          {/*
            Section height is driven by the left column (statement text).
            The right column is positioned absolutely so it doesn't push the
            section taller; it scrolls internally to access the full gallery.
          */}
          <div style={{ position: 'relative' }}>
            {/* Left 2/5 — all body paragraphs stacked (sets section height) */}
            <div style={{ width: '40%', padding: '32px 40px', borderRight: `1px solid ${ink}`, display: 'flex', flexDirection: 'column', gap: 18, boxSizing: 'border-box' }}>
              {bodyParas.map((p, i) => (
                <p key={i} style={{ margin: 0, fontSize: 16, lineHeight: 1.65 }}>{p}</p>
              ))}
            </div>
            {/* Right 3/5 — plates stacked, independently scrollable */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: '60%',
                overflowY: 'auto',
              }}
            >
              {project.gallery.length > 0 ? (
                project.gallery.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.title} plate ${i + 1}`}
                    style={{ width: '100%', display: 'block' }}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                ))
              ) : isAdmin ? (
                <div style={{ padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CapV2 size={11} color={muted}>Upload plates via Admin</CapV2>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      )}

      {/* Bottom nav — both sides share the same chevron+label layout */}
      <section style={{ borderBottom: `1px solid ${ink}`, padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
        <Link to="/" style={{ textDecoration: 'none', color: ink, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <Arrow dir="left" size={22} stroke={ink} />
          <span style={{ fontFamily: '"abril-text", ui-serif, Georgia, serif', fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em' }}>All works</span>
        </Link>
        {nextProject ? (
          <Link
            to={projectPath(nextProject)}
            style={{ textDecoration: 'none', color: ink, display: 'inline-flex', alignItems: 'center', gap: 10 }}
          >
            <span style={{ fontFamily: '"abril-text", ui-serif, Georgia, serif', fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em' }}>Next</span>
            <Arrow dir="right" size={22} stroke={ink} />
          </Link>
        ) : null}
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
