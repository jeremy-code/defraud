import { dirname, join } from "node:path";
import type { Config } from "tailwindcss";

import ui from "@defraud/ui/tailwind.config";

export default {
  presets: [ui],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Ensures Tailwind classes are scanned from `@defraud/ui` package
    join(
      dirname(require.resolve("@defraud/ui/tailwind.config")),
      "./src/**/*.{js,jsx,ts,tsx}",
    ),
  ],
} satisfies Config;
