import { ShuffledPermutationIterator } from "./shuffled-permutation-iterator";

/**
 * 配列の全順列をランダムな順序で得る
 */
export class ShuffledArrayPermutationIterator<T>
  implements IterableIterator<T[]>
{
  private readonly source: T[];
  private readonly k: number;
  private readonly totalPermutations: bigint;
  private readonly indexIterator: ShuffledPermutationIterator;
  private readonly factorials: bigint[];

  constructor(sourceArray: T[], seed?: number | bigint) {
    this.source = [...sourceArray];
    this.k = this.source.length;

    this.factorials = ShuffledArrayPermutationIterator.calculateFactorials(
      this.k,
    );
    this.totalPermutations = this.factorials[this.k]!;

    this.indexIterator = new ShuffledPermutationIterator(
      this.totalPermutations,
      seed,
    );
  }

  private static calculateFactorials(k: number): bigint[] {
    const facts = [...Array(k + 1)];
    facts[0] = 1n;
    for (let i = 1; i <= k; i++) {
      facts[i] = facts[i - 1] * BigInt(i);
    }
    return facts;
  }

  /**
   * indexを順列配列に変換する。
   */
  private decodePermutation(index: bigint): T[] {
    const elements = [...this.source];
    const result: T[] = [];
    let currentIdx = index;

    for (let i = this.k - 1; i >= 0; i--) {
      const factorial = this.factorials[i]!;
      const pos = Number(currentIdx / factorial);
      currentIdx %= factorial;

      result.push(elements.splice(pos, 1)[0]!);
    }

    return result;
  }

  public next(): IteratorResult<T[]> {
    const nextIndex = this.indexIterator.next();
    if (nextIndex.done) {
      return { done: true, value: undefined };
    }

    const permutation = this.decodePermutation(nextIndex.value);
    return { done: false, value: permutation };
  }

  public [Symbol.iterator](): IterableIterator<T[]> {
    return this;
  }
}
