import React, { useState, useEffect, useCallback } from 'react';
import { flushSync } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams, useLocation, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import ShowcaseView, { getContactMethods, ContactRows } from './components/ShowcaseView';
import AdminLoginPage from './components/AdminLoginPage';
import DeploymentPage from './components/DeploymentPage';
import NewProjectPage, { AdminProjectListPage } from './components/NewProjectPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import { PortfolioData, ContactMethod, AboutSectionSort } from './types';
import {
  getPortfolioData,
  getPortfolioDataAsync,
  isAuthoritativeRemoteConfigured,
  updateAboutMe,
  updateAboutImage,
  updateContactMethods,
  updateExhibitions,
  updateAwards,
  updatePublications,
  updateRecognitions,
  updateAboutSectionSort,
} from './services/storageService';
import { PALETTE, HUES, INITIAL_DATA, LEADING } from './constants';
import { AdminAuthProvider, useAdminAuth } from './contexts/AdminAuthContext';
import { useIsMobile } from './hooks/useMediaQuery';
import RichTextEditor from './components/RichTextEditor';
import SafeHtml from './components/SafeHtml';
import { compressImageDataUrl } from './utils/imageCompress';
import { findProjectBySlug, projectPath } from './utils/slug';
import Arrow from './components/Arrow';
import TopRibbon from './components/optc/TopRibbon';
import Footer from './components/optc/Footer';
import CapV2 from './components/optc/CapV2';
import TagPillV2 from './components/optc/TagPillV2';
import AdminBtn from './components/optc/admin/AdminBtn';
import AboutListSection, { AboutEntry } from './components/about/AboutListSection';
import { sortAboutSections } from './utils/aboutSections';

/** Redirect /project/:slug > /:slug. */
const LegacyProjectRedirect: React.FC<{ data: PortfolioData }> = ({ data }) => {
  const { slug } = useParams<{ slug: string }>();
  const project = findProjectBySlug(data.projects, slug);
  return <Navigate to={project ? projectPath(project) : '/'} replace />;
};

const ProjectDetailsPage: React.FC<{ data: PortfolioData; onRefresh: () => void }> = ({ data, onRefresh }) => {
  const { slug } = useParams<{ slug: string }>();
  const project = findProjectBySlug(data.projects, slug);
  const idx = project ? data.projects.indexOf(project) : -1;
  const nextProject = idx >= 0 ? data.projects[(idx + 1) % data.projects.length] : undefined;

  if (!project) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-bgMain">
        <p className="font-mono text-sm uppercase tracking-wider text-textSecondary">Project not found.</p>
      </div>
    );
  }

  // Key on the project id so navigating project→project (e.g. "Next") remounts
  // the page with fresh scroll containers, landing at the top instead of
  // inheriting the previous page's scroll position (page + nested gallery).
  return <ProjectDetailPage key={project.id} project={project} onRefresh={onRefresh} nextProject={nextProject && nextProject.id !== project.id ? nextProject : undefined} index={idx} total={data.projects.length} />;
};

function paragraphsOfPlain(raw: string): string[] {
  if (!raw) return [];
  const hasTags = /<[a-z][\s\S]*>/i.test(raw);
  if (hasTags) {
    const matches = raw.match(/<p[^>]*>([\s\S]*?)<\/p>/gi);
    const stripTag = (s: string) =>
      s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
    if (matches?.length) return matches.map(stripTag).filter(Boolean);
    return [stripTag(raw)].filter(Boolean);
  }
  return raw.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
}

