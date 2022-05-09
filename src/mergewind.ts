import doesOverride from "./doesOverride";

const stripDefaults = (defaults: string[], overrides: string[]) => {
  return defaults.filter((c) => !doesOverride(c, overrides));
};

const mergewind = (defaults: string, overrides: string) => {
  const defaultClasses = defaults.split(" ");
  const overrideClasses = overrides.split(" ");
  const newDefaults = stripDefaults(defaultClasses, overrideClasses);

  return [...newDefaults, ...overrideClasses].join(" ");
};

let memoizedClasses: { [K: string]: string } = {};
const memoizedMergeWind = (defaults: string, overrides: string) => {
  const key = defaults + overrides;
  if (!memoizedClasses[key]) {
    memoizedClasses[key] = mergewind(defaults, overrides);
  }
  return memoizedClasses[key];
};

export default memoizedMergeWind;
