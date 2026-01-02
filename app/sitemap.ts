import type { MetadataRoute } from "next"
import { SITE_CONFIG, SERVICES } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  const routes: MetadataRoute.Sitemap = [
    {
      url: SITE_CONFIG.url,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE_CONFIG.url}#${service.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...routes, ...serviceRoutes]
}
