import fs from "fs/promises";
import { resolve } from "path";
import { Select } from "enquirer";

async function selectTemplate() {
  const tplDirPath = resolve(__dirname, "../", "templates");
  const templatesNames = await fs.readdir(tplDirPath);

  const prompt = new Select({
    message: `🎨 Select template`,
    choices: templatesNames.map((tplName) => ({
      message: tplName,
      value: tplName,
    })),
  });

  const choice = await prompt.run();
  return choice;
}

export default selectTemplate;
