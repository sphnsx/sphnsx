import React, { useState, useEffect, useCallback, useRef } from 'react';
import { flushSync } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ShowcaseView from './components/ShowcaseView';
import MobileHeader from './components/MobileHeader';
import AdminLoginPage from './components/AdminLoginPage';
import DeploymentPage from './components/DeploymentPage';
import NewProjectPage from './components/NewProjectPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import { PortfolioData, ContactMethod } from './types';
import { getPortfolioData, getPortfolioDataAsync, isAuthoritativeRemoteConfigured, updateAboutMe, updateAboutImage, updateContactMethods } from './services/storageService';
import { PALETTE } from './constants';
import { AdminAuthProvider, useAdminAuth } from './contexts/AdminAuthContext';
import { useIsMobile } from './hooks/useMediaQuery';
import RichTextEditor from './components/RichTextEditor';
import SafeHtml from './components/SafeHtml';
import { compressImageDataUrl } from './utils/imageCompress';

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

const CloseToHomeButton: React.FC = () => {
  const location = useLocation();
  if (location.pathname === '/') return null;
  return (
    <Link
      to="/"
      className="fixed top-0 right-0 z-[100] p-4 transition-opacity duration-150 hover:opacity-80"
      aria-label="Back to home"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={PALETTE.textSecondary} strokeWidth="1" strokeLinecap="square" aria-hidden>
        <line x1="6" y1="6" x2="18" y2="18" />
        <line x1="18" y1="6" x2="6" y2="18" />
      </svg>
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
        <div className={isMobile ? 'w-full min-w-0 overflow-y-auto pt-6 px-6 pb-12 flex items-center justify-center text-textSecondary' : `w-3/5 min-w-0 overflow-y-auto pt-pageTop px-6 ${isAdmin ? 'pb-24' : 'pb-12'} flex items-center justify-center text-textSecondary`}>
          <AboutRightColumn data={data} onRefresh={onRefresh} />
        </div>
      </main>
    </FullScreenDetail>
  );
};

const AboutRightColumn: React.FC<{ data: PortfolioData; onRefresh: (updatedData?: PortfolioData) => void }> = ({ data, onRefresh }) => {
  const { isAdmin } = useAdminAuth();
  const isMobile = useIsMobile();
  const [isUploading, setIsUploading] = React.useState(false);

  const handleFile = React.useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';
    setIsUploading(true);
    try {
      const dataUrl = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
      const compressed = await compressImageDataUrl(dataUrl);
      const updatedData = await updateAboutImage(compressed);
      onRefresh(updatedData);
    } finally {
      setIsUploading(false);
    }
  }, [onRefresh]);

  const handleRemove = React.useCallback(async () => {
    const updatedData = await updateAboutImage('');
    onRefresh(updatedData);
  }, [onRefresh]);

  if (isMobile) return null;
  const hasImage = Boolean(data.aboutImage);

  return (
    <div className="w-full max-w-lg flex flex-col items-center">
      {hasImage && (
        <img src={data.aboutImage} alt="" className="max-h-[70vh] w-auto object-contain border border-paletteBorder" />
      )}
      {isAdmin && (
        <div className="mt-4 flex gap-2">
          <label className="font-mono text-xs uppercase tracking-wider px-3 py-2 border border-paletteBorder bg-bgMain text-textPrimary hover:bg-neutral-800 hover:text-white cursor-pointer transition-colors duration-150 rounded-sm">
            {hasImage ? 'Change photo' : 'Choose file'}
            <input type="file" accept="image/*" className="hidden" onChange={handleFile} disabled={isUploading} />
          </label>
          {hasImage && (
            <button
              type="button"
              onClick={handleRemove}
              disabled={isUploading}
              className="font-mono text-xs uppercase tracking-wider px-3 py-2 bg-destructive text-white hover:opacity-90 disabled:opacity-50 transition-opacity duration-150 rounded-sm"
            >
              Remove
            </button>
          )}
        </div>
      )}
    </div>
  );
};

