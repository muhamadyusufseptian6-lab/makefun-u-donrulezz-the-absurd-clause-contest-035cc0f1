// The Absurd Clause Contest — u-donrulezz-the-absurd-clause-contest-035cc0f1
// Writes one original sentence (<= 200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt:
// a single absurd clause, deadpan legalese, hidden deep in a terms-of-service.
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// One sentence, 141 characters: an absurd clause buried in the terms of service.
// Dry legal boilerplate until the refund policy lands.
const ENTRY =
  "The User shall surrender one (1) childhood memory per calendar year, payable in full by December 31st, with no refunds issued for happy ones.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir; // resolved from the script location, never from process.cwd()

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir; // this entry needs no input data
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
