const { build } = require("./buildPkgs");

async function buildPeerDependecies(packageJson) {
  if (!packageJson?.peerDependencies) {
    console.log("[buildPeerDependecies] No peerDependencies found.");
  }

  const { peerDependencies, name } = packageJson;
  console.log(`[buildPeerDependecies] build "${name}" peer dependecies\n`);
  const pkgBuildPromises = Object.keys(peerDependencies)
    .filter((p) => p.startsWith("@rabtech"))
    .map((pkgName) => build(pkgName));

  await Promise.all(pkgBuildPromises);
}

module.exports = {
  buildPeerDependecies,
};
