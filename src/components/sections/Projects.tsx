import { Container } from "@/components/ui/Container";
import { ProjectCard, type Project } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

const projects: readonly Project[] = [
  {
    title: "Student Management System",
    description:
      "A management application involving student records, courses, batches, registrations, discounts and administrative permissions.",
    tags: ["Java", "Spring Boot", "MySQL"],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website developed to showcase my technical skills, projects and development journey.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative isolate scroll-mt-16 overflow-hidden border-t border-border/60"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 -z-10 size-96 rounded-full bg-accent-solid/15 blur-3xl"
      />

      <Container className="py-20 md:py-24 lg:py-32">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
            Selected work
          </p>
          <h2
            id="projects-heading"
            className="font-display mt-4 max-w-2xl text-balance text-[length:clamp(2rem,1.2rem+2.6vw,3.25rem)] font-bold leading-[1.1] tracking-tight"
          >
            Things I&apos;ve built.
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <li key={project.title}>
              <Reveal delay={100 + i * 120} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}