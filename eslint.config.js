const base = require("@defraud/eslint-config");

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [{ ignores: ["apps/*", "packages/*"], ...base }];
