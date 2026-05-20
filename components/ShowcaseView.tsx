import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PortfolioData, Project, ContactMethod } from '../types';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { useIsMobile } from '../hooks/useMediaQuery';
import { PALETTE, HUES, hueForYear, INITIAL_DATA } from '../constants';
import { projectPath } from '../utils/slug';
import Arrow from './Arrow';
import TopRibbon from './optc/TopRibbon';
import Footer from './optc/Footer';
import CapV2 from './optc/CapV2';
import ChipV2 from './optc/ChipV2';
import TagPillV2 from './optc/TagPillV2';
import YearMarkV2 from './optc/YearMarkV2';
import MarkerTitleV2 from './optc/MarkerTitleV2';

interface ShowcaseProps {
  data: PortfolioData;
  onRefresh?: (updatedData?: PortfolioData) => void;
}

/** Convert HTML or plain text to a plain string. */
function htmlToPlain(input: string): string {
  if (!input) return '';
  const stripped = input.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  return stripped.replace(/\s+/g, ' ').trim();
}

/** Split plain text into rough paragraphs (by double newline in raw, or single sentence chunks). */
function paragraphs(raw: string): string[] {
  if (!raw) return [];
  const hasTags = /<[a-z][\s\S]*>/i.test(raw);
  if (hasTags) {
    const matches = raw.match(/<p[^>]*>([\s\S]*?)<\/p>/gi);
    if (matches?.length) return matches.map((m) => htmlToPlain(m)).filter(Boolean);
    return [htmlToPlain(raw)].filter(Boolean);
  }
  return raw.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
}

/**
 * Derive contact methods from data; falls back to legacy `contact` shape, then
 * to `INITIAL_DATA.contactMethods` (the hard-coded sphnsx@aol.com + instagram
 * defaults). The fallback matches pre-Option-C behaviour where Supabase rows
 * without contact fields still rendered the defaults on the live site.
 */
export function getContactMethods(data: PortfolioData): ContactMethod[] {
  if (data.contactMethods?.length) return data.contactMethods;
  if (data.contact) {
    const list: ContactMethod[] = [{ label: 'Email', value: data.contact.email }];
    if (data.contact.instagramUrl) list.push({ label: 'Instagram', value: data.contact.instagramUrl });
    return list;
  }
  return INITIAL_DATA.contactMethods ?? [];
}

function yearNum(y: string): number {
  const n = parseInt(y.trim(), 10);
  return Number.isNaN(n) ? -1 : n;
}

const CYCLE_HUES = [HUES.coral, HUES.mint, HUES.yellow];

/* ─── Pieces shared between desktop + mobile ──────────────────── */

interface HeroProps {
  featured?: Project;
  isAdmin: boolean;
  mobile?: boolean;
}

