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
