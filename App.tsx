import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import ShowcaseView from './components/ShowcaseView';
import MobileHeader from './components/MobileHeader';
import AdminLoginPage from './components/AdminLoginPage';
import DeploymentPage from './components/DeploymentPage';
import NewProjectPage from './components/NewProjectPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import { PortfolioData } from './types';
import { getPortfolioData, getPortfolioDataAsync, updateAboutMe, STORAGE_KEY } from './services/storageService';
import { PALETTE } from './constants';
import { AdminAuthProvider, useAdminAuth } from './contexts/AdminAuthContext';
import { useIsMobile } from './hooks/useMediaQuery';
import RichTextEditor from './components/RichTextEditor';
import SafeHtml from './components/SafeHtml';

const FixedHomeButton: React.FC = () => {
  const isMobile = useIsMobile();
  if (isMobile) return null;
  return (
    <Link
      to="/"
      className="fixed top-0 left-0 z-[100] h-12 flex items-center font-mono text-base uppercase tracking-wider text-textPrimary px-6 rounded-sm transition-opacity duration-150 hover:opacity-90"
      style={{ backgroundColor: PALETTE.accent }}
    >
      Home
    </Link>
  );
};

const AdminBar: React.FC = () => {
  const isMobile = useIsMobile();
  const { isAdmin, logout } = useAdminAuth();
  const navigate = useNavigate();
  if (isMobile || !isAdmin) return null;
  return (
    <div className="fixed bottom-0 left-0 z-[99] pl-6 pb-6 flex gap-2">
      <Link
        to="/project/new"
        className="font-mono text-xs uppercase tracking-wider border border-paletteBorder px-3 py-2 bg-bgMain text-textPrimary hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm"
      >
        Add project
      </Link>
      <Link
        to="/admin/deployment"
        className="font-mono text-xs uppercase tracking-wider border border-paletteBorder px-3 py-2 bg-bgMain text-textPrimary hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm"
      >
        Domain setup
      </Link>
      <button
        type="button"
        onClick={() => { logout(); navigate('/'); }}
        className="font-mono text-xs uppercase tracking-wider border border-paletteBorder px-3 py-2 bg-bgMain text-textPrimary hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm"
      >
        Logout
      </button>
    </div>
  );
};

const FullScreenDetail: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="fixed inset-0 bg-bgMain flex flex-col overflow-hidden">
    {children}
  </div>
);

const ProjectDetailsPage: React.FC<{ data: PortfolioData; onRefresh: () => void }> = ({ data, onRefresh }) => {
  const { id } = useParams<{ id: string }>();
  const project = data.projects.find(p => p.id === id);

  if (!project) return (
    <FullScreenDetail>
      <main className="pt-pageTop px-6 pb-12">
        <p>Project not found.</p>
      </main>
    </FullScreenDetail>
  );

  return <ProjectDetailPage project={project} onRefresh={onRefresh} />;
};

const AboutPage: React.FC<{ data: PortfolioData; onRefresh: () => void }> = ({ data, onRefresh }) => {
  const isMobile = useIsMobile();
  const { isAdmin } = useAdminAuth();
  const [isEditing, setIsEditing] = React.useState(false);
  const [aboutText, setAboutText] = React.useState(data.aboutMe);

  React.useEffect(() => {
    setAboutText(data.aboutMe);
  }, [data.aboutMe]);

  const handleSave = async () => {
    await updateAboutMe(aboutText);
    onRefresh();
    setIsEditing(false);
  };

  const showEditBiography = isAdmin && !isMobile;

  return (
    <FullScreenDetail>
      <main className={`flex-1 min-h-0 flex overflow-hidden ${isMobile ? 'flex-col' : ''}`}>
        <div className={isMobile ? 'w-full min-w-0 overflow-y-auto pt-pageTop px-6 pb-12' : `w-2/5 min-w-0 overflow-y-auto pt-pageTop px-6 ${isAdmin ? 'pb-24' : 'pb-12'}`}>
          <div className="max-w-xl">
            {showEditBiography && (
              <div className="mb-6">
                {!isEditing ? (
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="font-mono text-xs uppercase tracking-wider px-3 py-2 border border-paletteBorder bg-bgMain text-textPrimary hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm"
                  >
                    Edit biography
                  </button>
                ) : (
                  <div className="space-y-4">
                    <RichTextEditor
                      value={aboutText}
                      onChange={setAboutText}
                      placeholder="About me…"
                      minHeight="14rem"
                    />
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={handleSave}
                        className="font-mono text-sm uppercase tracking-wider px-4 py-2 bg-accent text-textPrimary hover:opacity-90 transition-opacity duration-150 rounded-sm"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => { setIsEditing(false); setAboutText(data.aboutMe); }}
                        className="font-mono text-sm uppercase tracking-wider px-4 py-2 border border-paletteBorder bg-bgMain text-textPrimary hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm"
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
                <h1 className="text-3xl font-bold mb-8 text-textPrimary">About me</h1>
                <div className="space-y-6 text-base leading-relaxed text-textPrimary">
                  <SafeHtml html={data.aboutMe} />
                </div>
              </>
            )}
          </div>
        </div>
        {!isMobile && <div className="w-px shrink-0 bg-paletteBorder" aria-hidden />}
        <div className={isMobile ? 'w-full min-w-0 overflow-y-auto pt-6 px-6 pb-12 flex items-center justify-center text-textSecondary' : 'w-3/5 min-w-0 overflow-y-auto pt-pageTop px-6 pb-12 flex items-center justify-center text-textSecondary'}>
          {null}
        </div>
      </main>
    </FullScreenDetail>
  );
};

const ContactPage: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <FullScreenDetail>
      <main className={`flex-1 min-h-0 flex overflow-hidden ${isMobile ? 'flex-col' : ''}`}>
        <div className={isMobile ? 'w-full min-w-0 overflow-y-auto pt-pageTop px-6 pb-12' : 'w-2/5 min-w-0 overflow-y-auto pt-pageTop px-6 pb-12'}>
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold mb-8 text-textPrimary">Contact</h1>
            <p className="mb-4">
              <a href="mailto:sphnsx@aol.com" className="underline font-medium transition-colors duration-150 hover:opacity-80">
                sphnsx@aol.com
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/sphnsx/" target="_blank" rel="noopener noreferrer" className="underline font-medium transition-colors duration-150 hover:opacity-80">
                Instagram
              </a>
            </p>
          </div>
        </div>
        {!isMobile && <div className="w-px shrink-0 bg-paletteBorder" aria-hidden />}
        <div className={isMobile ? 'w-full min-w-0 overflow-y-auto pt-6 px-6 pb-12 flex items-center justify-center text-textSecondary' : 'w-3/5 min-w-0 overflow-y-auto pt-pageTop px-6 pb-12 flex items-center justify-center text-textSecondary'}>
          {null}
        </div>
      </main>
    </FullScreenDetail>
  );
};

