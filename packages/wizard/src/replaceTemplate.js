import fs from "fs/promises";
import { join } from "path";

const replaceAllFiles = (dest, files, { pkgName, pkgNameScoped }) =>
  files.map(async (fileName) => {
    const filePath = join(dest, fileName);
    const isDirectory = (await fs.stat(filePath)).isDirectory();

    if (isDirectory) {
      const dirFiles = await fs.readdir(join(dest, fileName));
      const newDestrination = join(dest, fileName);
      return replaceAllFiles(newDestrination, dirFiles, {
        pkgName,
        pkgNameScoped,
      });
    }
    const content = await fs.readFile(filePath, "utf-8");

    const newContent = content
      .replace(/{{package-name}}/g, pkgName)
      .replace(/{{package-name-scoped}}/g, pkgNameScoped);

    return fs.writeFile(filePath, newContent, "utf-8");
  });

export default async ({ pkgName, pkgNameScoped }) => {
  const destination = join(process.cwd(), pkgName);
  // eslint-disable-next-line no-console
  console.info(`💄 Files replacement...`);

  const filesName = await fs.readdir(destination);

  await Promise.all(
    replaceAllFiles(destination, filesName, { pkgName, pkgNameScoped })
  );
};
