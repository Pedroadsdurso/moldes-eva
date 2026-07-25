import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
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
      </head>

      <body className="min-h-full flex flex-col bg-cream text-ink font-body">
        {/* Captura e propagação de UTMs da Traffik */}
        <Script id="traffik-tracking" strategy="afterInteractive">
          {`
            (function () {
              "use strict";

              var ACCOUNT = "cmry50c910000p4k8lenqkd8e";
              var API = "https://342dd-virid.vercel.app";
              var COOKIE = "traffik_track";
              var SESSION = "traffik_session";
              var DAYS = 30;

              var UTM = [
                "utm_source",
                "utm_medium",
                "utm_campaign",
                "utm_content",
                "utm_term"
              ];

              var IDS = [
                "fbclid",
                "gclid",
                "ttclid"
              ];

              var CHECKOUT = [
                "hotmart",
                "kirvano",
                "cartpanda",
                "kiwify",
                "monetizze",
                "pay.",
                "checkout"
              ];

              function readCookie(name) {
                var match = document.cookie.match(
                  "(^|;)\\\\s*" + name + "\\\\s*=\\\\s*([^;]+)"
                );

                return match
                  ? decodeURIComponent(match.pop())
                  : null;
              }

              function writeCookie(name, value, days) {
                var expires = new Date(
                  Date.now() + days * 864e5
                ).toUTCString();

                document.cookie =
                  name +
                  "=" +
                  encodeURIComponent(value) +
                  ";expires=" +
                  expires +
                  ";path=/;SameSite=Lax";
              }

              function stored() {
                try {
                  return JSON.parse(
                    readCookie(COOKIE) || "{}"
                  );
                } catch (error) {
                  return {};
                }
              }

              function merge(first, second) {
                var result = {};
                var key;

                for (key in first) {
                  result[key] = first[key];
                }

                for (key in second) {
                  result[key] = second[key];
                }

                return result;
              }

              function fromUrl() {
                var result = {};
                var query = new URLSearchParams(
                  window.location.search
                );

                UTM.concat(IDS).forEach(function (key) {
                  var value = query.get(key);

                  if (value) {
                    result[key] = value;
                  }
                });

                return result;
              }

              var fresh = fromUrl();
              var hasFreshData =
                Object.keys(fresh).length > 0;

              var data = hasFreshData
                ? merge(stored(), fresh)
                : stored();

              if (
                hasFreshData ||
                !readCookie(COOKIE)
              ) {
                writeCookie(
                  COOKIE,
                  JSON.stringify(data),
                  DAYS
                );
              }

              window.traffik =
                window.traffik || {};

              window.traffik.getData =
                function () {
                  return merge(stored(), {
                    account: ACCOUNT
                  });
                };

              window.traffik.data = data;

              function decorate() {
                var parameters = [];

                UTM.concat(IDS).forEach(
                  function (key) {
                    if (data[key]) {
                      parameters.push(
                        key +
                          "=" +
                          encodeURIComponent(data[key])
                      );
                    }
                  }
                );

                if (data.click_id) {
                  parameters.push(
                    "click_id=" +
                      encodeURIComponent(
                        data.click_id
                      )
                  );
                }

                if (!parameters.length) {
                  return;
                }

                var links =
                  document.getElementsByTagName("a");

                for (
                  var index = 0;
                  index < links.length;
                  index++
                ) {
                  var href =
                    links[index].getAttribute("href") ||
                    "";

                  var isCheckout = CHECKOUT.some(
                    function (domain) {
                      return (
                        href.indexOf(domain) > -1
                      );
                    }
                  );

                  if (!isCheckout) {
                    continue;
                  }

                  /*
                   * Evita adicionar os mesmos parâmetros
                   * várias vezes ao mesmo link.
                   */
                  if (
                    links[index].getAttribute(
                      "data-traffik-decorated"
                    ) === "true"
                  ) {
                    continue;
                  }

                  links[index].href =
                    href +
                    (href.indexOf("?") > -1
                      ? "&"
                      : "?") +
                    parameters.join("&");

                  links[index].setAttribute(
                    "data-traffik-decorated",
                    "true"
                  );
                }
              }

              function send() {
                if (
                  sessionStorage.getItem(SESSION)
                ) {
                  decorate();
                  return;
                }

                var payload = merge(data, {
                  account: ACCOUNT,
                  url: window.location.href,
                  referrer:
                    document.referrer || null
                });

                var endpoint =
                  API + "/api/track/click";

                function done(clickId) {
                  if (clickId) {
                    data.click_id = clickId;

                    writeCookie(
                      COOKIE,
                      JSON.stringify(data),
                      DAYS
                    );

                    window.traffik.data = data;
                  }

                  sessionStorage.setItem(
                    SESSION,
                    "1"
                  );

                  decorate();
                }

                if (
                  typeof window.fetch ===
                  "function"
                ) {
                  fetch(endpoint, {
                    method: "POST",
                    headers: {
                      "Content-Type": "text/plain"
                    },
                    body: JSON.stringify(payload),
                    keepalive: true,
                    mode: "cors"
                  })
                    .then(function (response) {
                      return response.ok
                        ? response.json()
                        : null;
                    })
                    .then(function (response) {
                      done(
                        response &&
                          response.click_id
                      );
                    })
                    .catch(function () {
                      if (
                        navigator.sendBeacon
                      ) {
                        navigator.sendBeacon(
                          endpoint,
                          JSON.stringify(payload)
                        );
                      }

                      done(null);
                    });
                } else if (
                  navigator.sendBeacon
                ) {
                  navigator.sendBeacon(
                    endpoint,
                    JSON.stringify(payload)
                  );

                  done(null);
                } else {
                  decorate();
                }
              }

              if (
                document.readyState ===
                  "complete" ||
                document.readyState ===
                  "interactive"
              ) {
                send();
              } else {
                window.addEventListener(
                  "DOMContentLoaded",
                  send
                );
              }

              /*
               * Também decora links adicionados
               * posteriormente pelo React.
               */
              window.addEventListener(
                "load",
                decorate
              );
            })();
          `}
        </Script>

        {/* Pixel de eventos da Traffik */}
        <Script id="traffik-pixel" strategy="afterInteractive">
          {`
            (function () {
              "use strict";

              var CONFIG =
                "cms0q2xpy000004k3d35p8hfi";

              var API =
                "https://342dd-virid.vercel.app";

              var LEAD = false;
              var ADD_TO_CART = false;

              function getFbclid() {
                try {
                  if (
                    window.traffik &&
                    typeof window.traffik
                      .getData === "function"
                  ) {
                    var traffikData =
                      window.traffik.getData();

                    if (
                      traffikData &&
                      traffikData.fbclid
                    ) {
                      return traffikData.fbclid;
                    }
                  }

                  var cookie =
                    document.cookie.match(
                      /traffik_track\\s*=\\s*([^;]+)/
                    );

                  if (cookie) {
                    var parsed = JSON.parse(
                      decodeURIComponent(cookie[1])
                    );

                    if (parsed.fbclid) {
                      return parsed.fbclid;
                    }
                  }

                  var query =
                    new URLSearchParams(
                      window.location.search
                    );

                  return query.get("fbclid");
                } catch (error) {
                  return null;
                }
              }

              function eventId(name) {
                return (
                  name +
                  "-" +
                  Date.now() +
                  "-" +
                  Math.random()
                    .toString(36)
                    .slice(2, 8)
                );
              }

              function track(eventName, extra) {
                var payload = {
                  pixelConfigId: CONFIG,
                  event: eventName,
                  eventId: eventId(eventName),
                  url: window.location.href,
                  fbclid: getFbclid()
                };

                if (extra) {
                  for (var key in extra) {
                    payload[key] = extra[key];
                  }
                }

                try {
                  fetch(
                    API + "/api/pixel/event",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type":
                          "text/plain"
                      },
                      body: JSON.stringify(
                        payload
                      ),
                      keepalive: true,
                      mode: "cors"
                    }
                  ).catch(function () {});
                } catch (error) {}
              }

              window.traffikPixel = {
                track: track
              };

              /*
               * O PageView do Pixel Traffik
               * é disparado ao carregar a página.
               */
              track("PageView");

              if (LEAD) {
                document.addEventListener(
                  "submit",
                  function () {
                    track("Lead");
                  },
                  true
                );
              }

              if (ADD_TO_CART) {
                document.addEventListener(
                  "click",
                  function (event) {
                    var element = event.target;

                    while (
                      element &&
                      element !== document.body
                    ) {
                      var text = (
                        element.textContent || ""
                      ).toLowerCase();

                      var identification =
                        (element.className || "") +
                        " " +
                        (element.id || "");

                      if (
                        /adicionar ao carrinho|add to cart|comprar/.test(
                          text
                        ) ||
                        /cart|carrinho/i.test(
                          identification
                        )
                      ) {
                        track("AddToCart");
                        return;
                      }

                      element =
                        element.parentElement;
                    }
                  },
                  true
                );
              }

              /*
               * Dispara InitiateCheckout
               * antes de abrir a Kirvano.
               */
              document.addEventListener(
                "click",
                function (event) {
                  var target = event.target;

                  if (
                    !target ||
                    typeof target.closest !==
                      "function"
                  ) {
                    return;
                  }

                  var link =
                    target.closest("a");

                  if (!link) {
                    return;
                  }

                  var href =
                    link.getAttribute("href") ||
                    "";

                  if (
                    href.indexOf(
                      "pay.kirvano.com"
                    ) > -1
                  ) {
                    track("InitiateCheckout");
                  }
                },
                true
              );
            })();
          `}
        </Script>

        {/* Novo Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s) {
              if (f.fbq) return;

              n = f.fbq = function() {
                n.callMethod
                  ? n.callMethod.apply(
                      n,
                      arguments
                    )
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

            fbq(
              "init",
              "1670059901792480"
            );

            fbq(
              "track",
              "PageView"
            );
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
