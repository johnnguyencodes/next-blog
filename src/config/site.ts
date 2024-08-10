type SiteConfigType = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    linkedin: string;
    github: string;
  };
};

export const SiteConfig: SiteConfigType = {
  name: "John Nguyen's Website",
  description:
    "My website built with Next.js 14, Shadcn UI, Prisma, and markdown support.",
  url: "https://www.johnnguyen.io",
  ogImage: "https://www.johnnguyen.io/og",
  links: {
    linkedin: "https://linkedin.com/in/johnnguyencodes",
    github: "https://github.com/johnnguyencodes",
  },
};
