// Verifies that every test question (scripts/questions/*.ts) and every
// follow-up suggestion routes to the expected Beamten-KI topic.
//
//   npm run check:answers            # all categories
//   npm run check:answers -- housing # only scripts/questions/housing.ts

import { readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { loadEngine } from "../src/lib/bureaucracy";

const dir = join(process.cwd(), "scripts", "questions");
const only = process.argv[2];
const problems: string[] = [];

async function main() {
  const { topics: allTopics, findTopic } = await loadEngine();
  const ids = new Map<string, number>();
  for (const t of allTopics) ids.set(t.id, (ids.get(t.id) ?? 0) + 1);
  for (const [id, n] of ids) if (n > 1) problems.push(`duplicate topic id: ${id} (${n}×)`);

  let total = 0;
  const asked: string[] = [];
  for (const file of readdirSync(dir).filter((f) => f.endsWith(".ts")).sort()) {
    if (only && file !== `${only}.ts`) continue;
    const { questions } = (await import(pathToFileURL(join(dir, file)).href)) as { questions: [string, string][] };
    for (const [q, expected] of questions) {
      total++;
      asked.push(q);
      if (!ids.has(expected)) problems.push(`${file}: unknown expected id "${expected}" for "${q}"`);
      const got = findTopic(q)?.id ?? "(fallback)";
      if (got !== expected) problems.push(`${file}: "${q}" → ${got}, expected ${expected}`);
    }
  }

  let related = 0;
  for (const t of allTopics) {
    for (const r of t.related) {
      related++;
      if (!findTopic(r)) problems.push(`related of ${t.id}: "${r}" → (fallback)`);
    }
  }

  // Lookups run on the main thread when a question is submitted; keep them cheap.
  const rounds = 20;
  const start = performance.now();
  for (let i = 0; i < rounds; i++) for (const q of asked) findTopic(q);
  const perLookupUs = ((performance.now() - start) * 1000) / Math.max(1, rounds * asked.length);
  if (perLookupUs > 100) problems.push(`findTopic is slow: ${perLookupUs.toFixed(1)} µs per lookup (budget 100 µs)`);

  console.log(
    `${allTopics.length} topics, ${total} test questions, ${related} follow-ups checked (${perLookupUs.toFixed(1)} µs per lookup).`,
  );
  if (problems.length) {
    console.log(`\n${problems.length} problem(s):`);
    for (const p of problems) console.log(`  - ${p}`);
    process.exit(1);
  }
  console.log("Alles in Ordnung.");
}

main();
