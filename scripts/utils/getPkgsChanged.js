const simpleGit = require("simple-git").default;

/**
 * Returns an Array with the packages names changed
 */
module.exports = async function getPkgsChanged() {
  const pkgNamesChanges = (await simpleGit().diff(["--cached", "--name-only"]))
    .split("\n")
    .filter((filePath) => filePath.startsWith("packages"))
    .map((pkgPath) => {
      const [, pkgName] = pkgPath.split("/");
      return `@rabtech/${pkgName}`;
    });

  return pkgNamesChanges;
};
