import { parser } from "./parser";

describe("Parser cases", () => {
  it("1 + 32", () => {
    expect(parser("1 + 32")).toEqual([1, "+", 32]);
  });

  it("11 + 3 * 22", () => {
    expect(parser("11 + 3 * 22")).toEqual([11, "+", 3, "*", 22]);
  });

  it("1 + 32 - 2 + 2", () => {
    expect(parser("1 + 32 - 2 + 2")).toEqual([1, "+", 32, "-", 2, "+", 2]);
  });
  it("7 ^ 2 - 15 * 3", () => {
    expect(parser("7 ^ 2 - 15 * 3")).toEqual([7, "^", 2, "-", 15, "*", 3]);
  });
});
