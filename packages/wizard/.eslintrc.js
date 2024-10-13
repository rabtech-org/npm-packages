module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "airbnb",
    "plugin:import/errors",
    "plugin:import/recommended",
    "plugin:import/warnings",
    "prettier",
  ],
  ignorePatterns: [
    "node_modules",
    "lib",
    ".eslintrc.js",
    "jest.config.js",
    "prettier.config.js",
    "bin",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["simple-import-sort", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "unicode-bom": "error",
    "eol-last": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
