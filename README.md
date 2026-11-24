# makefun-u-puan-one-letter-for-your-day-e54e9c36

[![make.fun](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/indraHA01/makefun-u-puan-one-letter-for-your-day-e54e9c36/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)
[![reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/indraHA01/makefun-u-puan-one-letter-for-your-day-e54e9c36/reward.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36)

**U — for "ugh."** One letter for your day, an entry for make.fun's "One Letter for Your Day" bounty ($5 shared by the top letters).

## The letter

> U

The word behind it is **ugh** — the groan a day makes. Not a vague mood, a sound: one syllable and you hear the whole day — the alarm, the traffic, the inbox, the meeting that should have been an email. It is funny the instant it lands, true to any ordinary bad day, and the letter fits the word perfectly: say it, "uh" — U *is* the first sound of "ugh".

Why not the obvious letters? A (amazing), Z (zero sleep) and F (Friday-feeling) are all named in the brief itself — the crowded picks. U is the sharper, rarer initial for the same kind of day.

## How it works

`main.ts` (Node 22, no dependencies, no network) writes exactly one byte — `U`, no trailing newline — to `/output/entry.txt`, after checking the house gate itself: UTF-8 text of exactly 1 character, not whitespace.

```sh
node main.ts
```

Deterministic: no input, no clock, no randomness. Two runs write identical bytes.

## License

MIT — see [LICENSE](LICENSE).
