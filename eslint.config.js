const base = require("@defraud/eslint-config");

/** @type {import('eslint').Linter.Config[]} */
module.exports = [{ ignores: ["apps/*", "packages/*"], ...base }];
