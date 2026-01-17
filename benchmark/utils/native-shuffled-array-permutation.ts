/**
 * ShuffledPermutationIterator の愚直な実装
 */
export const nativeShuffledArrayPermutation = <T>(arr: T[]): T[][] => {
  const results: T[][] = [];
  const backtrack = (current: T[], remaining: T[]) => {
    if (remaining.length === 0) {
      results.push([...current]);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i]!);
      const nextRemaining = [
        ...remaining.slice(0, i),
        ...remaining.slice(i + 1),
      ];
      backtrack(current, nextRemaining);
      current.pop();
    }
  };

  backtrack([], arr);

  // Fisher-Yates アルゴリズムでシャッフル
  for (let i = results.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [results[i], results[j]] = [results[j]!, results[i]!];
  }

  return results;
};
