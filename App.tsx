import React, { useState, useEffect, useCallback } from 'react';
import { flushSync } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams, useLocation, useNavigate } from 'react-router-dom';
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
import { findProjectBySlug, projectPath, slugify } from './utils/slug';
import { DetailBreadcrumb, DetailGreyFooter, DetailHeading, DetailContactRow } from './components/detailPrimitives';
import AdminButton from './components/admin/AdminButton';
import AdminInput from './components/admin/AdminInput';

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
  const isMobile = useIsMobile();
  if (isMobile) return null;
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

  const link = 'relative font-mono text-[11px] uppercase tracking-wider text-textPrimary px-1.5 py-0.5 -my-0.5 hover:bg-accent';
  const danger = 'relative font-mono text-[11px] uppercase tracking-wider text-destructive px-1.5 py-0.5 -my-0.5 hover:bg-destructive hover:text-white';

  return (
    <div className="fixed left-0 right-0 bottom-0 z-[99] h-12 bg-bgSidebar border-t border-paletteBorder flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-accent" aria-hidden />
          <span className="font-mono text-[10px] uppercase tracking-wider text-textPrimary">Admin · Live</span>
        </span>
        <span className="w-px h-[18px] bg-neutral-400" />
        <Link to="/project/new" className={link}>+ New project</Link>
        <Link to="/about" className={link}>Edit biography</Link>
        <Link to="/contact" className={link}>Edit contact</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/admin/deployment" className={link}>Deployment</Link>
        <button type="button" onClick={() => { logout(); navigate('/'); }} className={danger}>Sign out</button>
      </div>
    </div>
  );
};

const FullScreenDetail: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAdmin } = useAdminAuth();
  const isMobile = useIsMobile();
  const liftForAdminBar = isAdmin && !isMobile;
  return (
    <div
      className="fixed left-0 right-0 top-0 bg-bgMain flex flex-col overflow-hidden"
      style={{ bottom: liftForAdminBar ? 48 : 0 }}
    >
      {children}
    </div>
  );
};

/** Redirect /project/:slug → /:slug, resolving via id OR slugified title so both old numeric-id links and new slug links land on the right project. */
const LegacyProjectRedirect: React.FC<{ data: PortfolioData }> = ({ data }) => {
  const { slug } = useParams<{ slug: string }>();
  const project = findProjectBySlug(data.projects, slug);
  return <Navigate to={project ? projectPath(project) : '/'} replace />;
};

