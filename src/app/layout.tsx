import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { SiteConfig } from "@/config/site";
import { MainNav } from "@/components/main-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: {
    default: SiteConfig.name,
    template: `%s | ${SiteConfig.name}`,
  },
  verification: {
    google: "ycOPI1uEuig1PZxDqcxOC8xzCtJCGWMqKsCLyck_lSc",
  },
  description: SiteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "Shadcn UI",
    "JavaScript",
    "Blog",
  ],
  authors: [
    {
      name: "John Nguyen",
      url: "https://linkedin.com/in/johnnguyencodes",
    },
  ],
  creator: "John Nguyen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SiteConfig.url,
    title: SiteConfig.name,
    description: SiteConfig.description,
    siteName: SiteConfig.name,
  },
  // linkedin: {
  //   card: "summary_large_image",
  //   title: SiteConfig.name,
  //   description: SiteConfig.description,
  //   images: [`${SiteConfig.url}/og`],
  //   creator: "johnnguyencodes",
  // },
  // icons: {
  //   icon: `/favicon.ico`,
  //   shortcut: `/favicon-16x16.png`,
  //   apple: "apple-touch-icon.png",
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} debug-screens h-full bg-lightmode-white text-lightmode-black selection:bg-lightmode-highlight selection:text-lightmode-black dark:bg-darkmode-black dark:text-darkmode-white dark:selection:bg-darkmode-highlight dark:selection:text-lightmode-black`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
