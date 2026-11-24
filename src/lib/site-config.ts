export const siteConfig = {
  name: "Anuradha",
  initials: "AM",
  role: "Aspiring Software Engineer",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ],
  hero: {
    status: "Open to opportunities",
    headlineStart: "I build modern web experiences with",
    headlineAccent: "creativity",
    headlineEnd: "and code.",
    intro:
      "Hi, I'm Anuradha, an aspiring software engineer who enjoys turning ideas into fast, accessible and thoughtfully designed web applications.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
} as const;

/** Fill these in. Anything left empty is simply not shown on the page. */
export const contact: {
  email?: string;
  github?: string;
  linkedin?: string;
} = {
  email: "anuradhath1999@gmail.com", // e.g. "you@example.com"
  github: "https://github.com/anu99-code", // e.g. "https://github.com/your-username"
  linkedin: "https://www.linkedin.com/in/anuradha-madhuwanthi-139b93248/", // e.g. "https://www.linkedin.com/in/your-profile"
};