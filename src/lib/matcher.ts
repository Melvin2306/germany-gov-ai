import type { Topic } from "./topics/shared";

// Lowercase and fold umlauts so "Müll", "Muell" and "mull" all match "müll".
export function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ß/g, "ss")
    .replace(/ae/g, "a")
    .replace(/oe/g, "o")
    .replace(/ue/g, "u")
    .replace(/[’`´]/g, "'");
}

const isWordChar = (c: string | undefined) => c !== undefined && ((c >= "a" && c <= "z") || (c >= "0" && c <= "9"));

type Entry = { id: number; topic: number; keyword: string; weight: number };

// Keywords only ever match at the start of a word, so they are bucketed by
// their first two characters. A lookup visits each word start in the question
// once and only compares the handful of keywords in that bucket, instead of
// testing every keyword of every topic.
export function createMatcher(topics: Topic[]) {
  const buckets = new Map<string, Entry[]>();
  let nextId = 0;
  topics.forEach((topic, t) => {
    // Spelling variants ("spaeti", "späti") fold to the same keyword; count it once.
    const seen = new Set<string>();
    for (const raw of topic.keywords) {
      const keyword = normalize(raw).replace(/^[^a-z0-9]+/, "");
      if (!keyword || seen.has(keyword)) continue;
      seen.add(keyword);
      const entry = { id: nextId++, topic: t, keyword, weight: keyword.length };
      const key = keyword.slice(0, 2);
      const bucket = buckets.get(key);
      if (bucket) bucket.push(entry);
      else buckets.set(key, [entry]);
    }
  });

  // Keywords match at word starts ("car" matches "cars", not "scary"). The topic
  // with the most (and longest) matching keywords wins; ties go to the earlier topic.
  function findTopic(question: string): Topic | undefined {
    const q = normalize(question);
    const scores = new Map<number, number>();
    const matched = new Set<number>();
    for (let p = 0; p < q.length; p++) {
      if (!isWordChar(q[p]) || isWordChar(q[p - 1])) continue;
      // Two-character bucket, plus the bucket for one-letter keywords.
      const candidates = [buckets.get(q.slice(p, p + 2)), buckets.get(q[p])];
      for (const bucket of candidates) {
        if (!bucket) continue;
        for (const e of bucket) {
          if (matched.has(e.id) || !q.startsWith(e.keyword, p)) continue;
          matched.add(e.id);
          scores.set(e.topic, (scores.get(e.topic) ?? 0) + e.weight);
        }
      }
    }
    let best = -1;
    let bestScore = 0;
    for (const [t, score] of scores) {
      if (score > bestScore || (score === bestScore && t < best)) {
        best = t;
        bestScore = score;
      }
    }
    return best >= 0 ? topics[best] : undefined;
  }

  return { findTopic };
}
