import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { updateProject, deleteProject } from '../services/storageService';
import { compressImageDataUrl, getImageAspectRatio } from '../utils/imageCompress';
import { useIsMobile } from '../hooks/useMediaQuery';
import RichTextEditor from './RichTextEditor';
import SafeHtml from './SafeHtml';
import { PortfolioData, Project } from '../types';
import { DetailBreadcrumb, DetailGreyFooter, DetailHeading, DetailMetaRow, DetailRightBar } from './detailPrimitives';
import { projectPath } from '../utils/slug';
import AdminButton from './admin/AdminButton';

const FullScreenDetail: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="fixed inset-0 bg-bgMain flex flex-col overflow-hidden">
    {children}
  </div>
);

const ProtectedImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const bgClass = 'bg-bgMain';
  if (!src) return (
    <div className={`w-full aspect-[4/5] border border-dashed border-paletteBorder ${bgClass}`} aria-hidden />
  );
  return (
    <div className={`relative w-full h-full overflow-hidden ${bgClass}`}>
      <img
        src={src}
        alt={alt}
        className={className ? `${className} w-full h-full object-contain` : 'w-full h-full object-contain'}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        style={{ pointerEvents: 'none' }}
      />
      <div className="absolute inset-0 z-10 bg-transparent" onContextMenu={(e) => e.preventDefault()} />
    </div>
  );
};

