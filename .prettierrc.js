/** @type {import('prettier').Config} */
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
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/(.*)$",
    "^[./]",
  ],
  // tailwindConfig is resolved relative to .prettierrc.js
  tailwindConfig: "./apps/client/tailwind.config.ts",
  tailwindAttributes: ["tw"], // for Satori
  tailwindFunctions: ["classnames", "clsx", "cn", "cva"],
};
