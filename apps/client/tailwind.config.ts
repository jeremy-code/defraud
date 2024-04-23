import { dirname, join } from "node:path";
import ui from "@defraud/ui/tailwind.config";
import type { Config } from "tailwindcss";

// directly assign types, so pnpm doesn't complain about the Tailwind plugin
// types (e.g. tailwindcss-animate, etc.)
const config: Config = {
  presets: [ui],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // ensures Tailwind classes are scanned from UI package
    join(
      dirname(require.resolve("@defraud/ui/tailwind.config")),
      "./src/**/*.{js,jsx,ts,tsx}",
    ),
  ],
};

export default config;
