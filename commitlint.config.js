const { types, headerPattern } = require("./scripts/utils/releaseUtils");

module.exports = {
  extends: ["@commitlint/config-angular"],
  rules: {
    "type-enum": [2, "always", types],
  },
  parserPreset: {
    parserOpts: {
      headerPattern,
    },
  },
};
