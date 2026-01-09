
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
    if (!newProject.title || newProject.gallery.length === 0) {
      alert("Please provide a title and at least one image.");
      return;
    }

    addProject({
      ...newProject,
      id: Date.now().toString()
    });
    setNewProject({ title: '', description: '', imageUrl: '', gallery: [], year: '2025' });
    onRefresh();
    alert('Project published successfully.');
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      deleteProject(id);
      onRefresh();
    }
  };

  const handleGalleryFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const loadedImages: string[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      
      const promise = new Promise<string>((resolve) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
      
      const base64 = await promise;
      loadedImages.push(base64);
    }

    setNewProject(prev => ({ 
      ...prev, 
      imageUrl: loadedImages[0], 
      gallery: loadedImages 
    }));
    setIsUploading(false);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="max-w-6xl mx-auto py-40 px-8 space-y-24 font-sans bg-white">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="flex items-end gap-6">
          <div className="w-16 h-16 bg-citron border-4 border-midnight"></div>
          <div>
            <h1 className="text-6xl font-artful font-bold tracking-tighter uppercase leading-none">Editor</h1>
            <p className="text-midnight/40 text-xs uppercase tracking-widest font-bold">Project Management System</p>
          </div>
        </div>

        <div className="flex gap-4 items-end">
          <button 
            onClick={() => setActiveTab('content')}
            className={`px-6 py-3 text-[10px] uppercase tracking-widest font-bold border-4 border-midnight transition-colors ${activeTab === 'content' ? 'bg-midnight text-white' : 'bg-white text-midnight hover:bg-mist'}`}
          >
            Manage Content
          </button>
          <button 
            onClick={() => setActiveTab('deployment')}
            className={`px-6 py-3 text-[10px] uppercase tracking-widest font-bold border-4 border-midnight transition-colors ${activeTab === 'deployment' ? 'bg-midnight text-white' : 'bg-white text-midnight hover:bg-citron'}`}
          >
            Domain Setup
          </button>
          <button 
            onClick={handleLogout}
            className="px-6 py-3 text-[10px] uppercase tracking-widest font-bold border-4 border-midnight bg-white text-midnight hover:bg-red-500 hover:text-white transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {activeTab === 'content' ? (
        <div className="space-y-32">
          {/* Biography Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-xl font-artful font-bold uppercase tracking-widest bg-mist inline-block p-2 border-2 border-midnight">Biography</h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <textarea
                className="w-full h-48 p-6 border-4 border-midnight focus:bg-mist/10 outline-none text-xl font-medium bg-transparent leading-relaxed"
                value={aboutText}
                onChange={(e) => setAboutText(e.target.value)}
              />
              <button 
                onClick={handleUpdateAbout}
                className="bg-midnight text-white px-12 py-5 hover:bg-cornflower transition-colors text-xs uppercase tracking-[0.3em] font-bold border-4 border-midnight"
              >
                Save Biography
              </button>
            </div>
          </section>

          {/* New Project Section */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-xl font-artful font-bold uppercase tracking-widest bg-citron inline-block p-2 border-2 border-midnight">New Project</h2>
            </div>
            <div className="lg:col-span-8">
              <form onSubmit={handleAddProject} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Project Title</label>
                    <input 
                      type="text" 
                      placeholder="e.g. HUSH HUSH"
                      className="w-full p-5 border-4 border-midnight focus:bg-citron/5 outline-none bg-transparent text-lg font-bold"
                      value={newProject.title}
                      onChange={e => setNewProject({...newProject, title: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Completion Date</label>
                    <input 
                      type="text" 
                      placeholder="e.g. June 2025"
                      className="w-full p-5 border-4 border-midnight focus:bg-citron/5 outline-none bg-transparent text-lg font-bold"
                      value={newProject.year}
                      onChange={e => setNewProject({...newProject, year: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold opacity-40">Narrative / Description</label>
                  <textarea 
                    placeholder="Describe the series..."
                    className="w-full p-5 border-4 border-midnight focus:bg-citron/5 outline-none bg-transparent text-lg font-medium h-40 leading-relaxed"
                    value={newProject.description}
                    onChange={e => setNewProject({...newProject, description: e.target.value})}
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-cornflower translate-x-2 translate-y-2 -z-10 border-2 border-midnight"></div>
                  <div className="bg-white border-4 border-midnight p-8">
                    <label className="block text-sm font-bold uppercase tracking-widest mb-4">Select Your Photos</label>
                    <input 
                      type="file" 
                      accept="image/*"
                      multiple
                      className="block w-full text-sm text-midnight/40 file:mr-6 file:py-4 file:px-8 file:border-4 file:border-midnight file:bg-midnight file:text-white file:font-bold file:uppercase hover:file:bg-cornflower transition-all cursor-pointer"
                      onChange={handleGalleryFiles}
                    />
                  </div>
                </div>

                {newProject.gallery.length > 0 && (
                  <div className="bg-mist/20 border-4 border-midnight p-6">
                    <p className="text-xs uppercase tracking-widest font-bold mb-4">{newProject.gallery.length} Images ready for upload</p>
                    <div className="flex gap-2 overflow-x-auto pb-4">
                      {newProject.gallery.map((img, i) => (
                        <img key={i} src={img} alt="" className="h-20 w-auto border-2 border-midnight" />
                      ))}
                    </div>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isUploading}
                  className={`w-full md:w-auto bg-midnight text-white px-16 py-6 hover:bg-citron hover:text-midnight transition-all text-sm uppercase tracking-[0.4em] font-bold border-4 border-midnight shadow-[10px_10px_0px_0px_rgba(105,134,232,1)] active:shadow-none active:translate-x-1 active:translate-y-1 ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isUploading ? 'Processing Images...' : 'Publish Project'}
                </button>
              </form>
            </div>
          </section>

          {/* List Section */}
          <section className="space-y-12">
            <h2 className="text-xl font-artful font-bold uppercase tracking-widest bg-midnight text-white inline-block p-2">Published Works</h2>
            <div className="grid grid-cols-1 gap-6">
              {data.projects.map(p => (
                <div key={p.id} className="flex flex-col md:flex-row items-center justify-between p-8 border-4 border-midnight bg-white hover:shadow-[12px_12px_0px_0px_rgba(231,255,110,1)] transition-all gap-8">
                  <div className="flex items-center gap-8 w-full">
                    <div className="w-48 h-24 bg-midnight/5 overflow-hidden border-2 border-midnight shrink-0">
                      {p.imageUrl ? (
                        <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] font-bold opacity-20 uppercase tracking-widest">No Image</div>
                      )}
                    </div>
                    <div>
                      <span className="font-bold uppercase tracking-tighter text-2xl block">{p.title}</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">{p.year} — {p.gallery.length} plates</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDelete(p.id)}
                    className="w-full md:w-auto text-midnight border-4 border-midnight hover:bg-red-500 hover:text-white px-8 py-4 text-[10px] uppercase tracking-widest font-bold transition-all"
                  >
                    Delete Series
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-xl font-artful font-bold uppercase tracking-widest bg-citron inline-block p-2 border-2 border-midnight">Domain Resolution</h2>
            <p className="mt-4 text-xs font-bold opacity-40 leading-relaxed max-w-[200px]">Follow these steps to fix the "sphnsx.net" redirection issue.</p>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <div className="bg-mist/10 border-4 border-midnight p-10 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-artful font-bold underline decoration-citron decoration-4 underline-offset-4">Step 1: Fix the Naked Domain</h3>
                <p className="text-sm font-medium leading-relaxed">Browsers treat <span className="font-bold">sphnsx.net</span> differently than <span className="font-bold">www.sphnsx.net</span>. To fix this, you must log into your domain registrar (e.g. GoDaddy, Namecheap) and add an <span className="bg-midnight text-white px-2 py-0.5 font-bold">A Record</span>.</p>
                <div className="bg-white border-2 border-midnight p-4 font-mono text-[11px] space-y-2">
                  <p className="opacity-40">// Set your naked domain record</p>
                  <p><span className="text-cornflower">Type:</span> A</p>
                  <p><span className="text-cornflower">Host:</span> @</p>
                  <p><span className="text-cornflower">Value:</span> (Your Host IP Address)</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-artful font-bold underline decoration-cornflower decoration-4 underline-offset-4">Step 2: Enable Forwarding</h3>
                <p className="text-sm font-medium leading-relaxed">Look for a setting called <span className="font-bold">Domain Forwarding</span>. Configure it to redirect any traffic from <span className="italic">sphnsx.net</span> to <span className="italic">https://www.sphnsx.net</span> using a <span className="font-bold">301 (Permanent) Redirect</span>.</p>
              </div>

              <div className="p-6 bg-citron/20 border-2 border-midnight border-dashed">
                <p className="text-[10px] uppercase tracking-widest font-bold">Pro Tip: SSL Encryption</p>
                <p className="text-xs mt-2 font-medium">Ensure your host has an active SSL certificate. Browsers will block a site that redirects from HTTP to a non-secure domain.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="p-6 border-4 border-midnight text-center">
                  <span className="text-2xl font-bold block mb-2">404</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">App Router</span>
                  <p className="text-[9px] mt-4 uppercase font-bold text-citron bg-midnight p-1">Active</p>
               </div>
               <div className="p-6 border-4 border-midnight text-center">
                  <span className="text-2xl font-bold block mb-2">WWW</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Subdomain</span>
                  <p className="text-[9px] mt-4 uppercase font-bold text-cornflower bg-midnight p-1">Operational</p>
               </div>
               <div className="p-6 border-4 border-midnight text-center">
                  <span className="text-2xl font-bold block mb-2">@</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-40">Root DNS</span>
                  <p className="text-[9px] mt-4 uppercase font-bold text-red-400 bg-midnight p-1">Action Req.</p>
               </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AdminPortal;
