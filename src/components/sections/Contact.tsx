import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { contact } from "@/lib/site-config";

const socials = [
  { label: "GitHub", href: contact.github },
  { label: "LinkedIn", href: contact.linkedin },
].filter((s): s is { label: string; href: string } => Boolean(s.href));

export function Contact() {
  const { email } = contact;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate scroll-mt-16 overflow-hidden border-t border-border/60"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-solid/20 blur-3xl"
      />

      <Container className="py-20 md:py-24 lg:py-32">
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-linear-to-br from-accent-soft via-surface to-surface px-6 py-12 text-center shadow-2xl shadow-accent-solid/10 sm:px-12 sm:py-16">
            {/* Decorative rings */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 size-64 rounded-full border border-accent/15"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-24 size-72 rounded-full border border-accent/10"
            />

            <p className="relative font-mono text-xs font-medium uppercase tracking-widest text-accent">
              Get in touch
            </p>

            <h2
              id="contact-heading"
              className="font-display relative mt-4 text-balance text-[length:clamp(2rem,1.2rem+3vw,3.5rem)] font-bold leading-[1.1] tracking-tight"
            >
              Let&apos;s build something together.
            </h2>

            <p className="relative mx-auto mt-6 max-w-xl text-pretty text-lg leading-8 text-muted">
              Have an idea, an opportunity, or just want to say hello? I&apos;d
              love to hear from you. Send me a message and I&apos;ll get back to
              you as soon as I can.
            </p>

            {email && (
              <div className="relative mt-9 flex flex-col items-center gap-3">
                <Button
                  href={`mailto:${email}`}
                  aria-label={`Send an email to ${email}`}
                  className="w-full sm:w-auto"
                >
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
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                  Say hello
                </Button>
                <p className="break-all text-sm text-muted">{email}</p>
              </div>
            )}

            {socials.length > 0 && (
              <ul
                aria-label="Social profiles"
                className="relative mt-8 flex flex-wrap items-center justify-center gap-3"
              >
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.label} profile (opens in a new tab)`}
                      className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-surface px-5 text-sm font-medium text-foreground transition-all duration-200 hover:border-accent/50 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-safe:hover:-translate-y-0.5"
                    >
                      {social.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}