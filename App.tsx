
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminPortal from './components/AdminPortal';
import ProjectAnimation from './components/ProjectAnimation';
import { PortfolioData, Project } from './types';
import { getPortfolioData } from './services/storageService';
import { ADMIN_PASSWORD } from './constants';

const ProtectedImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  if (!src) return (
    <div className="w-full aspect-[4/5] bg-midnight/5 border border-dashed border-midnight/10 flex items-center justify-center">
      <span className="text-[10px] uppercase tracking-widest font-bold opacity-20">Visual data missing</span>
    </div>
  );

  return (
    <div className="relative group select-none overflow-hidden bg-midnight/5 w-full h-full">
      <img 
        src={src} 
        alt={alt} 
        className={`${className} w-full h-full object-contain transition-transform duration-1000 group-hover:scale-[1.03]`}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
        style={{ pointerEvents: 'none' }}
      />
      <div 
        className="absolute inset-0 z-10 bg-transparent cursor-crosshair" 
        onContextMenu={(e) => e.preventDefault()}
      />
      <div className="absolute top-2 left-2 w-2 h-[0.5px] bg-midnight/10 z-20"></div>
      <div className="absolute top-2 left-2 w-[0.5px] h-2 bg-midnight/10 z-20"></div>
    </div>
  );
};

const MarginMarks = () => (
  <div className="fixed inset-0 pointer-events-none z-[100]">
    <div className="absolute top-0 left-0 p-4 md:p-6">
      <div className="absolute top-0 left-8 w-[0.5px] h-12 bg-citron/60"></div>
      <div className="absolute top-8 left-0 w-12 h-[0.5px] bg-citron/60"></div>
    </div>
    <div className="absolute top-0 right-0 p-4 md:p-6">
      <div className="absolute top-0 right-8 w-[0.5px] h-12 bg-cornflower/40"></div>
      <div className="absolute top-8 right-0 w-12 h-[0.5px] bg-cornflower/40"></div>
    </div>
    <div className="absolute bottom-0 left-0 p-4 md:p-6">
      <div className="absolute bottom-0 left-8 w-[0.5px] h-12 bg-mist"></div>
      <div className="absolute bottom-8 left-0 w-12 h-[0.5px] bg-mist"></div>
    </div>
    <div className="absolute bottom-0 right-0 p-4 md:p-6">
      <div className="absolute bottom-0 right-8 w-[0.5px] h-12 bg-midnight/10"></div>
      <div className="absolute bottom-8 right-0 w-12 h-[0.5px] bg-midnight/10"></div>
    </div>
  </div>
);

const AboutPage: React.FC<{ data: PortfolioData }> = ({ data }) => (
  <main className="min-h-screen pt-48 px-12 md:px-32 pb-40 flex items-center justify-center">
    <div className="max-w-screen-xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
      <div className="lg:col-span-8">
        <h1 className="text-5xl md:text-8xl font-artful font-bold text-midnight tracking-tighter mb-16 underline decoration-citron decoration-8 underline-offset-8">
          SPHNSX
        </h1>
        <div className="max-w-3xl">
          <p className="text-xl md:text-2xl leading-relaxed text-midnight font-medium whitespace-pre-line">
            {data.aboutMe}
          </p>
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-4 relative">
        <div className="absolute -top-6 -right-6 w-full h-full bg-mist/30 -z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000" 
          alt="Portrait of Silvia" 
          className="w-full grayscale border border-midnight/5"
        />
      </div>
    </div>
  </main>
);

