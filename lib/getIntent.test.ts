import getIntent from "./getIntent";

describe("getIntent", () => {
  it("can understand p-*", () => {
    expect(getIntent("p-4")).toEqual("p");
    expect(getIntent("dark:p-4")).toEqual("dark:p");
  });

  it("can understand p-*", () => {
    expect(getIntent("dark:bg-gray-900")).toEqual("dark:color");
  });
});
