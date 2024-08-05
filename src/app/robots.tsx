import { baseUrl } from "./sitemap";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        Disallow: "/"

      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  }
}
