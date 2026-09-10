import React from "react";
import { Composition } from "remotion";
import { OgPost, OgSite } from "./OgPost";
import { OG } from "./brand";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="OgPost"
      component={OgPost}
      // A still, not a video. One frame is all the renderer needs.
      durationInFrames={1}
      fps={30}
      width={OG.width}
      height={OG.height}
      defaultProps={{
        title: "The zombie problem",
        description: "Nobody has ever verified a mind other than their own.",
        format: "essay",
        readTime: "5 min",
        dateLabel: "July 17, 2026",
      }}
    />
    <Composition id="OgSite" component={OgSite} durationInFrames={1} fps={30} width={OG.width} height={OG.height} />
  </>
);
