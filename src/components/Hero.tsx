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
          <ul className="mb-4 list-disc space-y-1 pl-5 text-[var(--color-text)]">
            <li>
              <b>An e-commerce recommendation engine</b><br />backend in Python, using ML models for personalized suggestions. Realized quickly that predictions are useless without proper caching, latency tuning, and monitoring.
            </li>
            <li>
              <b>A CI/CD pipeline visualizer</b><br />coded in Python and React, tracking hundreds of builds per day. Learned that observability isn’t optional—without proper logging and alerting, engineers panic unnecessarily.
            </li>
            <li>
              <b>A crypto portfolio tracker</b><br />built with C# and Go, handling thousands of users querying live exchange rates. Every weekend felt like a stress test, teaching me how to scale queues, retries, and alerting systems under real-world volatility.
            </li>
            <li>
              <b>A microservice orchestration dashboard</b><br />built with Java and Angular, helping ops teams visualize hundreds of services. Learned how to make a system both powerful and readable, so humans could actually trust it under pressure.
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
