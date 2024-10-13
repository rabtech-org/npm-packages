const util = require("util");
const path = require("path");
const exec = util.promisify(require("child_process").exec);
const simpleGit = require("simple-git").default;
const isCI = require("./isCI");

/**
 * Runs the local packages build
 */
async function buildPkgs() {
  const devPackages = !isCI
    ? [
        // packages needed for development
        build("@rabtech/wizard"),
      ]
    : [];

  /* LEVEL_0: packages that have no dependencies with others local packages and are required in others local packages */
  await Promise.all([...devPackages, build("@rabtech/cz-rabtech")]);
}

async function build(pkgName) {
  console.log(`[${pkgName}] building...`);
  return await exec(`npm run build -w ${pkgName}`);
}

async function lastCommitDate() {
  return (await simpleGit().log({ file: path.join(__dirname, "buildPkgs.js") }))
    .latest.date;
}

module.exports = {
  buildPkgs,
  lastCommitDate,
  build,
};
