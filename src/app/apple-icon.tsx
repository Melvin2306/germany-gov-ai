import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#f3f2f1", padding: 28 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", borderRadius: 16, overflow: "hidden" }}>
          <div style={{ flex: 1, background: "#111" }} />
          <div style={{ flex: 1, background: "#dd0000" }} />
          <div style={{ flex: 1, background: "#ffce00" }} />
        </div>
      </div>
    ),
    size,
  );
}
