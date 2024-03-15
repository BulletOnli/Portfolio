import { MetadataRoute } from "next";

const PUBLIC_ROUTES = ["", "about", "contact", "projects"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const publicRoutes: MetadataRoute.Sitemap = PUBLIC_ROUTES.map((route) => ({
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}/${route}`,
  }));

  return [...publicRoutes];
}
