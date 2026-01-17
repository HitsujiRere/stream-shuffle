/**
 * ShuffledPermutationIterator の愚直な実装
 */
export const nativeShuffledPermutation = (n: number): bigint[] => {
  const result: bigint[] = [];
  for (let i = 0n; i < n; i++) {
    result.push(i);
  }

  // Fisher-Yates アルゴリズムでシャッフル
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j]!, result[i]!];
  }

  return result;
};
