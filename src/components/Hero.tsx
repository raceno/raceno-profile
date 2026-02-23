export function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
      <div className="flex flex-col items-center text-center">
        <div className="w-full rounded-xl bg-[var(--color-surface)] p-6 text-left">
          <p className="mb-2 text-2xl font-medium text-[var(--color-text)]">
            Hey 👋
          </p>
          <p className="mb-4 text-[var(--color-text)]">
            I’m Robinson — a full-stack software engineer based in New York.
            <br />
            I’m a girl dad x2 ✨
          </p>
          <p className="mb-4 text-[var(--color-text)]">
            I’ve spent my career building things from scratch, breaking them, fixing them, and then scaling them when people actually start using them. I enjoy working across the stack — from backend systems and APIs to frontend UX — and I care a lot about performance, reliability, and not over-engineering things that don’t need it.
          </p>
          <p className="mb-2 font-medium text-[var(--color-text)]">
            Some things I’ve built over the years:
          </p>
          <ul className="mb-4 list-disc space-y-1 pl-5 text-[var(--color-text-muted)]">
            <li><b>A freelance platform</b> — built from scratch using JavaScript and PHP, juggling client demands, bug reports at midnight, and the occasional “why isn’t this working?” panic. It grew into a system people actually relied on every day.</li>
            <li>
              <b>A fantasy football game</b> — backend in Java, frontend in JavaScript, handling thousands of users and insane traffic spikes every Sunday. Learned quickly that users will absolutely break everything if you don’t plan for it.
            </li>
            <li><b>An NFT-style game</b> — coded in C# and JavaScript, shipping before NFTs were even cool. Fun, messy, and full of edge cases that taught me how to build systems that don’t fall apart under weird conditions.</li>
            <li>
              <b>Smart contract tool</b> — a small project in JavaScript that automated trustless refunds for blockchain transactions. Simple in concept, but taught me how to write clean, production-ready code that other developers could rely on.
            </li>
          </ul>
          <p className="text-sm text-[var(--color-text-muted)]" id="contact">
            <div>
              Github:{" "}
              <a
                href="https://github.com/raceno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)]"
              >@raceno</a>
            </div>
            <div>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/robinson-acevedo-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)]"
              >
                linkedin.com/in/robinson-acevedo-dev
              </a>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}
