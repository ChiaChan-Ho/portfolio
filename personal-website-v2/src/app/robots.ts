import type { MetadataRoute } from "next";

// TODO: swap in your real custom domain once it's connected on Vercel.
const SITE_URL = "https://chiachanho.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
