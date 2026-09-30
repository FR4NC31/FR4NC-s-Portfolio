import { ImageResponse } from "next/og";

export const alt = "Francis Edgard Ibañez — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "64px 80px", background: "#0c0d0f", color: "#f4f4f5", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, letterSpacing: 3 }}><span>FR4NC / PORTFOLIO</span><span style={{ color: "#f4f4f5" }}>OPEN TO OPPORTUNITIES</span></div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 80, fontSize: 88, lineHeight: 1.1, letterSpacing: -4 }}><span>Francis Edgard</span><span style={{ color: "#a0a3aa" }}>Ibañez.</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", paddingTop: 28, borderTop: "1px solid #2b2d32", fontSize: 23 }}><span>Full Stack Developer</span><span style={{ color: "#a0a3aa", fontSize: 20 }}>Frontend · APIs · Databases · Deployment</span></div>
    </div>, size,
  );
}

