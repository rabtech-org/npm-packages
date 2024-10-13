import validatePkgName from "validate-npm-package-name";
import { red, bold } from "ansi-colors";

export default (pkgName) => {
  const errorsList = [];
  const pkgNameScoped = pkgName.startsWith("@rabtech/")
    ? pkgName
    : `@rabtech/${pkgName}`;

  const { errors, warnings } = validatePkgName(pkgNameScoped) || {};

  if (errors) errorsList.push(...errors);
  if (warnings) errorsList.push(...warnings);

  if (errorsList.length) {
    // eslint-disable-next-line no-console
    console.error(
      "\n",
      `Invalid package-name ${bold(red(pkgNameScoped))}`,
      "\n\n",
      errorsList.map((error) => `- ${red(error)}\n`).join(" "),
      "\n"
    );
    process.exit(1);
  }

  return { pkgName, pkgNameScoped };
};
