# Deutschland.gov — Hallo, Deutschland

A satirical parody of AI-powered government portals (in the style of America.gov), German edition. Ask the **Beamten-KI** anything and receive a Wartenummer, a Bescheid with Aktenzeichen and stamp, and a Termin in 2029.

**Live:** https://germany-gov-ai.vercel.app · **Source:** https://github.com/Melvin2306/germany-gov-ai

> Satire. Not affiliated with any government, authority or public body. The "AI" is a folder of predefined answers — no model, no API, nothing leaves the browser.

## Features

- **Beamten-KI chat** — 281 predefined topics in 13 categories (Anmeldung, Kehrwoche, Bahnstreik, Haftpflicht, Pilze sammeln, Bielefeld, Handyvertrag, Frau Schulze, …) matched by keyword, with Wartenummer queue, typed answers, random Kaffeepausen and follow-up suggestions
- **Termin buchen** — a calendar where every slot is taken, including the one you just found
- **Antrag stellen** — a 3-step form wizard with bureaucratic validation (DRUCKBUCHSTABEN, blue pen only, signature)
- **Wartenummer** — a floating ticket that advances one number every 12 seconds
- **Cookie wall** — consent for the consent banner, a fleeing reject link, self-re-enabling categories, triple-negative confirmations, and consent that expires every 90 seconds
- **Menu** — America.gov-style sidebar with How it works, Privacy, About, Coming soon, FAQ and Feedback pages

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
npm run check:answers   # routes 1,235 test questions + every follow-up, and checks lookup speed
```

Open Graph image URLs use `NEXT_PUBLIC_SITE_URL` if set, otherwise Vercel's production domain (`VERCEL_PROJECT_PRODUCTION_URL`), otherwise `http://localhost:3000`.

## How the answers are loaded

The answer catalogue is kept out of the initial page bundle:

- Each category (`src/lib/topics/*.ts`) is loaded with a dynamic `import()`, so it becomes its own ~8–15 KB (gzip) chunk. Adding topics doesn't grow the first page load.
- The chunks are fetched in parallel once the browser is idle (`requestIdleCallback`), or when the input is focused — whichever comes first — so the first answer is still instant. The Wartenummer animation covers the load if someone is very fast.
- Matching (`src/lib/matcher.ts`) uses a keyword index bucketed by the first two letters; a lookup only visits word starts in the question, ~3 µs per question.

## Contributing

Issues and pull requests welcome at https://github.com/Melvin2306/germany-gov-ai. New Beamten-KI answers go in the matching category file in `src/lib/topics/`; add a few test questions to `scripts/questions/` and run `npm run check:answers`.

## Where things live

- `src/lib/topics/*.ts` — answers by category (core, housing, work, mobility, family, culture, government, smalltalk, shopping, life, nature, places, tech)
- `src/lib/bureaucracy.ts` — lazy engine loader, fallback answers; `src/lib/matcher.ts` — keyword index
- `scripts/check-answers.ts`, `scripts/questions/*.ts` — routing tests
- `src/components/Home.tsx` — page, chat flow, widgets
- `src/components/Scenes.tsx` — illustrated hero carousel scenes
- `src/components/CookieWall.tsx`, `TerminPicker.tsx`, `FormWizard.tsx`, `MenuPanel.tsx`, `InfoPages.tsx`
