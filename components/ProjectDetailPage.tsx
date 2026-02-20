import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { updateProject, deleteProject } from '../services/storageService';
import { compressImageDataUrl, getImageAspectRatio } from '../utils/imageCompress';
import CoverCropZoom from './CoverCropZoom';
import { PortfolioData, Project } from '../types';

const FullScreenDetail: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="fixed inset-0 bg-white flex flex-col overflow-hidden">
    {children}
  </div>
);

const ProtectedImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  if (!src) return (
    <div className="w-full aspect-[4/5] bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center">
      <span className="text-xs text-gray-400">No image</span>
    </div>
  );
  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-100">
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
  const { isAdmin } = useAdminAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editProject, setEditProject] = useState<Project>(initialProject);
  const [isSaving, setIsSaving] = useState(false);
  const [coverCropSrc, setCoverCropSrc] = useState<string | null>(null);
  const [isEditUploading, setIsEditUploading] = useState(false);

  const project = isEditing ? editProject : initialProject;

  const handleCoverFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';
    const reader = new FileReader();
    reader.onloadend = () => setCoverCropSrc(reader.result as string);
    reader.readAsDataURL(file);
  }, []);

  const handleCoverCropComplete = useCallback(async (dataUrl: string) => {
    setCoverCropSrc(null);
    const compressed = await compressImageDataUrl(dataUrl);
    const ratio = await getImageAspectRatio(compressed).catch(() => undefined);
    setEditProject((p) => ({ ...p, imageUrl: compressed, coverAspectRatio: ratio }));
  }, []);

  const setCoverFromGallery = useCallback((index: number) => {
    const img = editProject.gallery[index];
    if (img) setCoverCropSrc(img);
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
    setEditProject((p) => ({ ...p, imageUrl: loaded[0] ?? p.imageUrl, gallery: loaded }));
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
      const galleryToCompress =
        editProject.imageUrl && editProject.imageUrl !== editProject.gallery[0]
          ? [editProject.imageUrl, ...editProject.gallery.slice(1)]
          : editProject.gallery;
      const compressed = await Promise.all(galleryToCompress.map((url) => compressImageDataUrl(url)));
      const toSave = { ...editProject, gallery: compressed, imageUrl: compressed[0] ?? editProject.imageUrl };
      updateProject(toSave.id, toSave);
      onRefresh();
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      if (err instanceof DOMException && err.name === 'QuotaExceededError') {
        alert('Storage limit reached. Try removing some images or using smaller images.');
      } else {
        alert('Failed to update project.');
      }
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = () => {
    if (!confirm('Delete this project?')) return;
    deleteProject(initialProject.id);
    onRefresh();
    navigate('/');
  };

  if (coverCropSrc) {
    return (
      <CoverCropZoom
        imageSrc={coverCropSrc}
        onComplete={handleCoverCropComplete}
        onCancel={() => setCoverCropSrc(null)}
      />
    );
  }

  return (
    <FullScreenDetail>
      <main className="flex-1 min-h-0 flex">
        <div className="w-2/5 min-w-0 overflow-y-auto pt-24 px-6 pb-16">
          <div className="max-w-xl">
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-black mb-1">Title</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-black bg-transparent font-mono text-sm focus:outline-none"
                    value={editProject.title}
                    onChange={(e) => setEditProject((p) => ({ ...p, title: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-black mb-1">Year</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-black bg-transparent font-mono text-sm focus:outline-none"
                    value={editProject.year}
                    onChange={(e) => setEditProject((p) => ({ ...p, year: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-black mb-1">Description</label>
                  <textarea
                    className="w-full p-3 border border-black bg-transparent font-mono text-sm focus:outline-none h-32"
                    value={editProject.description}
                    onChange={(e) => setEditProject((p) => ({ ...p, description: e.target.value }))}
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleSave}
                    disabled={isSaving}
                    className="font-mono text-sm uppercase tracking-wider px-4 py-2 border border-black bg-white text-black hover:bg-black hover:text-white disabled:opacity-50 transition-colors"
                  >
                    {isSaving ? 'Saving…' : 'Save'}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setIsEditing(false); setEditProject(initialProject); }}
                    className="font-mono text-sm uppercase tracking-wider px-4 py-2 border border-black bg-white text-black hover:bg-black hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-500 mb-2">{project.year}</p>
                <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
                <div>
                  {project.description
                    .split(/\n\n+/)
                    .map((p) => p.trim())
                    .filter(Boolean)
                    .map((para, i) => (
                      <p key={i} className="text-gray-700 mb-8 last:mb-0">{para}</p>
                    ))}
                </div>
                {isAdmin && (
                  <div className="flex gap-2 mt-6">
                    <button
                      type="button"
                      onClick={() => { setEditProject(initialProject); setIsEditing(true); }}
                      className="font-mono text-xs uppercase tracking-wider px-3 py-2 border border-black bg-white text-black hover:bg-black hover:text-white transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={handleDelete}
                      className="font-mono text-xs uppercase tracking-wider px-3 py-2 border border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <div className="w-px shrink-0 bg-black" aria-hidden />
        <div className="w-3/5 min-w-0 overflow-y-auto pt-24 px-6 pb-16">
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-black mb-2">Cover</p>
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt="Cover" className="max-h-64 w-auto border border-black" />
                ) : (
                  <div className="max-h-64 h-64 border border-black flex items-center justify-center font-mono text-xs text-neutral-400">No cover</div>
                )}
                <div className="mt-2 flex gap-2">
                  <label className="font-mono text-xs uppercase tracking-wider px-3 py-2 border border-black bg-white text-black hover:bg-black hover:text-white transition-colors cursor-pointer">
                    Change cover
                    <input type="file" accept="image/*" className="hidden" onChange={handleCoverFile} />
                  </label>
                </div>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-black mb-2">Gallery layout</p>
                <div className="flex gap-4 mb-2">
                  <label className="flex items-center gap-2 font-mono text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="galleryColumns"
                      checked={(editProject.galleryColumns ?? 1) === 1}
                      onChange={() => setEditProject((p) => ({ ...p, galleryColumns: 1 }))}
                      className="border border-black"
                    />
                    One column
                  </label>
                  <label className="flex items-center gap-2 font-mono text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="galleryColumns"
                      checked={editProject.galleryColumns === 2}
                      onChange={() => setEditProject((p) => ({ ...p, galleryColumns: 2 }))}
                      className="border border-black"
                    />
                    Two columns
                  </label>
                </div>
                <p className="font-mono text-xs uppercase tracking-wider text-black mb-2">Gallery</p>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="block w-full text-sm font-mono file:mr-4 file:py-2 file:px-4 file:border file:border-black file:bg-white file:font-mono file:text-xs file:uppercase file:tracking-wider file:text-black file:hover:bg-black file:hover:text-white file:transition-colors mb-2"
                  onChange={handleEditGalleryFiles}
                />
                <div className="flex flex-wrap gap-3">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="relative group">
                      <img src={img} alt="" className="h-20 w-auto border border-black" />
                      <div className="absolute inset-0 flex items-center justify-center gap-1 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(i)}
                          disabled={project.gallery.length <= 1}
                          className="font-mono text-xs uppercase tracking-wider px-2 py-1 border border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white disabled:opacity-50 transition-colors"
                        >
                          Remove
                        </button>
                        <button
                          type="button"
                          onClick={() => setCoverFromGallery(i)}
                          className="font-mono text-xs uppercase tracking-wider px-2 py-1 border border-black bg-white text-black hover:bg-black hover:text-white transition-colors"
                        >
                          Set as cover
                        </button>
                        <label className="font-mono text-xs uppercase tracking-wider px-2 py-1 border border-black bg-white text-black hover:bg-black hover:text-white cursor-pointer transition-colors">
                          Replace
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleReplaceImage(i, e)} />
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              {project.gallery && project.gallery.length > 0 ? (
                <div className={`grid gap-8 max-w-4xl ${project.galleryColumns === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                  {project.gallery.map((img, index) => (
                    <div key={index}>
                      <ProtectedImage src={img} alt={`${project.title} ${index + 1}`} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full min-h-[200px] flex items-center justify-center text-gray-500 border border-dashed border-gray-300">
                  No images in this project.
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </FullScreenDetail>
  );
};

export default ProjectDetailPage;