const HeroSection: React.FC<HeroProps> = ({ featured, isAdmin, mobile }) => {
  const ink = PALETTE.textPrimary;
  const muted = PALETTE.textSecondary;
  const paper = PALETTE.backgroundMain;

  if (!featured) {
    if (!isAdmin) return null;
    return (
      <section
        style={{
          padding: mobile ? '32px 20px' : '48px 40px',
          borderBottom: `1px solid ${ink}`,
          background: paper,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <CapV2 size={11} color={muted}>No projects yet</CapV2>
        <Link
          to="/admin"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 16px',
            background: ink,
            color: paper,
          }}
        >
          <CapV2 size={11} color={paper}>Create your first project</CapV2>
        </Link>
      </section>
    );
  }

  const hue = hueForYear(featured.year);
  const plates = featured.gallery.length;
  const place = featured.locations?.length ? featured.locations.join(' · ') : '';
  const platesStr = plates > 0 ? `${String(plates).padStart(2, '0')} in series` : '';

  const meta: Array<[string, string]> = [];
  if (featured.year) meta.push(['Year', featured.year]);
  if (featured.medium) meta.push(['Medium', featured.medium]);
  if (platesStr) meta.push(['Plates', platesStr]);
  if (place) meta.push(['Place', place]);

  if (mobile) {
    return (
      <section style={{ padding: '20px 20px 28px', borderBottom: `1px solid ${ink}` }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 18,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <CapV2 size={10}>01 / 01</CapV2>
            <CapV2 size={10} color={muted}>Featured · {featured.year}</CapV2>
          </div>
          <TagPillV2 hue={hue} label={`${featured.year} · ${featured.title}`} size={10} chip={10} />
        </div>

        {featured.imageUrl ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 220, marginBottom: 22 }}>
            <img
              src={featured.imageUrl}
              alt={`${featured.title} cover`}
              style={{ maxWidth: '100%', maxHeight: 340, width: 'auto', height: 'auto', display: 'block' }}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        ) : null}

        <MarkerTitleV2 title={featured.title} hue={hue} size={64} washHeight={0.5} />

        {meta.length > 0 && (
          <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '72px 1fr', rowGap: 10, columnGap: 12 }}>
            {meta.map(([k, v], i) => (
              <React.Fragment key={i}>
                <CapV2 size={9} color={muted}>{k}</CapV2>
                <span style={{ fontFamily: '"Source Serif 4", ui-serif, Georgia, serif', fontSize: 13, color: ink, lineHeight: 1.3 }}>{v}</span>
              </React.Fragment>
            ))}
          </div>
        )}

        {plates > 0 && (
          <Link
            to={projectPath(featured)}
            style={{
              marginTop: 22,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 14px',
              background: ink,
              color: paper,
              textDecoration: 'none',
            }}
          >
            <CapV2 size={10} color={paper}>View {String(plates).padStart(2, '0')} plates</CapV2>
            <Arrow dir="right" size={14} strokeWidth={1.5} stroke={paper} />
          </Link>
        )}
      </section>
    );
  }

  return (
    <section
      style={{ background: paper, borderBottom: `1px solid ${ink}`, padding: '32px 40px 48px' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <CapV2 size={11}>01 / 01</CapV2>
          <CapV2 size={11} color={muted}>Featured · {featured.year} cover plate</CapV2>
        </div>
        <TagPillV2 hue={hue} label={`${featured.year} · ${featured.title}`} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', alignItems: 'stretch', gap: 0 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 600,
            paddingRight: 40,
          }}
        >
          {featured.imageUrl ? (
            <img
              src={featured.imageUrl}
              alt={`${featured.title} cover plate`}
              style={{ maxWidth: '100%', maxHeight: 600, width: 'auto', height: 'auto', display: 'block' }}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          ) : (
            <div
              style={{
                width: '100%',
                aspectRatio: '4 / 3',
                background: PALETTE.greySoft,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CapV2 size={11} color={muted}>No cover</CapV2>
            </div>
          )}
        </div>

        <div style={{ padding: '0 0 0 40px', display: 'flex', flexDirection: 'column' }}>
          <MarkerTitleV2 title={featured.title} hue={hue} size={104} washHeight={0.5} />
          {meta.length > 0 && (
            <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: '100px 1fr', rowGap: 16, columnGap: 16 }}>
              {meta.map(([k, v], i) => (
                <React.Fragment key={i}>
                  <CapV2 size={10} color={muted}>{k}</CapV2>
                  <span style={{ fontFamily: '"Source Serif 4", ui-serif, Georgia, serif', fontSize: 15, color: ink, lineHeight: 1.3 }}>{v}</span>
                </React.Fragment>
              ))}
            </div>
          )}
          {plates > 0 && (
            <Link
              to={projectPath(featured)}
              style={{
                marginTop: 36,
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 18px',
                background: ink,
                color: paper,
                textDecoration: 'none',
              }}
            >
              <CapV2 size={11} color={paper}>View {String(plates).padStart(2, '0')} plates</CapV2>
              <Arrow dir="right" size={16} strokeWidth={1.5} stroke={paper} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

interface ConceptProps {
  description: string;
  mobile?: boolean;
}

const ConceptSection: React.FC<ConceptProps> = ({ description, mobile }) => {
  const ink = PALETTE.textPrimary;
  const paras = paragraphs(description);
  if (!paras.length) return null;

  // First paragraph: split first sentence as quote.
  const first = paras[0];
  const sentenceEnd = first.search(/[.!?]\s/);
  let quote = first;
  let restFirst = '';
  if (sentenceEnd > 0 && sentenceEnd < 200) {
    quote = first.slice(0, sentenceEnd + 1);
    restFirst = first.slice(sentenceEnd + 1).trim();
  } else if (first.length > 100) {
    const cut = first.lastIndexOf(' ', 100);
    quote = first.slice(0, cut > 40 ? cut : 100);
    restFirst = first.slice(cut > 40 ? cut : 100).trim();
  }

  const bodyParas = restFirst ? [restFirst, ...paras.slice(1)] : paras.slice(1);

  if (mobile) {
    return (
      <section style={{ borderBottom: `1px solid ${ink}` }}>
        <header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '18px 20px' }}>
          <TagPillV2 hue={HUES.yellow} label="Concept" size={10} chip={10} />
        </header>
        <div style={{ padding: '20px 20px 0', borderBottom: `1px solid ${ink}` }}>
          <h2 style={{ margin: 0, fontFamily: '"Source Serif 4", ui-serif, Georgia, serif', fontSize: 44, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>{quote}</h2>
        </div>
        {bodyParas.length > 0 && (
          <div style={{ padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {bodyParas.map((p, i) => (
              <p key={i} style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>{p}</p>
            ))}
          </div>
        )}
      </section>
    );
  }

  return (
    <section style={{ borderBottom: `1px solid ${ink}` }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '32px 40px', gap: 20 }}>
        <TagPillV2 hue={HUES.yellow} label="Concept" />
      </header>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch' }}>
        <div style={{ padding: '8px 40px 48px', display: 'flex', alignItems: 'flex-start' }}>
          <h2 style={{ margin: 0, fontFamily: '"Source Serif 4", ui-serif, Georgia, serif', fontSize: 72, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.02 }}>{quote}</h2>
        </div>
        <div style={{ padding: '14px 40px 48px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {bodyParas.map((p, i) => (
            <p key={i} style={{ margin: 0, fontSize: 16, lineHeight: 1.6 }}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

interface IndexProps {
  years: string[];
  byYear: Map<string, Project[]>;
  mobile?: boolean;
}

const WorksIndex: React.FC<IndexProps> = ({ years, byYear, mobile }) => {
  const ink = PALETTE.textPrimary;
  const muted = PALETTE.textSecondary;

  if (years.length === 0) return null;

  if (mobile) {
    return (
      <section id="works" style={{ borderBottom: `1px solid ${ink}`, scrollMarginTop: 16 }}>
        <header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '18px 20px' }}>
          <TagPillV2 hue={HUES.yellow} label="All works" size={10} chip={10} to="#works" />
        </header>
        {years.map((y, gi) => {
          const rows = byYear.get(y) ?? [];
          const hue = hueForYear(y);
          return (
            <div key={y} style={{ borderBottom: gi < years.length - 1 ? `1px solid ${ink}` : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px 8px' }}>
                <YearMarkV2 year={y} hue={hue} size={36} barW={32} barH={8} />
                <CapV2 size={10} color={muted}>
                  {String(rows.length).padStart(2, '0')} / {String(rows.length).padStart(2, '0')}
                </CapV2>
              </div>
              {rows.map((p) => {
                // Caption rule: when locations are populated, show them INSTEAD of the plate count.
                // Otherwise fall back to medium + plates.
                const slash: string[] = [];
                if (p.medium) slash.push(p.medium);
                if (p.locations?.length) {
                  slash.push(p.locations.join(' · '));
                } else if (p.gallery.length > 0) {
                  slash.push(`${String(p.gallery.length).padStart(2, '0')} plates`);
                }
                return (
                  <Link
                    key={p.id}
                    to={projectPath(p)}
                    // Left padding 60 = 20 (section) + ~40 (width of `> ` at year size 36) so titles align with the `2` of `2025`.
                    style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '4px 20px 20px 60px', textDecoration: 'none', color: ink }}
                  >
                    <span style={{ fontFamily: '"Source Serif 4", ui-serif, Georgia, serif', fontSize: 28, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 0.98 }}>
                      {p.title}
                    </span>
                    {slash.length > 0 && <CapV2 size={9} color={muted}>{slash.join(' · ')}</CapV2>}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </section>
    );
  }

  return (
    <section id="works" style={{ borderBottom: `1px solid ${ink}`, scrollMarginTop: 16 }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '32px 40px', gap: 20 }}>
        <TagPillV2 hue={HUES.yellow} label="All works" to="#works" />
      </header>
      {years.map((y, gi) => {
        const rows = byYear.get(y) ?? [];
        const hue = hueForYear(y);
        return (
          <div key={y} style={{ borderBottom: gi < years.length - 1 ? `1px solid ${ink}` : 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '28px 40px 16px' }}>
              <YearMarkV2 year={y} hue={hue} size={72} barW={56} barH={12} />
              <CapV2 size={11} color={muted}>
                {String(rows.length).padStart(2, '0')} / {String(rows.length).padStart(2, '0')}
              </CapV2>
            </div>
            {rows.map((p, ri) => {
              // Caption rule: locations win over plate count when populated.
              const slash: string[] = [];
              if (p.medium) slash.push(p.medium);
              if (p.locations?.length) {
                slash.push(p.locations.join(' · '));
              } else if (p.gallery.length > 0) {
                slash.push(`${String(p.gallery.length).padStart(2, '0')} plates`);
              }
              return (
                <Link
                  key={p.id}
                  to={projectPath(p)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '160px 1fr 320px 60px',
                    alignItems: 'baseline',
                    padding: '14px 40px 32px',
                    gap: 20,
                    textDecoration: 'none',
                    color: ink,
                  }}
                >
                  <CapV2 size={10} color={muted}>
                    {String(ri + 1).padStart(2, '0')} / {String(rows.length).padStart(2, '0')}
                  </CapV2>
                  <span style={{ fontFamily: '"Source Serif 4", ui-serif, Georgia, serif', fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.95 }}>
                    {p.title}
                  </span>
                  <CapV2 size={10} color={muted}>{slash.join(' · ')}</CapV2>
                  <span style={{ textAlign: 'right' }}>
                    <Arrow dir="right" size={22} strokeWidth={1.5} stroke={ink} />
                  </span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

interface AboutTeaserProps {
  aboutMe: string;
  mobile?: boolean;
}

const AboutTeaser: React.FC<AboutTeaserProps> = ({ aboutMe, mobile }) => {
  const ink = PALETTE.textPrimary;
  const paper = PALETTE.backgroundMain;
  const paras = paragraphs(aboutMe);
  if (!paras.length) return null;
  // Fixed teaser line — the full bio lives at /about.
  const intro = 'London-based fine art photographer (b. 1999) working in film, at the intersection of memory, fragility, and the quietly perceived.';

  if (mobile) {
    return (
      <section style={{ borderBottom: `1px solid ${ink}` }}>
        <header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '18px 20px' }}>
          <TagPillV2 hue={HUES.mint} label="About" size={10} chip={10} to="/about" />
        </header>
        <div style={{ padding: '20px 20px 0' }}>
          <h2 style={{ margin: 0, fontFamily: '"Source Serif 4", ui-serif, Georgia, serif', fontSize: 80, fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 1 }}>Silvia.</h2>
        </div>
        <div style={{ padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>{intro}</p>
          <Link
            to="/about"
            style={{
              alignSelf: 'flex-start',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '11px 14px',
              background: ink,
              color: paper,
              textDecoration: 'none',
            }}
          >
            <CapV2 size={10} color={paper}>Read full bio</CapV2>
            <Arrow dir="right" size={14} strokeWidth={1.5} stroke={paper} />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section style={{ borderBottom: `1px solid ${ink}` }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '32px 40px', gap: 20 }}>
        <TagPillV2 hue={HUES.mint} label="About" to="/about" />
      </header>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'start' }}>
        <div style={{ padding: '0 40px 48px', display: 'flex', alignItems: 'flex-start' }}>
          <h2 style={{ margin: 0, fontFamily: '"Source Serif 4", ui-serif, Georgia, serif', fontSize: 144, fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1 }}>Silvia.</h2>
        </div>
        {/* Body text top-aligned with the cap height of "Silvia." (~22% of the 144px line). */}
        <div style={{ padding: '32px 40px 48px', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.55, maxWidth: 520 }}>{intro}</p>
          <Link
            to="/about"
            style={{
              alignSelf: 'flex-start',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 16px',
              background: ink,
              color: paper,
              textDecoration: 'none',
            }}
          >
            <CapV2 size={11} color={paper}>Read full bio</CapV2>
            <Arrow dir="right" size={16} strokeWidth={1.5} stroke={paper} />
          </Link>
        </div>
      </div>
    </section>
  );
};

interface ContactSectionProps {
  methods: ContactMethod[];
  mobile?: boolean;
}

export const ContactRows: React.FC<ContactSectionProps> = ({ methods, mobile }) => {
  const ink = PALETTE.textPrimary;
  const muted = PALETTE.textSecondary;

  if (!methods.length) return null;

  if (mobile) {
    return (
      <div style={{ padding: '20px 20px 24px' }}>
        {methods.map((c, idx) => {
          const hue = CYCLE_HUES[idx % CYCLE_HUES.length];
          const isEmail = c.value.includes('@') && !c.value.startsWith('http');
          const href = isEmail ? `mailto:${c.value}` : c.value;
          return (
            <a
              key={idx}
              href={href}
              target={isEmail ? undefined : '_blank'}
              rel={isEmail ? undefined : 'noopener noreferrer'}
              style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '18px 0', textDecoration: 'none', color: ink }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <ChipV2 color={hue} size={10} />
                <CapV2 size={9} color={muted}>{String(idx + 1).padStart(2, '0')}</CapV2>
                <CapV2 size={10}>{c.label}</CapV2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                <span style={{ fontFamily: '"Source Serif 4", ui-serif, Georgia, serif', fontSize: 20, fontWeight: 500, letterSpacing: '-0.02em', wordBreak: 'break-all' }}>{c.value}</span>
                <Arrow dir="right" size={18} strokeWidth={1.5} stroke={ink} />
              </div>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div style={{ padding: '0 40px 48px' }}>
      {methods.map((c, idx) => {
        const hue = CYCLE_HUES[idx % CYCLE_HUES.length];
        const isEmail = c.value.includes('@') && !c.value.startsWith('http');
        const href = isEmail ? `mailto:${c.value}` : c.value;
        return (
          <a
            key={idx}
            href={href}
            target={isEmail ? undefined : '_blank'}
            rel={isEmail ? undefined : 'noopener noreferrer'}
            style={{
              display: 'grid',
              gridTemplateColumns: '40px 60px 180px 1fr 40px',
              alignItems: 'center',
              gap: 20,
              padding: '26px 0',
              textDecoration: 'none',
              color: ink,
            }}
          >
            <ChipV2 color={hue} size={14} />
            <CapV2 size={10} color={muted}>{String(idx + 1).padStart(2, '0')}</CapV2>
            <CapV2 size={11}>{c.label}</CapV2>
            <span style={{ fontFamily: '"Source Serif 4", ui-serif, Georgia, serif', fontSize: 36, fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1 }}>{c.value}</span>
            <span style={{ textAlign: 'right' }}>
              <Arrow dir="right" size={22} strokeWidth={1.5} stroke={ink} />
            </span>
          </a>
        );
      })}
    </div>
  );
};

/**
 * Home Contact section: headline only + CTA to /contact. The actual contact
 * details (email/instagram) are rendered only on the dedicated /contact page.
 */
const ContactSection: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
  const ink = PALETTE.textPrimary;
  const paper = PALETTE.backgroundMain;

  const cta = (
    <Link
      to="/contact"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: mobile ? 8 : 10,
        padding: mobile ? '12px 14px' : '14px 18px',
        background: ink,
        color: paper,
        textDecoration: 'none',
      }}
    >
      <CapV2 size={mobile ? 10 : 11} color={paper}>Send a message</CapV2>
      <Arrow dir="right" size={mobile ? 14 : 16} strokeWidth={1.5} stroke={paper} />
    </Link>
  );

  if (mobile) {
    return (
      <section style={{ borderBottom: `1px solid ${ink}` }}>
        <header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '18px 20px' }}>
          <TagPillV2 hue={HUES.coral} label="Contact" size={10} chip={10} to="/contact" />
        </header>
        <div style={{ padding: '20px 20px 0' }}>
          <h2 style={{ margin: 0, fontFamily: '"Source Serif 4", ui-serif, Georgia, serif', fontSize: 80, fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 1, textAlign: 'right' }}>Get in touch.</h2>
        </div>
        <div style={{ padding: '20px 20px 24px', display: 'flex', justifyContent: 'flex-end' }}>{cta}</div>
      </section>
    );
  }

  return (
    <section style={{ borderBottom: `1px solid ${ink}` }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '32px 40px', gap: 20 }}>
        <TagPillV2 hue={HUES.coral} label="Contact" to="/contact" />
      </header>
      <div style={{ padding: '32px 40px 0' }}>
        <h2 style={{ margin: 0, fontFamily: '"Source Serif 4", ui-serif, Georgia, serif', fontSize: 168, fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1, textAlign: 'right' }}>Get in touch.</h2>
      </div>
      <div style={{ padding: '32px 40px 48px', display: 'flex', justifyContent: 'flex-end' }}>{cta}</div>
    </section>
  );
};

/* ─── Component ───────────────────────────────────────────────── */

const ShowcaseView: React.FC<ShowcaseProps> = ({ data }) => {
  const isMobile = useIsMobile();
  const { isAdmin } = useAdminAuth();

  const { years, byYear } = useMemo(() => {
    const map = new Map<string, Project[]>();
    for (const p of data.projects) {
      const list = map.get(p.year) ?? [];
      list.push(p);
      map.set(p.year, list);
    }
    const ys = Array.from(map.keys()).sort((a, b) => yearNum(b) - yearNum(a));
    return { years: ys, byYear: map };
  }, [data.projects]);

  const featured = data.projects[0];
  const methods = getContactMethods(data);

  const paper = PALETTE.backgroundMain;
  const ink = PALETTE.textPrimary;

  return (
    <div
      className="fixed inset-0 flex flex-col overflow-y-auto"
      style={{ background: paper, color: ink, fontFamily: '"Source Serif 4", ui-serif, Georgia, serif' }}
    >
      <TopRibbon active="works" />
      <WorksIndex years={years} byYear={byYear} mobile={isMobile} />
      <AboutTeaser aboutMe={data.aboutMe} mobile={isMobile} />
      <ContactSection mobile={isMobile} />
      <Footer />
    </div>
  );
};

export default ShowcaseView;
