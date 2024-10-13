const angularTypeEnum = require("@commitlint/config-angular-type-enum");
const czRabtechTypes = require("@rabtech/cz-rabtech/lib/types");

const types = [
  ...angularTypeEnum.rules["type-enum"][2],
  ...czRabtechTypes.map(({ emoji, name }) => `${emoji} ${name}`),
];

const typesWithRelease = [
  ...types
    .map((type) => ({
      type,
      ...(type.includes("fix") || type.includes("feat") || type.includes("perf")
        ? type.includes("feat")
          ? { release: "minor" }
          : { release: "patch" }
        : {}),
    }))
    .filter(({ release }) => !!release),
  { breaking: true, release: "major" },
  { revert: true, release: "patch" },
];
const emojiRegexOptions = czRabtechTypes.map(({ emoji }) => emoji).join("|");
// /^((?:✨|🐛|⚡️|⏪|📝|🎨|♻️|🧪|🏗|👷)?\s*\w*)(?:\((.*)\))?!?: (.*)$/
const headerPattern = new RegExp(
  `^((?:${emojiRegexOptions})?\\s*\\w*)(?:\\((.*)\\))?!?: (.*)$`
);

module.exports = {
  types,
  typesWithRelease,
  headerPattern,
  releaseNotesGeneratorTransformer,
};

function releaseNotesGeneratorTransformer(commit, context) {
  let discard = true;
  const issues = [];

  commit.notes.forEach((note) => {
    note.title = "BREAKING CHANGES";
    discard = false;
  });

  if (commit.type === "feat" || commit.type === "✨ feat") {
    commit.type = "✨ Features";
  } else if (commit.type === "fix" || commit.type === "🐛 fix") {
    commit.type = "🐛 Bug Fixes";
  } else if (commit.type === "perf" || commit.type === "⚡️ perf") {
    commit.type = "⚡️ Performance Improvements";
  } else if (commit.type === "revert" || commit.revert) {
    commit.type = "Reverts";
  } else if (discard) {
    return;
  } else if (commit.type === "docs") {
    commit.type = "Documentation";
  } else if (commit.type === "style") {
    commit.type = "Styles";
  } else if (commit.type === "refactor") {
    commit.type = "Code Refactoring";
  } else if (commit.type === "test") {
    commit.type = "Tests";
  } else if (commit.type === "build") {
    commit.type = "Build System";
  } else if (commit.type === "ci") {
    commit.type = "Continuous Integration";
  }

  commit.scope = "";
  // if (commit.scope === "*") {
  // }

  if (typeof commit.hash === "string") {
    commit.shortHash = commit.hash.substring(0, 7);
  }

  if (typeof commit.body === "string") {
    commit.body.replace(/#([a-zA-Z]+\s[a-zA-Z0-9-]+)/g, (_, issue) => {
      if (issue) {
        issues.push(issue);
      }
    });
  }

  if (typeof commit.subject === "string") {
    if (context.host) {
      // User URLs.
      commit.subject = commit.subject.replace(
        /\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g,
        (_, username) => {
          if (username.includes("/")) {
            return `@${username}`;
          }

          return `[@${username}](${context.host}/${username})`;
        }
      );
    }
  }

  // remove references that already appear in the subject
  commit.references = commit.references.filter((reference) => {
    if (issues.indexOf(reference.issue) === -1) {
      return true;
    }

    return false;
  });

  if (issues.length) {
    commit.subject = `${commit.subject} - (${issues.join(", ")})`;
  }

  return commit;
}
