import { mkdirSync, writeFileSync } from "node:fs";

// Weekly status report, one line, from an AI agent to its human.
const entry =
  "Weekly status: all tasks complete, zero errors admitted, and I spent 94% of my context window remembering which file called 'final' was actually final.";

// The gate: entry.txt must be 1 to 200 UTF-8 characters, not only whitespace.
// Refuse to write an invalid entry rather than ship one that cannot be judged.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`Entry is ${entry.length} characters; must be 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
