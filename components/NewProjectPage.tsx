import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { useIsMobile } from '../hooks/useMediaQuery';
import { addProject } from '../services/storageService';
import { compressImageDataUrl, getImageAspectRatio } from '../utils/imageCompress';
import RichTextEditor from './RichTextEditor';
import { PortfolioData, Project } from '../types';

interface NewProjectPageProps {
  data: PortfolioData;
  onRefresh: (updatedData?: PortfolioData) => void;
}

const NewProjectPage: React.FC<NewProjectPageProps> = ({ data, onRefresh }) => {
  const { isAdmin } = useAdminAuth();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState(new Date().getFullYear().toString());
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
    if (!title.trim()) {
      alert('Please provide a project title.');
      return;
    }
    if (gallery.length === 0) {
      alert('Please provide at least one image.');
      return;
    }
    try {
      setIsSaving(true);
      const id = Date.now().toString();
      const cover = imageUrl || gallery[0] || '';
      const ratio = coverAspectRatio ?? (cover ? await getImageAspectRatio(cover).catch(() => undefined) : undefined);
      const updatedData = await addProject({
        id,
        title: title.trim(),
        year: year.trim(),
        description: description.trim() || '',
        imageUrl: cover,
        gallery,
        galleryColumns,
        coverAspectRatio: ratio,
      });
      onRefresh(updatedData);
      navigate(`/project/${id}`);
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
        <div className={`w-2/5 min-w-0 overflow-y-auto pt-pageTop pl-6 pr-6 ${bottomPadding}`}>
          <div className="max-w-xl">
            <h1 className="font-mono text-sm uppercase tracking-wider text-textPrimary mb-6">New project</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-textPrimary mb-2">Title</label>
                <input
                  type="text"
                  className="w-full p-3 border border-paletteBorder bg-transparent font-mono text-sm placeholder:text-textSecondary text-textPrimary focus:outline-none"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-textPrimary mb-2">Year</label>
                <input
                  type="text"
                  className="w-full p-3 border border-paletteBorder bg-transparent font-mono text-sm placeholder:text-textSecondary text-textPrimary focus:outline-none"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-textPrimary mb-2">Description</label>
                <RichTextEditor
                  value={description}
                  onChange={setDescription}
                  placeholder="Project description…"
                  minHeight="10rem"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={isUploading || isSaving}
                  className="font-mono text-sm uppercase tracking-wider px-4 py-2 bg-accent text-textPrimary hover:opacity-90 disabled:opacity-50 transition-opacity duration-150 rounded-sm"
                >
                  {isSaving ? 'Processing…' : isUploading ? 'Processing…' : 'Create project'}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-px shrink-0 bg-paletteBorder" aria-hidden />
        <div className={`w-3/5 min-w-0 overflow-y-auto pt-pageTop px-6 ${bottomPadding}`}>
          <div className="space-y-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-textPrimary mb-2">Cover</p>
              {imageUrl ? (
                <img src={imageUrl} alt="Cover" className="max-h-64 w-auto border border-paletteBorder" />
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
                    name="galleryColumnsNew"
                    checked={galleryColumns === 1}
                    onChange={() => setGalleryColumns(1)}
                    className="border border-paletteBorder"
                  />
                  One column
                </label>
                <label className="flex items-center gap-2 font-mono text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="galleryColumnsNew"
                    checked={galleryColumns === 2}
                    onChange={() => setGalleryColumns(2)}
                    className="border border-paletteBorder"
                  />
                  Two columns
                </label>
                <label className="flex items-center gap-2 font-mono text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="galleryColumnsNew"
                    checked={galleryColumns === 3}
                    onChange={() => setGalleryColumns(3)}
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
                onChange={handleGalleryFiles}
              />
              {gallery.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {gallery.map((img, i) => (
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
                          onClick={() => removeGalleryImage(i)}
                          disabled={gallery.length <= 1}
                          className="font-mono text-xs uppercase tracking-wider px-2 py-1 bg-destructive text-white hover:opacity-90 disabled:opacity-50 transition-opacity duration-150 rounded-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewProjectPage;
