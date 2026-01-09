import { ShuffledPermutationIterator } from "./shuffled-permutation-iterator";

const main = () => {
  const n = 100_000_000;
  const iterator = new ShuffledPermutationIterator(n);

  let count = 0;
  for (const value of iterator) {
    console.log(value);
    if (++count >= 10) break;
  }
};

main();