const ProjectDetailsPage: React.FC<{ data: PortfolioData }> = ({ data }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = data.projects.find(p => p.id === id);

  if (!project) return <div className="pt-64 px-12">Project not found.</div>;

  return (
    <main className="min-h-screen pt-32 md:pt-48 px-8 md:px-16 pb-40">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <aside className="lg:col-span-4 space-y-12">
            <div className="lg:sticky lg:top-48 space-y-12">
              <button 
                onClick={() => navigate(-1)}
                className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-midnight/40 hover:text-midnight transition-colors"
              >
                <div className="w-8 h-[1px] bg-midnight/20 group-hover:bg-midnight transition-all"></div>
                Return to Index
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold border-l-4 border-citron pl-4">{project.year}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-artful font-bold text-midnight uppercase tracking-tighter leading-[0.9]">
                  {project.title}
                </h1>
                <div className="w-12 h-[1px] bg-midnight/10 my-8"></div>
                <div className="text-sm md:text-base text-midnight/70 leading-relaxed font-medium whitespace-pre-line max-w-sm space-y-4">
                  {project.description}
                </div>
              </div>

              <div className="pt-12 hidden lg:block">
                <p className="text-[9px] uppercase tracking-[0.5em] text-midnight/20 font-bold">
                  All rights reserved &copy; 2025
                </p>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8">
            {project.gallery && project.gallery.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 md:gap-x-12 md:gap-y-32 items-start">
                {project.gallery.map((img, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col ${index % 2 !== 0 ? 'sm:mt-32' : ''}`}
                  >
                    <ProtectedImage 
                      src={img} 
                      alt={`${project.title} Plate ${index + 1}`} 
                      className="w-full shadow-sm"
                    />
                    <div className="mt-4 flex justify-between items-center px-1">
                       <span className="text-[8px] uppercase tracking-widest text-midnight/20 font-mono">
                        #{String(index + 1).padStart(2, '0')}
                       </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full py-40 flex flex-col items-center justify-center bg-midnight/5 border-4 border-dashed border-midnight/10">
                 <p className="text-xs uppercase tracking-[0.4em] font-bold opacity-30 text-center px-12">
                   This series is currently being processed for archiving.
                 </p>
              </div>
            )}
            
            {project.gallery.length > 0 && (
              <div className="mt-40 flex flex-col items-center justify-center gap-4 opacity-10">
                <div className="w-[1px] h-24 bg-midnight"></div>
                <span className="text-[10px] uppercase tracking-[1em] font-bold">FIN</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

const ProjectsPage: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <main className="min-h-screen pt-48 px-12 md:px-32 pb-40">
      <div className="max-w-6xl mx-auto flex flex-col gap-24 md:gap-40">
        {data.projects.map((project, idx) => {
          const isEven = idx % 2 === 0;
          
          return (
            <div key={project.id} className={`w-full flex ${isEven ? 'justify-end' : 'justify-start'}`}>
              <div className="w-full lg:w-[80%] group">
                <Link to={`/project/${project.id}`} className="block relative bg-white overflow-hidden shadow-sm border border-midnight/5">
                  <ProjectAnimation imageUrl={project.imageUrl} />
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 bg-white p-6 border-4 border-midnight shadow-[8px_8px_0px_0px_rgba(231,255,110,1)] z-20">
                    <h3 className="text-sm font-bold uppercase tracking-[0.5em]">{project.title}</h3>
                    <p className="text-[10px] uppercase tracking-widest mt-2 text-midnight/40">{project.year}</p>
                  </div>
                  <div className="absolute inset-0 z-10" onContextMenu={e => e.preventDefault()}></div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

const NotFoundPage: React.FC = () => (
  <main className="min-h-screen flex flex-col items-center justify-center p-12 text-center">
    <div className="w-20 h-20 bg-citron mb-12 border-4 border-midnight"></div>
    <h1 className="text-4xl font-artful font-bold uppercase tracking-widest mb-4">404: Resource Unavailable</h1>
    <p className="text-xs uppercase tracking-[0.5em] opacity-40 mb-12">The requested path does not exist in this archive</p>
    <Link to="/" className="text-xs font-bold uppercase tracking-[0.3em] border-b-4 border-cornflower pb-2 hover:opacity-50 transition-opacity">Return to Index</Link>
  </main>
);

const AdminWrapper: React.FC<{ data: PortfolioData, onRefresh: () => void }> = ({ data, onRefresh }) => {
  const AUTH_STORAGE_KEY = 'sphnsx_admin_authenticated';
  const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Check for existing authentication on mount
  useEffect(() => {
    const authData = localStorage.getItem(AUTH_STORAGE_KEY);
    if (authData) {
      try {
        const { timestamp } = JSON.parse(authData);
        const now = Date.now();
        // Check if session hasn't expired
        if (now - timestamp < SESSION_DURATION) {
          setIsAuthenticated(true);
        } else {
          // Session expired, clear it
          localStorage.removeItem(AUTH_STORAGE_KEY);
        }
      } catch (e) {
        // Invalid data, clear it
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      // Store authentication with timestamp
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({
        timestamp: Date.now()
      }));
    } else {
      alert('Unauthorised access denied.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8 bg-mist/5">
        <form onSubmit={handleLogin} className="w-full max-w-sm border-4 border-midnight bg-white p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-artful font-bold mb-8 uppercase tracking-widest">Editor Login</h2>
          <input 
            type="password" 
            placeholder="Security Key"
            className="w-full p-4 border-b-4 border-midnight mb-8 text-center focus:bg-citron/10 outline-none transition-colors font-mono font-bold"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button 
            type="submit" 
            className="w-full bg-midnight text-white py-5 font-bold uppercase tracking-[0.3em] hover:bg-cornflower transition-all text-xs border-4 border-midnight"
          >
            Authenticate
          </button>
        </form>
      </div>
    );
  }

  return <AdminPortal data={data} onRefresh={onRefresh} onLogout={handleLogout} />;
};

const App: React.FC = () => {
  const [data, setData] = useState<PortfolioData>(getPortfolioData());

  const refreshData = () => {
    setData(getPortfolioData());
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-white selection:bg-citron selection:text-midnight overflow-x-hidden">
        <MarginMarks />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<ProjectsPage data={data} />} />
          <Route path="/project/:id" element={<ProjectDetailsPage data={data} />} />
          <Route path="/about" element={<AboutPage data={data} />} />
          <Route path="/admin" element={<AdminWrapper data={data} onRefresh={refreshData} />} />
          <Route path="/a" element={<AdminWrapper data={data} onRefresh={refreshData} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <footer className="px-12 md:px-32 py-20 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-6">
            <div className="w-8 h-[2px] bg-citron"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-midnight/40">&copy; 2024 SPHNSX</span>
          </div>
          
          <div className="flex gap-16 items-center">
            <a href="#" className="text-[11px] uppercase tracking-[0.3em] font-bold hover:underline decoration-cornflower decoration-2 underline-offset-4">Instagram</a>
            <a href="#" className="text-[11px] uppercase tracking-[0.3em] font-bold hover:underline decoration-mist decoration-2 underline-offset-4">Contact</a>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
