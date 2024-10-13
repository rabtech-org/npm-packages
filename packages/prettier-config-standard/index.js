module.exports = {
  printWidth: 100,
  tabWidth: 4,
  singleQuote: true,
  trailingComma: "all",
  arrowParens: "avoid",
  overrides: [
    {
      files: ["*.yml", "*.yaml", "*.json"],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