/** Derive contact methods from data: use contactMethods if present, else migrate from legacy contact. */
function getContactMethods(data: PortfolioData): ContactMethod[] {
  if (data.contactMethods?.length) return data.contactMethods;
  if (data.contact) {
    const list: ContactMethod[] = [{ label: 'Email', value: data.contact.email }];
    if (data.contact.instagramUrl) list.push({ label: 'Instagram', value: data.contact.instagramUrl });
    return list;
  }
  return [
    { label: 'Email', value: 'sphnsx@aol.com' },
    { label: 'Instagram', value: 'https://www.instagram.com/sphnsx/' },
  ];
}

const ContactPage: React.FC<{ data: PortfolioData; onRefresh: (updatedData?: PortfolioData) => void }> = ({ data, onRefresh }) => {
  const isMobile = useIsMobile();
  const { isAdmin } = useAdminAuth();
  const [isEditing, setIsEditing] = React.useState(false);
  const methods = getContactMethods(data);
  const [editMethods, setEditMethods] = React.useState<ContactMethod[]>(methods);

  React.useEffect(() => {
    setEditMethods(getContactMethods(data));
  }, [data.contactMethods, data.contact]);

  const handleSave = async () => {
    const trimmed = editMethods.map((m) => ({ label: m.label.trim(), value: m.value.trim() })).filter((m) => m.label || m.value);
    const updatedData = await updateContactMethods(trimmed);
    onRefresh(updatedData);
    setIsEditing(false);
  };

  const addMethod = () => setEditMethods((prev) => [...prev, { label: '', value: '' }]);
  const removeMethod = (index: number) => setEditMethods((prev) => prev.filter((_, i) => i !== index));
  const updateMethod = (index: number, field: 'label' | 'value', value: string) => {
    setEditMethods((prev) => prev.map((m, i) => (i === index ? { ...m, [field]: value } : m)));
  };

  const showEditContact = isAdmin && !isMobile;
  const displayMethods = getContactMethods(data);

  return (
    <FullScreenDetail>
      <main className={`flex-1 min-h-0 flex overflow-hidden ${isMobile ? 'flex-col' : ''}`}>
        <div className={isMobile ? 'w-full min-w-0 overflow-y-auto pt-pageTop px-6 pb-12' : `w-2/5 min-w-0 overflow-y-auto pt-pageTop px-6 ${isAdmin ? 'pb-24' : 'pb-12'}`}>
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold mb-8 text-textPrimary">Contact</h1>
            {showEditContact && (
              <div className="mb-6">
                {!isEditing ? (
                  <button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="font-mono text-xs uppercase tracking-wider px-3 py-2 border border-paletteBorder bg-bgMain text-textPrimary hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm"
                  >
                    Edit contact
                  </button>
                ) : (
                  <div className="space-y-4">
                    {editMethods.map((m, i) => (
                      <div key={i} className="flex flex-col gap-2 p-3 border border-paletteBorder rounded-sm">
                        <div className="flex gap-2 items-center">
                          <input
                            type="text"
                            className="flex-1 p-2 border border-paletteBorder bg-transparent font-mono text-sm text-textPrimary focus:outline-none"
                            value={m.label}
                            onChange={(e) => updateMethod(i, 'label', e.target.value)}
                            placeholder="Label (e.g. Email, Instagram)"
                          />
                          <button
                            type="button"
                            onClick={() => removeMethod(i)}
                            className="font-mono text-xs uppercase tracking-wider px-2 py-1 bg-destructive text-white hover:opacity-90 rounded-sm"
                          >
                            Remove
                          </button>
                        </div>
                        <input
                          type="text"
                          className="w-full p-2 border border-paletteBorder bg-transparent font-mono text-sm text-textPrimary focus:outline-none"
                          value={m.value}
                          onChange={(e) => updateMethod(i, 'value', e.target.value)}
                          placeholder="URL or email address"
                        />
                      </div>
                    ))}
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={addMethod}
                        className="font-mono text-xs uppercase tracking-wider px-3 py-2 border border-paletteBorder bg-bgMain text-textPrimary hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm"
                      >
                        Add method
                      </button>
                      <button
                        type="button"
                        onClick={handleSave}
                        className="font-mono text-sm uppercase tracking-wider px-4 py-2 bg-accent text-textPrimary hover:opacity-90 transition-opacity duration-150 rounded-sm"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => { setIsEditing(false); setEditMethods(getContactMethods(data)); }}
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
              <div className="space-y-4">
                {displayMethods.map((m, i) => (
                  <p key={i}>
                    <span
                      className="inline-block px-3 py-2"
                      style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)',
                        boxShadow: `inset 0 0 0 1px ${PALETTE.border}`,
                      }}
                    >
                      <a
                        href={m.value.includes('@') ? `mailto:${m.value}` : m.value}
                        target={m.value.includes('@') ? undefined : '_blank'}
                        rel={m.value.includes('@') ? undefined : 'noopener noreferrer'}
                        className="underline font-medium transition-colors duration-150 hover:opacity-80"
                      >
                        {m.label || m.value}
                      </a>
                    </span>
                  </p>
                ))}
              </div>
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

const NotFoundPage: React.FC = () => (
  <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
    <h1 className="text-3xl font-bold mb-4 text-textPrimary">404</h1>
    <p className="text-base text-textSecondary mb-6 leading-relaxed">Page not found.</p>
    <Link to="/" className="text-sm underline transition-colors duration-150 hover:opacity-80">Go home</Link>
  </main>
);

/** Base path where the SPA is served (e.g. /a). No trailing slash. Empty string or "/" for root. */
const getBasePath = (): string => {
  const b = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/';
  return b.replace(/\/$/, '') || '';
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

/** Keys home view by location so it remounts when navigating back to "/", fixing blank on bfcache/popstate. */
const HomeRouteWrapper: React.FC<{ data: PortfolioData; onRefresh: () => void }> = ({ data, onRefresh }) => {
  const location = useLocation();
  return <ShowcaseView key={location.key} data={data} onRefresh={onRefresh} />;
};

/** Shared reload helper: show loading overlay and full reload (used for back-to-home and client-nav back). */
function reloadFromHomeHelper(): void {
  if (typeof window === 'undefined') return;
  if (document.getElementById('back-reload-overlay')) return;
  const overlay = document.createElement('div');
  overlay.setAttribute('id', 'back-reload-overlay');
  overlay.style.cssText = `position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:${PALETTE.backgroundMain};color:${PALETTE.textSecondary};font-family:system-ui,sans-serif;font-size:14px;letter-spacing:0.1em;text-transform:uppercase;`;
  overlay.textContent = 'Loading…';
  document.body.appendChild(overlay);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => window.location.reload());
  });
}

