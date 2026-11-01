import type { MetadataRoute } from "next";

// TODO: swap in your real custom domain once it's connected on Vercel.
const SITE_URL = "https://chiachanho.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
  ];
}
