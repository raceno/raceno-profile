import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { Components } from "react-markdown";
import { getPostBySlug } from "../data/posts";
import { tagColor } from "../lib/tagColors";
import { useTheme } from "../context/ThemeContext";

const WORDS_PER_MINUTE = 200;

function readingTimeMinutes(text: string): number {
  const stripped = text.replace(/```[\s\S]*?```/g, "").replace(/[#*_`\[\]()]/g, " ");
  const words = stripped.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { isDark } = useTheme();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="mb-4 text-2xl font-bold text-[var(--color-text)]">
          Post not found
        </h1>
        <p className="mb-6 text-[var(--color-text-muted)]">
          The post you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link
          to="/"
          className="text-[var(--color-accent)] underline"
        >
          ← Back to home
        </Link>
      </div>
    );
  }

  const body = post.body;
  const minRead = readingTimeMinutes(body);

  const markdownComponents: Components = {
    code({ node, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const code = String(children).replace(/\n$/, "");
      if (match) {
        return (
          <SyntaxHighlighter
            PreTag="div"
            language={match[1]}
            style={isDark ? oneDark : oneLight}
            customStyle={{
              margin: "1em 0",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              background: "var(--color-surface)",
            }}
            codeTagProps={{ style: { background: "transparent" } }}
          >
            {code}
          </SyntaxHighlighter>
        );
      }
      return (
        <code className="blog-prose-inline-code" {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        to="/"
        className="mb-8 inline-block text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-accent)] hover:underline"
      >
        ← Back to blog
      </Link>
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
        {post.title}
      </h1>
      <p className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-muted)]">
        <span>{post.year}</span>
        <span aria-hidden>·</span>
        <span>{minRead} min read</span>
      </p>
      {post.tags.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2">
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
      )}
      {body ? (
        <div className="blog-prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {body}
          </ReactMarkdown>
        </div>
      ) : (
        <p className="text-[var(--color-text-muted)]">Content coming soon.</p>
      )}
    </article>
  );
}
