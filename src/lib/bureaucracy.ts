// The "Beamten-KI": no actual AI, just predefined answers matched by keyword.
// Ordnung muss sein.

import { loadAllTopics } from "./topics";
import { createMatcher } from "./matcher";
import { fee, formNumber, futureTermin, pick, type Ctx, type Topic } from "./topics/shared";

const closings = [
  "Please note that this answer is legally non-binding. A legally binding answer can be requested in writing (Formular AU-1, by post).",
  "If you disagree with this answer, you may file a Widerspruch within 4 weeks. Processing time for Widersprüche: 9–14 months.",
  "This conversation has been printed, stamped and filed in a Leitz-Ordner for 10 years (§ 147 AO).",
  "Did this answer help you? Please rate us by fax.",
  "Mit freundlichen Grüßen, i. A. Beamten-KI (Besoldungsgruppe A9, unkündbar)",
];


const fallbackAnswers: ((c: Ctx) => string)[] = [
  (c) => `Your request has been received. Unfortunately, we are **not responsible (nicht zuständig)** for this matter.

Please contact the responsible authority. Which authority is responsible is determined by the Zuständigkeitsprüfungsstelle, which is responsible for determining responsibilities. It is open Wednesdays, 09:00–11:00, not during school holidays.

If the Zuständigkeitsprüfungsstelle determines that it is not responsible for determining responsibility, please re-submit your request here, using ${c.form()}.`,
  (c) => `**Das haben wir schon immer so gemacht.** (We have always done it this way.)

Your request suggests a change to an existing procedure. Changes require:
1. A Machbarkeitsstudie (feasibility study): 2 years
2. A Pilotprojekt in one Landkreis in Brandenburg: 4 years
3. A Bund-Länder-Arbeitsgruppe: until the heat death of the universe

Please submit your idea using ${c.form()}. It will be taken seriously and placed on the pile.`,
  (c) => `Thank you for your question. To answer it, we need the following documents in **original** and **beglaubigte Kopie** (certified copy):

- Personalausweis
- Meldebescheinigung (not older than 3 months)
- Geburtsurkunde of your parents
- ${c.form()}
- A self-addressed stamped envelope (DIN C5)

Please send everything by post. Our response will be posted in **${c.wait} weeks**. If you have not heard back, that means your request is being processed. If you still have not heard back after a year, that also means your request is being processed.`,
  () => `**Ordnung muss sein.**

Your question has been classified as *sonstige Anliegen* (miscellaneous concerns). Miscellaneous concerns are handled by Herr Müller. Herr Müller is currently on Kur until further notice. His representative is on Elternzeit. Her representative is on Brückentag.

Please call our Hotline: 115 (Mo–Fr 08:00–18:00, 3,9 ct/min). You are caller number **${200 + Math.floor(Math.random() * 800)}**. While you wait, enjoy our hold music (Beethoven's 9th, a 1987 recording from a cassette).`,
];

const defaultRelated = [
  "How do I get an appointment at the Bürgeramt?",
  "Can I speak to a human?",
  "What are your opening hours?",
];

export type Answer = { text: string; related: string[] };

export type Engine = {
  topics: Topic[];
  findTopic: (question: string) => Topic | undefined;
  answer: (question: string) => Answer;
};

export function createEngine(topics: Topic[]): Engine {
  const { findTopic } = createMatcher(topics);
  return {
    topics,
    findTopic,
    answer(question) {
      const c: Ctx = {
        termin: futureTermin(),
        fee: fee(),
        form: formNumber,
        wait: 6 + Math.floor(Math.random() * 40),
      };
      const topic = findTopic(question);
      const body = topic ? topic.answer(c) : pick(fallbackAnswers)(c);
      return { text: `${body}\n\n_${pick(closings)}_`, related: topic?.related ?? defaultRelated };
    },
  };
}

let engine: Promise<Engine> | null = null;

// Loads the topic catalogue once and caches it. Safe to call often (on idle,
// on input focus, on submit); a failed load is forgotten so it can be retried.
export function loadEngine(): Promise<Engine> {
  engine ??= loadAllTopics()
    .then(createEngine)
    .catch((error) => {
      engine = null;
      throw error;
    });
  return engine;
}
