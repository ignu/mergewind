import mergewind from "./mergewind";

describe("mergewind", () => {
  it("merges two classes into one string", () => {
    const defaults = "text-bold";
    const overrides = "bg-red-100";

    expect(mergewind(defaults, overrides)).toEqual("text-bold bg-red-100");
  });
});
