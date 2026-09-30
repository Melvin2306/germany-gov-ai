"use client";

import { useRef, useState } from "react";

const ANLIEGEN = [
  "Antrag auf Erteilung eines Antragsformulars",
  "Beschwerde über Frau Schulze",
  "Antrag auf Verlängerung einer Frist, die bereits abgelaufen ist",
  "Bescheinigung über das Nichtvorliegen einer Bescheinigung",
  "Sonstiges",
];

const PENS = [
  { id: "blau", label: "Blau", color: "#1d4ed8" },
  { id: "schwarz", label: "Schwarz", color: "#111" },
  { id: "rot", label: "Rot", color: "#dc2626" },
];

const MIN_REASON = 40;
const MAX_REASON = 50;

function Signature({ color, onSigned }: { color: string; onSigned: () => void }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);

  const point = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return [
      ((e.clientX - rect.left) / rect.width) * e.currentTarget.width,
      ((e.clientY - rect.top) / rect.height) * e.currentTarget.height,
    ] as const;
  };

  return (
    <canvas
      ref={canvas}
      width={600}
      height={160}
      className="h-32 w-full touch-none rounded-xl border-2 border-dashed border-neutral-300 bg-[repeating-linear-gradient(0deg,transparent_0_31px,#e5e5e5_31px_32px)]"
      onPointerDown={(e) => {
        const ctx = canvas.current?.getContext("2d");
        if (!ctx) return;
        drawing.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        const [x, y] = point(e);
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x, y);
      }}
      onPointerMove={(e) => {
        if (!drawing.current) return;
        const ctx = canvas.current?.getContext("2d");
        if (!ctx) return;
        const [x, y] = point(e);
        ctx.lineTo(x, y);
        ctx.stroke();
      }}
      onPointerUp={() => {
        if (drawing.current) onSigned();
        drawing.current = false;
      }}
    />
  );
}

