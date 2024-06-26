const next = require("@next/eslint-plugin-next");
const drizzle = require("eslint-plugin-drizzle");
const eslintImport = require("eslint-plugin-import");
const jsxA11y = require("eslint-plugin-jsx-a11y");
const tseslint = require("typescript-eslint");

const react = require("./react");

module.exports = tseslint.config(
  {
    ignores: [".next"],
  },
  ...react,
  {
    plugins: {
      "@next/next": next,
      drizzle,
      import: eslintImport,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...drizzle.configs.recommended.rules,
      /**
       * `@vercel/og` (which is bundled into Next.js) uses `tw` prop
       * @see {@link https://github.com/vercel/next.js/blob/canary/packages/next/src/compiled/%40vercel/og/types.d.ts#L115}
       * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md}
       */
      "react/no-unknown-property": ["error", { ignore: ["tw"] }],
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".mts", ".cts", ".tsx", ".d.ts"],
      },
      "import/resolver": {
        "eslint-import-resolver-node": {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        "eslint-import-resolver-typescript": {
          alwaysTryTypes: true,
        },
      },
      tailwindcss: {
        classRegex: "^class(Name)?|tw$", // `tw` for Satori
      },
    },
  },
);
