import { MetadataRoute } from "next";

const PUBLIC_ROUTES = ["", "/about", "/contact", "/projects"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const publicRoutes: MetadataRoute.Sitemap = PUBLIC_ROUTES.map((route) => ({
    url: process.env.NEXT_PUBLIC_SERVER_URL + route,
    lastModified: "2024-07-019T00:00:00.000Z",
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.5,
  }));

  return [...publicRoutes];
}
