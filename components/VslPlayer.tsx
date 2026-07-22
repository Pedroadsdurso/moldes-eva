"use client";

import Script from "next/script";

const MEDIA_ID = "89rp87qzx6";
const ASPECT = "0.5607476635514018";

export function VslPlayer() {
  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" async />
      <Script
        src={`https://fast.wistia.com/embed/${MEDIA_ID}.js`}
        strategy="lazyOnload"
        type="module"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `wistia-player[media-id='${MEDIA_ID}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${MEDIA_ID}/swatch'); display: block; filter: blur(5px); padding-top:178.33%; }`,
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
