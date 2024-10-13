module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:import/warnings",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: [
    "node_modules",
    "lib",
    ".eslintrc.js",
    "jest.config.js",
    "prettier.config.js",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "simple-import-sort",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
    "unicode-bom": "error",
    "eol-last": "warn",
  },
};