/** When user navigates back to home (popstate or bfcache restore), reload so the home page always shows correctly. */
const BackToHomeReload: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isHome = () => {
      const basePath = getBasePath();
      const full = window.location.pathname || '/';
      return full === '/' || (basePath && (full === basePath || full === basePath + '/'));
    };
    const reload = () => reloadFromHomeHelper();
    const onPopState = () => {
      if (isHome()) reload();
    };
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) reload();
    };
    window.addEventListener('popstate', onPopState);
    window.addEventListener('pageshow', onPageShow);
    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('pageshow', onPageShow);
    };
  }, []);
  return null;
};

/** When user navigates back to "/" via in-app Link (not browser back), reload so the home page paints correctly (avoids blank after leaving detail pages). */
const ClientNavBackToHomeReload: React.FC = () => {
  const location = useLocation();
  const prevPathnameRef = useRef<string | undefined>(undefined);
  useEffect(() => {
    const prev = prevPathnameRef.current;
    if (location.pathname === '/' && prev !== undefined && prev !== '/') {
      reloadFromHomeHelper();
      return;
    }
    prevPathnameRef.current = location.pathname;
  }, [location.pathname]);
  return null;
};

/** Sync React Router to the browser URL when the URL changes (e.g. link click) so we don't get stuck. Do not overwrite when the router just navigated (lastBrowserPathRef). */
const PathSync: React.FC = () => {
  const location = useLocation();
  const routerPathRef = useRef(location.pathname || '/');
  routerPathRef.current = location.pathname || '/';
  const lastBrowserPathRef = useRef<string>(
    typeof window !== 'undefined'
      ? (() => {
          const basePath = getBasePath();
          const full = window.location.pathname || '/';
          return basePath && (full === basePath || full.startsWith(basePath + '/')) ? (full === basePath ? '/' : full.slice(basePath.length)) : full;
        })()
      : '/'
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const sync = () => {
      const basePath = getBasePath();
      const full = window.location.pathname || '/';
      const browserPath = basePath && (full === basePath || full.startsWith(basePath + '/')) ? (full === basePath ? '/' : full.slice(basePath.length)) : full;
      const routerPath = routerPathRef.current;
      if (browserPath === routerPath) {
        lastBrowserPathRef.current = browserPath;
        return;
      }
      if (browserPath === lastBrowserPathRef.current) return;
      lastBrowserPathRef.current = browserPath;
      // Router state didn't update from navigate(); reload so the app boots with the current URL and shows the correct route.
      window.location.reload();
    };
    const id = setInterval(sync, 100);
    return () => clearInterval(id);
  }, [location.pathname]);

  return null;
};

