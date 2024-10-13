const fs = require("fs/promises");
const { prompt } = require("enquirer");

const CI_LINT_FILE_PATH = ".gitlab-ci/stages.lint.yml";
const CI_TEST_FILE_PATH = ".gitlab-ci/stages.test.yml";
const CI_DEPLOY_FILE_PATH = ".gitlab-ci/stages.deploy.yml";

const promptChoices = [
  {
    type: "input",
    name: "pkgName",
    message: "What is the package name?",
    hint: "package name (without @rabtech scope)",
    required: true,
  },
  {
    type: "confirm",
    name: "addLint",
    message: "Do you want to add the 'lint' job?",
    initial: true,
  },
  {
    type: "confirm",
    name: "addTest",
    message: "Do you want to add the 'test' job?",
  },
];

const testJob = (pkgName) => `
test:${pkgName}:
  variables:
    PKG_NAME: ${pkgName}
  <<: *test_job_template
`;

const lintJob = (pkgName) => `
eslint:${pkgName}:
  variables:
    PKG_NAME: ${pkgName}
  <<: *eslint_job_template
`;

const pagesJobScript = (pkgName) => `# ${pkgName}
    - test -e packages/${pkgName}/coverage && rm -rf .public/coverage/${pkgName} && mkdir -p .public/coverage/${pkgName} && cp -r packages/${pkgName}/coverage/* .public/coverage/${pkgName}
    # FINALIZE PUBLIC DIRECTORY`;

const pagesJobNeed = (pkgName) => `    # ${pkgName}
    - job: test:${pkgName}
      optional: true
`;

/**
 * Automatically adds ci jobs by user choices
 */
(async () => {
  const { pkgName, addLint, addTest } = await prompt(promptChoices);

  await Promise.all([
    ...(addLint
      ? [
          // add lint job
          fs.appendFile(CI_LINT_FILE_PATH, lintJob(pkgName)),
        ]
      : []),
    ...(addTest
      ? [
          // add test job
          fs.appendFile(CI_TEST_FILE_PATH, testJob(pkgName)),
          // add coverage page job
          (async () => {
            // add script to job
            await fs.appendFile(CI_DEPLOY_FILE_PATH, pagesJobNeed(pkgName));
            // add needs to job
            const deployFileData = await fs.readFile(
              CI_DEPLOY_FILE_PATH,
              "utf-8"
            );

            await fs.writeFile(
              CI_DEPLOY_FILE_PATH,
              deployFileData.replace(
                /# FINALIZE PUBLIC DIRECTORY/,
                pagesJobScript(pkgName)
              )
            );
          })(),
        ]
      : []),
  ]);

  if (addLint || addTest) {
    console.info(`\n@rabtech/${pkgName} jobs added!`);
  } else {
    console.info(`\n no jobs added!`);
  }
})();
