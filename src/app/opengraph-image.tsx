import { ImageResponse } from "next/og";

export const alt = "Deutschland.gov — Hallo, Deutschland. A satire of German bureaucracy.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #f3f2f1, #e7e5e3)",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, position: "absolute", top: 48, left: 64 }}>
          <div style={{ display: "flex", flexDirection: "column", width: 56, height: 36, borderRadius: 4, overflow: "hidden" }}>
            <div style={{ flex: 1, background: "#111" }} />
            <div style={{ flex: 1, background: "#dd0000" }} />
            <div style={{ flex: 1, background: "#ffce00" }} />
          </div>
          <div style={{ fontSize: 40, color: "#0b1220" }}>Deutschland.gov</div>
        </div>
        <div style={{ fontSize: 140, color: "#0b1220", letterSpacing: -4 }}>Hallo, Deutschland</div>
        <div style={{ fontSize: 36, color: "#555", marginTop: 16, fontFamily: "sans-serif" }}>
          Whatever you need from government, start here. Then go to Zimmer 4.017.
        </div>
        <div
          style={{
            position: "absolute",
            right: 70,
            bottom: 60,
            border: "8px solid rgba(220,38,38,0.85)",
            color: "rgba(220,38,38,0.85)",
            borderRadius: 12,
            padding: "8px 28px",
            fontSize: 54,
            fontWeight: 900,
            fontFamily: "sans-serif",
            transform: "rotate(-9deg)",
          }}
        >
          SATIRE
        </div>
      </div>
    ),
    size,
  );
}
