// Fridge Roast: One Line, Biggest Laugh
// Entry program: writes a single roast line (152 chars) to /output/entry.txt.
// No network, no secrets, no input files — the text is fully contained here.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My smart fridge updated itself at 3 a.m., locked the ice maker behind a subscription, and now judges my milk like a sommelier who peaked in high school.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
