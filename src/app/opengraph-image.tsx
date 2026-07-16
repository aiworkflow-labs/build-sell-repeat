import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamically generated social share image (Open Graph + Twitter). Rendered at
 * build time so there's no binary asset to maintain, and it stays on-brand
 * using the design-system colors. Every element uses explicit flex layout,
 * which the underlying renderer (Satori) requires.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fbfaf7",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "9999px",
              backgroundColor: "#1fa97a",
              marginRight: "16px",
            }}
          />
          <div style={{ display: "flex", fontSize: "30px", fontWeight: 800 }}>
            <span style={{ color: "#17181a" }}>Build.</span>
            <span style={{ color: "#1e5f4f", marginLeft: "8px" }}>Sell.</span>
            <span style={{ color: "#17181a", marginLeft: "8px" }}>Repeat.</span>
          </div>
        </div>

        {/* Headline + subtitle */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "74px",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            <div style={{ color: "#17181a" }}>Turn Instagram followers</div>
            <div style={{ color: "#1e5f4f" }}>into WhatsApp orders.</div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "28px",
              fontSize: "32px",
              color: "#6b675f",
            }}
          >
            Ordering pages for small businesses. One-time payment, no monthly fees.
          </div>
        </div>

        {/* Footnote */}
        <div style={{ display: "flex", fontSize: "26px", color: "#6b675f" }}>
          Delivered in 48 hours · Orders straight to your WhatsApp
        </div>
      </div>
    ),
    { ...size },
  );
}
