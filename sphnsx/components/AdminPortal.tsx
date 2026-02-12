import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PortfolioData, Project } from '../types';
import { updateAboutMe, addProject, deleteProject } from '../services/storageService';

interface AdminPortalProps {
  data: PortfolioData;
  onRefresh: () => void;
  onLogout: () => void;
}

const AdminPortal: React.FC<AdminPortalProps> = ({ data, onRefresh, onLogout }) => {
  const navigate = useNavigate();
  const [aboutText, setAboutText] = useState(data.aboutMe);
  const [isUploading, setIsUploading] = useState(false);
  const [activeTab, setActiveTab] = useState<'content' | 'deployment'>('content');
  const [newProject, setNewProject] = useState<Omit<Project, 'id'>>({
    title: '',
    description: '',
    imageUrl: '',
    gallery: [],
    year: new Date().getFullYear().toString()
  });

  const handleUpdateAbout = () => {
    updateAboutMe(aboutText);
    onRefresh();
    alert('Biography updated.');
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title?.trim()) {
      alert('Please provide a project title.');
      return;
    }
    if (newProject.gallery.length === 0) {
      alert('Please provide at least one image.');
      return;
    }
    try {
      addProject({ ...newProject, id: Date.now().toString() });
      setNewProject({ title: '', description: '', imageUrl: '', gallery: [], year: new Date().getFullYear().toString() });
      onRefresh();
      alert('Project published.');
    } catch (error) {
      console.error(error);
      alert('Failed to publish project.');
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this project?')) {
      deleteProject(id);
      onRefresh();
    }
  };

  const handleGalleryFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;
    setIsUploading(true);
    const loadedImages: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(files[i]);
      });
      loadedImages.push(base64);
    }
    setNewProject(prev => ({ ...prev, imageUrl: loadedImages[0], gallery: loadedImages }));
    setIsUploading(false);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 space-y-12">
      <header className="flex flex-wrap items-end justify-between gap-6">
        <h1 className="text-2xl font-bold">Editor</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 text-sm font-medium rounded ${activeTab === 'content' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Content
          </button>
          <button
            onClick={() => setActiveTab('deployment')}
            className={`px-4 py-2 text-sm font-medium rounded ${activeTab === 'deployment' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            Deployment
          </button>
          <button onClick={handleLogout} className="px-4 py-2 text-sm text-gray-600 hover:text-red-600">
            Logout
          </button>
        </div>
      </header>

      {activeTab === 'content' ? (
        <div className="space-y-16">
          <section>
            <h2 className="text-lg font-bold mb-4">Biography</h2>
            <textarea
              className="w-full h-40 p-4 border border-gray-300 rounded"
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
            />
            <button
              onClick={handleUpdateAbout}
              className="mt-4 px-6 py-2 bg-gray-900 text-white rounded text-sm font-medium"
            >
              Save
            </button>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">New project</h2>
            <form onSubmit={handleAddProject} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded"
                    value={newProject.year}
                    onChange={(e) => setNewProject({ ...newProject, year: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded h-32"
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Images</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-gray-900 file:text-white file:text-sm"
                  onChange={handleGalleryFiles}
                />
              </div>
              {newProject.gallery.length > 0 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {newProject.gallery.map((img, i) => (
                    <img key={i} src={img} alt="" className="h-20 w-auto rounded border border-gray-200" />
                  ))}
                </div>
              )}
              <button
                type="submit"
                disabled={isUploading}
                className="px-6 py-3 bg-gray-900 text-white rounded font-medium disabled:opacity-50"
              >
                {isUploading ? 'Processing…' : 'Publish project'}
              </button>
            </form>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-4">Published projects</h2>
            <div className="space-y-4">
              {data.projects.map((p) => (
                <div key={p.id} className="flex items-center justify-between p-4 border border-gray-200 rounded">
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-16 bg-gray-100 rounded overflow-hidden shrink-0">
                      {p.imageUrl ? (
                        <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">No image</div>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold">{p.title}</p>
                      <p className="text-sm text-gray-500">{p.year} · {p.gallery.length} images</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <section className="space-y-6">
          <h2 className="text-lg font-bold">Domain setup</h2>
          <div className="p-6 bg-gray-50 border border-gray-200 rounded space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. Naked domain (A record)</h3>
              <p className="text-sm text-gray-700">Add an A record for your root domain (@) pointing to your host IP.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">2. Redirect</h3>
              <p className="text-sm text-gray-700">Set domain forwarding from your root domain to https://www.yourdomain.com (301 redirect).</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AdminPortal;
