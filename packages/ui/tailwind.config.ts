import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";
import colors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";
import type { PresetsConfig } from "tailwindcss/types/config";

// Type annotation with `PresetsConfig` type is necessary, so that TypeScript
// doesn't complain about the downstream Tailwind plugins external packages'
// types (e.g. tailwindcss-animate) when added to `presets` array.
const uiConfig: PresetsConfig = {
  darkMode: ["selector", "[data-theme='dark']"],
  theme: {
    container: {
      center: true,
      padding: "1rem", // sizes.4 (16px)
    },
    extend: {
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },
      colors: {
        gray: colors.stone,
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "hsl(350, 86%, 97%)",
          100: "hsl(352, 85%, 95%)",
          200: "hsl(350, 84%, 90%)",
          300: "hsl(349, 83%, 82%)",
          400: "hsl(348, 82%, 71%)",
          500: "hsl(347, 77%, 57%)", // Pantone 17-1755
          600: "hsl(344, 67%, 50%)",
          700: "hsl(343, 71%, 41%)",
          800: "hsl(340, 69%, 35%)",
          900: "hsl(339, 65%, 30%)",
          950: "hsl(340, 75%, 16%)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-lexend)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(-1rem)" }, // equivalent to -translate-y-4
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 2s ease-in-out infinite",
      },
    },
  },
  plugins: [animate, typography],
};

export default uiConfig;
