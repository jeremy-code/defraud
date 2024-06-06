const eslint = require("@eslint/js");
const globals = require("globals");
const tseslint = require("typescript-eslint");

module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
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
  },
  {
    files: ["*.{js,cjs,jsx,mjs}"],
    ...tseslint.configs.disableTypeChecked,
  },
);
