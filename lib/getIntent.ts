const getIntent = (className: string) => {
  // HACK figure out the regex later
  let parts = className.split("-");
  parts.pop();
  return parts.join(",");
};

export default getIntent;
