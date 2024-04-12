import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => [
  { url: "https://defraud.io", lastModified: new Date() },
];

export default sitemap;
