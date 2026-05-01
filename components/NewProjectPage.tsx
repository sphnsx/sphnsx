import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { useIsMobile } from '../hooks/useMediaQuery';
import { addProject } from '../services/storageService';
import { compressImageDataUrl, getImageAspectRatio } from '../utils/imageCompress';
import RichTextEditor from './RichTextEditor';
import Breadcrumb from './Breadcrumb';
import AdminButton from './admin/AdminButton';
import AdminInput from './admin/AdminInput';
import LocationsField from './admin/LocationsField';
import { PortfolioData, Project } from '../types';
import { isReservedSlug, projectPath, slugify } from '../utils/slug';

interface NewProjectPageProps {
  data: PortfolioData;
  onRefresh: (updatedData?: PortfolioData) => void;
}

const DragHandle: React.FC = () => (
  <svg width="10" height="14" viewBox="0 0 10 14" className="text-textSecondary cursor-grab" aria-hidden>
    <g fill="currentColor">
      <circle cx="2" cy="2" r="1" />
      <circle cx="8" cy="2" r="1" />
      <circle cx="2" cy="7" r="1" />
      <circle cx="8" cy="7" r="1" />
      <circle cx="2" cy="12" r="1" />
      <circle cx="8" cy="12" r="1" />
    </g>
  </svg>
);

