/**
 * ランダムな順序の 0 から n-1 までの数列のイテレータ
 */
export class ShuffledPermutationIterator implements IterableIterator<bigint> {
  private readonly n: bigint;
  private readonly seed: bigint;
  private readonly halfBits: bigint;
  private readonly mask: bigint;
  private currentIndex: bigint = 0n;

  /**
   * @param n 数列の長さ
   * @param seed シード値
   */
  constructor(n: number | bigint, seed: number | bigint = Date.now()) {
    this.n = BigInt(n);
    this.seed = BigInt(seed);

    const bits = this.n.toString(2).length;
    const totalBits = bits % 2 === 0 ? bits : bits + 1;
    this.halfBits = BigInt(totalBits / 2);
    this.mask = (1n << this.halfBits) - 1n;
  }

  /**
   * Splitmix64疑似乱数生成器
   */
  private f(val: bigint, round: number): bigint {
    let x = (val ^ this.seed) + BigInt(round);
    x = (x ^ (x >> 30n)) * 0xbf58476d1ce4e5b9n;
    x = (x ^ (x >> 27n)) * 0x94d049bb133111ebn;
    return x & this.mask;
  }

  /**
   * Feistel構造による全単射置換
   */
  private permute(val: bigint): bigint {
    let l = val >> this.halfBits;
    let r = val & this.mask;

    // 4段以上で強擬似ランダム置換を得る
    for (let i = 0; i < 4; i++) {
      const nextL = r;
      const nextR = l ^ this.f(r, i);
      l = nextL;
      r = nextR;
    }

    return (l << this.halfBits) | r;
  }

  public next(): IteratorResult<bigint> {
    if (this.currentIndex >= this.n) {
      return { done: true, value: undefined };
    }

    let curr = this.currentIndex;
    let result: bigint;

    // 範囲内に収まるまで再帰的に置換を繰り返す
    while (true) {
      curr = this.permute(curr);
      if (curr < this.n) {
        result = curr;
        break;
      }
    }

    this.currentIndex++;
    return { done: false, value: result };
  }

  public [Symbol.iterator](): IterableIterator<bigint> {
    return this;
  }
}
