const colorRegex =
  /(?:$|^|)(red-|blue-|indigo-|cool-gray-|pink-|yellow-|teal-|gray-|orange-|green-|purple-)(?:$|^|)/;

const getType = (body: string) => {
  let parts = body.split("-");
  if (parts[parts.length - 1].match(/\n+$/)) {
    parts.pop();
  }
  const numless = parts.join("-");
  if (numless.match(colorRegex)) {
    return "color";
  }
  return numless;
};

const getIntent = (className: string) => {
  const prefixedParts = className.split(":");

  const [prefix, body] =
    prefixedParts.length > 1 ? prefixedParts : ["", prefixedParts[0]];

  // HACK figure out the regex later
  return [prefix, getType(body)].filter(String).join(":");
};

export default getIntent;
