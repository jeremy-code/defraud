import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  plugins: [daisyui],
} satisfies Config;

export default config;
