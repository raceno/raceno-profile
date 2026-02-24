import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import { tagColor } from "../lib/tagColors";

export function Blog() {
  const sortedPosts = [...posts].sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <section className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
      <h2 className="mb-8 text-2xl font-bold text-[var(--color-text)]">
        Things I've Wrote
      </h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {sortedPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition hover:border-[var(--color-accent)] hover:shadow-md"
            style={{ textDecoration: 'none' }}
          >
            <h3 className="mb-2 text-lg font-semibold text-[var(--color-text)] hover:underline">
              {post.title}
            </h3>
            {post.excerpt && (
              <p className="mb-3 line-clamp-2 text-sm text-[var(--color-text-muted)]">
                {post.excerpt}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                  style={{
                    backgroundColor: "var(--color-page-bg)",
                    color: tagColor(tag),
                    border: `1px solid ${tagColor(tag)}`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-sm text-[var(--color-text-muted)] mt-3">
                {post.year}
              </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
