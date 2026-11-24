import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const paragraphs = [
  "I'm an aspiring software engineer with a Bachelor of Information Technology degree from the University of Colombo, where I achieved a Second Upper Class.",
  "I enjoy turning ideas into meaningful digital experiences through creativity and code. Throughout my learning journey, I've explored different areas of software development and gained experience building practical applications.",
  "I'm particularly interested in modern web development and enjoy working with technologies such as React, Next.js, and TypeScript. I'm always curious to learn, solve problems, and challenge myself to become a better developer.",
  "I believe every project is an opportunity to learn something new, improve my skills, and create something meaningful.",
];

function GraduationCapIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate scroll-mt-16 overflow-hidden border-t border-border/60"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 -z-10 size-96 rounded-full bg-accent-solid/15 blur-3xl"
      />

      <Container className="grid items-start gap-12 py-20 md:grid-cols-2 md:gap-10 md:py-24 lg:gap-20 lg:py-32">
        {/* Story column */}
        <div>
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
              Get to know me
            </p>
            <h2
              id="about-heading"
              className="font-display mt-4 text-balance text-[length:clamp(2rem,1.2rem+2.6vw,3.25rem)] font-bold leading-[1.1] tracking-tight"
            >
              A little about me.
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5 text-lg leading-8 text-muted">
            {paragraphs.map((text, i) => (
              <Reveal key={i} delay={100 + i * 100}>
                <p className="text-pretty">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education card column */}
        <Reveal delay={200} className="md:sticky md:top-28">
          <article
            aria-labelledby="education-heading"
            className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-accent-soft via-surface to-surface p-7 shadow-2xl shadow-accent-solid/10 sm:p-9"
          >
            {/* Decorative rings */}
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 size-56 rounded-full border border-accent/15"
            />
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 size-36 rounded-full border border-accent/20"
            />

            <div
              aria-hidden="true"
              className="relative grid size-14 place-items-center rounded-2xl bg-accent-solid text-white shadow-lg shadow-accent-solid/30"
            >
              <GraduationCapIcon />
            </div>

            <p className="relative mt-8 font-mono text-xs font-medium uppercase tracking-widest text-muted">
              Education
            </p>
            <h3
              id="education-heading"
              className="font-display relative mt-2 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl"
            >
              Bachelor of Information Technology
            </h3>
            <p className="relative mt-2 text-lg text-muted">
              University of Colombo
            </p>

            <p className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-background/50 px-4 py-1.5 text-sm font-medium text-accent">
              <span aria-hidden="true">✦</span>
              Second Upper Class
            </p>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}