const ProjectDetailsPage: React.FC<{ data: PortfolioData; onRefresh: () => void }> = ({ data, onRefresh }) => {
  const { slug } = useParams<{ slug: string }>();
  const project = findProjectBySlug(data.projects, slug);
  const idx = project ? data.projects.indexOf(project) : -1;
  const nextProject = idx >= 0
    ? data.projects[(idx + 1) % data.projects.length]
    : undefined;

  if (!project) return (
    <FullScreenDetail>
      <main className="pt-pageTop px-6 pb-12">
        <p>Project not found.</p>
      </main>
    </FullScreenDetail>
  );

  return <ProjectDetailPage project={project} onRefresh={onRefresh} nextProject={nextProject && nextProject.id !== project.id ? nextProject : undefined} />;
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

  if (isMobile) {
    const P = { border: '#333333', bgMain: '#FAFAFA', greySoft: '#E8E8E8', textPrimary: '#1a1a1a', textSecondary: '#737373' };
    return (
      <FullScreenDetail>
        <div className="flex flex-col" style={{ paddingTop: 48, height: '100%' }}>
          <DetailBreadcrumb compact trail={['SPHNSX', 'ABOUT']} />

          {/* Scrollable content */}
          <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', background: P.bgMain, scrollbarWidth: 'none' as const }}>
            {data.aboutImage && (
              <img src={data.aboutImage} alt="Silvia" style={{ width: '100%', display: 'block' }} />
            )}
            <div style={{ padding: '22px 18px 28px' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: P.textSecondary, marginBottom: 8 }}>
                Biography
              </div>
              <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: 30, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.01em', margin: '0 0 18px', color: P.textPrimary }}>About me</h1>
              <div style={{ fontSize: 15, lineHeight: 1.65, color: P.textPrimary }}>
                <SafeHtml html={data.aboutMe} />
              </div>
            </div>
            <div style={{ height: 28 }} aria-hidden />
          </div>

          {/* Grey Contact footer */}
          <Link
            to="/contact"
            style={{ textDecoration: 'none', color: P.textPrimary, padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: P.greySoft, borderTop: `1px solid ${P.border}`, flexShrink: 0 }}
          >
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', whiteSpace: 'nowrap' }}>Contact</span>
            <svg width="16" height="16" viewBox="0 0 40 40" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              <line x1="4" y1="20" x2="36" y2="20" stroke={P.textPrimary} strokeWidth="1.5" strokeLinecap="square" />
              <line x1="36" y1="20" x2="24" y2="10" stroke={P.textPrimary} strokeWidth="1.5" strokeLinecap="square" />
              <line x1="36" y1="20" x2="24" y2="30" stroke={P.textPrimary} strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </Link>
        </div>
      </FullScreenDetail>
    );
  }

  return (
    <FullScreenDetail>
      <main className="flex-1 min-h-0 flex overflow-hidden">
        <div className="w-2/5 min-w-0 flex flex-col">
          {!isEditing && (
            <>
              <div style={{ height: 48 }} aria-hidden />
              <DetailBreadcrumb trail={['SPHNSX', 'ABOUT']} />
            </>
          )}
          <div className={`flex-1 min-h-0 overflow-y-auto ${isAdmin ? 'pb-24' : 'pb-12'}`} style={{ padding: '48px 48px 24px' }}>
          <div className="max-w-xl">
            {showEditBiography && (
              <div className="mb-6">
                {!isEditing ? (
                  <AdminButton type="button" size="sm" onClick={() => setIsEditing(true)}>
                    Edit biography
                  </AdminButton>
                ) : (
                  <div className="space-y-4">
                    <RichTextEditor
                      value={aboutText}
                      onChange={setAboutText}
                      placeholder="About me…"
                      minHeight="14rem"
                    />
                    <div className="flex gap-2">
                      <AdminButton type="button" variant="primary" size="md" onClick={handleSave}>
                        Save
                      </AdminButton>
                      <AdminButton type="button" size="md" onClick={() => { setIsEditing(false); setAboutText(data.aboutMe); }}>
                        Cancel
                      </AdminButton>
                    </div>
                  </div>
                )}
              </div>
            )}
            {!isEditing && (
              <>
                <DetailHeading eyebrow="Biography" title="About me" />
                <div className="space-y-6 text-base leading-relaxed text-textPrimary" style={{ marginTop: 24, fontSize: 16, lineHeight: 1.65 }}>
                  <SafeHtml html={data.aboutMe} />
                </div>
              </>
            )}
          </div>
          </div>
          {!isEditing && <DetailGreyFooter to="/contact" label="Contact" />}
        </div>
        <div className="w-px shrink-0 bg-paletteBorder" aria-hidden />
        <div className={`w-3/5 min-w-0 overflow-y-auto pt-pageTop px-6 ${isAdmin ? 'pb-24' : 'pb-12'} flex items-center justify-center text-textSecondary`}>
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
          <AdminButton size="sm" asLabel>
            {hasImage ? 'Change photo' : 'Choose file'}
            <input type="file" accept="image/*" className="hidden" onChange={handleFile} disabled={isUploading} />
          </AdminButton>
          {hasImage && (
            <AdminButton type="button" size="sm" variant="ghost-destructive" onClick={handleRemove} disabled={isUploading}>
              Remove
            </AdminButton>
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

  if (isMobile) {
    const P = { border: '#333333', bgMain: '#FAFAFA', greySoft: '#E8E8E8', textPrimary: '#1a1a1a', textSecondary: '#737373', accent: '#66FFCC' };
    return (
      <FullScreenDetail>
        <div className="flex flex-col" style={{ paddingTop: 48, height: '100%' }}>
          <DetailBreadcrumb compact trail={['SPHNSX', 'CONTACT']} />

          {/* Scrollable content */}
          <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', background: P.bgMain, scrollbarWidth: 'none' as const }}>
            <div style={{ padding: '22px 18px 28px' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: P.textSecondary, marginBottom: 8 }}>
                Get in touch
              </div>
              <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: 30, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.01em', margin: '0 0 18px', color: P.textPrimary }}>Contact</h1>

              <div style={{ borderTop: `1px solid ${P.border}` }}>
                {displayMethods.map((m, i) => {
                  const isEmail = m.value.includes('@');
                  const href = isEmail ? `mailto:${m.value}` : m.value;
                  return (
                    <a
                      key={i}
                      href={href}
                      target={isEmail ? undefined : '_blank'}
                      rel={isEmail ? undefined : 'noopener noreferrer'}
                      style={{ textDecoration: 'none', color: P.textPrimary, display: 'block', padding: '16px 0', borderBottom: '1px solid #e4e4e4' }}
                    >
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: P.textSecondary, marginBottom: 6 }}>
                        {String(i + 1).padStart(2, '0')} · {m.label}
                      </div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: P.textPrimary }}>
                        {m.value}
                      </div>
                    </a>
                  );
                })}
              </div>

            </div>
            <div style={{ height: 28 }} aria-hidden />
          </div>

          {/* Grey "Back to works" footer */}
          <Link
            to="/"
            style={{ textDecoration: 'none', color: P.textPrimary, padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: P.greySoft, borderTop: `1px solid ${P.border}`, flexShrink: 0 }}
          >
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', whiteSpace: 'nowrap' }}>Back to works</span>
            <svg width="16" height="16" viewBox="0 0 40 40" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              <line x1="4" y1="20" x2="36" y2="20" stroke={P.textPrimary} strokeWidth="1.5" strokeLinecap="square" />
              <line x1="36" y1="20" x2="24" y2="10" stroke={P.textPrimary} strokeWidth="1.5" strokeLinecap="square" />
              <line x1="36" y1="20" x2="24" y2="30" stroke={P.textPrimary} strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </Link>
        </div>
      </FullScreenDetail>
    );
  }

  return (
    <FullScreenDetail>
      <main className="flex-1 min-h-0 flex overflow-hidden">
        <div className="w-2/5 min-w-0 flex flex-col">
          {!isEditing && (
            <>
              <div style={{ height: 48 }} aria-hidden />
              <DetailBreadcrumb trail={['SPHNSX', 'CONTACT']} />
            </>
          )}
          <div className={`flex-1 min-h-0 overflow-y-auto ${isAdmin ? 'pb-24' : 'pb-12'}`} style={{ padding: '48px 48px 24px' }}>
          <div className="max-w-xl">
            {isEditing ? (
              <h1 className="text-3xl font-bold mb-8 text-textPrimary">Contact</h1>
            ) : (
              <DetailHeading eyebrow="Get in touch" title="Contact" />
            )}
            {showEditContact && (
              <div className="mb-6">
                {!isEditing ? (
                  <AdminButton type="button" size="sm" onClick={() => setIsEditing(true)}>
                    Edit contact
                  </AdminButton>
                ) : (
                  <div className="space-y-4">
                    {editMethods.map((m, i) => (
                      <div key={i} className="flex flex-col gap-2 p-3 border border-paletteBorder">
                        <div className="flex gap-2 items-center">
                          <AdminInput
                            type="text"
                            className="!p-2"
                            value={m.label}
                            onChange={(e) => updateMethod(i, 'label', e.target.value)}
                            placeholder="Label (e.g. Email, Instagram)"
                          />
                          <AdminButton type="button" size="sm" variant="ghost-destructive" onClick={() => removeMethod(i)}>
                            Remove
                          </AdminButton>
                        </div>
                        <AdminInput
                          type="text"
                          className="!p-2"
                          value={m.value}
                          onChange={(e) => updateMethod(i, 'value', e.target.value)}
                          placeholder="URL or email address"
                        />
                      </div>
                    ))}
                    <div className="flex flex-wrap gap-2">
                      <AdminButton type="button" size="sm" onClick={addMethod}>
                        Add method
                      </AdminButton>
                      <AdminButton type="button" variant="primary" size="md" onClick={handleSave}>
                        Save
                      </AdminButton>
                      <AdminButton type="button" size="md" onClick={() => { setIsEditing(false); setEditMethods(getContactMethods(data)); }}>
                        Cancel
                      </AdminButton>
                    </div>
                  </div>
                )}
              </div>
            )}
            {!isEditing && (
              <div style={{ borderTop: `1px solid ${PALETTE.border}` }}>
                {displayMethods.map((m, i) => (
                  <DetailContactRow
                    key={i}
                    index={i}
                    label={m.label}
                    value={m.value}
                  />
                ))}
              </div>
            )}
          </div>
          </div>
          {!isEditing && <DetailGreyFooter to="/" label="Back to works" />}
        </div>
        <div className="w-px shrink-0 bg-paletteBorder" aria-hidden />
        <div className="w-3/5 min-w-0 overflow-y-auto pt-pageTop px-6 pb-12 flex items-center justify-center text-textSecondary">
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

const LoadingScreen: React.FC = () => (
  <div className="min-h-screen bg-bgMain text-textPrimary font-sans flex items-center justify-center">
    <p className="font-mono text-sm uppercase tracking-wider text-textSecondary">Loading…</p>
  </div>
);

const App: React.FC = () => {
  const isMobile = useIsMobile();
  const waitForRemote = isAuthoritativeRemoteConfigured();
  const [data, setData] = useState<PortfolioData | null>(() => (waitForRemote ? null : getPortfolioData()));

  const refreshData = useCallback((updatedData?: PortfolioData) => {
    if (updatedData != null) {
      flushSync(() => setData(updatedData));
    } else {
      getPortfolioDataAsync().then(setData);
    }
  }, []);

  useEffect(() => {
    getPortfolioDataAsync().then(setData);
  }, []);

  const portfolioData = data ?? getPortfolioData();

  const basePath = getBasePath();
  const routerBasename = basePath && basePath !== '/' ? basePath : undefined;

  if (waitForRemote && data === null) {
    return (
      <Router basename={routerBasename}>
        <AdminAuthProvider>
          <LoadingScreen />
        </AdminAuthProvider>
      </Router>
    );
  }

  return (
    <Router basename={routerBasename}>
      <AdminAuthProvider>
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
            {/* Legacy /project/:id URLs: redirect to the canonical /:slug so old bookmarks keep working. */}
            <Route path="/project/:slug" element={<LegacyProjectRedirect data={portfolioData} />} />
            <Route path="/about" element={<AboutPage data={portfolioData} onRefresh={refreshData} />} />
            <Route path="/contact" element={<ContactPage data={portfolioData} onRefresh={refreshData} />} />
            <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="/a" element={<AdminLoginPage />} />
            <Route path="/admin/deployment" element={<AdminDeploymentGuard><DeploymentPage /></AdminDeploymentGuard>} />
            {/* Root-level slug route — must sit after all named routes so /about, /contact, /admin win. */}
            <Route path="/:slug" element={<ProjectDetailsPage data={portfolioData} onRefresh={refreshData} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </AdminAuthProvider>
    </Router>
  );
};

export default App;
