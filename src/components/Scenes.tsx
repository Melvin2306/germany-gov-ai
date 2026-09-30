"use client";

import { useEffect, useState } from "react";

// Illustrated "photos" for the hero carousel. Each scene fills its parent.

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute bottom-5 left-5 right-5 sm:right-auto rounded-2xl bg-black/55 px-4 py-2.5 text-sm text-white backdrop-blur">
      {children}
    </div>
  );
}

function WaitingRoom() {
  const [current, setCurrent] = useState(17);
  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (Math.random() < 0.25 ? c + 1 : c)), 9000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#d9dcd3] to-[#b9bdb0]">
      {/* linoleum floor */}
      <div className="absolute bottom-0 h-1/3 w-full bg-[repeating-linear-gradient(90deg,#9a8f74_0_60px,#a39879_60px_120px)]" />
      {/* LED display */}
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 rounded-lg border-4 border-neutral-700 bg-black px-6 py-3 font-mono shadow-xl">
        <div className="whitespace-nowrap text-[10px] tracking-widest text-neutral-400">AUFRUF · SCHALTER 3</div>
        <div className="animate-led text-4xl font-bold text-red-500 sm:text-5xl">
          {String(current).padStart(4, "0")}
        </div>
      </div>
      {/* chairs */}
      <div className="absolute bottom-[30%] left-1/2 flex -translate-x-1/2 gap-2 sm:gap-3">
        {["🧓", "😐", "🧔", "😴", "👩‍🦳", "🧑‍💼"].map((p, i) => (
          <div key={i} className={`flex-col items-center ${i >= 4 ? "hidden sm:flex" : "flex"}`}>
            <span className="relative z-10 -mb-1 text-4xl sm:text-5xl">{p}</span>
            <div className="h-7 w-10 rounded-t-2xl" style={{ background: ["#4b5563", "#7c3aed", "#0f766e", "#b45309", "#be123c", "#1e3a8a"][i] }} />
            <div className="h-3 w-14 rounded bg-orange-700" />
            <div className="flex w-14 justify-between">
              <div className="h-6 w-1 bg-neutral-600" />
              <div className="h-6 w-1 bg-neutral-600" />
            </div>
          </div>
        ))}
      </div>
      {/* ticket machine */}
      <div className="absolute bottom-[30%] right-[6%] hidden w-20 rounded-t-xl bg-neutral-200 p-2 text-center text-[9px] font-semibold shadow sm:block">
        Bitte Nummer ziehen
        <div className="mx-auto mt-2 h-1 w-12 bg-neutral-800" />
        <div className="mt-1 rounded bg-white px-1 py-2 font-mono text-[11px]">Ihre Nr. 4812</div>
      </div>
      <div className="absolute left-[6%] top-[32%] hidden rotate-[-3deg] sm:block rounded bg-yellow-100 px-3 py-2 text-[11px] font-medium text-neutral-800 shadow">
        Toilette nur für Personal
      </div>
      <Caption>Bürgeramt Mitte, 07:03 Uhr. Your number: 4812. Now serving: {current}.</Caption>
    </div>
  );
}

