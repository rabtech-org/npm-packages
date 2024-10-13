const spawn = require("child_process").spawn;
const os = require("os");
const getPkgsChanged = require("./utils/getPkgsChanged");

const SCRIPT_ERROR_NAME = "Script Error";

/**
 * Runs lints scripts only in changed packages
 */
(async () => {
  const childrens = [];
  const pkgNamesChanges = [...new Set(await getPkgsChanged())];

  /* Runs lint and format scripts for each package changed */
  pkgNamesChanges.map((pkgName) => {
    const lintChild = runScript(pkgName, "lint");
    const formatChild = runScript(pkgName, "format");

    childrens.push(lintChild, formatChild);
  });

  /* Catch scripts errors */
  process.on("warning", (warn) => {
    if (warn?.code === SCRIPT_ERROR_NAME) {
      // kill others childs processes
      childrens.forEach((c) => {
        c.kill();
      });
      // exit with error
      process.exit(1);
    }
  });
})();

function runScript(pkgName, script) {
  const child = spawn("npm", ["run", script, "--if-present", "-w", pkgName], {
    stdio: "inherit",
    shell: os.platform() === "win32",
  });

  child.on("exit", (code) => {
    if (code === 1) {
      process.emitWarning(
        `${pkgName} - "${script}" script exited with code 1 (error)`,
        {
          code: SCRIPT_ERROR_NAME,
        }
      );
    }
  });

  return child;
}
