const jsxA11y = require("eslint-plugin-jsx-a11y");
const reactCompiler = require("eslint-plugin-react-compiler");
const reactHooks = require("eslint-plugin-react-hooks");
const react = require("eslint-plugin-react");
const tailwind = require("eslint-plugin-tailwindcss");
const globals = require("globals");
const tseslint = require("typescript-eslint");

const base = require(".");

module.exports = tseslint.config(
  ...base,
  ...tailwind.configs["flat/recommended"],
  jsxA11y.flatConfigs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  {
    plugins: {
      "react-compiler": reactCompiler,
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: {
            /**
             * Server actions must be async functions and may be passed to
             * `action` and `onSubmit` props, which return `void` and not
             * `Promise<void>`. This triggers `no-misused-promises`. However,
             * making it a synchronous function throws error "Functions cannot
             * be directly passed unless explicitly exposed with 'use server'".
             *
             * @see {@link https://typescript-eslint.io/rules/no-misused-promises/#checksvoidreturn}
             * @see {@link https://react.dev/reference/rsc/server-actions}
             */
            attributes: false,
          },
        },
      ],
      "react-compiler/react-compiler": "error",
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
      tailwindcss: {
        callees: ["classnames", "clsx", "cn", "cva"],
      },
    },
  },
);
