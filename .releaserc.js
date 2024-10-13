const {
  typesWithRelease,
  headerPattern,
  releaseNotesGeneratorTransformer,
} = require("./scripts/utils/releaseUtils");

module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        parserOpts: {
          headerPattern,
        },
        releaseRules: typesWithRelease,
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "angular",
        parserOpts: {
          headerPattern,
        },
        writerOpts: {
          transform: releaseNotesGeneratorTransformer,
        },
      },
    ],
    "@semantic-release/changelog",
    "@semantic-release/gitlab",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "package-lock.json", "CHANGELOG.md"],
        message: "🔖 release: ${nextRelease.gitTag} [skip ci]",
      },
    ],
    [
      "@semantic-release/exec",
      {
        sucessCmd: "sleep 3",
      },
    ],
  ],
};
