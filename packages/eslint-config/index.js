const eslint = require("@eslint/js");
const globals = require("globals");
const tseslint = require("typescript-eslint");
const turbo = require("eslint-plugin-turbo");

module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    plugins: { turbo },
    rules: {
      ...turbo.configs.recommended.rules,
    },
    languageOptions: {
      parserOptions: {
        /**
         * {@link https://typescript-eslint.io/packages/parser#experimental_useprojectservice}
         *
         * Automatically load tsconfig.json files
         */
        EXPERIMENTAL_useProjectService: true,
      },
      globals: {
        ...globals.node,
      },
    },
    settings: {
      ...turbo.configs.recommended.settings,
    },
  },
  {
    files: ["*.{js,cjs,jsx,mjs}"],
    ...tseslint.configs.disableTypeChecked,
  },
);
