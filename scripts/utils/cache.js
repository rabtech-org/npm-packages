const fs = require("fs/promises");
const { join } = require("path");

const cacheDirPath = "scripts";
const cacheFilePath = join(cacheDirPath, ".cache");

const CACHE_KEYS = {
  isPkgsBuilt: "isPkgsBuilt",
  pkgsBuiltDate: "pkgsBuiltDate",
  isHuskyInstalled: "isHuskyInstalled",
};

const DEFAULT_CACHE = {
  [CACHE_KEYS.isPkgsBuilt]: false,
  [CACHE_KEYS.pkgsBuiltDate]: "1970-01-01",
  [CACHE_KEYS.isHuskyInstalled]: false,
};

async function getCache() {
  try {
    const cacheFile = (await fs.readFile(cacheFilePath)).toString();
    const cacheFileJson = JSON.parse(cacheFile);
    return { ...DEFAULT_CACHE, ...cacheFileJson };
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.mkdir(cacheDirPath, { recursive: true });
      await fs.writeFile(cacheFilePath, JSON.stringify(DEFAULT_CACHE));
      return getCache();
    }
    throw err;
  }
}

async function upsertCache(newData) {
  const curretCacheFile = await getCache();
  const newCacheFile = {
    ...curretCacheFile,
    ...newData,
  };
  await fs.writeFile(cacheFilePath, JSON.stringify(newCacheFile));
}

module.exports = {
  CACHE_KEYS,
  getCache,
  upsertCache,
};
