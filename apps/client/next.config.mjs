import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  logging: { fetches: { fullUrl: true } },
  transpilePackages: ["@defraud/database", "@defraud/ui"],
  experimental: {
    reactCompiler: true,
    webpackBuildWorker: true,
  },
};

export default withBundleAnalyzer(nextConfig);
