import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export function ThingsLearned() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-text)]">
        Things I&apos;ve learned
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <div
              className="flex gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition hover:border-[var(--color-accent)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-page-bg)] text-[var(--color-accent)]">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-[var(--color-text)]">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {project.description}
                </p>
                <Link to={project.url || ""} target="_blank" className="text-sm text-[var(--color-tag-react)] mt-2">
                  {project.url}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
