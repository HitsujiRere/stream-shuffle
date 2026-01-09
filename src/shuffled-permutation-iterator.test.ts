import { describe, expect, it } from "bun:test";
import { ShuffledPermutationIterator } from "./shuffled-permutation-iterator";

describe("ShuffledPermutationIterator", () => {
  it("0からn-1まですべて重複なく含まれているか", () => {
    const n = 100;
    const iterator = new ShuffledPermutationIterator(n, 0);
    const permutation = Array.from(iterator);

    // 要素数が正しいか
    expect(permutation).toHaveLength(n);

    // 0..n-1 の範囲内か
    permutation.forEach((val) => {
      expect(val).toBeGreaterThanOrEqual(0n);
      expect(val).toBeLessThanOrEqual(n - 1);
    });

    // 重複を持たないか
    const uniques = new Set(permutation);
    expect(uniques.size).toBe(n);
  });

  it("同じシード値から同じ数列が生成されるか", () => {
    const n = 50n;
    const seed = 12345;

    const iter1 = new ShuffledPermutationIterator(n, seed);
    const iter2 = new ShuffledPermutationIterator(n, seed);

    const res1 = Array.from(iter1);
    const res2 = Array.from(iter2);

    expect(res1).toEqual(res2);
  });

  it("異なるシード値から異なる数列が生成されるか", () => {
    const n = 50n;
    const iter1 = new ShuffledPermutationIterator(n, 111);
    const iter2 = new ShuffledPermutationIterator(n, 222);

    const res1 = Array.from(iter1);
    const res2 = Array.from(iter2);

    expect(res1).not.toEqual(res2);
  });

  it("n=1 の場合に正しく 0n を返して終了するか", () => {
    const iterator = new ShuffledPermutationIterator(1n);
    const results = Array.from(iterator);

    expect(results).toEqual([0n]);
  });

  it("巨大な n=2^60 を指定してもエラーにならず next() が動作するか", () => {
    const hugeN = 1n << 60n;
    const iterator = new ShuffledPermutationIterator(hugeN);

    const firstValue = iterator.next();
    expect(firstValue.done).toBe(false);
    expect(typeof firstValue.value).toBe("bigint");
    expect(firstValue.value).toBeLessThanOrEqual(hugeN);
  });

  it("イテレータが終了した後に next() を呼ぶと done: true が返るか", () => {
    const iterator = new ShuffledPermutationIterator(5n);

    for (let i = 0; i < 5; i++) {
      iterator.next();
    }
    const last = iterator.next();

    expect(last.done).toBe(true);
    expect(last.value).toBeUndefined();
  });
});
