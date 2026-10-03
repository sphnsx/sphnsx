/**
 * A zero-padded count with its noun in agreement: "01 plate", "02 plates".
 *
 * The padding is the site's house style for counts; the agreement is why this
 * exists, since the call sites previously hardcoded the plural and read "01
 * plates" for a single-image project.
 */
export function countLabel(n: number, singular: string, plural = `${singular}s`): string {
  return `${String(n).padStart(2, '0')} ${n === 1 ? singular : plural}`;
}