export function FormWizard({ aktenzeichen }: { aktenzeichen: string }) {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);
  const [data, setData] = useState({
    nachname: "",
    vorname: "",
    oma: "",
    geburtsort: "",
    anliegen: "",
    begruendung: "",
    pen: "",
    signed: false,
    versichert: false,
    gelesen: false,
  });
  const set = <K extends keyof typeof data>(k: K, v: (typeof data)[K]) => setData((d) => ({ ...d, [k]: v }));

  const validate = () => {
    const e: string[] = [];
    if (step === 0) {
      if (!data.nachname || !data.vorname) e.push("Nachname und Vorname sind Pflichtfelder.");
      if ((data.nachname && data.nachname !== data.nachname.toUpperCase()) || (data.vorname && data.vorname !== data.vorname.toUpperCase()))
        e.push("Bitte in DRUCKBUCHSTABEN ausfüllen (§ 3 Abs. 2 FormularVO).");
      if (!data.oma) e.push("Geburtsname der Großmutter mütterlicherseits fehlt.");
      if (data.geburtsort && /[a-z]/.test(data.geburtsort) && data.geburtsort !== data.geburtsort.toUpperCase()) e.push("Geburtsort ebenfalls in DRUCKBUCHSTABEN.");
    }
    if (step === 1) {
      if (!data.anliegen) e.push("Bitte wählen Sie ein Anliegen.");
      if (data.anliegen === "Sonstiges") e.push("„Sonstiges“ ist kein zulässiges Anliegen. Bitte wählen Sie ein zulässiges Anliegen.");
      if (data.begruendung.length < MIN_REASON) e.push(`Begründung zu kurz (mind. ${MIN_REASON} Zeichen).`);
      if (data.begruendung.length > MAX_REASON) e.push(`Begründung zu lang (max. ${MAX_REASON} Zeichen). Bitte fassen Sie sich kurz, aber nicht zu kurz.`);
    }
    if (step === 2) {
      if (data.pen === "schwarz") e.push("Schwarz ist Beamten vorbehalten.");
      if (data.pen === "rot") e.push("Rot ist dem Prüfer vorbehalten.");
      if (!data.pen) e.push("Bitte wählen Sie eine Stiftfarbe.");
      if (!data.signed) e.push("Unterschrift fehlt.");
      if (!data.versichert) e.push("Bitte versichern Sie die Richtigkeit Ihrer Angaben.");
      if (!data.gelesen) e.push("Bitte bestätigen Sie, dass Sie die Checkbox oben gelesen haben.");
    }
    setErrors(e);
    return e.length === 0;
  };

  const next = () => {
    if (validate()) {
      setErrors([]);
      setStep((s) => s + 1);
    }
  };

  const steps = ["Persönliche Angaben", "Anliegen", "Unterschrift"];
  const input = "mt-1 w-full rounded-xl border border-neutral-300 px-4 py-2.5 focus:border-navy focus:outline-none";

  if (step === 3) {
    return (
      <div>
        <div className="text-4xl">📨</div>
        <h3 className="mt-2 font-serif text-3xl sm:text-4xl">Eingangsbestätigung</h3>
        <p className="mt-3 text-neutral-600">
          Ihr <strong>{data.anliegen}</strong> ist am {new Date().toLocaleDateString("de-DE")} eingegangen und wurde unter dem Aktenzeichen <strong>{aktenzeichen}</strong> erfasst.
        </p>
        <div className="mt-5 rounded-2xl bg-[#f3f2f1] p-4 text-sm leading-relaxed text-neutral-700">
          <strong>Nächste Schritte:</strong>
          <ol className="mt-2 list-decimal space-y-1 pl-5">
            <li>Ihr Antrag wird ausgedruckt und in einen Leitz-Ordner abgeheftet.</li>
            <li>Das beantragte Antragsformular wird Ihnen per Post zugestellt (6–8 Wochen).</li>
            <li>Bitte füllen Sie das Antragsformular aus und reichen Sie es persönlich ein (Termin erforderlich).</li>
          </ol>
        </div>
        <div className="relative mt-6 flex items-center justify-between gap-4">
          <button onClick={() => window.print()} className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm">🖨️ Ausdrucken (3×)</button>
          <div className="animate-stamp rounded-md border-[3px] border-emerald-700/80 px-3 py-1 text-center font-black uppercase leading-tight text-emerald-700/80">
            <div className="text-[10px] tracking-widest">Eingegangen</div>
            <div className="text-lg">Unter Vorbehalt</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Formular A-0 · Seite {step + 1} von 3</div>
      <h3 className="mt-1 font-serif text-3xl sm:text-4xl">Antrag stellen</h3>
      <div className="mt-4 flex gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex-1">
            <div className={`h-1.5 rounded-full ${i <= step ? "bg-navy" : "bg-neutral-200"}`} />
            <div className={`mt-1 text-[11px] ${i === step ? "font-semibold text-ink" : "text-neutral-400"}`}>{s}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        {step === 0 && (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium">Nachname*<input className={input} value={data.nachname} onChange={(e) => set("nachname", e.target.value)} placeholder="MUSTERMANN" /></label>
              <label className="block text-sm font-medium">Vorname(n)*<input className={input} value={data.vorname} onChange={(e) => set("vorname", e.target.value)} placeholder="ERIKA" /></label>
            </div>
            <label className="block text-sm font-medium">Geburtsname der Großmutter mütterlicherseits*<input className={input} value={data.oma} onChange={(e) => set("oma", e.target.value)} /></label>
            <label className="block text-sm font-medium">Geburtsort (lt. Geburtsurkunde, nicht lt. Gefühl)<input className={input} value={data.geburtsort} onChange={(e) => set("geburtsort", e.target.value)} /></label>
          </>
        )}
        {step === 1 && (
          <>
            <fieldset className="space-y-2">
              <legend className="text-sm font-medium">Anliegen*</legend>
              {ANLIEGEN.map((a) => (
                <label key={a} className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm ${data.anliegen === a ? "border-navy bg-navy/5" : "border-neutral-200"}`}>
                  <input type="radio" name="anliegen" checked={data.anliegen === a} onChange={() => set("anliegen", a)} className="accent-navy" />
                  {a}
                </label>
              ))}
            </fieldset>
            <label className="block text-sm font-medium">
              Begründung* (mind. {MIN_REASON}, max. {MAX_REASON} Zeichen)
              <textarea className={`${input} h-24 resize-none`} value={data.begruendung} onChange={(e) => set("begruendung", e.target.value)} />
              <span className={`mt-1 block text-right text-xs tabular-nums ${data.begruendung.length >= MIN_REASON && data.begruendung.length <= MAX_REASON ? "text-emerald-600" : "text-rot"}`}>
                {data.begruendung.length} / {MIN_REASON}–{MAX_REASON}
              </span>
            </label>
          </>
        )}
        {step === 2 && (
          <>
            <div>
              <div className="text-sm font-medium">Stiftfarbe*</div>
              <div className="mt-2 flex gap-2">
                {PENS.map((p) => (
                  <button key={p.id} onClick={() => set("pen", p.id)} className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${data.pen === p.id ? "border-navy bg-navy/5" : "border-neutral-200"}`}>
                    <span className="h-3 w-3 rounded-full" style={{ background: p.color }} /> {p.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-medium">Unterschrift* (innerhalb der Linien)</div>
              <div className="mt-2">
                <Signature color={PENS.find((p) => p.id === data.pen)?.color ?? "#1d4ed8"} onSigned={() => set("signed", true)} />
              </div>
            </div>
            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" checked={data.versichert} onChange={(e) => set("versichert", e.target.checked)} className="mt-1 accent-navy" />
              Ich versichere, dass meine Angaben richtig und vollständig sind und dass ich keine weiteren Angaben habe.
            </label>
            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" checked={data.gelesen} onChange={(e) => set("gelesen", e.target.checked)} className="mt-1 accent-navy" />
              Ich habe die Checkbox oben gelesen.
            </label>
          </>
        )}
      </div>

      {errors.length > 0 && (
        <div className="mt-5 rounded-2xl border border-rot/30 bg-rot/5 p-4 text-sm text-rot">
          <div className="font-semibold">Ihr Antrag ist unvollständig ({errors.length} {errors.length === 1 ? "Mangel" : "Mängel"}):</div>
          <ul className="mt-1 list-disc pl-5">
            {errors.map((e) => <li key={e}>{e}</li>)}
          </ul>
        </div>
      )}

      <div className="mt-6 flex justify-between gap-3">
        <button onClick={() => { setErrors([]); setStep((s) => Math.max(0, s - 1)); }} disabled={step === 0} className="rounded-full border border-neutral-300 px-5 py-3 text-sm disabled:opacity-40">
          Zurück
        </button>
        <button onClick={next} className="rounded-full bg-navy px-6 py-3 font-semibold text-white">
          {step === 2 ? "Verbindlich einreichen" : "Weiter"}
        </button>
      </div>
    </div>
  );
}
