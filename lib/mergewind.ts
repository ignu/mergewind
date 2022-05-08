function doesOverride(className: string, overrides: string[]): boolean {
  if (overrides.length === 0) return false;
  if (getNonSizeModifiedClass(overrides[0]) === className) return true;
  return doesOverride(className, overrides.slice(1));
}

const getNonSizeModifiedClass = (className: string) => {
  // HACK figure out the regex later
  let parts = className.split("-");
  parts.pop();
  return parts.join(",");
};

const stripDefaults = (defaults: string[], overrides: string[]) => {
  return defaults.filter((c) => {
    return !doesOverride(getNonSizeModifiedClass(c), overrides);
  });
};

const mergewind = (defaults: string, overrides: string) => {
  const defaultClasses = defaults.split(" ");
  const overrideClasses = overrides.split(" ");
  const newDefaults = stripDefaults(defaultClasses, overrideClasses);

  return [...newDefaults, ...overrideClasses].join(" ");
};

export default mergewind;
