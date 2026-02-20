import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import ShowcaseView from './components/ShowcaseView';
import AdminLoginPage from './components/AdminLoginPage';
import DeploymentPage from './components/DeploymentPage';
import NewProjectPage from './components/NewProjectPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import { PortfolioData } from './types';
import { getPortfolioData, updateAboutMe } from './services/storageService';
import { HOME_BUTTON_GREEN } from './constants';
import { AdminAuthProvider, useAdminAuth } from './contexts/AdminAuthContext';

const FixedHomeButton: React.FC = () => (
  <Link
    to="/"
    className="fixed top-0 left-0 z-[100] font-mono text-base uppercase tracking-wider text-black py-4 px-5 transition-opacity hover:opacity-90"
    style={{ backgroundColor: HOME_BUTTON_GREEN }}
  >
    Home
  </Link>
);

const AdminBar: React.FC = () => {
  const { isAdmin, logout } = useAdminAuth();
  const navigate = useNavigate();
  if (!isAdmin) return null;
  return (
    <div className="fixed top-0 left-0 z-[99] pl-32 pt-4 flex gap-2">
      <Link
        to="/project/new"
        className="font-mono text-xs uppercase tracking-wider border border-black px-3 py-2 bg-white text-black hover:bg-black hover:text-white transition-colors"
      >
        Add project
      </Link>
      <Link
        to="/admin/deployment"
        className="font-mono text-xs uppercase tracking-wider border border-black px-3 py-2 bg-white text-black hover:bg-black hover:text-white transition-colors"
      >
        Domain setup
      </Link>
      <button
        type="button"
        onClick={() => { logout(); navigate('/'); }}
        className="font-mono text-xs uppercase tracking-wider border border-black px-3 py-2 bg-white text-black hover:bg-black hover:text-white transition-colors"
      >
        Logout
      </button>
    </div>
  );
};

const FullScreenDetail: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="fixed inset-0 bg-white flex flex-col overflow-hidden">
    {children}
  </div>
);

const ProjectDetailsPage: React.FC<{ data: PortfolioData; onRefresh: () => void }> = ({ data, onRefresh }) => {
  const { id } = useParams<{ id: string }>();
  const project = data.projects.find(p => p.id === id);

  if (!project) return (
    <FullScreenDetail>
      <main className="pt-24 px-6">
        <p>Project not found.</p>
      </main>
    </FullScreenDetail>
  );

  return <ProjectDetailPage project={project} onRefresh={onRefresh} />;
};

const AboutPage: React.FC<{ data: PortfolioData; onRefresh: () => void }> = ({ data, onRefresh }) => {
  const { isAdmin } = useAdminAuth();
  const [isEditing, setIsEditing] = React.useState(false);
  const [aboutText, setAboutText] = React.useState(data.aboutMe);

  React.useEffect(() => {
    setAboutText(data.aboutMe);
  }, [data.aboutMe]);

  const handleSave = () => {
    updateAboutMe(aboutText);
    onRefresh();
    setIsEditing(false);
  };

  return (
    <FullScreenDetail>
      <main className="flex-1 min-h-0 flex">
        <div className="w-2/5 min-w-0 overflow-y-auto pt-24 px-6 pb-16">
          <div className="max-w-xl">
            {isAdmin && (
              <div className="mb-6">
                {!isEditing ? (
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="font-mono text-xs uppercase tracking-wider px-3 py-2 border border-black bg-white text-black hover:bg-black hover:text-white transition-colors"
                  >
                    Edit biography
                  </button>
                ) : (
                  <div className="space-y-4">
                    <textarea
                      className="w-full h-40 p-3 border border-black bg-transparent font-mono text-sm focus:outline-none"
                      value={aboutText}
                      onChange={(e) => setAboutText(e.target.value)}
                    />
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={handleSave}
                        className="font-mono text-sm uppercase tracking-wider px-4 py-2 border border-black bg-white text-black hover:bg-black hover:text-white transition-colors"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => { setIsEditing(false); setAboutText(data.aboutMe); }}
                        className="font-mono text-sm uppercase tracking-wider px-4 py-2 border border-black bg-white text-black hover:bg-black hover:text-white transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            {!isEditing && (
              <>
                <h1 className="text-3xl font-bold mb-8">About me</h1>
                <div className="space-y-6">
                  {data.aboutMe
                    .split(/\n\n+/)
                    .map((p) => p.trim())
                    .filter(Boolean)
                    .map((para, i) => (
                      <p key={i} className="text-lg leading-relaxed">{para}</p>
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="w-px shrink-0 bg-black" aria-hidden />
        <div className="w-3/5 min-w-0 overflow-y-auto pt-24 px-6 pb-16 flex items-center justify-center text-gray-400">
          <span className="text-sm">Images</span>
        </div>
      </main>
    </FullScreenDetail>
  );
};

const ContactPage: React.FC = () => (
  <FullScreenDetail>
    <main className="flex-1 min-h-0 flex">
      <div className="w-2/5 min-w-0 overflow-y-auto pt-24 px-6 pb-16">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold mb-8">Contact</h1>
          <p className="mb-4">
            <a href="mailto:sphnsx@aol.com" className="underline font-medium">
              sphnsx@aol.com
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/sphnsx/" target="_blank" rel="noopener noreferrer" className="underline font-medium">
              Instagram
            </a>
          </p>
        </div>
      </div>
      <div className="w-px shrink-0 bg-black" aria-hidden />
      <div className="w-3/5 min-w-0 overflow-y-auto pt-24 px-6 pb-16 flex items-center justify-center text-gray-400">
        <span className="text-sm">Images</span>
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

const HashPathSync: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    const pathname = window.location.pathname;
    const hash = window.location.hash;
    // HashRouter only reads the hash. Visiting pathname without hash leaves hash empty, so sync pathname into hash.
    const pathOnly = pathname === '/admin' || pathname === '/a' || pathname === '/project/new' || pathname === '/admin/deployment';
    if (pathOnly && (!hash || hash === '#')) {
      window.location.hash = pathname;
    }
  }, [location.pathname]);
  return null;
};

const AdminDeploymentGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAdmin } = useAdminAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAdmin) navigate('/admin');
  }, [isAdmin, navigate]);
  if (!isAdmin) return null;
  return <>{children}</>;
};

const App: React.FC = () => {
  const [data, setData] = useState<PortfolioData>(getPortfolioData());

  const refreshData = () => setData(getPortfolioData());

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <Router>
      <AdminAuthProvider>
        <HashPathSync />
        <div className="min-h-screen bg-white text-black font-sans">
          <FixedHomeButton />
          <AdminBar />
          <Routes>
            <Route path="/" element={<ShowcaseView data={data} onRefresh={refreshData} />} />
            <Route path="/project/new" element={<NewProjectPage data={data} onRefresh={refreshData} />} />
            <Route path="/project/:id" element={<ProjectDetailsPage data={data} onRefresh={refreshData} />} />
            <Route path="/about" element={<AboutPage data={data} onRefresh={refreshData} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="/a" element={<AdminLoginPage />} />
            <Route path="/admin/deployment" element={<AdminDeploymentGuard><DeploymentPage /></AdminDeploymentGuard>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </AdminAuthProvider>
    </Router>
  );
};

export default App;
