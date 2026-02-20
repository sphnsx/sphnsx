import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { addProject } from '../services/storageService';
import { compressImageDataUrl, getImageAspectRatio } from '../utils/imageCompress';
import CoverCropZoom from './CoverCropZoom';
import { PortfolioData, Project } from '../types';

interface NewProjectPageProps {
  data: PortfolioData;
  onRefresh: () => void;
}

const NewProjectPage: React.FC<NewProjectPageProps> = ({ data, onRefresh }) => {
  const { isAdmin } = useAdminAuth();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [gallery, setGallery] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [coverCropSrc, setCoverCropSrc] = useState<string | null>(null);

  React.useEffect(() => {
    if (!isAdmin) navigate('/');
  }, [isAdmin, navigate]);

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
    setImageUrl(compressed);
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
    if (!imageUrl && loaded[0]) setImageUrl(loaded[0]);
    setIsUploading(false);
  };

  const removeGalleryImage = (index: number) => {
    const next = gallery.filter((_, i) => i !== index);
    setGallery(next);
    if (imageUrl && gallery[index] === imageUrl) setImageUrl(next[0] ?? '');
  };

  const setCoverFromGallery = (index: number) => {
    setCoverCropSrc(gallery[index] ?? null);
  };

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
      const id = Date.now().toString();
      const cover = imageUrl || gallery[0] || '';
      const coverAspectRatio = cover ? await getImageAspectRatio(cover).catch(() => undefined) : undefined;
      addProject({
        id,
        title: title.trim(),
        year: year.trim(),
        description: description.trim(),
        imageUrl: cover,
        gallery,
        galleryColumns: 1,
        coverAspectRatio,
      });
      onRefresh();
      navigate(`/project/${id}`);
    } catch (err) {
      console.error(err);
      alert('Failed to create project.');
    }
  };

  if (!isAdmin) return null;

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
    <div className="fixed inset-0 bg-white flex flex-col overflow-hidden">
      <main className="flex-1 min-h-0 flex">
        <div className="w-2/5 min-w-0 overflow-y-auto pt-24 pl-5 pr-6 pb-16">
          <div className="max-w-xl">
            <h1 className="font-mono text-sm uppercase tracking-wider text-black mb-6">New project</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-black mb-1">Title</label>
                <input
                  type="text"
                  className="w-full p-3 border border-black bg-transparent font-mono text-sm placeholder:text-neutral-400 focus:outline-none"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-black mb-1">Year</label>
                <input
                  type="text"
                  className="w-full p-3 border border-black bg-transparent font-mono text-sm placeholder:text-neutral-400 focus:outline-none"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-black mb-1">Description</label>
                <textarea
                  className="w-full p-3 border border-black bg-transparent font-mono text-sm placeholder:text-neutral-400 focus:outline-none h-32"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-black mb-2">Cover</label>
                <input
                  type="file"
                  accept="image/*"
                  className="block w-full text-sm font-mono file:mr-4 file:py-2 file:px-4 file:border file:border-black file:bg-white file:font-mono file:text-xs file:uppercase file:tracking-wider file:text-black file:hover:bg-black file:hover:text-white file:transition-colors"
                  onChange={handleCoverFile}
                />
              </div>
              <button
                type="submit"
                disabled={isUploading}
                className="font-mono text-sm uppercase tracking-wider px-6 py-3 border border-black bg-white text-black hover:bg-black hover:text-white disabled:opacity-50 transition-colors"
              >
                {isUploading ? 'Processing…' : 'Create project'}
              </button>
            </form>
          </div>
        </div>
        <div className="w-px shrink-0 bg-black" aria-hidden />
        <div className="w-3/5 min-w-0 overflow-y-auto pt-24 px-6 pb-16">
          <div className="space-y-4">
            {imageUrl && (
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-black mb-2">Cover preview</p>
                <img src={imageUrl} alt="Cover" className="max-h-64 w-auto border border-black" />
              </div>
            )}
            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-black mb-2">Gallery</label>
              <input
                type="file"
                accept="image/*"
                multiple
                className="block w-full text-sm font-mono file:mr-4 file:py-2 file:px-4 file:border file:border-black file:bg-white file:font-mono file:text-xs file:uppercase file:tracking-wider file:text-black file:hover:bg-black file:hover:text-white file:transition-colors"
                onChange={handleGalleryFiles}
              />
            </div>
            {gallery.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {gallery.map((img, i) => (
                  <div key={i} className="relative group">
                    <img src={img} alt="" className="h-20 w-auto border border-black" />
                    <div className="absolute inset-0 flex items-center justify-center gap-1 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(i)}
                        className="font-mono text-xs uppercase tracking-wider px-2 py-1 border border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white transition-colors"
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
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewProjectPage;
