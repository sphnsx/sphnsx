import DOMPurify from 'dompurify';

const ALLOWED_TAGS = ['p', 'h1', 'h2', 'h3', 'blockquote', 'strong', 'em', 'u', 'a', 'br', 'span'];
const ALLOWED_ATTR = ['href', 'target', 'rel', 'style'];

/**
 * Sanitize HTML for safe display. Allows only block and inline formatting tags
 * used by the rich text editor (no font-family; style allowed on span for size/line-height).
 */
export function sanitizeHtml(html: string): string {
  if (!html?.trim()) return '';
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS,
    ALLOWED_ATTR,
    ADD_ATTR: ['target', 'rel'],
  });
}
