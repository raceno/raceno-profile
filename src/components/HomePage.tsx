import { Hero } from "./Hero";
import { ThingsLearned } from "./ThingsLearned";
import { Blog } from "./Blog";

export function HomePage() {
  return (
    <main className="pb-16 pt-16">
      <Hero />
      <ThingsLearned />
      <Blog />
    </main>
  );
}
