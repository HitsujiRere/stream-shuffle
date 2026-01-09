# Stream shuffled

```
$ bun run src/index.ts
ShuffledPermutationIterator: Shuffled 0..99999999
[0]: 22899149n
[1]: 55821517n
[2]: 86151131n
[3]: 14994212n
[4]: 20216914n
[5]: 87706237n
[6]: 94289353n
[7]: 64286364n
[8]: 80078826n
[9]: 83065581n
ShuffledArrayPermutationIterator: Shuffled "ABCDEFGHIJKLMNOPQRSTUVWXYZ" permutations
[0]: SCFJYIRXMTPDNLOUQEGAHVWKBZ
[1]: CQGKBIALHTYVSNOMZJPWXREUFD
[2]: DEGYPJNZTWQCBRKAMHVLFIUOXS
[3]: SFBATYWIPLEJCGQNVORXKZMUHD
[4]: SAKJWZIMOVQUYFTLBHNGPCEXRD
[5]: AWVJCRXFSYHIEGDULBNQOTMPKZ
[6]: PDLIOYMWFQKSEUTZNGVHBJRAXC
[7]: NAECWKXUHYRGQTBPIMFZOSDJVL
[8]: OGAWJUNMPQKIDXFYCHTRLVEBZS
[9]: MQRDIKTUJNOGHEYZLCBXFSWAVP
```

```
$ hyperfine 'bun run src/index.ts'
Benchmark 1: bun run src/index.ts
  Time (mean ± σ):      12.6 ms ±   1.6 ms    [User: 7.3 ms, System: 6.9 ms]
  Range (min … max):    10.3 ms …  19.2 ms    160 runs
```
