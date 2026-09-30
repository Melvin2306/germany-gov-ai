// Shared types and helpers for Beamten-KI topics.

export type Ctx = {
  termin: string;
  fee: string;
  form: () => string;
  wait: number;
};

export type Topic = {
  // Stable identifier, used by the answer tests (scripts/check-answers.ts).
  id: string;
  // Lowercase; each matches at the start of a word in the question.
  keywords: string[];
  // Follow-up questions offered as chips under the answer.
  related: string[];
  answer: (ctx: Ctx) => string;
};

export const pick = <T,>(xs: T[]) => xs[Math.floor(Math.random() * xs.length)];

export const randInt = (min: number, max: number) => min + Math.floor(Math.random() * (max - min + 1));

const months = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];

export function futureTermin() {
  const year = 2028 + Math.floor(Math.random() * 4);
  const day = 1 + Math.floor(Math.random() * 28);
  const hour = pick(["07:12", "07:45", "08:03", "10:37", "11:14"]);
  return `${day}. ${pick(months)} ${year}, ${hour} Uhr`;
}

export function formNumber() {
  const letters = "ABCDEFGHKLMRSTWZ";
  const l = letters[Math.floor(Math.random() * letters.length)];
  return `Formular ${l}-${10 + Math.floor(Math.random() * 89)}${pick(["a", "b", "c", "b/II", "-neu", "-alt (still valid)"])}`;
}

export function fee() {
  const euros = 12 + Math.floor(Math.random() * 90);
  return `€ ${euros},${pick(["00", "50", "35", "17"])}`;
}
