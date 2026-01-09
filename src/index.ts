import { ShuffledArrayPermutationIterator } from "./shuffled-array-permutation-iterator";
import { ShuffledPermutationIterator } from "./shuffled-permutation-iterator";

const main = () => {
  {
    const n = 100_000_000;
    const iterator = new ShuffledPermutationIterator(n);
    let count = 0;
    console.log("ShuffledPermutationIterator");
    for (const value of iterator) {
      console.log(`[${count}]:`, value);
      count++;
      if (count >= 10) break;
    }
  }

  {
    const items = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const iterator = new ShuffledArrayPermutationIterator(items);
    let count = 0;
    console.log("ShuffledArrayPermutationIterator");
    for (const permutation of iterator) {
      console.log(`[${count}]:`, permutation.join(""));
      count++;
      if (count >= 10) break;
    }
  }
};

main();
