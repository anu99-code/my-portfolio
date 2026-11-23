export const siteConfig = {
  name: "Your Name",
  initials: "YN",
  role: "Aspiring Software Engineer",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ],
  hero: {
    status: "Open to opportunities",
    headlineStart: "I build modern web experiences with",
    headlineAccent: "creativity",
    headlineEnd: "and code.",
    intro:
      "Hi, I'm Your Name, an aspiring software engineer who enjoys turning ideas into fast, accessible and thoughtfully designed web applications.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
} as const;