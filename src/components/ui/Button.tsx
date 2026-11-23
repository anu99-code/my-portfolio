
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "sm" | "md";

type ButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-lg shadow-accent/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30",
  secondary:
    "border border-border bg-white text-foreground hover:-translate-y-0.5 hover:border-foreground/30",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
