import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { updateProject, deleteProject } from '../services/storageService';
import { compressImageDataUrl, getImageAspectRatio } from '../utils/imageCompress';
import { useIsMobile } from '../hooks/useMediaQuery';
import RichTextEditor from './RichTextEditor';
import SafeHtml from './SafeHtml';
import { PortfolioData, Project } from '../types';

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
  onRefresh: () => void;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project: initialProject, onRefresh }) => {
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
      await deleteProject(initialProject.id);
      onRefresh();
      toast.success('Project deleted');
      navigate('/');
    } finally {
      setIsDeleting(false);
    }
  };

  const textBlock = (
    <div className={isMobile ? 'w-full min-w-0 overflow-y-auto pt-6 px-6 pb-12' : 'w-2/5 min-w-0 overflow-y-auto pt-pageTop px-6 pb-12'}>
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
                  <button
                    type="button"
                    onClick={handleSave}
                    disabled={isSaving}
                    className="font-mono text-sm uppercase tracking-wider px-4 py-2 bg-accent text-textPrimary hover:opacity-90 disabled:opacity-50 transition-opacity duration-150 rounded-sm"
                  >
                    {isSaving ? 'Saving…' : 'Save'}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setIsEditing(false); setEditProject(initialProject); }}
                    className="font-mono text-sm uppercase tracking-wider px-4 py-2 border border-paletteBorder bg-bgMain text-textPrimary hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="font-mono text-xs uppercase tracking-wider text-textSecondary mb-2">{project.year}</p>
                <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
                <div className="text-base leading-relaxed text-textPrimary [&_p]:mb-8 [&_p:last-child]:mb-0">
                  <SafeHtml html={project.description} />
                </div>
                {showAdminActions && (
                  <div className="flex gap-2 mt-6">
                    <button
                      type="button"
                      onClick={() => { setEditProject(initialProject); setIsEditing(true); }}
                      className="font-mono text-xs uppercase tracking-wider px-3 py-2 border border-paletteBorder bg-bgMain text-textPrimary hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={handleDelete}
                      disabled={isDeleting}
                      className="font-mono text-xs uppercase tracking-wider px-3 py-2 bg-destructive text-white hover:opacity-90 disabled:opacity-50 transition-opacity duration-150 rounded-sm"
                    >
                      {isDeleting ? 'Deleting…' : 'Delete'}
                    </button>
                  </div>
                )}
              </>
            )}
      </div>
    </div>
  );

  const galleryBlock = (
    <div className={isMobile ? 'w-full min-w-0 overflow-y-auto pt-6 px-6 pb-6' : 'w-3/5 min-w-0 overflow-y-auto pt-6 px-6 pb-12'}>
          {!isMobile && isEditing ? (
            <div className="space-y-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-textPrimary mb-2">Cover</p>
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt="Cover" className="max-h-64 w-auto border border-paletteBorder" />
                ) : (
                  <div className="max-h-64 h-64 border border-paletteBorder flex items-center justify-center font-mono text-xs text-textSecondary">No cover</div>
                )}
                <div className="mt-2 flex gap-2">
                  <label className="font-mono text-xs uppercase tracking-wider px-3 py-2 border border-paletteBorder bg-bgMain text-textPrimary hover:bg-neutral-800 hover:text-white transition-colors duration-150 cursor-pointer rounded-sm">
                    Change cover
                    <input type="file" accept="image/*" className="hidden" onChange={handleCoverFile} />
                  </label>
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
                      <img src={img} alt="" className="h-20 w-auto border border-paletteBorder" />
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
                <div className={`grid gap-0 max-w-4xl ${project.galleryColumns === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                  {project.gallery.map((img, index) => (
                    <div key={index}>
                      <ProtectedImage src={img} alt={`${project.title} ${index + 1}`} />
                    </div>
                  ))}
                </div>
              ) : null}
            </>
          )}
    </div>
  );

  return (
    <FullScreenDetail>
      <main className={`flex-1 min-h-0 flex overflow-hidden ${isMobile ? 'flex-col pt-12' : ''}`}>
        {isMobile ? (
          <>
            {galleryBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            <div className="w-px shrink-0 bg-paletteBorder" aria-hidden />
            {galleryBlock}
          </>
        )}
      </main>
    </FullScreenDetail>
  );
};

export default ProjectDetailPage;
