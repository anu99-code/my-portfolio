import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name}, home`}
      className="group flex items-center gap-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <span
        aria-hidden="true"
        className="font-display grid size-9 place-items-center rounded-xl bg-accent-solid text-sm font-bold tracking-tight text-white transition-transform duration-200 group-hover:-rotate-6"
      >
        {siteConfig.initials}
      </span>
      <span className="font-display hidden text-lg font-semibold tracking-tight sm:inline">
        {siteConfig.name}
        <span className="text-accent">.</span>
      </span>
    </Link>
  );
}