import fse from 'fs-extra';
import { join, resolve } from 'path';
import { bold, gray, red } from 'ansi-colors';

export default async (pkgName, tplName) => {
    const source = resolve(__dirname, '../', 'templates', tplName);
    const destination = join(process.cwd(), pkgName);
    const tmp = resolve(__dirname, '../', '.tmp');

    const alreadyExist = await fse.exists(destination);

    if (alreadyExist) {
        // eslint-disable-next-line no-console
        console.error(
            `${red('🔴 ERROR:')} directory "${bold(pkgName)}" already exist in ${gray(
                process.cwd(),
            )}\n`,
        );
        process.exit(1);
    }

    // eslint-disable-next-line no-console
    console.info(`📦 Package creation... ${gray(destination)}`);
    try {
        await fse.emptyDir(tmp);
        await fse.ensureDir(tmp);
        await fse.copy(source, tmp);
        await fse.move(tmp, destination, { overwrite: true });
    } catch (err) {
        await fse.remove(tmp);
        throw err;
    }
};
