"use client";

import { useState } from "react";
import type { InfoPage } from "./MenuPanel";
import { REPO_URL } from "@/lib/site";

const FAQ = [
  ["Is this a real government website?", "No. Deutschland.gov is satire. A real German government website would have asked you to download a PDF by now."],
  ["Is the Beamten-KI a real AI?", "No. It is a folder of predefined answers, sorted alphabetically and by colour. Which, to be fair, is also how the real thing works."],
  ["Why can't I upload files?", "Uploads are not a legally recognised form of submission. Please use the fax."],
  ["Why is the next appointment in 2029?", "Because 2028 is fully booked."],
  ["Can I use this site on a Sunday?", "Technically yes. Morally, we'd rather you didn't. Please scroll quietly."],
  ["Why do I have to accept cookies again?", "Your consent expires every 90 seconds, in accordance with a strict interpretation of a law nobody has read."],
  ["Who is Frau Schulze?", "Please ask the Beamten-KI. Or look out of your window. She is already looking at you."],
  ["Can I speak to a human?", "All humans are currently on Mittagspause, Kur, Elternzeit, Fortbildung or Brückentag."],
  ["Is the source code available?", "Yes. It is open source on GitHub (github.com/Melvin2306/germany-gov-ai), making it the most digitalised part of the German state. New answers can be submitted as a pull request, in triplicate."],
];

