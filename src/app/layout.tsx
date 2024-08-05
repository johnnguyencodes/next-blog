import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { SiteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: SiteConfig.name,
    template: `%s | ${SiteConfig.name}`,
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
