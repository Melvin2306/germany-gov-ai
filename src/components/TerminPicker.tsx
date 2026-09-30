"use client";

import { useState } from "react";

const MONTHS = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
const WEEKDAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

type Phase = "idle" | "searching" | "found" | "reserving" | "taken";

export function TerminPicker() {
  const now = new Date();
  const [view, setView] = useState({ y: now.getFullYear(), m: now.getMonth() });
  const [phase, setPhase] = useState<Phase>("idle");
  const [free, setFree] = useState<{ y: number; m: number; d: number } | null>(null);
  const [taken, setTaken] = useState<string[]>([]);
  const [searches, setSearches] = useState(0);

  const first = new Date(view.y, view.m, 1);
  const offset = (first.getDay() + 6) % 7;
  const days = new Date(view.y, view.m + 1, 0).getDate();

  const shift = (delta: number) =>
    setView((v) => {
      const d = new Date(v.y, v.m + delta, 1);
      return { y: d.getFullYear(), m: d.getMonth() };
    });

  const search = async () => {
    setPhase("searching");
    setFree(null);
    // Flip through the months like a very determined Sachbearbeiter.
    const jump = 20 + searches * 9 + Math.floor(Math.random() * 12);
    for (let i = 1; i <= jump; i++) {
      await new Promise((r) => setTimeout(r, 55));
      shift(1);
    }
    const target = new Date(now.getFullYear(), now.getMonth() + jump, 1);
    // Only Tuesdays and Thursdays qualify.
    let d = 1 + Math.floor(Math.random() * 20);
    while (![2, 4].includes(new Date(target.getFullYear(), target.getMonth(), d).getDay())) d++;
    setFree({ y: target.getFullYear(), m: target.getMonth(), d });
    setSearches((s) => s + 1);
    setPhase("found");
  };

  const reserve = async () => {
    if (!free) return;
    setPhase("reserving");
    await new Promise((r) => setTimeout(r, 1600));
    setTaken((t) => [...t, `${free.y}-${free.m}-${free.d}`]);
    setPhase("taken");
  };

  const cell = (d: number) => {
    const date = new Date(view.y, view.m, d);
    const wd = date.getDay();
    const isFree = free && free.y === view.y && free.m === view.m && free.d === d && phase !== "taken";
    const isTaken = taken.includes(`${view.y}-${view.m}-${d}`);
    const closed = wd !== 2 && wd !== 4;
    if (isFree) {
      return (
        <button onClick={reserve} disabled={phase === "reserving"} className="aspect-square rounded-xl bg-emerald-500 text-sm font-bold text-white shadow-lg ring-4 ring-emerald-200 transition hover:scale-105">
          {phase === "reserving" ? "…" : d}
        </button>
      );
    }
    return (
      <div
        className={`flex aspect-square flex-col items-center justify-center rounded-xl text-sm ${closed ? "bg-neutral-100 text-neutral-300" : isTaken ? "bg-rot/15 text-rot line-through" : "bg-rot/10 text-rot/70"}`}
        title={closed ? "Geschlossen" : "Ausgebucht"}
      >
        {d}
        {!closed && <span className="hidden text-[8px] uppercase sm:block">voll</span>}
      </div>
    );
  };

  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Online-Terminvergabe</div>
      <h3 className="mt-1 font-serif text-3xl sm:text-4xl">Termin buchen</h3>
      <p className="mt-2 text-sm text-neutral-600">Bürgeramt Mitte · Schalter 3 · Dienstleistung: <em>Alle</em></p>

      <div className="mt-5 flex items-center justify-between">
        <button onClick={() => shift(-1)} disabled={phase === "searching"} className="h-10 w-10 rounded-full bg-neutral-100 hover:bg-neutral-200" aria-label="Vorheriger Monat">‹</button>
        <div className="font-semibold tabular-nums">{MONTHS[view.m]} {view.y}</div>
        <button onClick={() => shift(1)} disabled={phase === "searching"} className="h-10 w-10 rounded-full bg-neutral-100 hover:bg-neutral-200" aria-label="Nächster Monat">›</button>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1.5 text-center text-xs text-neutral-500">
        {WEEKDAYS.map((w) => <div key={w}>{w}</div>)}
      </div>
      <div className="mt-1.5 grid grid-cols-7 gap-1.5">
        {Array.from({ length: offset }).map((_, i) => <div key={`o${i}`} />)}
        {Array.from({ length: days }).map((_, i) => <div key={i} className="contents">{cell(i + 1)}</div>)}
      </div>

      <div className="mt-5 min-h-[72px] rounded-2xl bg-[#f3f2f1] p-4 text-sm">
        {phase === "idle" && <>Im ausgewählten Zeitraum sind leider keine Termine verfügbar.</>}
        {phase === "searching" && <span className="animate-pulse">Suche nächsten freien Termin… Bitte Seite nicht neu laden (und nicht atmen).</span>}
        {phase === "found" && free && (
          <>
            <strong>Freier Termin gefunden!</strong> {free.d}. {MONTHS[free.m]} {free.y}, 07:14 Uhr. Klicken Sie auf das grüne Feld, um ihn verbindlich zu reservieren.
          </>
        )}
        {phase === "reserving" && <span className="animate-pulse">Reservierung wird an den Server übermittelt (per Fax)…</span>}
        {phase === "taken" && (
          <>
            <strong className="text-rot">Leider wurde dieser Termin soeben vergeben.</strong> (It was Frau Schulze. She does not need it; she just likes to have it.)
          </>
        )}
      </div>

      <button
        onClick={search}
        disabled={phase === "searching" || phase === "reserving"}
        className="mt-4 w-full rounded-full bg-navy py-3.5 font-semibold text-white disabled:opacity-60"
      >
        {searches === 0 ? "Nächsten freien Termin suchen" : "Erneut suchen"}
      </button>
    </div>
  );
}
