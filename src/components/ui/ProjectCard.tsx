import Image from "next/image";
import type { ReactNode } from "react";

export type Project = {
  title: string;
  description: string;
  tags: readonly string[];
  /** Path inside /public, e.g. "/projects/my-app.jpg". Omit for a placeholder. */
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
};

function ExternalLink({
  href,
  label,
  title,
  children,
}: {
  href: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}: ${title} (opens in a new tab)`}
      className="inline-flex items-center gap-1.5 rounded-full text-sm font-medium text-accent transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      {children}
    </a>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, image, liveUrl, repoUrl } = project;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-lg shadow-black/20 transition-all duration-300 ease-out hover:border-accent/50 hover:shadow-2xl hover:shadow-accent-solid/25 motion-safe:hover:scale-[1.02]">
      {/* Preview: fixed ratio so every card has the same image height */}
      <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-linear-to-br from-accent-soft via-surface to-background">
        {image ? (
          <Image
            src={image}
            alt={`Preview of ${title}`}
            fill
            sizes="(min-width: 1152px) 560px, (min-width: 640px) 45vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-110"
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 grid place-items-center text-accent/50 transition-transform duration-500 ease-out motion-safe:group-hover:scale-110"
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="14" rx="2" />
              <path d="M3 8h18M7 21h10M12 18v3" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold tracking-tight">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-accent/20 bg-accent-soft px-2.5 py-0.5 font-mono text-xs font-medium text-accent"
            >
              {tag}
            </li>
          ))}
        </ul>

        {(liveUrl || repoUrl) && (
          <div className="mt-auto flex items-center gap-5 pt-5">
            {liveUrl && (
              <ExternalLink href={liveUrl} label="Live demo" title={title}>
                Live demo
                <span aria-hidden="true">↗</span>
              </ExternalLink>
            )}
            {repoUrl && (
              <ExternalLink href={repoUrl} label="Source code" title={title}>
                GitHub
                <span aria-hidden="true">↗</span>
              </ExternalLink>
            )}
          </div>
        )}
      </div>
    </article>
  );
}