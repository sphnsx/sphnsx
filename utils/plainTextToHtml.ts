/**
 * Convert legacy plain text (paragraphs separated by double newlines) to HTML.
 * Used when stored content does not look like HTML.
 */
export function plainTextToHtml(text: string): string {
  if (!text?.trim()) return '<p></p>';
  const hasHtml = /<[a-z][\s\S]*>/i.test(text);
  if (hasHtml) return text;
  return text
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join('') || '<p></p>';
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
