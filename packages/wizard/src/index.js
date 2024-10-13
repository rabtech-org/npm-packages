/* eslint-disable no-console */
import { Command } from "commander";
import parsePkgName from "./parsePkgName";
import { version, name } from "../package.json";
import selectTemplate from "./selectTemplate";
import copyTemplate from "./copyTemplate";
import replaceTemplate from "./replaceTemplate";

const program = new Command();

program
  .name(name)
  .version(version, "-v, --version", `output the ${name} version`)
  .description("Package scaffolding generator.")
  .argument("<package-name>", "the package name", parsePkgName)
  .showHelpAfterError()
  .action(async ({ pkgName, pkgNameScoped }) => {
    const tplName = await selectTemplate(pkgName);

    console.info("\n");
    await copyTemplate(pkgName, tplName);
    console.info("\n");
    await replaceTemplate({ pkgName, pkgNameScoped });
    console.info("\n");
    console.log(`✅ ${pkgNameScoped} created!`);
    console.info("\n");
  });

(async () => {
  try {
    await program.parseAsync();
  } catch (err) {
    if (err?.length === 0) {
      console.info("\n");
      console.log("👋 bye bye");
      return;
    }
    throw err;
  }
})();
