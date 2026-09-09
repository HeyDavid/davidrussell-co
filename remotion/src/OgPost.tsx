import React from "react";
import { AbsoluteFill } from "remotion";
import { fitText } from "@remotion/layout-utils";
import { loadFont } from "@remotion/google-fonts/PlusJakartaSans";
import { BRAND, OG } from "./brand";

const { fontFamily } = loadFont("normal", { weights: ["500", "700", "800"] });

export type OgPostProps = {
  title: string;
  description: string;
  format: string;
  readTime: string;
  dateLabel: string;
};

const PAD = 84;
const CONTENT_W = OG.width - PAD * 2;

/** Faint horizontal drift lines + a soft lavender bloom, mirroring og-2026b.png. */
const Backdrop: React.FC = () => (
  <AbsoluteFill>
    <svg width={OG.width} height={OG.height} viewBox={`0 0 ${OG.width} ${OG.height}`}>
      <defs>
        <radialGradient id="bloom">
          <stop offset="0%" stopColor={BRAND.lavender} stopOpacity="0.85" />
          <stop offset="55%" stopColor={BRAND.lavender} stopOpacity="0.28" />
          <stop offset="100%" stopColor={BRAND.lavender} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx={1058} cy={118} r={132} fill="url(#bloom)" />
      <circle cx={1058} cy={118} r={44} fill={BRAND.lavender} opacity={0.55} />
      <path d="M0 104 C 300 78, 620 132, 900 106 S 1200 82, 1200 96" fill="none" stroke={BRAND.faint} strokeWidth={1.4} />
      <path d="M0 318 C 340 292, 700 344, 1000 312 S 1200 296, 1200 308" fill="none" stroke={BRAND.blue} strokeWidth={1.6} opacity={0.34} />
      <path d="M0 486 C 260 512, 640 452, 940 492 S 1200 508, 1200 496" fill="none" stroke={BRAND.faint} strokeWidth={1.4} />
    </svg>
  </AbsoluteFill>
);

/**
 * Shrinks the headline until it fits the card, then hard-caps the line count.
 * fitText measures a single line, so divide by the number of lines we allow.
 */
const headlineSize = (title: string) => {
  const lines = title.length > 62 ? 3 : title.length > 30 ? 2 : 1;
  const { fontSize } = fitText({
    text: title,
    withinWidth: CONTENT_W * lines * 0.94,
    fontFamily,
    fontWeight: 800,
    letterSpacing: "-0.03em",
  });
  return Math.min(fontSize, 96);
};

export const OgPost: React.FC<OgPostProps> = ({ title, description, format, readTime, dateLabel }) => {
  const meta = [format, readTime, dateLabel].filter(Boolean).join("  ·  ");

  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.paper, fontFamily }}>
      <Backdrop />
      <AbsoluteFill
        style={{
          padding: PAD,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            color: BRAND.blue,
            fontWeight: 700,
            fontSize: 21,
            letterSpacing: "0.01em",
          }}
        >
          david russell &nbsp;·&nbsp; writing
        </div>

        <div style={{ marginTop: -14 }}>
          <h1
            style={{
              margin: 0,
              color: BRAND.ink,
              fontWeight: 800,
              fontSize: headlineSize(title),
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              textWrap: "balance",
            }}
          >
            {title}
            <span style={{ color: BRAND.blue, marginLeft: "-0.04em" }}>.</span>
          </h1>
          {description ? (
            <p
              style={{
                margin: "22px 0 0",
                color: BRAND.dim,
                fontWeight: 500,
                fontSize: 25,
                lineHeight: 1.45,
                maxWidth: 960,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {description}
            </p>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${BRAND.faint}`,
            paddingTop: 22,
            fontSize: 21,
            fontWeight: 700,
          }}
        >
          <span style={{ color: BRAND.dim, letterSpacing: "0.01em" }}>{meta}</span>
          <span style={{ color: BRAND.blue }}>{BRAND.site}</span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
