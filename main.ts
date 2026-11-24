// The Robot Pickup Line Championship — u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b
// Writes one robot pickup line (a single line, at most 200 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Deterministic: no randomness, no network,
// no clock, no input — every run writes the exact same bytes.
// The line: a robot tries to remove its feelings, but the machine itself
// refuses — the joke grows out of being software, not a beep pasted on a
// human line, and it lands in one breath with no setup to spare.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I tried to uninstall my feelings for you, but the system refused \u2014 apparently you're a core dependency.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
