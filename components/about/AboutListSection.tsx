import React from 'react';
import toast from 'react-hot-toast';
import { PALETTE, hueForYear } from '../../constants';
import { sectionHue } from '../../utils/aboutSections';
import CapV2 from '../optc/CapV2';
import TagPillV2 from '../optc/TagPillV2';
import AdminBtn from '../optc/admin/AdminBtn';

/** A row as the About page draws it, whatever the stored shape calls its middle field. */
export interface AboutEntry {
  year: string;
  /** Venue for exhibitions, title for everything else. */
  label: string;
  kind?: string;
}

/**
 * Abril Text sets years in OLD-STYLE figures: 2 and 0 sit on the x-height band
 * while 6 and 8 ascend and 4, 5, 7 and 9 drop below the baseline. So a year's ink
 * box moves with the digits in it — "2026" and "2024" do not share a centre — and
 * chasing each year's own ink box would make the bars hop from row to row.
 *
 * The bar instead centres on the figures' body band, which is fixed per font: the
 * baseline sits (fontAscent − fontDescent) / 2 = 0.406em below the line box centre
 * a bar is otherwise aligned to, and the body band is 0.548em tall, leaving this
 * much to nudge the bar down. Measured from the live font, not guessed.
 */
const YEAR_BODY_CENTRE_OFFSET_EM = 0.132;

/** Swap `idx` with its neighbour in `dir`; returns the list untouched at either end. */
export function moveInList<T>(list: T[], idx: number, dir: -1 | 1): T[] {
  const target = idx + dir;
  if (target < 0 || target >= list.length) return list;
  const next = [...list];
  [next[target], next[idx]] = [next[idx], next[target]];
  return next;
}

/** ↑/↓ pair for admin list editors — matches the projects reorder chrome. */
export const ReorderBtns: React.FC<{ index: number; total: number; onMove: (dir: -1 | 1) => void }> = ({ index, total, onMove }) => {
  const ink = PALETTE.textPrimary;
  const btn = (disabled: boolean): React.CSSProperties => ({
    background: 'transparent',
    border: `1px solid ${ink}`,
    color: ink,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.35 : 1,
    padding: '4px 8px',
    lineHeight: 1,
    borderRadius: 0,
  });
  return (
    <span style={{ display: 'inline-flex', gap: 6 }}>
      <button type="button" aria-label="Move up" disabled={index <= 0} onClick={() => onMove(-1)} style={btn(index <= 0)}>↑</button>
      <button type="button" aria-label="Move down" disabled={index >= total - 1} onClick={() => onMove(1)} style={btn(index >= total - 1)}>↓</button>
    </span>
  );
};

export interface AboutListSectionProps {
  /** Section name, shown in the tag pill and used by the A–Z ordering. */
  label: string;
  entries: AboutEntry[];
  /** Column header + placeholder for the middle field, e.g. 'Venue' or 'Title'. */
  entryFieldLabel: string;
  entryFieldPlaceholder: string;
  kindPlaceholder: string;
  /** Singular noun for the add button, e.g. 'exhibition'. */
  itemNoun: string;
  showAdminControls: boolean;
  isMobile: boolean;
  padX: number;
  onSave: (entries: AboutEntry[]) => Promise<void>;
}

/**
 * One About-page list section (Exhibitions, Awards, Publications, Recognition):
 * year + hue bar + entry + kind, with the admin editor for the same rows.
 *
 * The sections differ only in label, hue, field naming and where they save, so
 * they share this component rather than four copies of the same 100 lines.
 */
