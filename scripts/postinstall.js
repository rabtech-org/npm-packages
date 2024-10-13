const isCI = require("./utils/isCI");
const { CACHE_KEYS, getCache, upsertCache } = require("./utils/cache");
const { buildPkgs, lastCommitDate } = require("./utils/buildPkgs");

const { isHuskyInstalled, isPkgsBuilt, pkgsBuiltDate } = CACHE_KEYS;

(async () => {
  const cache = await getCache();
  /**
   * Installation husky
   */
  if (!isCI && !cache[isHuskyInstalled]) {
    require("husky").install();
    await upsertCache({ [isHuskyInstalled]: true });
  }
  /**
   * Build local packages
   */
  const dateCondition =
    new Date(await lastCommitDate()) > new Date(cache[pkgsBuiltDate]);

  if (!cache[isPkgsBuilt] || dateCondition) {
    await buildPkgs();
    await upsertCache({ [isPkgsBuilt]: true, [pkgsBuiltDate]: new Date() });
  }
})();
