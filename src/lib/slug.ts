/**
 * Convert a title to a URL-safe slug (lowercase, spaces and special chars to hyphens).
 */
export function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Ensure unique slugs by appending -2, -3, etc. when duplicates exist.
 */
export function ensureUniqueSlugs<T extends { slug: string }>(items: T[]): T[] {
  const seen = new Map<string, number>();
  return items.map((item) => {
    let slug = item.slug;
    const count = seen.get(slug) ?? 0;
    seen.set(slug, count + 1);
    if (count > 0) slug = `${slug}-${count + 1}`;
    return { ...item, slug };
  });
}
