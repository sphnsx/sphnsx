import React, { useState, KeyboardEvent } from 'react';

interface Props {
  value: string[];
  onChange: (next: string[]) => void;
}

export const LocationsField: React.FC<Props> = ({ value, onChange }) => {
  const [draft, setDraft] = useState('');

  const add = (raw: string) => {
    const v = raw.trim();
    if (!v) return;
    if (value.some((x) => x.toLowerCase() === v.toLowerCase())) {
      setDraft('');
      return;
    }
    onChange([...value, v]);
    setDraft('');
  };
  const remove = (i: number) => onChange(value.filter((_, idx) => idx !== i));

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      add(draft);
    } else if (e.key === 'Backspace' && !draft && value.length) {
      remove(value.length - 1);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-3.5">
        <span className="font-mono text-[11px] uppercase tracking-wider text-textPrimary">
          Locations
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-textSecondary">
          {value.length === 0 ? 'Add one or more' : `${String(value.length).padStart(2, '0')} added`}
        </span>
      </div>
      <div className="border border-paletteBorder p-2.5 min-h-[56px] flex flex-wrap items-center gap-2">
        {value.map((loc, i) => (
          <LocationChip key={i} label={loc} onRemove={() => remove(i)} />
        ))}
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={onKey}
          onBlur={() => add(draft)}
          placeholder={value.length === 0 ? 'e.g. London, Salzburg, Lisbon' : 'Add location'}
          className="flex-1 min-w-[140px] border-0 outline-none bg-transparent py-1.5 px-1 font-mono text-xs uppercase tracking-wider text-textPrimary placeholder:text-textSecondary"
        />
      </div>
      <span className="font-sans text-xs text-textSecondary leading-relaxed">
        Press <strong className="font-medium">Enter</strong> or{' '}
        <strong className="font-medium">,</strong> to add. Locations appear in order on the project
        page.
      </span>
    </div>
  );
};

const LocationChip: React.FC<{ label: string; onRemove: () => void }> = ({ label, onRemove }) => (
  <span className="group inline-flex items-center gap-2 border border-paletteBorder px-2.5 py-1.5 bg-bgMain hover:bg-accent">
    <span className="font-mono text-[11px] uppercase tracking-wider text-textPrimary">{label}</span>
    <button
      type="button"
      onClick={onRemove}
      aria-label={`Remove ${label}`}
      className="w-3.5 h-3.5 inline-flex items-center justify-center text-textSecondary group-hover:text-textPrimary"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square">
        <line x1="1" y1="1" x2="9" y2="9" />
        <line x1="9" y1="1" x2="1" y2="9" />
      </svg>
    </button>
  </span>
);

export default LocationsField;
