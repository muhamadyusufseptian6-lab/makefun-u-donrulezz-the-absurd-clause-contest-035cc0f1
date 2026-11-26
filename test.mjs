// TDD-lite test for the Absurd Clause Contest entry.
// Run: node test.mjs  (from this directory)
// Checks, per kit gate + skill: main.ts exists, runs deterministically,
// writes UTF-8 entry.txt of 1-200 chars, one sentence, stdlib-only imports.
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const main = join(dir, "main.ts");
let failures = 0;
const check = (name, ok, detail = "") => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? " — " + detail : ""}`);
  if (!ok) failures++;
};

// 1. main.ts exists
check("main.ts exists", existsSync(main));
if (!existsSync(main)) {
  console.log(`\n${failures} failure(s)`);
  process.exit(1);
}

// 2. stdlib-only imports
const src = readFileSync(main, "utf8");
const imports = [...src.matchAll(/from\s+["']([^"']+)["']/g)].map((m) => m[1]);
const nonStd = imports.filter((i) => !i.startsWith("node:"));
check("stdlib-only imports", nonStd.length === 0, imports.join(", ") || "none");

// 3. run twice into two temp dirs, outputs must be identical (determinism)
const run = () => {
  const out = mkdtempSync(join(tmpdir(), "absurd-clause-"));
  execFileSync(process.execPath, [main], {
    env: { ...process.env, MAKEFUN_OUTPUT_DIR: out },
    stdio: "pipe",
  });
  return { out, text: readFileSync(join(out, "entry.txt"), "utf8") };
};
let a, b;
try {
  a = run();
  b = run();
} catch (e) {
  check("main.ts runs cleanly", false, String(e.message));
  console.log(`\n${failures} failure(s)`);
  process.exit(1);
}
check("main.ts runs cleanly", true);
check("deterministic output", a.text === b.text, JSON.stringify(a.text));

// 4. gate: 1-200 chars, not only whitespace
const len = [...a.text].length;
check("1-200 characters", len >= 1 && len <= 200, `${len} chars`);
check("not only whitespace", a.text.trim().length > 0);

// 5. one sentence: exactly one terminal period, no newline, no extra sentence ends
check("single sentence", (a.text.match(/\./g) || []).length === 1 && !a.text.includes("\n"), JSON.stringify(a.text));

rmSync(a.out, { recursive: true, force: true });
rmSync(b.out, { recursive: true, force: true });

console.log(failures === 0 ? "\nAll tests passed." : `\n${failures} failure(s)`);
process.exit(failures === 0 ? 0 : 1);
