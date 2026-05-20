import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { addProject, reorderProjects } from '../services/storageService';
import { compressImageDataUrl, getImageAspectRatio } from '../utils/imageCompress';
import { isStorageUrl, uploadImageToStorage } from '../services/supabase';
import Arrow from './Arrow';
import toast from 'react-hot-toast';
import RichTextEditor from './RichTextEditor';
import LocationsField from './admin/LocationsField';
import { PortfolioData, Project } from '../types';
import { isReservedSlug, projectPath, slugify } from '../utils/slug';
import { PALETTE, HUES } from '../constants';
import AdminTop from './optc/admin/AdminTop';
import AdminBtn from './optc/admin/AdminBtn';
import CapV2 from './optc/CapV2';
import ChipV2 from './optc/ChipV2';
import Footer from './optc/Footer';

interface NewProjectPageProps {
  data: PortfolioData;
  onRefresh: (updatedData?: PortfolioData) => void;
}

interface PageProps {
  data: PortfolioData;
  onRefresh: (updatedData?: PortfolioData) => void;
}

/* ───────────────────── Admin Project List ─────────────────────── */

export const AdminProjectListPage: React.FC<PageProps> = ({ data, onRefresh }) => {
  const { isAdmin } = useAdminAuth();
  const navigate = useNavigate();
  const [isReordering, setIsReordering] = useState(false);
  const [reorderList, setReorderList] = useState<Project[]>(data.projects);

  React.useEffect(() => {
    if (!isAdmin) navigate('/admin');
  }, [isAdmin, navigate]);

  React.useEffect(() => {
    setReorderList(data.projects);
  }, [data.projects]);

  if (!isAdmin) return null;

  const ink = PALETTE.textPrimary;
  const paper = PALETTE.backgroundMain;
  const muted = PALETTE.textSecondary;

  const moveUp = (idx: number) => {
    if (idx <= 0) return;
    setReorderList((prev) => {
      const next = [...prev];
      [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
      return next;
    });
  };
  const moveDown = (idx: number) => {
    setReorderList((prev) => {
      if (idx >= prev.length - 1) return prev;
      const next = [...prev];
      [next[idx + 1], next[idx]] = [next[idx], next[idx + 1]];
      return next;
    });
  };

  const saveReorder = async () => {
    const updated = await reorderProjects(reorderList.map((p) => p.id));
    onRefresh(updated);
    setIsReordering(false);
  };

  return (
    <div className="fixed inset-0 flex flex-col overflow-y-auto" style={{ background: paper, color: ink, fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif' }}>
      <AdminTop trail={['Admin', 'Projects']} />

      <section style={{ borderBottom: `1px solid ${ink}`, padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <h1 style={{ margin: 0, fontFamily: '"Source Serif 4", ui-serif, Georgia, serif', fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>Projects.</h1>
        <div style={{ display: 'flex', gap: 8 }}>
          {isReordering ? (
            <>
              <AdminBtn onClick={() => { setIsReordering(false); setReorderList(data.projects); }}>Cancel</AdminBtn>
              <AdminBtn primary onClick={saveReorder}>Save order</AdminBtn>
            </>
          ) : (
            <>
              {data.projects.length > 1 && <AdminBtn onClick={() => setIsReordering(true)}>Reorder</AdminBtn>}
              <AdminBtn primary onClick={() => navigate('/project/new')}>+ New project</AdminBtn>
            </>
          )}
        </div>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 100px 80px 120px 100px', alignItems: 'center', padding: '14px 32px', borderBottom: `1px solid ${ink}`, background: 'rgba(0,0,0,0.04)' }}>
        {['', 'Title', 'Year', 'Plates', 'Status', ''].map((c, i) => (
          <CapV2 key={i} size={10} color={muted}>{c}</CapV2>
        ))}
      </div>

      {(isReordering ? reorderList : data.projects).map((p, i) => {
        const isLive = p.gallery.length > 0;
        return (
          <div key={p.id} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 100px 80px 120px 100px', alignItems: 'center', padding: '20px 32px', borderBottom: `1px solid ${ink}`, color: isLive ? ink : muted }}>
            <CapV2 size={10} color={muted}>{String(i + 1).padStart(2, '0')}</CapV2>
            <span style={{ fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif', fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em' }}>{p.title || '[ untitled ]'}</span>
            <CapV2 size={11} color={muted}>{p.year}</CapV2>
            <CapV2 size={11} color={muted}>{String(p.gallery.length).padStart(2, '0')}</CapV2>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, background: isLive ? HUES.mint : HUES.yellow }} />
              <CapV2 size={10}>{isLive ? 'Live' : 'Draft'}</CapV2>
            </span>
            <span style={{ textAlign: 'right' }}>
              {isReordering ? (
                <span style={{ display: 'inline-flex', gap: 6 }}>
                  <button type="button" onClick={() => moveUp(i)} style={{ background: 'transparent', border: `1px solid ${ink}`, cursor: 'pointer', padding: '4px 8px' }}>↑</button>
                  <button type="button" onClick={() => moveDown(i)} style={{ background: 'transparent', border: `1px solid ${ink}`, cursor: 'pointer', padding: '4px 8px' }}>↓</button>
                </span>
              ) : (
                <Link to={projectPath(p)} style={{ textDecoration: 'none', color: ink, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <CapV2 size={10}>Edit</CapV2>
                  <Arrow dir="right" size={12} stroke={ink} />
                </Link>
              )}
            </span>
          </div>
        );
      })}

      {data.projects.length === 0 && (
        <div style={{ padding: '40px 32px', background: 'rgba(0,0,0,0.04)' }}>
          <CapV2 size={11} color={muted}>No projects yet. Use “+ New project” to create one.</CapV2>
        </div>
      )}

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
        {[
          { label: 'About', sub: 'Edit bio + portrait', hue: HUES.mint, to: '/about' },
          { label: 'Contact', sub: 'Email + socials', hue: HUES.yellow, to: '/contact' },
          { label: 'Deployment', sub: 'Publish · domain', hue: HUES.coral, to: '/admin/deployment' },
        ].map((s, i) => (
          <Link
            key={i}
            to={s.to}
            style={{
              textDecoration: 'none',
              color: ink,
              padding: '32px',
              borderRight: i < 2 ? `1px solid ${ink}` : 'none',
              borderTop: `1px solid ${ink}`,
              borderBottom: `1px solid ${ink}`,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <ChipV2 color={s.hue} size={14} />
              <CapV2 size={10}>{s.label}</CapV2>
            </span>
            <span style={{ fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif', fontSize: 36, fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1 }}>{s.sub}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <CapV2 size={10} color={muted}>Open</CapV2>
              <Arrow dir="right" size={12} stroke={muted} />
            </span>
          </Link>
        ))}
      </section>

      <Footer floatToBottom />
    </div>
  );
};

/* ───────────────────── New Project form ───────────────────────── */

const NewProjectPage: React.FC<NewProjectPageProps> = ({ data, onRefresh }) => {
  const { isAdmin } = useAdminAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [medium, setMedium] = useState('');
  const [locations, setLocations] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [coverAspectRatio, setCoverAspectRatio] = useState<number | undefined>(undefined);
  const [gallery, setGallery] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  React.useEffect(() => {
    if (!isAdmin) navigate('/');
  }, [isAdmin, navigate]);

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
    setImageUrl(compressed);
    setCoverAspectRatio(ratio);
  }, []);

  const handleGalleryFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;
    setIsUploading(true);
    const loaded: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(files[i]);
      });
      loaded.push(await compressImageDataUrl(base64));
    }
    setGallery((prev) => (prev.length ? [...prev, ...loaded] : loaded));
    if (!imageUrl && loaded[0]) {
      setImageUrl(loaded[0]);
      const ratio = await getImageAspectRatio(loaded[0]).catch(() => undefined);
      setCoverAspectRatio(ratio);
    }
    setIsUploading(false);
  };

  const removeGalleryImage = (index: number) => {
    const next = gallery.filter((_, i) => i !== index);
    setGallery(next);
    if (imageUrl && gallery[index] === imageUrl) {
      setImageUrl(next[0] ?? '');
      if (next[0]) getImageAspectRatio(next[0]).then(setCoverAspectRatio).catch(() => setCoverAspectRatio(undefined));
      else setCoverAspectRatio(undefined);
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      alert('Please provide a project title.');
      return;
    }
    if (gallery.length === 0) {
      alert('Please provide at least one image.');
      return;
    }
    const slug = slugify(trimmedTitle);
    if (!slug || isReservedSlug(slug)) {
      alert('That title produces a URL that conflicts with a site page. Please choose a different title.');
      return;
    }
    if (data.projects.some((p) => slugify(p.title) === slug)) {
      alert('A project with this title already exists. Please choose a different title.');
      return;
    }
    try {
      setIsSaving(true);
      const id = slug;
      // Upload any inline base64 plates to Storage first so the row stays tiny.
      const uploadedGallery = await Promise.all(
        gallery.map((url) => (isStorageUrl(url) ? Promise.resolve(url) : uploadImageToStorage(url, id))),
      );
      const coverSource = imageUrl || gallery[0] || '';
      const cover = coverSource
        ? (isStorageUrl(coverSource)
            ? coverSource
            : (gallery.findIndex((u) => u === coverSource) >= 0
                ? uploadedGallery[gallery.findIndex((u) => u === coverSource)]
                : await uploadImageToStorage(coverSource, id)))
        : '';
      const ratio = coverAspectRatio ?? (cover ? await getImageAspectRatio(cover).catch(() => undefined) : undefined);
      const newProject: Project = {
        id,
        title: trimmedTitle,
        year: year.trim(),
        description: description.trim() || '',
        imageUrl: cover,
        gallery: uploadedGallery,
        coverAspectRatio: ratio,
        locations: locations.length ? locations : undefined,
        medium: medium.trim() || undefined,
      };
      const updatedData = await addProject(newProject);
      onRefresh(updatedData);
      toast.success('Project created');
      navigate(projectPath(newProject));
    } catch (err) {
      console.error(err);
      if (err instanceof DOMException && err.name === 'QuotaExceededError') {
        toast.error('Storage limit reached.');
      } else {
        toast.error(err instanceof Error ? err.message : 'Failed to create project.');
      }
    } finally {
      setIsSaving(false);
    }
  };

  if (!isAdmin) return null;

  const ink = PALETTE.textPrimary;
  const paper = PALETTE.backgroundMain;
  const muted = PALETTE.textSecondary;

  const inputStyle: React.CSSProperties = {
    fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif',
    fontSize: 18,
    padding: '12px 14px',
    background: paper,
    border: `1px solid ${ink}`,
    color: ink,
    outline: 'none',
    borderRadius: 0,
    width: '100%',
  };

  return (
    <div className="fixed inset-0 flex flex-col overflow-y-auto" style={{ background: paper, color: ink, fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif' }}>
      <AdminTop trail={['Admin', 'Projects', 'New']} />

      <section style={{ padding: '24px 32px', borderBottom: `1px solid ${ink}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <CapV2 size={10} color={muted}>New project</CapV2>
          <h1 style={{ margin: 0, fontFamily: '"Source Serif 4", ui-serif, Georgia, serif', fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
            {title.trim() || 'Untitled'}.
          </h1>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <AdminBtn onClick={() => navigate('/admin/projects')}>Cancel</AdminBtn>
          <AdminBtn primary onClick={() => handleSubmit()} disabled={isUploading || isSaving}>
            {isSaving ? 'Saving…' : 'Save & publish'}
          </AdminBtn>
        </div>
      </section>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr' }}>
        {/* LEFT — meta + statement */}
        <div style={{ borderRight: `1px solid ${ink}`, padding: '32px 32px 40px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {([
            ['Title', title, setTitle],
            ['Year', year, setYear],
            ['Medium', medium, setMedium],
          ] as const).map(([label, value, setter]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <CapV2 size={10} color={muted}>{label}</CapV2>
              <input value={value} onChange={(e) => setter(e.target.value)} style={inputStyle} />
            </div>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <CapV2 size={10} color={muted}>Place</CapV2>
            <LocationsField value={locations} onChange={setLocations} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <CapV2 size={10} color={muted}>Statement</CapV2>
            <RichTextEditor value={description} onChange={setDescription} placeholder="Project description…" minHeight="12rem" />
          </div>
        </div>

        {/* RIGHT — gallery */}
        <div style={{ padding: '32px 32px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
            <CapV2 size={10}>Plates · {String(gallery.length).padStart(2, '0')}</CapV2>
            <label style={{ cursor: 'pointer' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 14px', border: `1px solid ${ink}`, fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: ink }}>+ Upload</span>
              <input type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={handleGalleryFiles} />
            </label>
          </div>

          {gallery.length === 0 ? (
            <label style={{ cursor: 'pointer', aspectRatio: '4/5', border: `1px dashed ${ink}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, color: muted, background: 'rgba(0,0,0,0.02)' }}>
              <span style={{ fontSize: 32, fontWeight: 300 }}>+</span>
              <CapV2 size={9} color={muted}>Drop images</CapV2>
              <input type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={handleGalleryFiles} />
            </label>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {gallery.map((src, i) => (
                <div key={i} style={{ position: 'relative', border: `1px solid ${ink}`, aspectRatio: '4/5', overflow: 'hidden' }}>
                  <img src={src} alt={`Plate ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', top: 8, left: 8 }}>
                    <CapV2 size={9} color={paper}>{String(i + 1).padStart(2, '0')}</CapV2>
                  </div>
                  <div style={{ position: 'absolute', bottom: 8, right: 8, display: 'flex', gap: 4 }}>
                    <button type="button" onClick={() => setImageUrl(src)} style={{ background: paper, border: `1px solid ${ink}`, padding: '4px 8px', fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer' }}>
                      {imageUrl === src ? '★' : 'Cover'}
                    </button>
                    <button type="button" onClick={() => removeGalleryImage(i)} style={{ background: paper, border: `1px solid ${PALETTE.destructive}`, padding: '4px 8px', fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif', fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: PALETTE.destructive, cursor: 'pointer' }}>
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
          )}

          {isUploading && (
            <div style={{ marginTop: 12 }}>
              <CapV2 size={10} color={muted}>Uploading…</CapV2>
            </div>
          )}
        </div>
      </form>

      <Footer floatToBottom />
    </div>
  );
};

export default NewProjectPage;
