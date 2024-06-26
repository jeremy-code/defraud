const react = require("eslint-plugin-react");
const reactCompiler = require("eslint-plugin-react-compiler");
const reactHooks = require("eslint-plugin-react-hooks");
const tailwind = require("eslint-plugin-tailwindcss");
const globals = require("globals");
const tseslint = require("typescript-eslint");

const base = require(".");

module.exports = tseslint.config(
  ...base,
  ...tailwind.configs["flat/recommended"],

  {
    plugins: {
      react,
      "react-compiler": reactCompiler,
      "react-hooks": reactHooks,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: {
            /**
             * Server actions must be async functions and can be used in
             * `action` and `onSubmit` props, which return `void`. This triggers
             * `no-misused-promises`. However, making it a synchronous function
             * throws error "Functions cannot be directly passed unless
             * explicitly exposed with 'use server'". Hence, this rule is
             * disabled for JSX attributes.
             *
             * {@link https://typescript-eslint.io/rules/no-misused-promises/#checksvoidreturn}
             * {@link https://react.dev/reference/rsc/server-actions}
             * {@link https://github.com/typescript-eslint/typescript-eslint/pull/4623}
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
        config: "./tailwind.config.ts",
      },
    },
  },
);
