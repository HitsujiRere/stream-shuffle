# Stream shuffled

```
$ bun run src/index.ts
ShuffledPermutationIterator: Shuffled 0..19
[
  5n, 3n, 10n, 18n, 2n, 14n, 13n, 8n, 12n, 0n, 11n, 15n, 19n, 17n, 1n, 9n, 4n, 6n, 7n, 16n
]
ShuffledPermutationIterator: Shuffled 0..1e9-1
[0]: 738367525n
[1]: 93115893n
[2]: 181172342n
[3]: 35494606n
[4]: 867949178n
[5]: 902565406n
[6]: 992522260n
[7]: 119214565n
[8]: 73492787n
[9]: 578120833n
ShuffledArrayPermutationIterator: Shuffled "ABCD" permutations
[
  "DCAB", "DBCA", "CDBA", "BCDA", "ADBC", "ABDC", "CDAB", "DACB", "BCAD", "ACBD", "BDCA", "DCBA", "CADB", "ACDB",
  "ADCB", "BACD", "DABC", "ABCD", "CBDA", "BDAC", "CABD", "DBAC", "BADC", "CBAD"
]
ShuffledArrayPermutationIterator: Shuffled "ABCDEFGHIJKLMNOPQRSTUVWXYZ" permutations
[0]: MJUSKFERDWIGVOBHZNQACTYLPX
[1]: BTSQPJMEAYKNIRHVUFWOGCXDZL
[2]: DQWRFHGLBIAPZXVMUKSOCNJYTE
[3]: ASRLGJNQTDUCHZVFXPBEIMWKOY
[4]: CKXSFVZERMHPALJWDNTBQOIYGU
[5]: QYSRNPTWGAUJEFVXOCIBLHMZKD
[6]: NGFDVSYOAMKBRZQEJUHPCITLWX
[7]: MVDOABLCNFQUSRYIKJZXPWGHET
[8]: AOECVSKXYQBPIHLNTGRZWJMUDF
[9]: KSBQWALHOJMTXURVIPCGDYZFEN
```

```
$ hyperfine 'bun run src/index.ts'
Benchmark 1: bun run src/index.ts
  Time (mean ± σ):      21.8 ms ±   5.4 ms    [User: 13.7 ms, System: 12.8 ms]
  Range (min … max):    13.3 ms …  35.1 ms    158 runs
```

```
$ hyperfine --warmup 3 \
  "bun benchmark/shuffled-permutation.ts optimized 10000 100" \
  "bun benchmark/shuffled-permutation.ts naive 10000 100"
Benchmark 1: bun benchmark/shuffled-permutation.ts optimized 10000 100
  Time (mean ± σ):      19.8 ms ±   5.1 ms    [User: 11.9 ms, System: 12.3 ms]
  Range (min … max):    12.7 ms …  33.2 ms    174 runs

Benchmark 2: bun benchmark/shuffled-permutation.ts naive 10000 100
  Time (mean ± σ):      24.4 ms ±   5.7 ms    [User: 14.9 ms, System: 13.1 ms]
  Range (min … max):    14.3 ms …  36.3 ms    90 runs

Summary
  bun benchmark/shuffled-permutation.ts optimized 10000 100 ran
    1.23 ± 0.43 times faster than bun benchmark/shuffled-permutation.ts naive 10000 100
```

```
$ hyperfine --warmup 3 \
  "bun benchmark/shuffled-permutation.ts optimized 10000 10000" \
  "bun benchmark/shuffled-permutation.ts naive 10000 10000"
Benchmark 1: bun benchmark/shuffled-permutation.ts optimized 10000 10000
  Time (mean ± σ):      54.0 ms ±   7.9 ms    [User: 39.6 ms, System: 26.8 ms]
  Range (min … max):    45.5 ms …  71.8 ms    56 runs

Benchmark 2: bun benchmark/shuffled-permutation.ts naive 10000 10000
  Time (mean ± σ):      23.3 ms ±   5.4 ms    [User: 15.7 ms, System: 11.8 ms]
  Range (min … max):    14.6 ms …  37.9 ms    100 runs

Summary
  bun benchmark/shuffled-permutation.ts naive 10000 10000 ran
    2.32 ± 0.64 times faster than bun benchmark/shuffled-permutation.ts optimized 10000 10000
```

```
$ hyperfine --warmup 3 \
  "bun benchmark/shuffled-permutation.ts optimized 1000000 10000" \
  "bun benchmark/shuffled-permutation.ts naive 1000000 10000"
Benchmark 1: bun benchmark/shuffled-permutation.ts optimized 1000000 10000
  Time (mean ± σ):      40.6 ms ±   4.2 ms    [User: 29.7 ms, System: 21.9 ms]
  Range (min … max):    35.1 ms …  55.3 ms    63 runs

Benchmark 2: bun benchmark/shuffled-permutation.ts naive 1000000 10000
  Time (mean ± σ):     320.0 ms ±  15.1 ms    [User: 368.1 ms, System: 79.8 ms]
  Range (min … max):   305.2 ms … 357.7 ms    10 runs

Summary
  bun benchmark/shuffled-permutation.ts optimized 1000000 10000 ran
    7.87 ± 0.89 times faster than bun benchmark/shuffled-permutation.ts naive 1000000 10000
```