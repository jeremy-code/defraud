import { dirname, join } from "node:path";
import type { Config } from "tailwindcss";

import ui from "@defraud/ui/tailwind.config";

// Directly assign Config type, so TypeScript doesn't complain about the
// dependent Tailwind plugin types (e.g. tailwindcss-animate, etc.)
const config: Config = {
  presets: [ui],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Ensures Tailwind classes are scanned from `@defraud/ui` package
    join(
      dirname(require.resolve("@defraud/ui/tailwind.config")),
      "./src/**/*.{js,jsx,ts,tsx}",
    ),
  ],
};

export default config;
