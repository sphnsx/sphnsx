import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import ShowcaseView from './components/ShowcaseView';
import AdminPortal from './components/AdminPortal';
import { PortfolioData } from './types';
import { getPortfolioData } from './services/storageService';
import { ADMIN_PASSWORD } from './constants';

const BackButton: React.FC = () => (
  <Link
    to="/"
    className="fixed top-0 left-0 z-50 m-4 font-mono text-xs uppercase tracking-wider border border-black px-4 py-3 bg-white hover:bg-black hover:text-white transition-colors duration-200"
  >
    ← Back
  </Link>
);

const FullScreenDetail: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="fixed inset-0 bg-white overflow-y-auto">
    <BackButton />
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

const ProjectDetailsPage: React.FC<{ data: PortfolioData }> = ({ data }) => {
  const { id } = useParams<{ id: string }>();
  const project = data.projects.find(p => p.id === id);

  if (!project) return (
    <FullScreenDetail>
      <main className="pt-24 px-6">
        <p>Project not found.</p>
      </main>
    </FullScreenDetail>
  );

  return (
    <FullScreenDetail>
      <main className="pt-24 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 mb-2">{project.year}</p>
          <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
          <p className="text-gray-700 whitespace-pre-line mb-12">{project.description}</p>
          {project.gallery && project.gallery.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {project.gallery.map((img, index) => (
                <div key={index}>
                  <ProtectedImage src={img} alt={`${project.title} ${index + 1}`} />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-gray-500 border border-dashed border-gray-300">
              No images in this project.
            </div>
          )}
        </div>
      </main>
    </FullScreenDetail>
  );
};

const AboutPage: React.FC<{ data: PortfolioData }> = ({ data }) => (
  <FullScreenDetail>
    <main className="pt-24 px-6 pb-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About me</h1>
        <p className="text-lg leading-relaxed whitespace-pre-line">{data.aboutMe}</p>
      </div>
    </main>
  </FullScreenDetail>
);

const ContactPage: React.FC = () => (
  <FullScreenDetail>
    <main className="pt-24 px-6 pb-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contact</h1>
        <p className="mb-4">
          <a href="mailto:hello@sphnsx.net" className="underline font-medium">
            hello@sphnsx.net
          </a>
        </p>
        <p>
          <a href="#" className="underline font-medium">
            Instagram
          </a>
        </p>
      </div>
    </main>
  </FullScreenDetail>
);

const NotFoundPage: React.FC = () => (
  <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
    <h1 className="text-2xl font-bold mb-4">404</h1>
    <p className="text-gray-600 mb-6">Page not found.</p>
    <Link to="/" className="text-sm underline">Go home</Link>
  </main>
);

const AdminWrapper: React.FC<{ data: PortfolioData; onRefresh: () => void }> = ({ data, onRefresh }) => {
  const AUTH_STORAGE_KEY = 'sphnsx_admin_authenticated';
  const SESSION_DURATION = 24 * 60 * 60 * 1000;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    const authData = localStorage.getItem(AUTH_STORAGE_KEY);
    if (authData) {
      try {
        const { timestamp } = JSON.parse(authData);
        if (Date.now() - timestamp < SESSION_DURATION) setIsAuthenticated(true);
        else localStorage.removeItem(AUTH_STORAGE_KEY);
      } catch {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ timestamp: Date.now() }));
    } else alert('Incorrect password.');
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm border border-gray-300 p-8 rounded">
          <h2 className="text-xl font-bold mb-6">Admin login</h2>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full py-3 bg-gray-900 text-white rounded font-medium">
            Log in
          </button>
        </form>
      </div>
    );
  }

  return <AdminPortal data={data} onRefresh={onRefresh} onLogout={handleLogout} />;
};

const App: React.FC = () => {
  const [data, setData] = useState<PortfolioData>(getPortfolioData());

  const refreshData = () => setData(getPortfolioData());

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-sans">
        <Routes>
          <Route path="/" element={<ShowcaseView data={data} />} />
          <Route path="/project/:id" element={<ProjectDetailsPage data={data} />} />
          <Route path="/about" element={<AboutPage data={data} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminWrapper data={data} onRefresh={refreshData} />} />
          <Route path="/a" element={<AdminWrapper data={data} onRefresh={refreshData} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
