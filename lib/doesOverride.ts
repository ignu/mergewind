import getIntent from "./getIntent";

function recursiveDoesOverride(
  className: string,
  overrides: string[]
): boolean {
  if (overrides.length === 0) return false;
  if (getIntent(overrides[0]) === className) return true;
  return doesOverride(className, overrides.slice(1));
}

const doesOverride = (className: string, overrides: string[]) => {
  return recursiveDoesOverride(getIntent(className), overrides);
};
export default doesOverride;
