const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const globals = require("globals");
const tseslint = require("typescript-eslint");

const base = require(".");

module.exports = tseslint.config(...base, {
  plugins: {
    react,
    "react-hooks": reactHooks,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
    ...reactHooks.configs.recommended.rules,
  },
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.browser,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
});
