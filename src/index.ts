import { ShuffledArrayPermutationIterator } from "./shuffled-array-permutation-iterator";
import { ShuffledPermutationIterator } from "./shuffled-permutation-iterator";

const main = () => {
  {
    const n = 20;
    const iterator = new ShuffledPermutationIterator(n);
    console.log(`ShuffledPermutationIterator: Shuffled 0..${n - 1}`);
    console.log(Array.from(iterator));
  }

  {
    const n = 1_000_000_000;
    const iterator = new ShuffledPermutationIterator(n);
    let count = 0;
    console.log(
      `ShuffledPermutationIterator: Shuffled 0..1e${Math.log10(n)}-1`,
    );
    for (const value of iterator) {
      console.log(`[${count}]:`, value);
      count++;
      if (count >= 10) break;
    }
  }

  {
    const items = "ABCD".split("");
    const iterator = new ShuffledArrayPermutationIterator(items);
    console.log(
      `ShuffledArrayPermutationIterator: Shuffled "${items.join("")}" permutations`,
    );
    console.log(Array.from(iterator).map((perm) => perm.join("")));
  }

  {
    const items = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const iterator = new ShuffledArrayPermutationIterator(items);
    let count = 0;
    console.log(
      `ShuffledArrayPermutationIterator: Shuffled "${items.join("")}" permutations`,
    );
    for (const permutation of iterator) {
      console.log(`[${count}]:`, permutation.join(""));
      count++;
      if (count >= 10) break;
    }
  }
};

main();
