"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { bureaucraticAnswer } from "@/lib/bureaucracy";
import { scenes } from "./Scenes";
import { Markdownish } from "./Markdownish";
import { FlagMark } from "./FlagMark";
import { MenuPanel, type InfoPage } from "./MenuPanel";
import { InfoPageContent } from "./InfoPages";
import { Modal } from "./Modal";
import { CookieWall, COOKIE_TOTAL } from "./CookieWall";
import { TerminPicker } from "./TerminPicker";
import { FormWizard } from "./FormWizard";
import { REPO_URL } from "@/lib/site";

const PLACEHOLDERS = [
  "Try ‘How do I register my new business?’",
  "Try ‘How do I do my Anmeldung?’",
  "Try ‘Why is my train late?’",
  "Try ‘Can I mow my lawn on Sunday?’",
  "Try ‘Which bin does a yoghurt pot go in?’",
  "Try ‘Can I pay by card?’",
  "Try ‘Who is Frau Schulze?’",
  "Try ‘How do I cancel my gym contract?’",
];

const POPULAR = [
  "How do I do my Anmeldung?",
  "Why is my train late?",
  "Who is Frau Schulze?",
  "Do I have to pay the Rundfunkbeitrag?",
  "Can I speak to a human?",
];

type Tool = "termin" | "antrag" | "fax" | "impressum";

type Service = { icon: string; title: string; desc: string } & ({ q: string } | { tool: Tool | "ticket" });

const SERVICES: Service[] = [
  { icon: "📅", title: "Termin buchen", desc: "Book an appointment. Next free slot: statistically never.", tool: "termin" },
  { icon: "📝", title: "Antrag stellen", desc: "Apply for the form you need to apply. In DRUCKBUCHSTABEN.", tool: "antrag" },
  { icon: "🎟️", title: "Wartenummer ziehen", desc: "Take a number. Please keep this browser tab open until 2027.", tool: "ticket" },
  { icon: "🏠", title: "Anmeldung", desc: "Register your address within 14 days. Termine available from 2029.", q: "How do I do my Anmeldung after moving?" },
  { icon: "💼", title: "Gewerbe anmelden", desc: "Start a business. Bring 3 copies and a blue pen.", q: "How do I register my new business?" },
  { icon: "🛂", title: "Reisepass", desc: "Biometric photo, neutral expression. Smiling is verboten.", q: "How do I get a new passport?" },
  { icon: "🚆", title: "Bahn-Verspätung", desc: "Find out why your train is late. Spoiler: yes.", q: "Why is my Deutsche Bahn train delayed?" },
  { icon: "♻️", title: "Mülltrennung", desc: "7 bins. 1 yoghurt pot. Infinite doubt.", q: "Which bin does my trash go in?" },
  { icon: "🧾", title: "Steuererklärung", desc: "70% of the world's tax literature, now in one portal (ELSTER).", q: "How do I do my tax return?" },
  { icon: "📺", title: "Rundfunkbeitrag", desc: "No TV? No radio? Irrelevant.", q: "Do I have to pay the Rundfunkbeitrag?" },
  { icon: "✉️", title: "Kündigung", desc: "Cancel a contract. By Einschreiben. With Rückschein.", q: "How do I cancel my gym contract?" },
  { icon: "🔇", title: "Ruhezeiten", desc: "Check whether breathing loudly on Sunday is permitted.", q: "What are the Ruhezeiten?" },
];

type Msg =
  | { id: number; role: "user"; text: string }
  | { id: number; role: "wait"; number: number; serving: number }
  | { id: number; role: "assistant"; text: string; done: boolean; pause: boolean; aktenzeichen: string; related: string[] };

let nextId = 1;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const randInt = (n: number) => Math.floor(Math.random() * n);
const COOKIE_TTL_MS = 90_000;

function aktenzeichen() {
  const n = Math.floor(100000 + Math.random() * 899999);
  return `AZ ${n}/${new Date().getFullYear()}-B${Math.floor(Math.random() * 9) + 1}`;
}

function GitHubMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function outsideOpeningHours() {
  const now = new Date();
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  // Öffnungszeiten: Tue & Thu, 08:00–11:30. Everything else is "Kulanz".
  return !((day === 2 || day === 4) && mins >= 8 * 60 && mins < 11 * 60 + 30);
}

