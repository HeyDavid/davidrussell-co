import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { fitText } from "@remotion/layout-utils";
import { loadFont as loadAsul } from "@remotion/google-fonts/Asul";
import { loadFont as loadSource } from "@remotion/google-fonts/SourceSans3";
import { BRAND, OG } from "./brand";

const { fontFamily: disp } = loadAsul("normal", { weights: ["700"] });
const { fontFamily: text } = loadSource("normal", { weights: ["400", "600"] });

export type OgPostProps = {
  title: string;
  description: string;
  format: string;
  readTime: string;
  dateLabel: string;
};

const PAD = 84;
const CONTENT_W = OG.width - PAD * 2;

/** The site header's rule: a yellow run, then a soft gray line. */
export const LevelRule: React.FC = () => (
  <div style={{ display: "flex", height: 6 }}>
    <div style={{ width: 260, background: BRAND.accent }} />
    <div style={{ flex: 1, background: BRAND.lineSoft }} />
  </div>
);

/** Headline size: shrink to fit, cap the line count. */
const headlineSize = (title: string) => {
  const lines = title.length > 58 ? 3 : title.length > 26 ? 2 : 1;
  const { fontSize } = fitText({
    text: title,
    withinWidth: CONTENT_W * lines * 0.9,
    fontFamily: disp,
    fontWeight: 700,
  });
  return Math.min(fontSize, 92);
};

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const OgPost: React.FC<OgPostProps> = ({ title, description, format, readTime, dateLabel }) => {
  const meta = [cap(format), dateLabel, readTime].filter(Boolean).join(" · ");
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.paper, fontFamily: text, color: BRAND.ink }}>
      <AbsoluteFill style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: `30px ${PAD}px 18px` }}>
          <Img src={staticFile("assets/signature-2026.png")} style={{ height: 78, width: "auto" }} />
          <span style={{ fontSize: 22, fontWeight: 600, color: BRAND.dim }}>{BRAND.site}</span>
        </div>
        <LevelRule />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: `0 ${PAD}px 20px` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
            <div style={{ width: 64, height: 12, background: BRAND.accent }} />
            <span style={{ fontSize: 23, fontWeight: 600, color: BRAND.dim }}>{meta}</span>
          </div>
          <h1 style={{ margin: 0, fontFamily: disp, fontWeight: 700, fontSize: headlineSize(title), lineHeight: 1.06, letterSpacing: "-0.012em", textWrap: "balance", maxWidth: CONTENT_W }}>
            {title}
          </h1>
          {description ? (
            <p style={{ margin: "22px 0 0", color: BRAND.dim, fontSize: 26, lineHeight: 1.45, maxWidth: 940, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
              {description}
            </p>
          ) : null}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

/** Site-wide card: signature, one line about David, his own photo with the yellow base. */
export const OgSite: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: BRAND.paper, fontFamily: text, color: BRAND.ink }}>
    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 760, display: "flex", flexDirection: "column", justifyContent: "center", padding: `0 56px 0 ${PAD}px` }}>
      <Img src={staticFile("assets/signature-2026.png")} style={{ width: 330, height: "auto", marginLeft: -8 }} />
      <p style={{ margin: "30px 0 0", fontFamily: disp, fontWeight: 700, fontSize: 44, lineHeight: 1.12, letterSpacing: "-0.012em" }}>
        Solo operator and writer in South Florida.
      </p>
      <p style={{ margin: "18px 0 0", fontSize: 26, lineHeight: 1.45, color: BRAND.dim, maxWidth: 560 }}>
        I run a small portfolio of companies and write about what building them teaches me.
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 30 }}>
        <div style={{ width: 64, height: 12, background: BRAND.accent }} />
        <span style={{ fontSize: 23, fontWeight: 600, color: BRAND.dim }}>{BRAND.site}</span>
      </div>
    </div>
    <div style={{ position: "absolute", right: PAD - 20, top: 56, bottom: 56, width: 330, borderBottom: `14px solid ${BRAND.accent}`, overflow: "hidden" }}>
      <Img src={staticFile("assets/hero-bridge.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }} />
    </div>
  </AbsoluteFill>
);
