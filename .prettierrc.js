/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "all",
  experimentalTernaries: true,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "^react(?:$|/(.*)$)", // "react" or "react/*"
    "^next(?:$|/(.*)$)", // "next" or "next/*"
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@defraud/(.*)$", // Internal monorepo packages
    "^@/(.*)$", // Absolute imports
    "^[./]", // Relative imports
  ],
  // Tailwind CSS config is resolved relative to `.prettierrc.js`
  tailwindConfig: "./apps/client/tailwind.config.ts",
  tailwindAttributes: ["tw"], // for Satori
  tailwindFunctions: ["classnames", "clsx", "cn", "cva"],
};