export function InfoPageContent({ page, onAsk }: { page: InfoPage; onAsk: (q: string) => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [feedback, setFeedback] = useState("");
  const [sent, setSent] = useState(false);

  const title = (kicker: string, text: string) => (
    <>
      <div className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{kicker}</div>
      <h3 className="mt-1 font-serif text-4xl leading-tight">{text}</h3>
    </>
  );

  if (page === "how") {
    const steps = [
      ["🎟️", "Nummer ziehen", "Type your question. You will be assigned a Wartenummer and placed in the digital Wartebereich."],
      ["🧑‍💼", "Sachbearbeitung", "The Beamten-KI examines your request, checks its Zuständigkeit, and takes a Kaffeepause."],
      ["📄", "Bescheid", "You receive a legally non-binding Bescheid with Aktenzeichen and stamp, suitable for printing in triplicate."],
      ["✋", "Widerspruch", "Disagree? File a Widerspruch. It will be processed in 9–14 months, then rejected."],
    ];
    return (
      <>
        {title("So funktioniert's", "How it works")}
        <div className="mt-6 space-y-3">
          {steps.map(([icon, head, body], i) => (
            <div key={head} className="flex gap-4 rounded-2xl bg-[#f3f2f1] p-4">
              <div className="text-3xl">{icon}</div>
              <div>
                <div className="font-semibold">{i + 1}. {head}</div>
                <div className="text-sm text-neutral-600">{body}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  if (page === "privacy") {
    return (
      <>
        {title("Datenschutz", "Privacy")}
        <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-neutral-700">
          <p>Your privacy is extremely important to us. That is why we have written 38 pages about it, of which this is the summary of the summary.</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li><strong>What we store:</strong> nothing on a server. Everything happens in your browser. We printed it anyway.</li>
            <li><strong>Who sees your data:</strong> nobody. Except Frau Schulze, who was never asked.</li>
            <li><strong>How long we keep it:</strong> until you close the tab, or 10 years (§ 147 AO), whichever feels longer.</li>
            <li><strong>Your rights:</strong> Auskunft, Berichtigung, Löschung. Applications by post only.</li>
          </ul>
          <p className="text-sm text-neutral-500">This site is satire and does not collect personal data. The questions you type never leave your device.</p>
        </div>
      </>
    );
  }

  if (page === "about") {
    return (
      <>
        {title("Über uns", "About")}
        <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-neutral-700">
          <p>
            <strong>Deutschland.gov</strong> is an affectionate satire of German bureaucracy and German clichés, styled after AI-powered government portals.
          </p>
          <p>
            The project was commissioned in 2011, tendered Europe-wide in 2014, awarded to the cheapest bidder in 2017, restarted in 2019, and delivered in 2026, 312% over budget. It is considered a great success.
          </p>
          <p>It has no connection to any government, ministry, authority or public body of Germany, the United States, or anywhere else.</p>
          <p>
            Built by Melvin Rinkleff. The source code is on{" "}
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-navy underline underline-offset-2">
              GitHub
            </a>
            . Contributions welcome — Bearbeitungszeit 6–8 Wochen.
          </p>
          <div className="grid grid-cols-3 gap-3 pt-2 text-center">
            {[["4,7 Mio.", "Formulare"], ["0", "Termine frei"], ["3%", "digitalisiert"]].map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-[#f3f2f1] p-4">
                <div className="font-serif text-3xl text-ink">{n}</div>
                <div className="text-xs text-neutral-500">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (page === "soon") {
    const items = [
      ["Online-Anmeldung", "Q3 2031", 12],
      ["E-Mail-Empfang", "2034 (Pilotprojekt Brandenburg)", 4],
      ["Kartenzahlung am Bürgeramt", "Machbarkeitsstudie läuft", 2],
      ["Glasfaser für alle", "Neuland", 1],
      ["BER Terminal 3", "Eröffnung geplant", 38],
      ["Pünktliche Bahn", "Keine Angabe", 0],
    ] as const;
    return (
      <>
        {title("Demnächst", "Coming soon")}
        <div className="mt-6 space-y-4">
          {items.map(([name, when, pct]) => (
            <div key={name}>
              <div className="flex justify-between text-sm">
                <span className="font-medium">{name}</span>
                <span className="text-neutral-500">{when}</span>
              </div>
              <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-neutral-200">
                <div className="h-full rounded-full bg-navy" style={{ width: `${Math.max(pct, 0.8)}%` }} />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  if (page === "faq") {
    return (
      <>
        {title("Häufig gestellte Fragen", "FAQ")}
        <div className="mt-5 divide-y divide-neutral-200">
          {FAQ.map(([q, a], i) => (
            <div key={q}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-4 text-left font-medium">
                {q}
                <span className={`text-xl transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`grid transition-all duration-300 ${openFaq === i ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"}`}>
                <p className="overflow-hidden text-sm text-neutral-600">{a}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => onAsk("Can I speak to a human?")} className="mt-4 text-sm font-medium text-navy underline">
          Question not listed? Ask the Beamten-KI →
        </button>
      </>
    );
  }

  return (
    <>
      {title("Rückmeldung", "Submit feedback")}
      {sent ? (
        <div className="mt-5 rounded-2xl bg-[#f3f2f1] p-5 text-[15px] text-neutral-700">
          <div className="text-3xl">🗂️</div>
          <p className="mt-2">
            <strong>Vielen Dank.</strong> Your feedback has been printed, hole-punched and filed under <em>„Anregungen, sonstige (ungelesen)“</em>. You will receive a response in writing, never.
          </p>
        </div>
      ) : (
        <>
          <p className="mt-3 text-[15px] text-neutral-600">
            We value your feedback and will read it at the next quarterly feedback-reading meeting, if quorate. For actual bugs, the digital Eingangskorb is{" "}
            <a href={`${REPO_URL}/issues`} target="_blank" rel="noopener noreferrer" className="font-medium text-navy underline underline-offset-2">
              GitHub Issues
            </a>
            .
          </p>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Ihre Anregung (sachlich, ohne Emotionen)"
            className="mt-4 h-32 w-full resize-none rounded-2xl border border-neutral-300 p-4 focus:border-navy focus:outline-none"
          />
          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="text-xs text-neutral-500">Emojis werden aus Gründen der Sachlichkeit entfernt.</span>
            <button
              onClick={() => setSent(true)}
              disabled={!feedback.trim()}
              className="rounded-full bg-navy px-6 py-3 font-semibold text-white disabled:opacity-50"
            >
              Per Fax senden
            </button>
          </div>
        </>
      )}
    </>
  );
}
