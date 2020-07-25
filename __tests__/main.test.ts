import { add } from "../src/index";

describe("add", () => {
  it("should add two positive numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
