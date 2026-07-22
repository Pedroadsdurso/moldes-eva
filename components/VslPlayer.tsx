"use client";

import Script from "next/script";

const MEDIA_ID = "89rp87qzx6";
const ASPECT = "0.5607476635514018";

export function VslPlayer() {
  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" async />
      <Script
        src={`https://fast.wistia.com/embed/${MEDIA_ID}.js`}
        strategy="afterInteractive"
        type="module"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `wistia-player[media-id='${MEDIA_ID}'] { display: block; aspect-ratio: ${ASPECT}; } wistia-player[media-id='${MEDIA_ID}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${MEDIA_ID}/swatch'); filter: blur(5px); }`,
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: `<wistia-player media-id="${MEDIA_ID}" aspect="${ASPECT}"></wistia-player>`,
        }}
      />
    </>
  );
}
