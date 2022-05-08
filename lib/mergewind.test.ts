import mergewind from "./mergewind";

describe("mergewind", () => {
  it("merges two classes into one string", () => {
    const defaults = "text-bold p-4";
    const overrides = "bg-red-100";

    expect(mergewind(defaults, overrides)).toEqual("text-bold p-4 bg-red-100");
  });

  it("removes redundant classes", () => {
    const defaults = "bg-red-500 p-4 m-4";
    const overrides = "p-16 m-16";

    expect(mergewind(defaults, overrides)).toEqual("bg-red-500 p-16 m-16");
  });
});
