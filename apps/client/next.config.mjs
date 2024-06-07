import { readdir } from "fs/promises";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const componentDirectories = (
  await readdir("src/components", { withFileTypes: true })
).reduce(
  (acc, d) => (d.isDirectory() ? [...acc, `@/components/${d.name}`] : acc),
  [],
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  logging: { fetches: { fullUrl: true } },
  experimental: {
    /**
     * Optimive imports for barrel files (index.ts) in component directories
     * (i.e. `@/components/category`).
     * @see {@link https://nextjs.org/docs/app/api-reference/next-config-js/optimizePackageImports}
     */
    optimizePackageImports: [...componentDirectories, "@defraud/ui/components"],
    ppr: true,
    reactCompiler: true,
    webpackBuildWorker: true,
  },
};

export default withBundleAnalyzer(nextConfig);
