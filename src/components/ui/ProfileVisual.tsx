import Image from "next/image";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site-config";

type ProfileVisualProps = {
  /** Path inside /public, e.g. "/profile.jpg". Omit to show the placeholder. */
  src?: string;
  alt?: string;
};

function FloatingBadge({
  children,
  className = "",
  enterDelay,
  floatDelay,
}: {
  children: ReactNode;
  className?: string;
  enterDelay: number;
  floatDelay: number;
}) {
  return (
    // Outer element handles the entrance, inner handles the endless float.
    // They are separate because both animations use `transform`.
    <div
      className={`animate-fade-up absolute z-20 ${className}`}
      style={{ animationDelay: `${enterDelay}ms` }}
    >
      <div
        className="animate-float flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium shadow-lg shadow-black/40"
        style={{ animationDelay: `${floatDelay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}

export function ProfileVisual({
  src,
  alt = `Portrait of ${siteConfig.name}`,
}: ProfileVisualProps) {
  return (
    <div className="relative w-56 sm:w-72 md:w-full md:max-w-sm lg:max-w-md">
      {/* Offset accent shape behind the frame */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[50%/40%] rounded-b-[2rem] bg-accent-solid sm:translate-x-6 sm:translate-y-6"
      />

      {/* Decorative ring */}
      <div
        aria-hidden="true"
        className="absolute -left-5 -top-5 size-20 rounded-full border-2 border-accent/30 sm:-left-8 sm:-top-6 sm:size-28"
      />

      {/* Arch frame */}
      <div className="relative aspect-4/5 overflow-hidden rounded-t-[50%/40%] rounded-b-[2rem] border border-border bg-linear-to-br from-accent-soft via-surface to-background shadow-2xl shadow-accent-solid/20">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(min-width: 1024px) 448px, (min-width: 768px) 384px, 288px"
            className="object-cover"
          />
        ) : (
          <div role="img" aria-label="Profile photo placeholder">
            <svg
              viewBox="0 0 200 250"
              preserveAspectRatio="xMidYMax meet"
              className="absolute inset-x-0 bottom-0 h-[85%] w-full text-accent/40"
              fill="currentColor"
              aria-hidden="true"
            >
              <circle cx="100" cy="95" r="42" />
              <path d="M20 250c0-56 36-92 80-92s80 36 80 92z" />
            </svg>
          </div>
        )}
      </div>

      <FloatingBadge
        className="-left-4 top-1/3 sm:-left-10"
        enterDelay={600}
        floatDelay={0}
      >
        <span aria-hidden="true" className="font-mono text-accent">
          {"</>"}
        </span>
        Clean code
      </FloatingBadge>

      <FloatingBadge
        className="-right-3 bottom-16 sm:-right-8 sm:bottom-20"
        enterDelay={750}
        floatDelay={-3000}
      >
        <span aria-hidden="true" className="text-accent">
          ✦
        </span>
        Creative
      </FloatingBadge>
    </div>
  );
}