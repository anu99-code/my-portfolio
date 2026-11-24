import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type Skill = { name: string; mark: string };

type Category = {
  title: string;
  icon: ReactNode;
  skills: readonly Skill[];
  /** Layout classes for the category's wrapper and its tile grid. */
  wrapperClass: string;
  gridClass: string;
};

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const categories: readonly Category[] = [
  {
    title: "Frontend Development",
    icon: (
      <svg {...iconProps}>
        <path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16" />
      </svg>
    ),
    skills: [
      { name: "HTML", mark: "HT" },
      { name: "CSS", mark: "CS" },
      { name: "JavaScript", mark: "JS" },
      { name: "React", mark: "Re" },
      { name: "Next.js", mark: "Nx" },
      { name: "TypeScript", mark: "TS" },
      { name: "Tailwind CSS", mark: "Tw" },
    ],
    wrapperClass: "md:col-span-2",
    gridClass: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  },
  {
    title: "Backend & Database",
    icon: (
      <svg {...iconProps}>
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
    skills: [
      { name: "Java", mark: "Jv" },
      { name: "Spring Boot", mark: "Sb" },
      { name: "MySQL", mark: "My" },
    ],
    wrapperClass: "",
    gridClass: "grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2",
  },
  {
    title: "Tools & Platforms",
    icon: (
      <svg {...iconProps}>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />
      </svg>
    ),
    skills: [
      { name: "Git", mark: "Gt" },
      { name: "GitHub", mark: "GH" },
      { name: "VS Code", mark: "VS" },
      { name: "WordPress", mark: "WP" },
      { name: "Elementor", mark: "El" },
      { name: "Vercel", mark: "Vc" },
    ],
    wrapperClass: "",
    gridClass: "grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2",
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative isolate scroll-mt-16 overflow-hidden border-t border-border/60"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 -z-10 size-96 rounded-full bg-accent-solid/15 blur-3xl"
      />

      <Container className="py-20 md:py-24 lg:py-32">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
            My toolkit
          </p>
          <h2
            id="skills-heading"
            className="font-display mt-4 max-w-2xl text-balance text-[length:clamp(2rem,1.2rem+2.6vw,3.25rem)] font-bold leading-[1.1] tracking-tight"
          >
            Technologies I work with.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((category, i) => (
            <Reveal
              key={category.title}
              delay={100 + i * 120}
              className={`h-full ${category.wrapperClass}`}
            >
              <article
                aria-labelledby={`skills-${i}-heading`}
                className="h-full rounded-3xl border border-border bg-linear-to-br from-surface via-surface to-accent-soft/40 p-6 shadow-xl shadow-black/20 transition-colors duration-300 hover:border-accent/30 sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <div
                    aria-hidden="true"
                    className="grid size-12 shrink-0 place-items-center rounded-2xl bg-accent-solid text-white shadow-lg shadow-accent-solid/30"
                  >
                    {category.icon}
                  </div>
                  <h3
                    id={`skills-${i}-heading`}
                    className="font-display text-xl font-semibold tracking-tight sm:text-2xl"
                  >
                    {category.title}
                  </h3>
                </div>

                <ul className={`mt-6 grid gap-3 ${category.gridClass}`}>
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="group flex items-center gap-3 rounded-2xl border border-border bg-background/50 px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft"
                    >
                      <span
                        aria-hidden="true"
                        className="grid size-9 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent-soft font-mono text-xs font-semibold text-accent transition-colors duration-200 group-hover:bg-accent-solid group-hover:text-white"
                      >
                        {skill.mark}
                      </span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}