# Deutschland.gov — Hallo, Deutschland

A satirical parody of AI-powered government portals (in the style of America.gov), German edition. Ask the **Beamten-KI** anything and receive a Wartenummer, a Bescheid with Aktenzeichen and stamp, and a Termin in 2029.

> Satire. Not affiliated with any government, authority or public body. The "AI" is a folder of predefined answers — no model, no API, nothing leaves the browser.

## Features

- **Beamten-KI chat** — 44 predefined topics (Anmeldung, Gewerbe, Bahn, Mülltrennung, Rundfunkbeitrag, Frau Schulze, …) matched by keyword, with Wartenummer queue, typed answers, random Kaffeepausen and follow-up suggestions
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
```

Set `NEXT_PUBLIC_SITE_URL` in production so Open Graph image URLs resolve correctly.

## Where things live

- `src/lib/bureaucracy.ts` — all answers and keyword matching (add a topic here)
- `src/components/Home.tsx` — page, chat flow, widgets
- `src/components/Scenes.tsx` — illustrated hero carousel scenes
- `src/components/CookieWall.tsx`, `TerminPicker.tsx`, `FormWizard.tsx`, `MenuPanel.tsx`, `InfoPages.tsx`
