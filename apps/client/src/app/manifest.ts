import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => ({
  name: "defraud",
  short_name: "defraud",
  description: "Defraud is a tool to help you identify and avoid scams",
  start_url: "/",
  display: "standalone",
  background_color: "#fff",
  theme_color: "#fff",
});

export default manifest;
