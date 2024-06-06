/** @type {import('lint-staged').Config} */
module.exports = {
  /**
   * Prevents turbo from seeing the filenames as tasks, and instead passes them
   * as arguments.
   *
   * @see {@link https://turbo.build/repo/docs/reference/run}
   */
  "*.{js,jsx,ts,tsx}": "pnpm lint --",
};
