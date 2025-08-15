import { describe, it, expect } from "vitest";

const sum = (a: number, b: number) => a + b;

describe("sum", () => {
  it("두 숫자를 더한다", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
