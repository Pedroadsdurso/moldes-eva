"use client";

import Script from "next/script";

const PLAYER_ID = "vid-6a60412a878b892065171dc1";
const PLAYER_SRC =
  "https://scripts.converteai.net/1f973f43-e8fe-4a19-bc6d-60ee96147f61/players/6a60412a878b892065171dc1/v4/player.js";

export function VslPlayer() {
  return (
    <>
      <Script src={PLAYER_SRC} strategy="afterInteractive" async />
      <div
        dangerouslySetInnerHTML={{
          __html: `<vturb-smartplayer id="${PLAYER_ID}" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"><div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 178.33333333333334% 0 0; z-index: 0; background-color: black;"></div></vturb-smartplayer>`,
        }}
      />
    </>
  );
}
