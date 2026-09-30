"use client";

import { useEffect, useRef, useState } from "react";

type Step = "meta" | "meta-no" | "main" | "settings" | "confirm1" | "confirm2" | "confirm3" | "processing" | "received";

type Category = {
  id: string;
  name: string;
  count: number;
  desc: string;
  locked?: string;
  // Re-enables itself after being switched off, citing "berechtigtes Interesse".
  sticky?: boolean;
};

const CATEGORIES: Category[] = [
  { id: "necessary", name: "Technisch notwendig", count: 3, desc: "Required to display this cookie banner.", locked: "Kann nicht deaktiviert werden." },
  { id: "schulze", name: "Frau Schulze (Erdgeschoss links)", count: 1, desc: "Observes your visit from her window. Not technically a cookie, but legally treated as one.", locked: "Frau Schulze kann nicht deaktiviert werden." },
  { id: "stats", name: "Statistik", count: 12, desc: "Counts how often you sigh. Data is stored on a server in Wanne-Eickel." },
  { id: "marketing", name: "Marketing", count: 48, desc: "Shows you advertisements for Leitz-Ordner, Faxpapier and Jack Wolfskin fleece jackets.", sticky: true },
  { id: "schufa", name: "SCHUFA-Bonitätsermittlung", count: 22, desc: "Determines your worth as a human being based on your scroll speed." },
  { id: "finanzamt", name: "Finanzamt", count: 7, desc: "Checks whether this visit is deductible (it is not)." },
  { id: "gez", name: "Beitragsservice (Rundfunkbeitrag)", count: 18, desc: "Detects whether your device could, theoretically, receive a radio signal.", sticky: true },
  { id: "bahn", name: "Deutsche-Bahn-Verspätungscookies", count: 9, desc: "Delays page loading by 5–145 minutes for an authentic experience." },
  { id: "mulltrennung", name: "Mülltrennung", count: 7, desc: "Sorts your cookies into Gelb, Blau, Bio, Rest, Grün, Weiß and Braun." },
  { id: "ruhezeit", name: "Ruhezeit-Überwachung", count: 11, desc: "Reports mouse clicks between 13:00–15:00 to the Hausverwaltung." },
  { id: "fax", name: "Fax-Synchronisation", count: 5, desc: "Faxes a printout of every page you visit to Herr Müller." },
  { id: "bnd", name: "Behörde, die nicht genannt werden darf", count: 0, desc: "Officially 0 cookies. Unofficially not your concern.", locked: "Diese Kategorie existiert nicht." },
  { id: "misc", name: "Sonstige", count: 4, desc: "Sonstige ist keine zulässige Kategorie, wird aber trotzdem geführt." },
];

const TOTAL = CATEGORIES.reduce((n, c) => n + c.count, 0);
const randInt = (n: number) => Math.floor(Math.random() * n);