function FaxOffice() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#e8e1cf] to-[#cfc4a6]">
      <div className="absolute left-[8%] top-[28%] hidden h-24 w-32 sm:block rounded border-8 border-amber-900/70 bg-sky-200 shadow-inner">
        <div className="p-1 text-[9px] text-sky-900">☀ Windows 98</div>
      </div>
      <div className="absolute right-[10%] top-[28%] rotate-2 rounded bg-white px-3 py-2 font-serif text-lg shadow">
        Kalender 2003 🐈
      </div>
      {/* desk */}
      <div className="absolute bottom-0 h-[34%] w-full bg-[#8b5a2b] shadow-[inset_0_8px_0_#a0692f]" />
      {/* fax machine */}
      <div className="absolute bottom-[30%] left-1/2 w-60 -translate-x-1/2 sm:w-72">
        <div className="relative mx-auto h-28 w-44 overflow-hidden">
          <div className="animate-paper-slow absolute inset-x-4 top-0 h-28 bg-white p-2 font-mono text-[8px] leading-tight text-neutral-500 shadow">
            AN: Bundesamt für Digitalisierung
            <br />BETREFF: Digitalisierung
            <br />SEITE 1 VON 47
            <br />████████ ███ ██████
            <br />███ ████████ ████
          </div>
        </div>
        <div className="relative h-24 rounded-xl bg-neutral-300 shadow-xl">
          <div className="absolute left-4 top-4 h-6 w-24 rounded bg-lime-200 px-1 font-mono text-[10px] leading-6 text-neutral-700">
            SENDE… 3%
          </div>
          <div className="absolute right-4 top-3 grid grid-cols-3 gap-1">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-3 w-4 rounded-sm bg-neutral-500" />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-[34%] left-[10%] text-6xl">🪴</div>
      <div className="absolute bottom-[34%] right-[12%] text-6xl">☕</div>
      <Caption>Germany&apos;s most secure cloud infrastructure: das Faxgerät (since 1979).</Caption>
    </div>
  );
}

