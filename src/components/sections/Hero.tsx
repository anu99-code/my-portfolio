import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProfileVisual } from "@/components/ui/ProfileVisual";
import { siteConfig } from "@/lib/site-config";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  const { hero, role } = siteConfig;

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate scroll-mt-16 overflow-hidden"
    >
      {/* Soft background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 -z-10 size-96 rounded-full bg-accent-soft opacity-70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 -z-10 size-80 rounded-full bg-indigo-100/60 blur-3xl"
      />

      <Container className="grid items-center gap-12 py-12 md:grid-cols-2 md:gap-8 md:py-20 lg:gap-16 lg:py-28">
        {/* Text column */}
        <div className="order-last md:order-first">
          <div
            className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-muted"
            style={delay(0)}
          >
            <span className="relative flex size-2.5" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
            {role}
          </div>

          <h1
            id="hero-heading"
            className="animate-fade-up font-display mt-6 text-balance text-[length:clamp(2.5rem,1.2rem+4.2vw,4.5rem)] font-bold leading-[1.05] tracking-tight"
            style={delay(100)}
          >
            {hero.headlineStart}{" "}
            <span className="relative inline-block text-accent">
              {hero.headlineAccent}
              <svg
                aria-hidden="true"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-2 w-full text-accent/40"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <path d="M3 8c30-6 60-6 95-2s70 3 99-2" />
              </svg>
            </span>{" "}
            {hero.headlineEnd}
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-pretty text-lg leading-8 text-muted"
            style={delay(200)}
          >
            {hero.intro}
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
            style={delay(300)}
          >
            <Button href="#projects" size="md" className="group w-full sm:w-auto">
              View Projects
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              size="md"
              className="w-full sm:w-auto"
            >
              Contact Me
            </Button>
          </div>

          <div className="animate-fade-up mt-10" style={delay(400)}>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Tech I work with
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {hero.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs font-medium text-accent"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visual column: first on mobile, right side from md up */}
        <div
          className="animate-fade-up order-first flex justify-center md:order-last md:justify-end"
          style={delay(250)}
        >
          <ProfileVisual />
        </div>
      </Container>
    </section>
  );
}