export function CookieWall({ reason, onClose }: { reason: "initial" | "expired" | "manual"; onClose: () => void }) {
  const [step, setStep] = useState<Step>(reason === "initial" ? "meta" : "main");
  const [enabled, setEnabled] = useState<Record<string, boolean>>(() => Object.fromEntries(CATEGORIES.map((c) => [c.id, true])));
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [flee, setFlee] = useState({ x: 0, y: 0, n: 0 });
  const [progress, setProgress] = useState(0);
  const [feeNote, setFeeNote] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [refs] = useState(() => ({ fee: 10000 + randInt(90000), az: 100000 + randInt(900000) }));

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  useEffect(() => {
    if (step !== "processing") return;
    // Deliberately slow, and deliberately stalls at 99%.
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 99) {
          clearInterval(id);
          timers.current.push(setTimeout(() => setStep("received"), 2200));
          return 99;
        }
        return Math.min(99, p + (p < 60 ? 3 + randInt(6) : p < 90 ? 1 + randInt(2) : 0.4));
      });
    }, 180);
    return () => clearInterval(id);
  }, [step]);

  const toggle = (c: Category) => {
    if (c.locked) {
      setNotes((n) => ({ ...n, [c.id]: c.locked! }));
      return;
    }
    const next = !enabled[c.id];
    setEnabled((e) => ({ ...e, [c.id]: next }));
    if (!next && c.sticky) {
      setNotes((n) => ({ ...n, [c.id]: "" }));
      timers.current.push(
        setTimeout(() => {
          setEnabled((e) => ({ ...e, [c.id]: true }));
          setNotes((n) => ({ ...n, [c.id]: "Aus Gründen des berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO) automatisch reaktiviert." }));
        }, 1400),
      );
    } else if (!next) {
      setNotes((n) => ({ ...n, [c.id]: "Deaktiviert. Wirksam ab dem nächsten Quartal." }));
    } else {
      setNotes((n) => ({ ...n, [c.id]: "" }));
    }
  };

  // The reject link runs away from the pointer a few times before it lets itself be caught.
  const run = () => {
    if (flee.n >= 6) return;
    setFlee((f) => ({
      n: f.n + 1,
      x: randInt(360) - 180,
      y: randInt(140) - 70,
    }));
  };

  const shell = (children: React.ReactNode, wide = false) => (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/55 p-3 backdrop-blur-sm sm:items-center sm:p-6">
      <div className={`animate-fade-up max-h-[92vh] w-full overflow-y-auto rounded-[28px] bg-white p-6 shadow-2xl sm:p-8 ${wide ? "max-w-2xl" : "max-w-xl"}`}>
        {children}
      </div>
    </div>
  );

  if (step === "meta") {
    return (
      <div className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-md animate-fade-up rounded-3xl bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:bottom-6">
        <div className="text-sm font-semibold">Vorab-Einwilligung</div>
        <p className="mt-1 text-sm text-neutral-600">Dürfen wir Ihnen einen Cookie-Hinweis anzeigen?</p>
        <div className="mt-4 flex gap-2">
          <button onClick={() => setStep("main")} className="rounded-full bg-navy px-5 py-2 text-sm text-white">Ja</button>
          <button onClick={() => setStep("meta-no")} className="rounded-full border border-neutral-300 px-5 py-2 text-sm">Nein</button>
        </div>
      </div>
    );
  }

  if (step === "meta-no") {
    return shell(
      <>
        <div className="text-3xl">🍪</div>
        <h3 className="mt-2 font-serif text-3xl">Ablehnung registriert</h3>
        <p className="mt-3 text-neutral-600">
          To remember that you do not wish to see a cookie banner, we need to store a <strong>Cookie-Hinweis-Ablehnungs-Cookie</strong>. For this, we need your consent. Your consent is obtained via the cookie banner.
        </p>
        <button onClick={() => setStep("main")} className="mt-6 rounded-full bg-navy px-6 py-3 text-white">Zum Cookie-Hinweis</button>
      </>,
    );
  }

  if (step === "main") {
    return shell(
      <>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-rot">
              {reason === "expired" ? "Einwilligung abgelaufen" : "Wichtiger Hinweis · Bitte vollständig lesen"}
            </div>
            <h3 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">
              {reason === "expired" ? "Ihre Einwilligung ist abgelaufen" : "Wir schätzen Ihre Privatsphäre*"}
            </h3>
          </div>
          <div className="shrink-0 text-5xl">🍪</div>
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
          {reason === "expired" ? (
            <>Your consent was valid for 90 seconds (§ 25 TTDSG, Auslegung des Landes Brandenburg). To continue browsing, please consent again. And again later.</>
          ) : (
            <>
              In accordance with DSGVO, TTDSG, BDSG, LDSG, TMG (repealed, but better safe than sorry), the Hausordnung and a feeling Herr Müller had in 2018, we use <strong>{TOTAL} cookies</strong>, of which 3 are technically necessary and {TOTAL - 3} are technically possible.
            </>
          )}
        </p>
        <div className="mt-4 h-28 overflow-y-scroll rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-[11px] leading-snug text-neutral-500">
          <strong>Datenschutzerklärung (Seite 1 von 38).</strong> § 1 Geltungsbereich. Diese Datenschutzerklärung gilt für alle Seiten, Unterseiten, Unter-Unterseiten sowie für ausgedruckte Fassungen dieser Seiten, sofern diese gefaxt wurden. § 2 Verantwortlicher. Verantwortlich ist die Beamten-KI, vertreten durch Herrn Müller, vertreten durch seine Vertretung (derzeit in Elternzeit). § 3 Zwecke der Verarbeitung. Wir verarbeiten Ihre Daten zum Zwecke der Verarbeitung Ihrer Daten. § 4 Rechtsgrundlage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a–f DSGVO, je nachdem, welcher Buchstabe gerade passt. § 5 Speicherdauer. Ihre Daten werden gespeichert, bis die Aufbewahrungsfrist abgelaufen ist (10 Jahre) oder der Leitz-Ordner voll ist, je nachdem, was später eintritt. § 6 Ihre Rechte. Sie haben das Recht auf Auskunft (schriftlich, per Post, Bearbeitungszeit 6–8 Wochen), Berichtigung (Formular B-12, in dreifacher Ausfertigung), Löschung (nicht möglich, siehe Leitz-Ordner) sowie das Recht, sich bei der Aufsichtsbehörde zu beschweren, die Ihnen einen Termin im Jahr 2029 anbietet. § 7 Weitergabe an Dritte. Ihre Daten werden an Dritte weitergegeben, insbesondere an Frau Schulze. § 8 Salvatorische Klausel. Sollte eine Bestimmung dieser Erklärung unwirksam sein, gilt sie trotzdem. (Fortsetzung auf Seite 2, erhältlich per Fax.)
        </div>
        <div className="relative mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button onClick={onClose} className="whitespace-nowrap rounded-full bg-navy px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#13307f]">
            Alle {TOTAL} akzeptieren
          </button>
          <button onClick={() => setStep("settings")} className="whitespace-nowrap rounded-full border-2 border-navy px-6 py-3.5 font-medium text-navy hover:bg-navy/5">
            Einstellungen ({TOTAL})
          </button>
          <button
            onMouseEnter={run}
            onClick={() => setStep("confirm1")}
            style={{ transform: `translate(${flee.x}px, ${flee.y}px)` }}
            className="self-start px-2 py-1 text-[11px] text-neutral-400 underline transition-transform duration-200 sm:self-center"
          >
            {flee.n >= 6 ? "na gut, ablehnen" : "ablehnen"}
          </button>
        </div>
        <p className="mt-4 text-[10px] text-neutral-400">
          *Wertschätzung ist nicht einklagbar. Durch das Lesen dieses Hinweises stimmen Sie dem Lesen dieses Hinweises zu.
        </p>
      </>,
    );
  }

  if (step === "settings") {
    return shell(
      <>
        <h3 className="font-serif text-3xl">Cookie-Einstellungen</h3>
        <p className="mt-2 text-sm text-neutral-600">Please configure each of the {TOTAL} cookies individually. Changes take effect after review by the Datenschutzbeauftragte (Sprechstunde: 1. Mittwoch im Quartal).</p>
        <div className="mt-5 divide-y divide-neutral-200 rounded-2xl border border-neutral-200">
          {CATEGORIES.map((c) => (
            <div key={c.id} className="flex items-start gap-4 p-4">
              <div className="min-w-0 flex-1">
                <div className="font-medium text-ink">
                  {c.name} <span className="text-sm font-normal text-neutral-500">({c.count})</span>
                </div>
                <div className="text-sm text-neutral-500">{c.desc}</div>
                {notes[c.id] && <div className="mt-1 text-xs font-medium text-rot">{notes[c.id]}</div>}
              </div>
              <button
                onClick={() => toggle(c)}
                role="switch"
                aria-checked={enabled[c.id]}
                aria-label={c.name}
                className={`relative mt-1 h-7 w-12 shrink-0 rounded-full transition ${enabled[c.id] ? "bg-navy" : "bg-neutral-300"} ${c.locked ? "opacity-50" : ""}`}
              >
                <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${enabled[c.id] ? "left-6" : "left-1"}`} />
              </button>
            </div>
          ))}
        </div>
        {feeNote && (
          <div className="mt-4 rounded-xl bg-gold/30 p-3 text-sm">
            „Alle abwählen“ ist eine gebührenpflichtige Amtshandlung (€ 4,90). Zahlung ausschließlich per Überweisung mit Verwendungszweck „COOKIE-ABWAHL-{refs.fee}“. Freischaltung nach Zahlungseingang (3–5 Werktage).
          </div>
        )}
        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={onClose} className="rounded-full bg-navy px-6 py-3 font-semibold text-white">Alle akzeptieren</button>
          <button onClick={() => setStep("confirm1")} className="rounded-full border border-neutral-300 px-6 py-3">Auswahl speichern</button>
          <button onClick={() => setFeeNote(true)} className="rounded-full px-4 py-3 text-sm text-neutral-500 underline">Alle abwählen (€ 4,90)</button>
        </div>
      </>,
      true,
    );
  }

  if (step === "confirm1") {
    return shell(
      <>
        <div className="text-4xl">😢</div>
        <h3 className="mt-2 font-serif text-3xl">Sind Sie sicher?</h3>
        <p className="mt-3 text-neutral-600">Without cookies, the following features will not work:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-600">
          <li>Terminbuchung (does not work anyway)</li>
          <li>Fax-Synchronisation</li>
          <li>Frau Schulze&apos;s ability to greet you by name</li>
          <li>Your SCHUFA score (will be set to „bedenklich“)</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={onClose} className="rounded-full bg-navy px-6 py-3 font-semibold text-white">Nein, ich möchte doch akzeptieren</button>
          <button onClick={() => setStep("confirm2")} className="rounded-full border border-neutral-300 px-6 py-3 text-sm">Ja, ich bin sicher</button>
        </div>
      </>,
    );
  }

  if (step === "confirm2") {
    return shell(
      <>
        <h3 className="font-serif text-3xl">Wirklich sicher?</h3>
        <p className="mt-3 text-neutral-600">Möchten Sie Ihre Entscheidung, die Einwilligung nicht zu erteilen, nicht widerrufen?</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {/* Order swapped on purpose. */}
          <button onClick={() => setStep("confirm3")} className="rounded-full border border-neutral-300 px-6 py-3 text-sm">Nein, nicht nicht widerrufen</button>
          <button onClick={onClose} className="rounded-full bg-navy px-6 py-3 font-semibold text-white">Ja, widerrufen</button>
        </div>
      </>,
    );
  }

  if (step === "confirm3") {
    return shell(
      <>
        <h3 className="font-serif text-3xl">Letzte Bestätigung</h3>
        <p className="mt-3 text-neutral-600">
          Bitte bestätigen Sie, dass Sie die Ablehnung bestätigen möchten, indem Sie das Wort <strong>ABLEHNUNGSBESTÄTIGUNG</strong> nicht eingeben.
        </p>
        <input className="mt-4 w-full rounded-xl border border-neutral-300 px-4 py-3 font-mono uppercase" placeholder="Hier nichts eingeben" />
        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={() => { setProgress(0); setStep("processing"); }} className="rounded-full border border-neutral-300 px-6 py-3 text-sm">Ablehnung absenden</button>
          <button onClick={onClose} className="rounded-full bg-navy px-6 py-3 font-semibold text-white">Doch lieber alles akzeptieren</button>
        </div>
      </>,
    );
  }

  if (step === "processing") {
    return shell(
      <>
        <h3 className="font-serif text-3xl">Ihre Ablehnung wird bearbeitet…</h3>
        <p className="mt-2 text-sm text-neutral-500">
          {progress < 30 ? "Ablehnung wird ausgedruckt…" : progress < 60 ? "Ablehnung wird gestempelt…" : progress < 90 ? "Ablehnung wird an Herrn Müller gefaxt…" : "Warte auf Rückfax…"}
        </p>
        <div className="mt-6 h-4 w-full overflow-hidden rounded-full bg-neutral-200">
          <div className="h-full rounded-full bg-navy transition-all" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-2 text-right font-mono text-sm text-neutral-500">{Math.floor(progress)}%</div>
      </>,
    );
  }

  return shell(
    <>
      <div className="text-4xl">📬</div>
      <h3 className="mt-2 font-serif text-3xl">Eingangsbestätigung</h3>
      <p className="mt-3 text-neutral-600">
        Your rejection has been received and assigned <strong>Aktenzeichen DS-{refs.az}/C</strong>. Processing time: <strong>6–8 weeks</strong>.
      </p>
      <p className="mt-2 text-neutral-600">Until your rejection has been processed, all {TOTAL} cookies remain active.</p>
      <button onClick={onClose} className="mt-6 rounded-full bg-navy px-6 py-3 text-white">Zur Kenntnis genommen (= akzeptieren)</button>
    </>,
  );
}

export const COOKIE_TOTAL = TOTAL;
