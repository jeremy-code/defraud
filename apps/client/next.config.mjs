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
  transpilePackages: ["@defraud/database", "@defraud/ui"],
  experimental: {
    // Optimive imports for barrel files in component directories (i.e. '@/components/category')
    optimizePackageImports: [...componentDirectories],
    reactCompiler: true,
    webpackBuildWorker: true,
  },
};

export default withBundleAnalyzer(nextConfig);
