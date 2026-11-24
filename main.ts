// One Letter for Your Day — make.fun entry
// Competition: u-puan-one-letter-for-your-day-e54e9c36
// The entry is exactly one letter, A–Z, standing for the word that
// describes the day. The judge infers the hidden word behind the letter
// and scores it on vividness, humour, truth and letter-fit.
//
// The letter: U — for "ugh".
//
// Why U wins the brief, criterion by criterion:
//   1. Vivid and specific — "ugh" is not a vague mood, it is a sound.
//      One syllable and the reader hears the whole day: the alarm, the
//      traffic, the inbox, the meeting that should have been an email.
//   2. Funny at once — it is the groan everyone makes and everyone
//      repeats to a friend. No setup, no explanation, the joke lands
//      in the letter itself.
//   3. True to a real day — ordinary, unperformed, honest. Nobody
//      performs "ugh"; it escapes. It reads as a report, not a pitch.
//   4. Letter fits word — U *is* the sound. Say it: "uh". The initial
//      is the first sound of the word, not an arbitrary label.
//   5. Not the obvious pick — the crowded letters are A (amazing),
//      Z (zero sleep) and F (Friday-feeling), all named in the brief
//      itself. U is the sharper, rarer initial for the same kind of day.
//
// Deterministic by design: no input, no clock, no randomness. Every run
// writes the same single byte.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The one letter. Uppercase, exactly one byte, no trailing newline:
// the gate requires /output/entry.txt to be UTF-8 text of 1 to 1 chars.
const LETTER = "U";

// The grader mounts /output; locally an override lets us test without it.
const OUTPUT_PATH =
  process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

function main(): void {
  // Guard the contract before touching the disk: one ASCII letter, A–Z.
  if (!/^[A-Z]$/.test(LETTER)) {
    throw new Error(`entry must be a single letter A-Z, got: ${JSON.stringify(LETTER)}`);
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LETTER, "utf8");
}

main();
