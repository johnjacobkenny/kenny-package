import { add, multiply, subtract } from "../src/index";

describe("add", () => {
  it("should add two positive numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("should subtract two positive numbers", () => {
    expect(subtract(5, 2)).toBe(3);
  });
});

describe("mulitply", () => {
  it("should multiply two positive numbers", () => {
    expect(multiply(5, 2)).toBe(10);
  });
});