function TrainPlatform() {
  const rows = [
    ["ICE 578", "München Hbf", "+145", "Zug fällt aus"],
    ["RE 7", "Wanne-Eickel", "+38", "Umgekehrte Wagenreihung"],
    ["ICE 1024", "Berlin Hbf", "+∞", "Personen im Gleis"],
    ["S 3", "Irgendwo", "+12", "Heute ohne Halt"],
  ];
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#9fb3c8] to-[#5d6f82]">
      <div className="absolute left-1/2 top-[27%] w-[86%] max-w-xl -translate-x-1/2 rounded-md bg-[#0a2a6b] p-3 font-mono text-white shadow-2xl">
        <div className="mb-2 flex justify-between text-[11px] text-sky-200">
          <span>Gleis 7</span>
          <span>Abfahrt</span>
        </div>
        {rows.map((r) => (
          <div key={r[0]} className="grid grid-cols-[70px_1fr_50px] gap-2 border-t border-white/15 py-1.5 text-[12px] sm:grid-cols-[80px_1fr_60px_1fr]">
            <span className="font-bold">{r[0]}</span>
            <span>{r[1]}</span>
            <span className="text-yellow-300">{r[2]}</span>
            <span className="hidden text-yellow-300 sm:block">{r[3]}</span>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 h-[30%] w-full bg-neutral-400">
        <div className="h-2 w-full bg-yellow-300" />
      </div>
      <div className="absolute bottom-[30%] flex w-full justify-center gap-4 text-5xl">
        <span>🧍</span><span>🧍‍♀️</span><span>🧍‍♂️</span><span>🙍</span><span>🧍</span>
      </div>
      <Caption>Deutsche Bahn: Wir bitten um Entschuldigung. (We apologise.) (We do not.)</Caption>
    </div>
  );
}

function RecyclingYard() {
  const bins = [
    ["bg-yellow-400", "Gelb"],
    ["bg-blue-600", "Papier"],
    ["bg-amber-800", "Bio"],
    ["bg-neutral-800", "Rest"],
    ["bg-green-600", "Grün"],
    ["bg-neutral-100", "Weiß"],
    ["bg-orange-900", "Braun"],
  ];
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#cfe3f5] to-[#e6eef3]">
      <div className="absolute bottom-0 h-[30%] w-full bg-[repeating-linear-gradient(45deg,#b7b7b7_0_12px,#c3c3c3_12px_24px)]" />
      <div className="absolute bottom-[26%] left-1/2 flex -translate-x-1/2 items-end gap-2 sm:gap-3">
        {bins.map(([c, label]) => (
          <div key={label} className="flex flex-col items-center">
            <div className={`h-3 w-12 rounded-t-md ${c} brightness-90 sm:w-16`} />
            <div className={`flex h-24 w-11 items-center justify-center rounded-b-md ${c} text-[10px] font-bold ${label === "Weiß" ? "text-neutral-700" : "text-white"} shadow-lg sm:h-28 sm:w-14`}>
              {label}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute right-[8%] top-[27%] text-center">
        <div className="text-5xl">🪟👵</div>
        <div className="mt-1 rounded bg-white/80 px-2 py-1 text-[11px] font-medium">Frau Schulze is watching</div>
      </div>
      <div className="absolute left-[8%] top-[29%] hidden rounded bg-white sm:block px-3 py-2 text-[11px] font-semibold shadow">
        Einwurf nur Mo–Sa 7–13 &amp; 15–19 Uhr
      </div>
      <Caption>Mülltrennung: 7 bins, 1 yoghurt pot, 45 minutes of existential doubt.</Caption>
    </div>
  );
}

function SundayStreet() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#fde7c7] to-[#f5c89a]">
      <div className="absolute bottom-[30%] left-0 flex w-full items-end justify-center gap-2 px-6">
        {[
          ["REWE", "Geschlossen"],
          ["Bäckerei", "Zu"],
          ["Baumarkt", "Nein"],
          ["Apotheke", "Notdienst: 43 km"],
        ].map(([name, sign]) => (
          <div key={name} className="flex w-28 flex-col items-center rounded-t-lg bg-[#e9dccb] pb-2 shadow sm:w-36">
            <div className="w-full rounded-t-lg bg-neutral-700 py-1 text-center text-[11px] font-bold text-white">{name}</div>
            <div className="mt-3 h-16 w-20 bg-neutral-600/80 sm:w-24" />
            <div className="mt-2 rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white">{sign}</div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 h-[30%] w-full bg-neutral-500" />
      <div className="absolute bottom-[12%] left-[10%] text-5xl">🚶‍♂️🚶‍♀️</div>
      <div className="absolute bottom-[12%] right-[12%] flex items-center gap-2">
        <span className="text-5xl">🚜</span>
        <span className="rounded bg-white px-2 py-1 text-[11px] font-bold text-red-600 shadow">RUHESTÖRUNG!</span>
      </div>
      <div className="absolute left-1/2 top-[27%] -translate-x-1/2 whitespace-nowrap font-serif text-4xl text-neutral-800/70">So, 11:00 Uhr</div>
      <Caption>Sonntagsruhe: the lawnmower has been reported. Twice.</Caption>
    </div>
  );
}

function ChecklistDesk() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#e5e7eb] to-[#c7cbd1]">
      <div className="absolute left-1/2 top-[25%] flex -translate-x-1/2 gap-3">
        {["#1d4ed8", "#dc2626", "#16a34a", "#ca8a04", "#1d4ed8", "#6b7280"].map((c, i) => (
          <div key={i} className="flex h-28 w-10 flex-col items-center justify-end rounded-sm pb-2 shadow-lg sm:h-36 sm:w-12" style={{ background: c }}>
            <div className="h-4 w-4 rounded-full bg-white/80" />
            <div className="mt-2 w-8 rounded-sm bg-white px-0.5 py-3 text-[7px] leading-tight text-neutral-600">
              Akte {2011 + i}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 h-[30%] w-full bg-[#6b4a2b]" />
      <div className="absolute bottom-[20%] left-1/2 w-64 -translate-x-1/2 rotate-[-2deg] bg-white p-4 text-[11px] text-neutral-700 shadow-2xl">
        <div className="font-bold">Antrag auf Erteilung eines Antragsformulars</div>
        <div className="mt-2 space-y-1">
          <div>☐ Original</div>
          <div>☐ Beglaubigte Kopie</div>
          <div>☐ Kopie der beglaubigten Kopie</div>
        </div>
        <div className="animate-stamp absolute -right-3 bottom-3 rounded border-4 border-red-600 px-2 py-0.5 text-lg font-black text-red-600">
          ABGELEHNT
        </div>
      </div>
      <div className="absolute bottom-[26%] left-[10%] text-5xl">🖊️</div>
      <Caption>Leitz-Ordner, sorted by year, colour and emotional damage.</Caption>
    </div>
  );
}

export const scenes = [WaitingRoom, FaxOffice, TrainPlatform, RecyclingYard, SundayStreet, ChecklistDesk];
