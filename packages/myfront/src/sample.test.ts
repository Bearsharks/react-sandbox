import { describe, it, expect } from "vitest";

const minus = (a: number, b: number) => a - b;

describe("minus", () => {
  it("두 숫자를 뺀다", () => {
    expect(minus(1, 2)).toBe(-1);
  });
});
