import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md";

type ButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: Variant;
  size?: Size;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-solid text-white shadow-lg shadow-accent-solid/30 hover:-translate-y-0.5 hover:bg-accent-solid/90 hover:shadow-xl hover:shadow-accent-solid/40",
  secondary:
    "border border-border bg-surface text-foreground hover:-translate-y-0.5 hover:border-foreground/30",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}