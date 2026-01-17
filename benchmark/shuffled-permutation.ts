// benchmark.ts
import { ShuffledPermutationIterator } from "../src/shuffled-permutation-iterator";
import { nativeShuffledPermutation } from "./utils/native-shuffled-permutation";

// 'optimized' | 'naive'
const mode = process.argv[2];
const n = Number(process.argv[3] || "10");
const extract = Number(process.argv[4] || "1000");

if (mode === "optimized") {
  const iterator = new ShuffledPermutationIterator(n);

  for (let i = 0; i < extract; i++) {
    const result = iterator.next();
    if (result.done) break;
  }
} else {
  nativeShuffledPermutation(n);
}