// Resolves once the window has (smoothly) reached the top, or after a timeout.
function scrollToTop(timeout = 900) {
  if (window.scrollY < 2) return Promise.resolve();
  window.scrollTo({ top: 0, behavior: "smooth" });
  const start = performance.now();
  return new Promise<void>((resolve) => {
    const tick = () => {
      if (window.scrollY < 2 || performance.now() - start > timeout) {
        window.scrollTo({ top: 0, behavior: "instant" });
        resolve();
      } else requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

export default function Home() {
  const [showInfo, setShowInfo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoPage, setInfoPage] = useState<InfoPage | null>(null);
  const [tool, setTool] = useState<Tool | null>(null);
  const [toolAz, setToolAz] = useState("");
  const [cookie, setCookie] = useState<{ open: boolean; reason: "initial" | "expired" | "manual" }>({ open: false, reason: "initial" });
  const [toast, setToast] = useState<string | null>(null);
  const [ticket, setTicket] = useState<{ number: number; serving: number } | null>(null);

  const [scene, setScene] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [placeholder, setPlaceholder] = useState(0);

  const [view, setView] = useState<"hero" | "chat">("hero");
  const [leaving, setLeaving] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [busy, setBusy] = useState(false);

  const busyRef = useRef(false);
  const viewRef = useRef<"hero" | "chat">("hero");
  const follow = useRef(true);
  const chatEnd = useRef<HTMLDivElement>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(null);
  const cookieTimer = useRef<ReturnType<typeof setTimeout>>(null);

  // --- Cookie wall: shows shortly after load, and comes back when consent "expires".
  useEffect(() => {
    const t = setTimeout(() => setCookie({ open: true, reason: "initial" }), 700);
    return () => {
      clearTimeout(t);
      if (cookieTimer.current) clearTimeout(cookieTimer.current);
    };
  }, []);

  const closeCookies = useCallback(() => {
    setCookie((c) => ({ ...c, open: false }));
    if (cookieTimer.current) clearTimeout(cookieTimer.current);
    cookieTimer.current = setTimeout(() => setCookie({ open: true, reason: "expired" }), COOKIE_TTL_MS);
  }, []);

  // --- Carousel and rotating placeholder.
  useEffect(() => {
    if (!playing || view !== "hero") return;
    const id = setInterval(() => setScene((s) => (s + 1) % scenes.length), 10000);
    return () => clearInterval(id);
  }, [playing, view]);

  useEffect(() => {
    const id = setInterval(() => setPlaceholder((p) => (p + 1) % PLACEHOLDERS.length), 4000);
    return () => clearInterval(id);
  }, []);

  // --- Wartenummer: the queue advances by one every 12 seconds. Your number is far away.
  useEffect(() => {
    if (!ticket) return;
    const id = setInterval(() => setTicket((t) => (t ? { ...t, serving: t.serving + 1 } : t)), 12000);
    return () => clearInterval(id);
  }, [ticket]);

  // --- Chat auto-scroll: keep the newest content visible without fighting the user.
  useEffect(() => {
    const onScroll = () => {
      const el = chatEnd.current;
      if (!el) return;
      follow.current = el.getBoundingClientRect().bottom - window.innerHeight < 260;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (view !== "chat" || !follow.current) return;
    const raf = requestAnimationFrame(() => {
      const el = chatEnd.current;
      if (!el) return;
      // Leave room for the sticky input bar that floats over the bottom of the chat.
      const overflow = el.getBoundingClientRect().bottom + 120 - window.innerHeight;
      if (overflow > 0) window.scrollBy({ top: overflow, behavior: "instant" });
    });
    return () => cancelAnimationFrame(raf);
  }, [messages, view]);

  const showToast = useCallback((text: string) => {
    setToast(text);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 4200);
  }, []);

  const switchView = async (next: "hero" | "chat") => {
    if (viewRef.current === next) return;
    await scrollToTop();
    setLeaving(true);
    await sleep(260);
    viewRef.current = next;
    setView(next);
    setLeaving(false);
  };

  const goHome = async () => {
    setMenuOpen(false);
    if (busyRef.current) return;
    await switchView("hero");
    setMessages([]);
  };

  const updateAnswer = (id: number, patch: Partial<Extract<Msg, { role: "assistant" }>>) =>
    setMessages((m) => m.map((x) => (x.id === id && x.role === "assistant" ? { ...x, ...patch } : x)));

  const ask = async (question: string) => {
    const q = question.trim();
    if (!q || busyRef.current) return;
    busyRef.current = true;
    setBusy(true);
    setInput("");
    setMenuOpen(false);
    setInfoPage(null);

    if (viewRef.current !== "chat") await switchView("chat");
    follow.current = true;

    const waitNumber = 300 + randInt(600);
    const waitId = nextId++;
    setMessages((m) => [
      ...m,
      { id: nextId++, role: "user", text: q },
      { id: waitId, role: "wait", number: waitNumber, serving: waitNumber - 5 },
    ]);

    // Wartebereich: the display counts up to your number.
    for (let i = 4; i >= 0; i--) {
      await sleep(520);
      setMessages((m) => m.map((x) => (x.id === waitId && x.role === "wait" ? { ...x, serving: waitNumber - i } : x)));
    }
    await sleep(300);

    const answer = bureaucraticAnswer(q);
    let full = answer.text;
    if (outsideOpeningHours()) {
      full = `_Note: You are contacting us outside our Öffnungszeiten (Tue & Thu, 08:00–11:30). Your request is being processed as a Kulanz exception. This will not happen again._\n\n${full}`;
    }

    const answerId = nextId++;
    setMessages((m) => [
      ...m.filter((x) => x.id !== waitId),
      { id: answerId, role: "assistant", text: "", done: false, pause: false, aktenzeichen: aktenzeichen(), related: answer.related },
    ]);

    const words = full.split(/(\s+)/);
    // Roughly every third answer, the Sachbearbeiter takes a Kaffeepause mid-sentence.
    const breakAt = randInt(100) < 35 ? Math.floor((words.length * (30 + randInt(30))) / 100) : -1;
    let shown = "";
    for (let i = 0; i < words.length; i++) {
      shown += words[i];
      if (i === breakAt) {
        updateAnswer(answerId, { text: shown, pause: true });
        await sleep(3200);
        updateAnswer(answerId, { pause: false });
      }
      if (i % 4 === 0 || i === words.length - 1) {
        updateAnswer(answerId, { text: shown });
        await sleep(34);
      }
    }
    updateAnswer(answerId, { done: true });
    busyRef.current = false;
    setBusy(false);
  };

  const openTool = (t: Tool | "ticket") => {
    setMenuOpen(false);
    if (t === "ticket") {
      if (ticket) {
        showToast(`🎟️ Sie haben bereits die Nummer ${ticket.number}. Doppelziehung ist eine Ordnungswidrigkeit.`);
        return;
      }
      const serving = 17 + randInt(30);
      setTicket({ number: serving + 3800 + randInt(1200), serving });
      showToast("🎟️ Wartenummer gezogen. Bitte halten Sie sich im Wartebereich (diesem Browser-Tab) auf.");
      return;
    }
    setToolAz(aktenzeichen());
    setTool(t);
  };

  const onMic = () =>
    showToast("🎙️ Spracheingabe deaktiviert. Voice recordings violate DSGVO Art. 9. Please write your request by hand.");

  const searchBar = (compact = false) => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        ask(input);
      }}
      className={`flex items-center gap-1 rounded-full border-2 border-ink bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] ${compact ? "py-2 pl-5 pr-2" : "py-2.5 pl-5 pr-2.5 sm:py-4 sm:pl-8 sm:pr-3"}`}
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={view === "chat" ? "Weitere Frage stellen (Formular F-2)…" : PLACEHOLDERS[placeholder]}
        className={`min-w-0 flex-1 bg-transparent text-ink placeholder:text-neutral-500 focus:outline-none ${compact ? "text-base" : "text-base sm:text-xl"}`}
        aria-label="Ask the Beamten-KI"
      />
      <button type="button" onClick={() => setTool("fax")} className="shrink-0 rounded-full p-1.5 text-ink hover:bg-neutral-100 sm:p-2.5" aria-label="Attach file">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M9 7v9a3 3 0 0 0 6 0V6a2 2 0 0 0-4 0v10" /></svg>
      </button>
      <button type="button" onClick={onMic} className="shrink-0 rounded-full p-1.5 text-ink hover:bg-neutral-100 sm:p-2.5" aria-label="Voice input">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" /></svg>
      </button>
      <button
        type="submit"
        disabled={busy || !input.trim()}
        className={`flex shrink-0 items-center justify-center rounded-full bg-navy text-white transition hover:bg-[#13307f] disabled:opacity-60 ${compact ? "h-11 w-11" : "h-12 w-12 sm:h-14 sm:w-14"}`}
        aria-label="Submit Antrag"
      >
        {busy ? (
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        )}
      </button>
    </form>
  );

  const fade = `transition-all duration-300 ease-out ${leaving ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Official-looking (but not) banner */}
      <div className="px-4 py-2 text-center text-[13px] text-neutral-600">
        <button onClick={() => setShowInfo((s) => !s)} className="inline-flex items-center gap-1.5 hover:text-ink">
          An unofficial satirical website of the Bundesrepublik Deutschland
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8v.01" strokeLinecap="round" /></svg>
        </button>
        <div className={`grid transition-all duration-300 ${showInfo ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
          <div className="overflow-hidden">
            <div className="mx-auto mt-2 max-w-xl rounded-xl bg-neutral-100 p-4 text-left text-[13px] leading-relaxed">
              <strong>Here&apos;s how you know:</strong> This site is <strong>satire</strong> and has no affiliation with any government. Official German websites end in <code>.de</code>, look like 2004, and require a Termin to load. This one loads immediately, which is how you know it&apos;s fake.
            </div>
          </div>
        </div>
      </div>

      {/* Main panel */}
      <div className="mx-2 rounded-[40px] bg-gradient-to-b from-[#f1f0ef] via-[#f3f2f1] to-[#ecebea] pb-16 sm:mx-6 sm:rounded-[56px]">
        <header className="flex items-center justify-between px-6 pt-8 sm:px-14 sm:pt-12">
          <button onClick={goHome} className="flex items-center gap-3" aria-label="Deutschland.gov home">
            <FlagMark />
            <span className="font-serif text-[28px] tracking-tight text-ink sm:text-[32px]">Deutschland.gov</span>
          </button>
          <button onClick={() => setMenuOpen(true)} className="rounded-full bg-navy px-6 py-3 font-medium text-white shadow transition hover:bg-[#13307f] sm:px-7 sm:py-3.5">
            Menü
          </button>
        </header>

        {view === "hero" ? (
          <section className={`px-4 pt-14 text-center sm:pt-20 ${fade}`}>
            <h1 className="font-serif text-[64px] leading-[0.95] tracking-tight text-ink sm:text-[120px] md:text-[140px]">
              Hallo, Deutschland
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 sm:text-2xl">
              Whatever you need from government, start here. Then go to Zimmer 4.017.
            </p>

            <div className="relative mx-auto mt-12 max-w-4xl">
              <div className="relative h-[440px] overflow-hidden rounded-[48px] shadow-[0_30px_60px_rgba(0,0,0,0.18)] sm:h-[560px] sm:rounded-[64px]">
                {scenes.map((S, i) => (
                  <div
                    key={i}
                    aria-hidden={i !== scene}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === scene ? "opacity-100" : "opacity-0"}`}
                  >
                    <S />
                  </div>
                ))}
                <div className="absolute left-3 right-3 top-4 z-10 sm:left-5 sm:right-5 sm:top-5">{searchBar()}</div>
              </div>
              <div className="mt-8 flex items-center justify-center gap-4">
                {[
                  { label: "Previous scene", onClick: () => setScene((s) => (s - 1 + scenes.length) % scenes.length), icon: <path d="M15 6l-6 6 6 6" /> },
                  {
                    label: playing ? "Pause" : "Play",
                    onClick: () => setPlaying((p) => !p),
                    icon: playing ? <path d="M9 6v12M15 6v12" /> : <path d="M8 5l11 7-11 7z" fill="currentColor" />,
                  },
                  { label: "Next scene", onClick: () => setScene((s) => (s + 1) % scenes.length), icon: <path d="M9 6l6 6-6 6" /> },
                ].map((b) => (
                  <button
                    key={b.label}
                    onClick={b.onClick}
                    aria-label={b.label}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-ink shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition hover:bg-white active:scale-95"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">{b.icon}</svg>
                  </button>
                ))}
              </div>
              <div className="mt-4 flex justify-center gap-1.5">
                {scenes.map((_, i) => (
                  <button key={i} onClick={() => setScene(i)} aria-label={`Scene ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === scene ? "w-6 bg-ink" : "w-1.5 bg-neutral-400"}`} />
                ))}
              </div>
              <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
                {POPULAR.map((q) => (
                  <button key={q} onClick={() => ask(q)} className="rounded-full border border-neutral-300 bg-white/70 px-4 py-2 text-sm text-ink transition hover:border-ink hover:bg-white">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className={`mx-auto max-w-3xl px-4 pt-10 ${fade}`}>
            <div className="animate-fade-up mb-6 flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 text-sm text-neutral-600">
              <span className="text-2xl">🧑‍💼</span>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-ink">
                  Beamten-KI 3.0 <span className="font-normal text-neutral-500">(Beta since 2011)</span>
                </div>
                <div className="truncate">Sachbearbeitung · Schalter 3 · Zimmer 4.017 · unkündbar</div>
              </div>
              <span className={`flex items-center gap-1.5 whitespace-nowrap text-xs ${busy ? "text-amber-600" : "text-emerald-600"}`}>
                <span className={`h-2 w-2 rounded-full ${busy ? "bg-amber-500" : "bg-emerald-500"}`} />
                {busy ? "In Bearbeitung" : "Bereit (unter Vorbehalt)"}
              </span>
            </div>

            <div className="space-y-6">
              {messages.map((m) => {
                if (m.role === "user") {
                  return (
                    <div key={m.id} className="animate-fade-up flex justify-end">
                      <div className="max-w-[80%] rounded-3xl rounded-br-md bg-navy px-5 py-3 text-white">{m.text}</div>
                    </div>
                  );
                }
                if (m.role === "wait") {
                  return (
                    <div key={m.id} className="animate-fade-up flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm">
                      <div className="rounded-lg bg-black px-4 py-2 font-mono text-3xl font-bold text-red-500">
                        <span className="animate-led">{String(m.serving).padStart(4, "0")}</span>
                      </div>
                      <div className="text-sm text-neutral-600">
                        <div className="font-semibold text-ink">Ihre Wartenummer: {m.number}</div>
                        Please take a seat. Do not use the toilet; your number will be called exactly then.
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={m.id} className="animate-fade-up relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm sm:p-8">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-dashed border-neutral-300 pb-3 text-xs uppercase tracking-wider text-neutral-500">
                      <span>Bescheid · {m.aktenzeichen}</span>
                      <span>Seite 1 von 1</span>
                    </div>
                    <div className="text-[16px] text-ink">
                      <Markdownish text={m.text} />
                      {!m.done && !m.pause && <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-ink/60 align-middle" />}
                    </div>
                    {m.pause && (
                      <div className="animate-fade-up mt-4 flex items-center gap-3 rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-900">
                        <span className="relative text-2xl">
                          ☕<span className="animate-steam absolute -top-2 left-2 text-xs">~</span>
                        </span>
                        <span>
                          <strong>Kaffeepause.</strong> Der Sachbearbeiter ist gleich wieder für Sie da. (§ 4 ArbZG)
                        </span>
                      </div>
                    )}
                    {m.done && (
                      <>
                        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
                          <div className="flex flex-wrap gap-2">
                            <button onClick={() => showToast("🖨️ Printing in triplicate… Printer 3 is out of toner since 2019.")} className="rounded-full border border-neutral-300 px-4 py-1.5 text-sm hover:bg-neutral-50">🖨️ Ausdrucken</button>
                            <button onClick={() => setTool("fax")} className="rounded-full border border-neutral-300 px-4 py-1.5 text-sm hover:bg-neutral-50">📠 Per Fax senden</button>
                            <button onClick={() => ask("I want to file a Widerspruch")} disabled={busy} className="rounded-full border border-neutral-300 px-4 py-1.5 text-sm hover:bg-neutral-50">✋ Widerspruch einlegen</button>
                          </div>
                          <div className="animate-stamp rounded-md border-[3px] border-red-600/80 px-3 py-1 text-center font-black uppercase leading-tight text-red-600/80">
                            <div className="text-[10px] tracking-widest">Bundesamt</div>
                            <div className="text-lg">Bearbeitet</div>
                            <div className="text-[10px] tracking-widest">{new Date().toLocaleDateString("de-DE")}</div>
                          </div>
                        </div>
                        <div className="animate-fade-up mt-6 border-t border-neutral-200 pt-4">
                          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Verwandte Anliegen</div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {m.related.map((r) => (
                              <button key={r} onClick={() => ask(r)} disabled={busy} className="rounded-full bg-[#f3f2f1] px-4 py-2 text-left text-sm text-ink transition hover:bg-[#e8e6e3] disabled:opacity-50">
                                {r}
                              </button>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
              <div ref={chatEnd} className="h-px" />
            </div>

            <div className="sticky bottom-4 z-10 mt-8">{searchBar(true)}</div>
          </section>
        )}
      </div>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-serif text-5xl tracking-tight text-ink sm:text-6xl">Beliebte Dienstleistungen</h2>
        <p className="mt-3 text-lg text-neutral-600">Our most requested services, ranked by average waiting time.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <button
              key={s.title}
              onClick={() => ("q" in s ? ask(s.q) : openTool(s.tool))}
              className="group rounded-3xl bg-[#f3f2f1] p-6 text-left transition hover:-translate-y-0.5 hover:bg-[#ebe9e7]"
            >
              <div className="text-3xl">{s.icon}</div>
              <div className="mt-4 text-lg font-semibold text-ink">{s.title}</div>
              <div className="mt-1 text-sm text-neutral-600">{s.desc}</div>
              <div className="mt-4 text-sm font-medium text-navy group-hover:underline">{"q" in s ? "Antrag stellen →" : "Öffnen →"}</div>
            </button>
          ))}
        </div>

        <div className="mt-16 rounded-[40px] bg-navy p-8 text-white sm:p-12">
          <div className="text-sm uppercase tracking-widest text-sky-200">Digitalisierungs-Fortschritt</div>
          <div className="mt-3 font-serif text-4xl sm:text-5xl">3% complete since 1998</div>
          <div className="mt-6 h-4 w-full overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-[3%] rounded-full bg-gold" />
          </div>
          <div className="mt-4 text-sm text-sky-100">Projected completion: 2179 (subject to a Machbarkeitsstudie).</div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-neutral-200 bg-gold py-3 text-sm font-semibold text-schwarz">
        <div className="animate-ticker flex w-max gap-12 whitespace-nowrap">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            [
              "+++ Faxgerät im Bürgeramt Mitte wieder online +++",
              "+++ Neue Termine ab 07:00 Uhr (alle vergeben ab 07:00:02) +++",
              "+++ BER-Flughafen: nun eröffnet, schon renovierungsbedürftig +++",
              "+++ Bahn: Pünktlichkeit auf Rekordtief, Durchsagen auf Rekordhoch +++",
              "+++ Ruhezeit beachten: 13–15 Uhr +++",
              "+++ Frau Schulze meldet: Gelber Sack in Haus 3 falsch befüllt +++",
            ].map((t) => <span key={`${k}-${t}`}>{t}</span>),
          )}
        </div>
      </div>

      <footer className="mx-auto max-w-6xl px-6 py-12 text-sm text-neutral-500">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FlagMark />
            <span className="font-serif text-2xl text-ink">Deutschland.gov</span>
          </div>
          <div className="flex flex-wrap gap-6">
            <button onClick={() => setTool("impressum")} className="hover:text-ink">Impressum</button>
            <button onClick={() => setCookie({ open: true, reason: "manual" })} className="hover:text-ink">Cookie-Einstellungen</button>
            <button onClick={() => setInfoPage("privacy")} className="hover:text-ink">Datenschutz</button>
            <button onClick={() => showToast("♿ Barrierefreiheit: A ramp is planned for 2031.")} className="hover:text-ink">Barrierefreiheit</button>
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-ink">
              <GitHubMark /> GitHub
            </a>
          </div>
        </div>
        <p className="mt-6 max-w-3xl">
          Deutschland.gov is a satire project and a parody of AI-powered government portals. It is not affiliated with, endorsed by or connected to any government, authority or public body. The &ldquo;AI&rdquo; is a folder of predefined answers, which is also how real Beamte work. Stand: 1997 (zuletzt aktualisiert: gestern, unter Vorbehalt).
        </p>
        <p className="mt-3">
          Open source (the only digitalised part of the German state):{" "}
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-navy underline underline-offset-2 hover:text-ink">
            github.com/Melvin2306/germany-gov-ai
          </a>
          . Pull requests are processed in 6–8 weeks.
        </p>
      </footer>

      <MenuPanel
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onHome={goHome}
        onPage={(p) => {
          setMenuOpen(false);
          setInfoPage(p);
        }}
        onTermin={() => openTool("termin")}
        onAntrag={() => openTool("antrag")}
        onTicket={() => openTool("ticket")}
      />

      {infoPage && (
        <Modal onClose={() => setInfoPage(null)} wide>
          <InfoPageContent page={infoPage} onAsk={ask} />
        </Modal>
      )}

      {tool && (
        <Modal onClose={() => setTool(null)} wide={tool === "termin" || tool === "antrag"}>
          {tool === "termin" && <TerminPicker />}
          {tool === "antrag" && <FormWizard aktenzeichen={toolAz} />}
          {tool === "fax" && (
            <>
              <div className="text-4xl">📠</div>
              <h3 className="mt-3 font-serif text-3xl">Uploads are not accepted</h3>
              <p className="mt-3 text-neutral-600">
                For data protection reasons, digital files cannot be received. Please fax your documents to
                <strong className="text-ink"> +49 (0)30 18 0000-0</strong>, or bring them in person in a Leitz-Ordner (A4, blue, with Rückenschild).
              </p>
              <p className="mt-3 text-sm text-neutral-500">Our fax machine is available Mo–Fr 08:00–15:00, except when it is receiving another fax.</p>
              <button onClick={() => setTool(null)} className="mt-6 rounded-full bg-navy px-6 py-3 text-white">Zur Kenntnis genommen</button>
            </>
          )}
          {tool === "impressum" && (
            <>
              <h3 className="font-serif text-3xl">Impressum</h3>
              <p className="mt-3 text-sm text-neutral-600">Angaben gemäß § 5 DDG (Seite 1 von 14)</p>
              <div className="mt-4 space-y-2 text-sm text-neutral-700">
                <p>Deutschland.gov is a satire / parody project. No real authority stands behind it.</p>
                <p>Verantwortlich für den Inhalt: Beamten-KI, Zimmer 4.017, Schalter 3, currently on Mittagspause.</p>
                <p>
                  Quellcode:{" "}
                  <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="text-navy underline">github.com/Melvin2306/germany-gov-ai</a>
                </p>
                <p>Seiten 2–14 des Impressums können schriftlich angefordert werden (Formular IMP-2, in dreifacher Ausfertigung).</p>
              </div>
              <button onClick={() => setTool(null)} className="mt-6 rounded-full bg-navy px-6 py-3 text-white">Zur Kenntnis genommen</button>
            </>
          )}
        </Modal>
      )}

      {cookie.open && <CookieWall reason={cookie.reason} onClose={closeCookies} />}

      {/* Floating widgets */}
      {ticket && (
        <div className="animate-fade-up fixed bottom-4 left-4 z-30 flex items-center gap-3 rounded-2xl bg-white py-2.5 pl-3 pr-2 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
          <div className="rounded-md bg-black px-2 py-1 font-mono text-lg font-bold text-red-500">
            <span className="animate-led">{String(ticket.serving).padStart(4, "0")}</span>
          </div>
          <div className="text-xs leading-tight text-neutral-600">
            <div className="font-semibold text-ink">Ihre Nr. {ticket.number}</div>
            ca. {Math.round(((ticket.number - ticket.serving) * 12) / 3600)} Std. Wartezeit
          </div>
          <button
            onClick={() => {
              setTicket(null);
              showToast("🎟️ Ihre Wartenummer ist verfallen. Bitte ziehen Sie eine neue Nummer.");
            }}
            aria-label="Wartenummer verfallen lassen"
            className="ml-1 flex h-7 w-7 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-100"
          >
            ✕
          </button>
        </div>
      )}
      {!cookie.open && (
        <button
          onClick={() => setCookie({ open: true, reason: "manual" })}
          className="fixed bottom-4 right-4 z-30 flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-medium text-neutral-600 shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:text-ink"
          aria-label="Cookie-Einstellungen"
        >
          🍪 {COOKIE_TOTAL} aktiv
        </button>
      )}

      {toast && (
        <div className="animate-fade-up fixed left-1/2 top-6 z-[80] w-[min(92vw,520px)] -translate-x-1/2 rounded-2xl bg-ink px-5 py-4 text-sm text-white shadow-2xl">
          {toast}
        </div>
      )}
    </div>
  );
}
