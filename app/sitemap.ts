import { MetadataRoute } from "next";

const URL = "https://www.carlosbotero.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/en-US",
    "en-US/projects",
    "/es-VE",
    "es-VE/proyectos",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