const AboutListSection: React.FC<AboutListSectionProps> = ({
  label,
  entries,
  entryFieldLabel,
  entryFieldPlaceholder,
  kindPlaceholder,
  itemNoun,
  showAdminControls,
  isMobile,
  padX,
  onSave,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [draft, setDraft] = React.useState<AboutEntry[]>(entries);
  const [isSaving, setIsSaving] = React.useState(false);

  React.useEffect(() => {
    if (!isEditing) setDraft(entries);
    // Re-syncing while editing would discard in-progress typing.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries, isEditing]);

  const ink = PALETTE.textPrimary;
  const muted = PALETTE.textSecondary;
  // Drives both the numerals and the bar's optical nudge, so the two cannot drift.
  const yearSize = isMobile ? 26 : 36;

  if (entries.length === 0 && !showAdminControls) return null;

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    border: `1px solid ${ink}`,
    fontFamily: '"abril-text", ui-serif, Georgia, serif',
    fontSize: 16,
    borderRadius: 0,
    outline: 'none',
    marginTop: 6,
  };

  const update = (i: number, field: keyof AboutEntry, value: string) =>
    setDraft((prev) => prev.map((e, idx) => (idx === i ? { ...e, [field]: value } : e)));

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const cleaned = draft
        .map((e) => ({ year: e.year.trim(), label: e.label.trim(), kind: e.kind?.trim() || undefined }))
        .filter((e) => e.year || e.label);
      await onSave(cleaned);
      setIsEditing(false);
      toast.success(`${label} saved`);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : 'Save failed');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section style={{ borderBottom: `1px solid ${ink}` }}>
      <header style={{ display: 'flex', justifyContent: 'flex-end', padding: `12px ${padX}px` }}>
        {/* The chip wears the hue of this section's newest entry. */}
        <TagPillV2 hue={sectionHue(entries)} label={label} size={isMobile ? 10 : 12} chip={isMobile ? 10 : 14} />
      </header>

      {showAdminControls && isEditing ? (
        <div style={{ padding: `0 ${padX}px 12px`, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {draft.map((e, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-end', padding: 14, border: `1px solid ${ink}`, flexWrap: 'wrap' }}>
              <div style={{ width: 120 }}>
                <CapV2 size={10} color={muted}>Year</CapV2>
                <input value={e.year} onChange={(ev) => update(i, 'year', ev.target.value)} placeholder="2026" style={inputStyle} />
              </div>
              <div style={{ flex: 2, minWidth: 200 }}>
                <CapV2 size={10} color={muted}>{entryFieldLabel}</CapV2>
                <input value={e.label} onChange={(ev) => update(i, 'label', ev.target.value)} placeholder={entryFieldPlaceholder} style={inputStyle} />
              </div>
              <div style={{ flex: 1, minWidth: 140 }}>
                <CapV2 size={10} color={muted}>Kind</CapV2>
                <input value={e.kind ?? ''} onChange={(ev) => update(i, 'kind', ev.target.value)} placeholder={kindPlaceholder} style={inputStyle} />
              </div>
              <ReorderBtns index={i} total={draft.length} onMove={(dir) => setDraft((prev) => moveInList(prev, i, dir))} />
              <AdminBtn danger onClick={() => setDraft((prev) => prev.filter((_, idx) => idx !== i))}>Remove</AdminBtn>
            </div>
          ))}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <AdminBtn onClick={() => setDraft((prev) => [...prev, { year: '', label: '', kind: '' }])}>+ Add {itemNoun}</AdminBtn>
            <AdminBtn primary onClick={handleSave} disabled={isSaving}>{isSaving ? 'Saving…' : 'Save'}</AdminBtn>
            <AdminBtn onClick={() => { setIsEditing(false); setDraft(entries); }}>Cancel</AdminBtn>
          </div>
        </div>
      ) : (
        <>
          {entries.length ? (
            entries.map((row, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  // auto-sized year + bar + flexible entry + kind + arrow.
                  // `auto` columns sit on their content width so the bar gets
                  // even gaps on both sides via a single column-gap.
                  gridTemplateColumns: isMobile ? 'auto auto 1fr' : 'auto auto 1fr 320px 60px',
                  alignItems: 'center',
                  padding: `12px ${padX}px`,
                  color: ink,
                  gap: 12,
                }}
              >
                {/* Year (own cell) — chevron + year, no bar */}
                <span
                  style={{
                    fontFamily: '"abril-text", ui-serif, Georgia, serif',
                    fontSize: yearSize,
                    fontWeight: 500,
                    letterSpacing: '-0.04em',
                    lineHeight: 0.95,
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ fontWeight: 400 }}>{'> '}</span>
                  {row.year}
                </span>
                {/* Bar (own cell) — balanced grid gap on both sides */}
                <span
                  aria-hidden
                  style={{
                    display: 'inline-block',
                    width: isMobile ? 26 : 36,
                    height: isMobile ? 8 : 10,
                    background: hueForYear(row.year),
                    alignSelf: 'center',
                    flexShrink: 0,
                    // Centre on the digits themselves, not on their line box.
                    position: 'relative',
                    top: yearSize * YEAR_BODY_CENTRE_OFFSET_EM,
                  }}
                />
                <span style={{ fontFamily: '"abril-text", ui-serif, Georgia, serif', fontSize: isMobile ? 18 : 24, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{row.label}</span>
                {!isMobile && <CapV2 size={10} color={muted}>{row.kind ?? ''}</CapV2>}
                {!isMobile && <span />}
              </div>
            ))
          ) : (
            showAdminControls && (
              <div style={{ padding: `12px ${padX}px 12px` }}>
                <CapV2 size={11} color={muted}>No {label.toLowerCase()} yet</CapV2>
              </div>
            )
          )}
          {showAdminControls && (
            <div style={{ padding: `12px ${padX}px 12px` }}>
              <AdminBtn onClick={() => { setDraft(entries); setIsEditing(true); }}>
                {entries.length ? `Edit ${label.toLowerCase()}` : `Add ${label.toLowerCase()}`}
              </AdminBtn>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default AboutListSection;
