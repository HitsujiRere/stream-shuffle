import { describe, expect, it } from "bun:test";
import { ShuffledArrayPermutationIterator } from "./shuffled-array-permutation-iterator";

describe("ShuffledArrayPermutationIterator", () => {
  it("すべての順列が漏れなく生成されるか", () => {
    const items = [1, 2, 3, 4];
    const stream = new ShuffledArrayPermutationIterator(items);
    const results = Array.from(stream).map((p) => p.join());

    expect(results).toHaveLength(24);
    expect(new Set(results).size).toBe(24);
    expect(results).toContain("1,2,3,4");
    expect(results).toContain("4,3,2,1");
  });

  it("巨大な配列(k=30)でも生成できるか", () => {
    const items = Array.from({ length: 30 }, (_, i) => i);
    const startTime = Date.now();
    const stream = new ShuffledArrayPermutationIterator(items);

    const first = stream.next();
    const duration = Date.now() - startTime;

    expect(first.done).toBe(false);
    expect(first.value).toHaveLength(30);
    expect(duration).toBeLessThan(100);
  });
});