const LoadingScreen: React.FC = () => (
  <div className="min-h-screen bg-bgMain text-textPrimary font-sans flex items-center justify-center">
    <p className="font-mono text-sm uppercase tracking-wider text-textSecondary">Loading…</p>
  </div>
);

const App: React.FC = () => {
  const isMobile = useIsMobile();
  const waitForRemote = isAuthoritativeRemoteConfigured();
  const [data, setData] = useState<PortfolioData | null>(waitForRemote ? null : getPortfolioData());

  const refreshData = (updatedData?: PortfolioData) => {
    if (updatedData != null) {
      flushSync(() => setData(updatedData));
    } else {
      getPortfolioDataAsync().then(setData);
    }
  };

  useEffect(() => {
    getPortfolioDataAsync().then(setData);
  }, []);

  if (waitForRemote && data === null) {
    const basePath = getBasePath();
    const routerBasename = basePath && basePath !== '/' ? basePath : undefined;
    return (
      <Router basename={routerBasename}>
        <AdminAuthProvider>
          <LoadingScreen />
        </AdminAuthProvider>
      </Router>
    );
  }

  const portfolioData = data ?? getPortfolioData();

  const basePath = getBasePath();
  const routerBasename = basePath && basePath !== '/' ? basePath : undefined;

  return (
    <Router basename={routerBasename}>
      <AdminAuthProvider>
        <BackToHomeReload />
        <ClientNavBackToHomeReload />
        <PathSync />
        <AdminRouteMobileRedirect />
        <div className="min-h-screen bg-bgMain text-textPrimary font-sans">
          <Toaster position="top-center" />
          {isMobile && <MobileHeader />}
          <FixedHomeButton />
          <CloseToHomeButton />
          <AdminBar />
          <Routes>
            <Route path="/" element={<HomeRouteWrapper data={portfolioData} onRefresh={refreshData} />} />
            <Route path="/project/new" element={<NewProjectPage data={portfolioData} onRefresh={refreshData} />} />
            <Route path="/project/:id" element={<ProjectDetailsPage data={portfolioData} onRefresh={refreshData} />} />
            <Route path="/about" element={<AboutPage data={portfolioData} onRefresh={refreshData} />} />
            <Route path="/contact" element={<ContactPage data={portfolioData} onRefresh={refreshData} />} />
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