const AboutPage: React.FC<{ data: PortfolioData; onRefresh: (updatedData?: PortfolioData) => void }> = ({ data, onRefresh }) => {
  const isMobile = useIsMobile();
  const { isAdmin } = useAdminAuth();
  const [isEditing, setIsEditing] = React.useState(false);
  const [aboutText, setAboutText] = React.useState(data.aboutMe);
  const [isUploading, setIsUploading] = React.useState(false);
  const [isSavingSort, setIsSavingSort] = React.useState(false);

  // Fall back to CV-derived defaults from INITIAL_DATA when the live data is missing these fields.
  const exhibitions = (data.exhibitions && data.exhibitions.length > 0) ? data.exhibitions : (INITIAL_DATA.exhibitions ?? []);
  const awards = (data.awards && data.awards.length > 0) ? data.awards : (INITIAL_DATA.awards ?? []);
  const publications = data.publications ?? [];
  const recognitions = data.recognitions ?? [];
  const sectionSort: AboutSectionSort = data.aboutSectionSort ?? 'recent';

  React.useEffect(() => { setAboutText(data.aboutMe); }, [data.aboutMe]);

  const handleSortChange = async (next: AboutSectionSort) => {
    if (next === sectionSort) return;
    setIsSavingSort(true);
    try {
      onRefresh(await updateAboutSectionSort(next));
      toast.success(next === 'recent' ? 'Sections ordered by newest entry' : 'Sections ordered A–Z');
    } catch (e) {
      toast.error(e instanceof Error ? e.message : 'Save failed');
    } finally {
      setIsSavingSort(false);
    }
  };

  // The four list sections, each mapped to the shape AboutListSection renders and
  // back to its own stored shape on save. Order comes from `sectionSort`.
  const listSections = [
    {
      label: 'Exhibitions',
      entries: exhibitions.map((e) => ({ year: e.year, label: e.venue, kind: e.kind })),
      entryFieldLabel: 'Venue',
      entryFieldPlaceholder: 'Venue, City',
      kindPlaceholder: 'Solo / Group',
      itemNoun: 'exhibition',
      onSave: async (rows: AboutEntry[]) => {
        onRefresh(await updateExhibitions(rows.map((r) => ({ year: r.year, venue: r.label, kind: r.kind }))));
      },
    },
    {
      label: 'Awards',
      entries: awards.map((a) => ({ year: a.year, label: a.title, kind: a.kind })),
      entryFieldLabel: 'Title',
      entryFieldPlaceholder: 'Award title',
      kindPlaceholder: 'Finalist / Honourable Mention',
      itemNoun: 'award',
      onSave: async (rows: AboutEntry[]) => {
        onRefresh(await updateAwards(rows.map((r) => ({ year: r.year, title: r.label, kind: r.kind }))));
      },
    },
    {
      label: 'Publications',
      entries: publications.map((p) => ({ year: p.year, label: p.title, kind: p.kind })),
      entryFieldLabel: 'Title',
      entryFieldPlaceholder: 'Publication or piece',
      kindPlaceholder: 'Print feature / Interview',
      itemNoun: 'publication',
      onSave: async (rows: AboutEntry[]) => {
        onRefresh(await updatePublications(rows.map((r) => ({ year: r.year, title: r.label, kind: r.kind }))));
      },
    },
    {
      label: 'Recognitions',
      entries: recognitions.map((r) => ({ year: r.year, label: r.title, kind: r.kind })),
      entryFieldLabel: 'Title',
      entryFieldPlaceholder: 'What it was for',
      kindPlaceholder: 'Selected / Shortlisted',
      itemNoun: 'recognition',
      onSave: async (rows: AboutEntry[]) => {
        onRefresh(await updateRecognitions(rows.map((r) => ({ year: r.year, title: r.label, kind: r.kind }))));
      },
    },
  ];
  const orderedSections = sortAboutSections(listSections, sectionSort);

  const handleSave = async () => {
    try {
      await updateAboutMe(aboutText);
      onRefresh();
      setIsEditing(false);
      toast.success('Biography saved');
    } catch (e) {
      toast.error(e instanceof Error ? e.message : 'Save failed');
    }
  };

  const handleImageFile = React.useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleRemoveImage = React.useCallback(async () => {
    const updatedData = await updateAboutImage('');
    onRefresh(updatedData);
  }, [onRefresh]);

  const ink = PALETTE.textPrimary;
  const paper = PALETTE.backgroundMain;
  const muted = PALETTE.textSecondary;
  const showAdminControls = isAdmin && !isMobile;
  const bioParas = paragraphsOfPlain(data.aboutMe);

  const titleSize = isMobile ? 80 : 200;
  const padX = isMobile ? 16 : 32;

  return (
    <div className="fixed inset-0 flex flex-col overflow-y-auto" style={{ background: paper, color: ink, fontFamily: '"abril-text", ui-serif, Georgia, serif' }}>
      <TopRibbon active="about" />

      {/* HERO */}
      <section style={{ borderBottom: `1px solid ${ink}`, padding: `24px ${padX}px 40px` }}>
        <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 0 18px' }}>
          <TagPillV2 hue={HUES.yellow} label="About" size={isMobile ? 10 : 12} chip={isMobile ? 10 : 14} />
        </header>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : data.aboutImage ? '1.4fr 1fr' : '1fr',
            alignItems: 'end',
            gap: 28,
          }}
        >
          <h1 style={{ margin: 0, fontFamily: '"abril-display", ui-serif, Georgia, serif', fontSize: titleSize, fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 0.95 }}>
            Silvia.
          </h1>
          {!isMobile && data.aboutImage && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
              <img
                src={data.aboutImage}
                alt="Silvia portrait"
                style={{ maxWidth: '100%', maxHeight: 480, width: 'auto', height: 'auto', display: 'block' }}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          )}
        </div>
        {showAdminControls && (
          <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
            <label style={{ cursor: 'pointer' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 14px', border: `1px solid ${ink}`, fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: ink }}>
                {data.aboutImage ? 'Change photo' : 'Upload portrait'}
              </span>
              <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageFile} disabled={isUploading} />
            </label>
            {data.aboutImage && (
              <AdminBtn danger onClick={handleRemoveImage} disabled={isUploading}>Remove portrait</AdminBtn>
            )}
          </div>
        )}
      </section>

      {/* BIO */}
      {(bioParas.length > 0 || (showAdminControls && isEditing)) && (
        <section style={{ borderBottom: `1px solid ${ink}` }}>
          <header style={{ display: 'flex', justifyContent: 'flex-end', padding: `24px ${padX}px` }}>
            <TagPillV2 hue={HUES.mint} label="Biography" size={isMobile ? 10 : 12} chip={isMobile ? 10 : 14} />
          </header>
          {showAdminControls && isEditing ? (
            <div style={{ padding: `0 ${padX}px 32px`, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <RichTextEditor value={aboutText} onChange={setAboutText} placeholder="About me…" minHeight="16rem" />
              <div style={{ display: 'flex', gap: 10 }}>
                <AdminBtn primary onClick={handleSave}>Save</AdminBtn>
                <AdminBtn onClick={() => { setIsEditing(false); setAboutText(data.aboutMe); }}>Cancel</AdminBtn>
              </div>
            </div>
          ) : (
            <>
              {!isMobile ? (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  {(() => {
                    const half = Math.ceil(bioParas.length / 2);
                    return [bioParas.slice(0, half), bioParas.slice(half)].map((col, i) => (
                      <div key={i} style={{ padding: '8px 32px 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {col.map((p, j) => (
                          <p key={j} style={{ margin: 0, fontSize: 16, lineHeight: LEADING.body }}>{p}</p>
                        ))}
                      </div>
                    ));
                  })()}
                </div>
              ) : (
                <div style={{ padding: '8px 16px 18px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {bioParas.map((p, j) => (
                    <p key={j} style={{ margin: 0, fontSize: 14, lineHeight: LEADING.bodySmall }}>{p}</p>
                  ))}
                </div>
              )}
              {showAdminControls && (
                <div style={{ padding: `0 ${padX}px 18px` }}>
                  <AdminBtn onClick={() => setIsEditing(true)}>Edit biography</AdminBtn>
                </div>
              )}
            </>
          )}
        </section>
      )}

      {/* PRACTICE — Working notes derived from the CV (static, not admin-editable for now) */}
      <section style={{ borderBottom: `1px solid ${ink}` }}>
        <header style={{ display: 'flex', justifyContent: 'flex-end', padding: `24px ${padX}px` }}>
          <TagPillV2 hue={HUES.coral} label="Practice" size={isMobile ? 10 : 12} chip={isMobile ? 10 : 14} />
        </header>
        <div style={{ padding: `8px ${padX}px 32px` }}>
          <h2 style={{ margin: 0, fontFamily: '"abril-display", ui-serif, Georgia, serif', fontSize: isMobile ? 56 : 96, fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 1 }}>Working notes.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(2, 1fr)', marginTop: 26 }}>
            {[
              ['Medium', 'Analogue film'],
              ['Cameras', 'Mamiya 7II · Contax G2 · Contax T3 · Pentax 17 · Polaroid SLR 690'],
            ].map(([k, v], i) => (
              <div
                key={i}
                style={{
                  padding: '16px 18px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <CapV2 size={10} color={muted}>{k}</CapV2>
                <span style={{ fontFamily: '"abril-text", ui-serif, Georgia, serif', fontSize: isMobile ? 15 : 18, fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION ORDER — admin picks the rule; it persists with the rest of the portfolio. */}
      {showAdminControls && (
        <section style={{ borderBottom: `1px solid ${ink}`, padding: `16px ${padX}px`, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
          <CapV2 size={10} color={muted}>Section order</CapV2>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <AdminBtn primary={sectionSort === 'recent'} disabled={isSavingSort} onClick={() => handleSortChange('recent')}>
              Newest entry first
            </AdminBtn>
            <AdminBtn primary={sectionSort === 'alpha'} disabled={isSavingSort} onClick={() => handleSortChange('alpha')}>
              A–Z by section
            </AdminBtn>
          </div>
          <CapV2 size={10} color={muted}>
            {(sectionSort === 'recent' ? 'Top to bottom, new to old · ' : 'A–Z · ') + orderedSections.map((s) => s.label).join(' · ')}
          </CapV2>
        </section>
      )}

      {/* EXHIBITIONS · AWARDS · PUBLICATIONS · RECOGNITIONS */}
      {orderedSections.map((section) => (
        <AboutListSection
          key={section.label}
          label={section.label}
          entries={section.entries}
          entryFieldLabel={section.entryFieldLabel}
          entryFieldPlaceholder={section.entryFieldPlaceholder}
          kindPlaceholder={section.kindPlaceholder}
          itemNoun={section.itemNoun}
          showAdminControls={showAdminControls}
          isMobile={isMobile}
          padX={padX}
          onSave={section.onSave}
        />
      ))}

      {/* BOTTOM NAV */}
      <section style={{ borderBottom: `1px solid ${ink}`, padding: `24px ${padX}px`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
        <Link to="/" style={{ textDecoration: 'none', color: ink, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <Arrow dir="left" size={isMobile ? 18 : 22} stroke={ink} />
          <span style={{ fontFamily: '"abril-text", ui-serif, Georgia, serif', fontSize: isMobile ? 18 : 22, fontWeight: 500, letterSpacing: '-0.02em' }}>Works</span>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: ink, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: '"abril-text", ui-serif, Georgia, serif', fontSize: isMobile ? 18 : 22, fontWeight: 500, letterSpacing: '-0.02em' }}>Contact</span>
          <Arrow dir="right" size={isMobile ? 18 : 22} stroke={ink} />
        </Link>
      </section>

      <Footer />
    </div>
  );
};

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
    try {
      const trimmed = editMethods.map((m) => ({ label: m.label.trim(), value: m.value.trim() })).filter((m) => m.label || m.value);
      const updatedData = await updateContactMethods(trimmed);
      onRefresh(updatedData);
      setIsEditing(false);
      toast.success('Contact saved');
    } catch (e) {
      toast.error(e instanceof Error ? e.message : 'Save failed');
    }
  };

  const addMethod = () => setEditMethods((prev) => [...prev, { label: '', value: '' }]);
  const removeMethod = (index: number) => setEditMethods((prev) => prev.filter((_, i) => i !== index));
  const updateMethod = (index: number, field: 'label' | 'value', value: string) => {
    setEditMethods((prev) => prev.map((m, i) => (i === index ? { ...m, [field]: value } : m)));
  };

  const showAdminControls = isAdmin && !isMobile;
  const ink = PALETTE.textPrimary;
  const paper = PALETTE.backgroundMain;
  const muted = PALETTE.textSecondary;
  const padX = isMobile ? 20 : 40;
  const titleSize = isMobile ? 80 : 168;

  return (
    <div className="fixed inset-0 flex flex-col overflow-y-auto" style={{ background: paper, color: ink, fontFamily: '"abril-text", ui-serif, Georgia, serif' }}>
      <TopRibbon active="contact" />

      <section style={{ borderBottom: `1px solid ${ink}` }}>
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: `24px ${padX}px`, gap: 16 }}>
          <TagPillV2 hue={HUES.coral} label="Contact" size={isMobile ? 10 : 12} chip={isMobile ? 10 : 14} />
        </header>
        <div style={{ padding: `${isMobile ? '20px' : '32px'} ${padX}px 0` }}>
          <h2 style={{ margin: 0, fontFamily: '"abril-display", ui-serif, Georgia, serif', fontSize: titleSize, fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1, textAlign: 'right' }}>
            Get in touch.
          </h2>
        </div>

        {showAdminControls && isEditing ? (
          <div style={{ padding: `18px ${padX}px 32px`, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {editMethods.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-end', padding: 14, border: `1px solid ${ink}`, flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <CapV2 size={10} color={muted}>Label</CapV2>
                  <input value={m.label} onChange={(e) => updateMethod(i, 'label', e.target.value)} placeholder="e.g. Email" style={{ width: '100%', padding: '10px 12px', border: `1px solid ${ink}`, fontFamily: '"abril-text", ui-serif, Georgia, serif', fontSize: 16, borderRadius: 0, outline: 'none', marginTop: 6 }} />
                </div>
                <div style={{ flex: 2, minWidth: 200 }}>
                  <CapV2 size={10} color={muted}>Value</CapV2>
                  <input value={m.value} onChange={(e) => updateMethod(i, 'value', e.target.value)} placeholder="URL or email" style={{ width: '100%', padding: '10px 12px', border: `1px solid ${ink}`, fontFamily: '"abril-text", ui-serif, Georgia, serif', fontSize: 16, borderRadius: 0, outline: 'none', marginTop: 6 }} />
                </div>
                <AdminBtn danger onClick={() => removeMethod(i)}>Remove</AdminBtn>
              </div>
            ))}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <AdminBtn onClick={addMethod}>+ Add method</AdminBtn>
              <AdminBtn primary onClick={handleSave}>Save</AdminBtn>
              <AdminBtn onClick={() => { setIsEditing(false); setEditMethods(getContactMethods(data)); }}>Cancel</AdminBtn>
            </div>
          </div>
        ) : (
          <>
            <ContactRows methods={methods} mobile={isMobile} />
            {showAdminControls && (
              <div style={{ padding: `0 ${padX}px 24px` }}>
                <AdminBtn onClick={() => setIsEditing(true)}>Edit contact</AdminBtn>
              </div>
            )}
          </>
        )}
      </section>

      <section style={{ borderBottom: `1px solid ${ink}`, padding: `24px ${padX}px`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
        <Link to="/" style={{ textDecoration: 'none', color: ink, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <Arrow dir="left" size={isMobile ? 18 : 22} stroke={ink} />
          <span style={{ fontFamily: '"abril-text", ui-serif, Georgia, serif', fontSize: isMobile ? 18 : 22, fontWeight: 500, letterSpacing: '-0.02em' }}>Works</span>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none', color: ink, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: '"abril-text", ui-serif, Georgia, serif', fontSize: isMobile ? 18 : 22, fontWeight: 500, letterSpacing: '-0.02em' }}>About</span>
          <Arrow dir="right" size={isMobile ? 18 : 22} stroke={ink} />
        </Link>
      </section>

      <Footer />
    </div>
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

const AdminRouteMobileRedirect: React.FC = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isMobile) return;
    const path = location.pathname;
    if (path === '/project/new' || path === '/admin/deployment' || path.startsWith('/admin/projects')) {
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

const HomeRouteWrapper: React.FC<{ data: PortfolioData; onRefresh: () => void }> = ({ data, onRefresh }) => {
  const location = useLocation();
  return <ShowcaseView key={location.key} data={data} onRefresh={onRefresh} />;
};

const LoadingScreen: React.FC = () => (
  <div className="min-h-screen bg-bgMain text-textPrimary flex items-center justify-center" style={{ fontFamily: '"abril-text", ui-serif, Georgia, serif' }}>
    <p
      className="text-sm uppercase tracking-wider text-textSecondary"
      style={{ fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif' }}
    >
      Loading…
    </p>
  </div>
);

const App: React.FC = () => {
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
          <Routes>
            <Route path="/" element={<HomeRouteWrapper data={portfolioData} onRefresh={refreshData} />} />
            <Route path="/project/new" element={<NewProjectPage data={portfolioData} onRefresh={refreshData} />} />
            <Route path="/project/:slug" element={<LegacyProjectRedirect data={portfolioData} />} />
            <Route path="/about" element={<AboutPage data={portfolioData} onRefresh={refreshData} />} />
            <Route path="/contact" element={<ContactPage data={portfolioData} onRefresh={refreshData} />} />
            <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="/a" element={<AdminLoginPage />} />
            <Route path="/admin/projects" element={<AdminProjectListPage data={portfolioData} onRefresh={refreshData} />} />
            <Route path="/admin/deployment" element={<AdminDeploymentGuard><DeploymentPage /></AdminDeploymentGuard>} />
            <Route path="/:slug" element={<ProjectDetailsPage data={portfolioData} onRefresh={refreshData} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </AdminAuthProvider>
    </Router>
  );
};

export default App;
