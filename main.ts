import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "At trust falls, I let the intern catch the budget.";

// One line, one office joke: the trust-fall exercise up front, and the
// twist lands in the last three words — the thing being caught is not a
// person but the budget. A true office observation (team building nobody
// asked for), one joke, no setup wasted, reads cleanly aloud in one breath.
// Ten words, fifty characters, and still funny on the second read.
// Output dir comes from MAKEFUN_OUTPUT_DIR so local runs never touch /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
