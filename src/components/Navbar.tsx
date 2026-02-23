import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";

const SITE_NAME = "raceno.dev";

export function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 border-b border-[var(--color-border)] bg-[var(--color-page-bg)] transition-colors">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="/"
          className="text-lg font-semibold text-[var(--color-text)] no-underline hover:no-underline"
        >
          <img src = "/vite.svg" alt = "Logo" className="inline-block h-6 w-6 mr-2" />
          {SITE_NAME}
        </a>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg cursor-pointer p-2 text-[var(--color-text)] transition hover:bg-[var(--color-surface)]"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <HiOutlineSun className="h-5 w-5" />
            ) : (
              <HiOutlineMoon className="h-5 w-5" />
            )}
          </button>
          <a
            href="https://t.me/racenodev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-text)] px-4 py-2 text-sm font-medium text-[var(--color-page-bg)] no-underline transition hover:opacity-90"
            style = {{ textDecoration: 'none' }}
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