const NotFoundPage: React.FC = () => (
  <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
    <h1 className="text-3xl font-bold mb-4 text-textPrimary">404</h1>
    <p className="text-base text-textSecondary mb-6 leading-relaxed">Page not found.</p>
    <Link to="/" className="text-sm underline transition-colors duration-150 hover:opacity-80">Go home</Link>
  </main>
);

/** Base path where the SPA is served (e.g. /a). No trailing slash. */
const getBasePath = (): string => {
  const b = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/';
  return b.replace(/\/$/, '') || '';
};

const HashPathSync: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    const pathname = window.location.pathname;
    const hash = window.location.hash;
    if (hash && hash !== '#') return; // Already have a route in hash
    const base = getBasePath();
    // Pathname → route. Entry points: /a or /a/ → home (#/); /admin → #/admin; /a/admin → #/admin.
    const route =
      pathname === base || pathname === base + '/'
        ? '/'
        : pathname.startsWith(base + '/')
          ? pathname.slice(base.length) || '/'
          : pathname.startsWith('/')
            ? pathname
            : '/' + pathname;
    const newHash = '#' + (route.startsWith('/') ? route : '/' + route);
    window.location.hash = newHash;
    // Normalize URL: admin routes always use root path /#/admin so sphnsx.com/admin and /a become /#/admin.
    const pathPart = (route === '/admin' || route.startsWith('/admin/')) ? '/' + newHash : (base ? base + newHash : '/' + newHash);
    if (window.location.pathname + window.location.hash !== pathPart) {
      window.history.replaceState(undefined, '', window.location.origin + pathPart);
    }
  }, [location.pathname]);
  return null;
};

/** Redirect /project/new and /admin/deployment to home when on phone (admin disabled). */
const AdminRouteMobileRedirect: React.FC = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isMobile) return;
    const path = location.pathname;
    if (path === '/project/new' || path === '/admin/deployment') {
      navigate('/');
    }
  }, [isMobile, location.pathname, navigate]);
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
  const isMobile = useIsMobile();
  const [data, setData] = useState<PortfolioData>(getPortfolioData());

  const refreshData = () => getPortfolioDataAsync().then(setData);

  useEffect(() => {
    getPortfolioDataAsync().then(setData);
  }, []);

  // #region agent log
  useEffect(() => {
    try {
      const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
      const d = getPortfolioData();
      fetch('http://127.0.0.1:7244/ingest/d73bb932-4ac7-45e1-8337-35cb70e602f8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '9bdf88' },
        body: JSON.stringify({
          sessionId: '9bdf88',
          location: 'App.tsx:load',
          message: 'portfolio data on load',
          data: {
            storageNull: raw === null,
            storageLength: raw ? raw.length : 0,
            projectsLength: d.projects.length,
            projectIds: d.projects.map((p) => p.id),
          },
          timestamp: Date.now(),
          hypothesisId: 'S1',
        }),
      }).catch(() => {});
    } catch (e) {
      try {
        fetch('http://127.0.0.1:7244/ingest/d73bb932-4ac7-45e1-8337-35cb70e602f8', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '9bdf88' },
          body: JSON.stringify({ sessionId: '9bdf88', location: 'App.tsx:load', message: 'portfolio load error', data: { err: String(e) }, timestamp: Date.now(), hypothesisId: 'S1' }),
        }).catch(() => {});
      } catch (_) {}
    }
  }, []);
  // #endregion

  return (
    <Router>
      <AdminAuthProvider>
        <HashPathSync />
        <AdminRouteMobileRedirect />
        <div className="min-h-screen bg-bgMain text-textPrimary font-sans">
          {isMobile && <MobileHeader />}
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
