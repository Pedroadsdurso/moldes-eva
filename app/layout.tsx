import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kit Tia Rosi — Chega de Desenhar Molde de EVA à Mão",
  description:
    "Pare de perder o fim de semana e desperdiçar EVA desenhando molde à mão. Kit com +5000 moldes prontos, organizados por tema — escolha, recorte e use em minutos.",
  keywords: [
    "moldes de eva",
    "moldes para imprimir",
    "molde eva professora",
    "kit moldes eva",
    "painel eva",
    "eva educação infantil",
  ],
  openGraph: {
    title: "Kit Tia Rosi — Chega de Desenhar Molde de EVA à Mão",
    description:
      "+5000 moldes prontos, organizados por tema. Economize tempo e material de EVA na sua próxima aula ou encomenda.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        {/* Preload e DNS da Vturb */}
        <link
          rel="preload"
          href="https://scripts.converteai.net/1f973f43-e8fe-4a19-bc6d-60ee96147f61/players/6a60412a878b892065171dc1/v4/player.js"
          as="script"
        />

        <link
          rel="preload"
          href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js"
          as="script"
        />

        <link
          rel="preload"
          href="https://cdn.converteai.net/1f973f43-e8fe-4a19-bc6d-60ee96147f61/6a604124c965ea774c37226e/main.m3u8"
          as="fetch"
          crossOrigin="anonymous"
        />

        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://license.vturb.com" />

        {/* Antecipação da conexão com a Traffik */}
        <link rel="dns-prefetch" href="https://342dd-virid.vercel.app" />
        <link
          rel="preconnect"
          href="https://342dd-virid.vercel.app"
          crossOrigin="anonymous"
        />

        {/* Temporização da Vturb */}
        <Script id="vturb-timing" strategy="beforeInteractive">
          {`
            !function(i,n){
              i._plt=i._plt||(
                n&&n.timeOrigin
                  ? n.timeOrigin+n.now()
                  : Date.now()
              )
            }(window,performance);
          `}
        </Script>

        {/* Traffik — rastreamento de UTMs */}
        <Script id="traffik-tracking" strategy="beforeInteractive">
          {`
            (function(d,s){
              s=d.createElement("script");
              s.async=1;
              s.src="https://342dd-virid.vercel.app/t.js";
              s.setAttribute(
                "data-account",
                "cmry50c910000p4k8lenqkd8e"
              );
              (d.head||d.documentElement).appendChild(s);
            })(document);
          `}
        </Script>

        {/* Traffik Pixel */}
        <Script id="traffik-pixel" strategy="beforeInteractive">
          {`
            (function(d,s){
              s=d.createElement("script");
              s.async=1;
              s.src="https://342dd-virid.vercel.app/px.js";

              s.setAttribute(
                "data-cfg",
                "cms0q2xpy000004k3d35p8hfi"
              );

              s.setAttribute(
                "data-ic-t",
                "contem_url"
              );

              s.setAttribute(
                "data-ic-v",
                "https://pay.kirvano.com/"
              );

              (d.head||d.documentElement).appendChild(s);
            })(document);
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col bg-cream text-ink font-body">
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s) {
              if (f.fbq) return;

              n = f.fbq = function() {
                n.callMethod
                  ? n.callMethod.apply(n, arguments)
                  : n.queue.push(arguments);
              };

              if (!f._fbq) {
                f._fbq = n;
              }

              n.push = n;
              n.loaded = true;
              n.version = "2.0";
              n.queue = [];

              t = b.createElement(e);
              t.async = true;
              t.src = v;

              s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s);
            }(
              window,
              document,
              "script",
              "https://connect.facebook.net/en_US/fbevents.js"
            );

            fbq("init", "1670059901792480");
            fbq("track", "PageView");
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1670059901792480&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