const NewProjectPage: React.FC<NewProjectPageProps> = ({ data, onRefresh }) => {
  const { isAdmin } = useAdminAuth();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [locations, setLocations] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [coverAspectRatio, setCoverAspectRatio] = useState<number | undefined>(undefined);
  const [gallery, setGallery] = useState<string[]>([]);
  const [galleryColumns, setGalleryColumns] = useState<1 | 2 | 3>(1);
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

  const setCoverFromGallery = useCallback((index: number) => {
    const img = gallery[index];
    if (!img) return;
    setImageUrl(img);
    getImageAspectRatio(img).then(setCoverAspectRatio).catch(() => setCoverAspectRatio(undefined));
  }, [gallery]);

  const handleReplaceImage = useCallback(async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';
    setIsUploading(true);
    const base64 = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    });
    const compressed = await compressImageDataUrl(base64);
    setGallery((prev) => {
      const next = [...prev];
      next[index] = compressed;
      return next;
    });
    if (imageUrl && gallery[index] === imageUrl) {
      setImageUrl(compressed);
      const ratio = await getImageAspectRatio(compressed).catch(() => undefined);
      setCoverAspectRatio(ratio);
    }
    setIsUploading(false);
  }, [gallery, imageUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      const cover = imageUrl || gallery[0] || '';
      const ratio = coverAspectRatio ?? (cover ? await getImageAspectRatio(cover).catch(() => undefined) : undefined);
      const newProject: Project = {
        id,
        title: trimmedTitle,
        year: year.trim(),
        description: description.trim() || '',
        imageUrl: cover,
        gallery,
        galleryColumns,
        coverAspectRatio: ratio,
        locations: locations.length ? locations : undefined,
      };
      const updatedData = await addProject(newProject);
      onRefresh(updatedData);
      navigate(projectPath(newProject));
    } catch (err) {
      console.error(err);
      if (err instanceof DOMException && err.name === 'QuotaExceededError') {
        alert('Storage limit reached (browser limit). Try fewer images, smaller file sizes, or remove images from other projects.');
      } else {
        alert('Failed to create project.');
      }
    } finally {
      setIsSaving(false);
    }
  };

  if (!isAdmin) return null;

  const bottomPadding = isAdmin && !isMobile ? 'pb-24' : 'pb-12';

  return (
    <div className="fixed inset-0 bg-bgMain flex flex-col overflow-hidden">
      <main className="flex-1 min-h-0 flex">
        <div className={`w-2/5 min-w-0 overflow-y-auto pt-pageTop pl-12 pr-12 ${bottomPadding}`}>
          <div className="max-w-xl">
            <Breadcrumb trail={['SPHNSX', 'Admin', 'Create']} className="mb-9" />
            <div className="mb-9">
              <span className="block font-mono text-[11px] uppercase tracking-wider text-textSecondary mb-2">
                Create
              </span>
              <h1 className="font-sans text-[40px] font-bold leading-[1.05] tracking-[-0.01em] text-textPrimary">
                New project
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <AdminInput
                label="Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <AdminInput
                label="Year"
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              />
              <LocationsField value={locations} onChange={setLocations} />
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-textPrimary">
                  Description
                </span>
                <RichTextEditor
                  value={description}
                  onChange={setDescription}
                  placeholder="Project description…"
                  minHeight="10rem"
                />
              </div>
              <div className="flex gap-2 pt-2">
                <AdminButton type="submit" variant="primary" size="md" disabled={isUploading || isSaving}>
                  {isSaving ? 'Processing…' : isUploading ? 'Processing…' : 'Create project'}
                </AdminButton>
              </div>
            </form>
          </div>
        </div>
        <div className="w-px shrink-0 bg-paletteBorder" aria-hidden />
        <div className={`w-3/5 min-w-0 overflow-y-auto pt-pageTop px-12 ${bottomPadding}`}>
          <div className="flex flex-col gap-7">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-textPrimary mb-2.5">
                Cover
              </p>
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Cover"
                  className="max-h-64 w-auto border border-paletteBorder"
                />
              ) : (
                <div className="max-h-64 h-64 border border-dashed border-paletteBorder flex items-center justify-center font-mono text-[11px] uppercase tracking-wider text-textSecondary">
                  No cover
                </div>
              )}
              <div className="mt-2.5 flex gap-2">
                <AdminButton size="sm" asLabel>
                  Change cover
                  <input type="file" accept="image/*" className="hidden" onChange={handleCoverFile} />
                </AdminButton>
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-textPrimary">
                Gallery layout
              </span>
              <div className="flex border border-paletteBorder">
                {[1, 2, 3].map((n) => {
                  const active = galleryColumns === n;
                  return (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setGalleryColumns(n as 1 | 2 | 3)}
                      className={`flex-1 py-2.5 px-3.5 font-mono text-[11px] uppercase tracking-wider rounded-none ${n > 1 ? 'border-l border-paletteBorder' : ''} ${active ? 'bg-textPrimary text-white' : 'bg-transparent text-textPrimary hover:bg-accent'}`}
                    >
                      {['One', 'Two', 'Three'][n - 1]} column{n > 1 ? 's' : ''}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-textPrimary">
                  Gallery
                </span>
                <AdminButton size="sm" asLabel>
                  Add images
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleGalleryFiles}
                  />
                </AdminButton>
              </div>
              {gallery.length === 0 ? (
                <div className="border border-dashed border-paletteBorder p-8 text-center font-mono text-[11px] uppercase tracking-wider text-textSecondary">
                  Drop images here, or use “Add images”
                </div>
              ) : (
                <table className="w-full border-collapse font-mono text-[11px]">
                  <thead>
                    <tr className="border-b border-paletteBorder text-textSecondary uppercase tracking-wider">
                      <th className="text-left py-2.5 px-2 w-20">Plate</th>
                      <th className="text-left py-2.5 px-2">Image</th>
                      <th className="text-right py-2.5 px-2 w-[300px]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gallery.map((src, i) => (
                      <tr key={i} className="border-b border-neutral-200">
                        <td className="py-3 px-2 align-middle text-textSecondary">
                          <span className="inline-flex items-center gap-2">
                            <DragHandle /> {String(i + 1).padStart(2, '0')}
                          </span>
                        </td>
                        <td className="py-3 px-2 align-middle">
                          <div className="flex items-center gap-3.5">
                            <img
                              src={src}
                              alt=""
                              className="w-24 h-[72px] object-cover border border-paletteBorder block"
                            />
                            <span className="font-sans text-[13px] text-textPrimary">
                              plate-{String(i + 1).padStart(2, '0')}.jpg
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-2 align-middle text-right">
                          <div className="inline-flex gap-1.5">
                            <AdminButton size="sm" type="button" onClick={() => setCoverFromGallery(i)}>
                              Set as cover
                            </AdminButton>
                            <AdminButton size="sm" asLabel>
                              Replace
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => handleReplaceImage(i, e)}
                              />
                            </AdminButton>
                            <AdminButton
                              size="sm"
                              type="button"
                              variant="ghost-destructive"
                              onClick={() => removeGalleryImage(i)}
                              disabled={gallery.length <= 1}
                            >
                              Remove
                            </AdminButton>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewProjectPage;
