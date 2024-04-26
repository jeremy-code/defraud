/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "turbo",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    /**
     * {@link https://typescript-eslint.io/packages/parser#experimental_useprojectservice}
     *
     * Automatically load tsconfig.json files
     */
    EXPERIMENTAL_useProjectService: true,
  },
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
  },
  overrides: [
    {
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      files: ["*.{js,cjs,jsx,mjs}"],
    },
  ],
};
