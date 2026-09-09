import React from "react";
import { Composition } from "remotion";
import { OgPost } from "./OgPost";
import { OG } from "./brand";

export const RemotionRoot: React.FC = () => (
  <Composition
    id="OgPost"
    component={OgPost}
    // A still, not a video — one frame is all the renderer needs.
    durationInFrames={1}
    fps={30}
    width={OG.width}
    height={OG.height}
    defaultProps={{
      title: "The zombie problem",
      description:
        "Nobody has ever verified a mind other than their own. A few questions that follow from that.",
      format: "essay",
      readTime: "5 min",
      dateLabel: "Jul 2026",
    }}
  />
);