interface ProjectDetailPageProps {
  project: Project;
  onRefresh: (updatedData?: PortfolioData) => void;
  /** Next project in navigation order (for the grey footer link). */
  nextProject?: Project;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project: initialProject, onRefresh, nextProject }) => {
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

  const setCoverFromGallery = useCallback((index: number) => {
    const img = editProject.gallery[index];
    if (!img) return;
    getImageAspectRatio(img).then((ratio) => {
      setEditProject((p) => ({ ...p, imageUrl: img, coverAspectRatio: ratio }));
    }).catch(() => {
      setEditProject((p) => ({ ...p, imageUrl: img }));
    });
  }, [editProject.gallery]);

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
    setEditProject((p) => ({ ...p, gallery: [...p.gallery, ...loaded], imageUrl: p.imageUrl || loaded[0] }));
    setIsEditUploading(false);
  };

  const handleRemoveImage = (index: number) => {
    if (editProject.gallery.length <= 1) return;
    const next = editProject.gallery.filter((_, i) => i !== index);
    setEditProject((p) => ({ ...p, gallery: next, imageUrl: next[0] ?? p.imageUrl }));
  };

  const handleReplaceImage = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';
    setIsEditUploading(true);
    const base64 = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    });
    const compressed = await compressImageDataUrl(base64);
    const next = [...editProject.gallery];
    next[index] = compressed;
    setEditProject((p) => ({
      ...p,
      gallery: next,
      imageUrl: index === 0 ? compressed : p.imageUrl,
    }));
    setIsEditUploading(false);
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
      const compressed = await Promise.all(editProject.gallery.map((url) => compressImageDataUrl(url)));
      const coverIndex = editProject.gallery.findIndex((u) => u === editProject.imageUrl);
      const toSave = { ...editProject, gallery: compressed, imageUrl: coverIndex >= 0 ? compressed[coverIndex] : compressed[0] };
      await updateProject(toSave.id, toSave);
      onRefresh();
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      if (err instanceof DOMException && err.name === 'QuotaExceededError') {
        alert('Storage limit reached (browser limit). Try fewer images, smaller file sizes, or remove images from other projects.');
      } else {
        alert('Failed to update project.');
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

  const readHeader = !isMobile && !isEditing ? (
    <>
      <div style={{ height: 48 }} aria-hidden />
      <DetailBreadcrumb trail={['SPHNSX', 'WORKS', project.title]} />
    </>
  ) : null;

  const readFooter = !isMobile && !isEditing && nextProject ? (
    <DetailGreyFooter
      to={projectPath(nextProject)}
      label={`Next · ${nextProject.title}`}
    />
  ) : null;

  const textBlock = (
    <div className={isMobile
      ? 'w-full min-w-0 min-h-[50vh] overflow-y-auto pt-6 px-6 pb-12'
      : `w-2/5 min-w-0 flex flex-col ${showAdminActions ? 'pb-0' : ''}`}>
      {readHeader}
      <div className={isMobile ? '' : 'flex-1 min-h-0 overflow-y-auto'} style={isMobile ? undefined : { padding: '48px 48px 24px' }}>
      <div className="max-w-xl">
        {!isMobile && isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-textPrimary mb-2">Title</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-paletteBorder bg-transparent font-mono text-sm focus:outline-none"
                    value={editProject.title}
                    onChange={(e) => setEditProject((p) => ({ ...p, title: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-textPrimary mb-2">Year</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-paletteBorder bg-transparent font-mono text-sm focus:outline-none"
                    value={editProject.year}
                    onChange={(e) => setEditProject((p) => ({ ...p, year: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-textPrimary mb-2">Description</label>
                  <RichTextEditor
                    value={editProject.description}
                    onChange={(html) => setEditProject((p) => ({ ...p, description: html }))}
                    placeholder="Project description…"
                    minHeight="10rem"
                  />
                </div>
                <div className="flex gap-2">
                  <AdminButton type="button" variant="primary" size="md" onClick={handleSave} disabled={isSaving}>
                    {isSaving ? 'Saving…' : 'Save'}
                  </AdminButton>
                  <AdminButton type="button" size="md" onClick={() => { setIsEditing(false); setEditProject(initialProject); }}>
                    Cancel
                  </AdminButton>
                </div>
              </div>
            ) : (
              <>
                {isMobile ? (
                  <>
                    <p className="font-mono text-xs uppercase tracking-wider text-textSecondary mb-2">{[project.year, ...(project.locations ?? [])].filter(Boolean).join(' · ')}</p>
                    <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
                  </>
                ) : (
                  <>
                    <DetailHeading title={project.title} />
                    <DetailMetaRow
                      items={[
                        { label: 'Year', value: project.year },
                        ...((project.locations ?? []).length
                          ? [{
                              label: (project.locations ?? []).length > 1 ? 'Places' : 'Place',
                              value: (project.locations ?? []).join(' · '),
                            }]
                          : []),
                      ]}
                    />
                  </>
                )}
                <div className="text-base leading-relaxed text-textPrimary [&_p]:mb-8 [&_p:last-child]:mb-0">
                  <SafeHtml html={project.description} />
                </div>
                {showAdminActions && (
                  <div className="flex gap-2 mt-6">
                    <AdminButton
                      type="button"
                      size="sm"
                      onClick={() => { setEditProject(initialProject); setIsEditing(true); }}
                    >
                      Edit
                    </AdminButton>
                    <AdminButton
                      type="button"
                      size="sm"
                      variant="ghost-destructive"
                      onClick={handleDelete}
                      disabled={isDeleting}
                    >
                      {isDeleting ? 'Deleting…' : 'Delete project'}
                    </AdminButton>
                  </div>
                )}
              </>
            )}
      </div>
      </div>
      {readFooter}
    </div>
  );

  const galleryRightBar = !isMobile && !isEditing ? (
    <>
      <div style={{ height: 48 }} aria-hidden />
      <DetailRightBar
        left={`Plates · ${String(project.gallery.length).padStart(2, '0')} total`}
        right={<>Scroll {'\u2193'}</>}
      />
    </>
  ) : null;

  const galleryBlock = (
    <div className={isMobile
      ? 'w-full min-w-0 min-h-[70vh] max-h-[70vh] overflow-y-auto pt-6 px-6 pb-6'
      : 'w-3/5 min-w-0 flex flex-col'}>
      {galleryRightBar}
      <div className={isMobile ? '' : 'flex-1 min-h-0 overflow-y-auto'}>
          {!isMobile && isEditing ? (
            <div className="space-y-4 px-6 py-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-textPrimary mb-2">Cover</p>
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt="Cover" className="max-h-64 w-auto border border-paletteBorder" />
                ) : (
                  <div className="max-h-64 h-64 border border-paletteBorder flex items-center justify-center font-mono text-xs text-textSecondary">No cover</div>
                )}
                <div className="mt-2 flex gap-2">
                  <AdminButton size="sm" asLabel>
                    Change cover
                    <input type="file" accept="image/*" className="hidden" onChange={handleCoverFile} />
                  </AdminButton>
                </div>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-textPrimary mb-2">Gallery layout</p>
                <div className="flex gap-4 mb-2">
                  <label className="flex items-center gap-2 font-mono text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="galleryColumns"
                      checked={(editProject.galleryColumns ?? 1) === 1}
                      onChange={() => setEditProject((p) => ({ ...p, galleryColumns: 1 }))}
                      className="border border-paletteBorder"
                    />
                    One column
                  </label>
                  <label className="flex items-center gap-2 font-mono text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="galleryColumns"
                      checked={editProject.galleryColumns === 2}
                      onChange={() => setEditProject((p) => ({ ...p, galleryColumns: 2 }))}
                      className="border border-paletteBorder"
                    />
                    Two columns
                  </label>
                  <label className="flex items-center gap-2 font-mono text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="galleryColumns"
                      checked={editProject.galleryColumns === 3}
                      onChange={() => setEditProject((p) => ({ ...p, galleryColumns: 3 }))}
                      className="border border-paletteBorder"
                    />
                    Three columns
                  </label>
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-textPrimary mb-2">Gallery</p>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="block w-full text-sm font-mono file:mr-4 file:py-2 file:px-4 file:border file:border-paletteBorder file:bg-bgMain file:font-mono file:text-xs file:uppercase file:tracking-wider file:text-textPrimary file:hover:bg-neutral-800 file:hover:text-white file:transition-colors file:duration-150 file:rounded-sm mb-2"
                  onChange={handleEditGalleryFiles}
                />
                <div className="flex flex-wrap gap-4">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="flex flex-col">
                      <img src={img} alt="" className="max-h-24 w-auto object-contain border border-paletteBorder" />
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() => setCoverFromGallery(i)}
                          className="font-mono text-xs uppercase tracking-wider px-2 py-1 border border-paletteBorder bg-bgMain text-textPrimary hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm"
                        >
                          Set as cover
                        </button>
                        <label className="font-mono text-xs uppercase tracking-wider px-2 py-1 border border-paletteBorder bg-bgMain text-textPrimary hover:bg-neutral-800 hover:text-white cursor-pointer transition-colors duration-150 rounded-sm">
                          Replace
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleReplaceImage(i, e)} />
                        </label>
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(i)}
                          disabled={project.gallery.length <= 1}
                          className="font-mono text-xs uppercase tracking-wider px-2 py-1 bg-destructive text-white hover:opacity-90 disabled:opacity-50 transition-opacity duration-150 rounded-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              {project.gallery && project.gallery.length > 0 ? (
                <>
                  <div className="h-6 shrink-0" aria-hidden />
                  <div className={`grid gap-0 w-full items-start ${project.galleryColumns === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : project.galleryColumns === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                  {project.gallery.map((img, index) => (
                    <div key={index} className="w-full min-w-0">
                      <div className="relative w-full">
                        <img
                          src={img}
                          alt={`${project.title} ${index + 1}`}
                          className="w-full block"
                          onContextMenu={(e) => e.preventDefault()}
                          onDragStart={(e) => e.preventDefault()}
                          style={{ pointerEvents: 'none' }}
                        />
                        <div className="absolute inset-0 z-10 bg-transparent" onContextMenu={(e) => e.preventDefault()} aria-hidden />
                      </div>
                    </div>
                  ))}
                </div>
                </>
              ) : null}
            </>
          )}
      </div>
    </div>
  );

  if (isMobile) {
    const P = { border: '#333333', bgMain: '#FAFAFA', greySoft: '#E8E8E8', textPrimary: '#1a1a1a', textSecondary: '#737373' };
    return (
      <FullScreenDetail>
        <div className="flex flex-col" style={{ paddingTop: 48, height: '100%' }}>
          <DetailBreadcrumb compact trail={['SPHNSX', 'WORKS', project.title]} />

          {/* Scrollable content */}
          <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', background: P.bgMain, scrollbarWidth: 'none' as const }}>
            {/* Hero image */}
            {project.gallery[0] && (
              <img
                src={project.gallery[0]}
                alt={project.title}
                style={{ width: '100%', display: 'block' }}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            )}

            {/* Title + meta */}
            <div style={{ padding: '22px 18px 10px' }}>
              <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: 30, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.01em', margin: '0 0 14px', color: P.textPrimary }}>{project.title}</h1>
              <div style={{ borderTop: `1px solid ${P.border}`, borderBottom: '1px solid #e4e4e4', padding: '8px 0', display: 'flex', flexWrap: 'wrap', gap: 14, fontFamily: 'JetBrains Mono, monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                <span><span style={{ color: P.textSecondary }}>Year </span>{project.year}</span>
                {(project.locations ?? []).length > 0 && (
                  <span><span style={{ color: P.textSecondary }}>{(project.locations ?? []).length > 1 ? 'Places ' : 'Place '}</span>{(project.locations ?? []).join(' · ')}</span>
                )}
              </div>
            </div>

            {/* Description */}
            <div style={{ padding: '14px 18px 26px', fontSize: 15, lineHeight: 1.6, color: P.textPrimary }}>
              <SafeHtml html={project.description} />
            </div>

            {/* Plates bar */}
            {project.gallery.length > 0 && (
              <div style={{ padding: '12px 18px', borderTop: `1px solid ${P.border}`, borderBottom: `1px solid ${P.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: P.textSecondary }}>
                  Plates · {String(project.gallery.length).padStart(2, '0')} total
                </span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: P.textSecondary }}>Scroll ↓</span>
              </div>
            )}

            {/* Gallery plates — edge-to-edge, no gaps */}
            <div>
              {project.gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} ${i + 1}`}
                  style={{ width: '100%', display: 'block' }}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
              ))}
            </div>

            <div style={{ height: 28 }} aria-hidden />
          </div>

          {/* Grey Next footer */}
          {nextProject && (
            <Link
              to={projectPath(nextProject)}
              style={{ textDecoration: 'none', color: P.textPrimary, padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: P.greySoft, borderTop: `1px solid ${P.border}`, flexShrink: 0 }}
            >
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', whiteSpace: 'nowrap' }}>Next · {nextProject.title}</span>
              <svg width="16" height="16" viewBox="0 0 40 40" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                <line x1="4" y1="20" x2="36" y2="20" stroke={P.textPrimary} strokeWidth="1.5" strokeLinecap="square" />
                <line x1="36" y1="20" x2="24" y2="10" stroke={P.textPrimary} strokeWidth="1.5" strokeLinecap="square" />
                <line x1="36" y1="20" x2="24" y2="30" stroke={P.textPrimary} strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </Link>
          )}
        </div>
      </FullScreenDetail>
    );
  }

  return (
    <FullScreenDetail>
      <main className="flex-1 min-h-0 flex overflow-hidden">
        {textBlock}
        <div className="w-px shrink-0 bg-paletteBorder" aria-hidden />
        {galleryBlock}
      </main>
    </FullScreenDetail>
  );
};

export default ProjectDetailPage;
