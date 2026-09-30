"use client";

import { useEffect } from "react";
import { FlagMark } from "./FlagMark";
import { REPO_URL } from "@/lib/site";

export type InfoPage = "how" | "privacy" | "about" | "soon" | "faq" | "feedback";

const LINKS: { label: string; page?: InfoPage }[] = [
  { label: "Home" },
  { label: "How it works", page: "how" },
  { label: "Privacy", page: "privacy" },
  { label: "About", page: "about" },
  { label: "Coming soon", page: "soon" },
  { label: "FAQ", page: "faq" },
  { label: "Submit feedback", page: "feedback" },
];

export function MenuPanel({
  open,
  onClose,
  onHome,
  onPage,
  onTermin,
  onAntrag,
  onTicket,
}: {
  open: boolean;
  onClose: () => void;
  onHome: () => void;
  onPage: (p: InfoPage) => void;
  onTermin: () => void;
  onAntrag: () => void;
  onTicket: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div className={`fixed inset-0 z-40 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/25 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-[440px] flex-col bg-white px-8 pb-8 pt-8 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end">
          <button onClick={onClose} aria-label="Close menu" className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f1f2f4] text-ink hover:bg-[#e6e8eb]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-1 py-6">
          {LINKS.map((l, i) => (
            <button
              key={l.label}
              onClick={() => (l.page ? onPage(l.page) : onHome())}
              style={{ transitionDelay: open ? `${120 + i * 40}ms` : "0ms" }}
              className={`whitespace-nowrap text-[36px] leading-[1.25] sm:text-[44px] tracking-[-0.03em] text-ink transition-all duration-500 hover:underline hover:decoration-2 hover:underline-offset-[6px] ${
                i === 0 ? "underline decoration-2 underline-offset-[6px]" : ""
              } ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
            >
              {l.label}
            </button>
          ))}
          <div className={`mt-8 flex flex-wrap justify-center gap-2 transition-opacity delay-500 duration-500 ${open ? "opacity-100" : "opacity-0"}`}>
            <button onClick={onTermin} className="rounded-full bg-[#f1f2f4] px-4 py-2 text-sm hover:bg-[#e6e8eb]">📅 Termin buchen</button>
            <button onClick={onAntrag} className="rounded-full bg-[#f1f2f4] px-4 py-2 text-sm hover:bg-[#e6e8eb]">📝 Antrag stellen</button>
            <button onClick={onTicket} className="rounded-full bg-[#f1f2f4] px-4 py-2 text-sm hover:bg-[#e6e8eb]">🎟️ Nummer ziehen</button>
          </div>
        </nav>

        <div className="rounded-3xl border border-[#eceef1] bg-[#f8f9fa] px-6 py-6 text-center">
          <div className="flex justify-center">
            <FlagMark size="lg" />
          </div>
          <p className="mt-3 text-[15px] leading-snug text-neutral-500">
            An unofficial satirical website of the
            <br />
            Bundesrepublik Deutschland
          </p>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-medium text-navy underline underline-offset-2">
            Source on GitHub
          </a>
        </div>
      </aside>
    </div>
  );
}
