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

        {/* Traffik — rastreamento de UTMs. Os snippets vão inline: os loaders
            hospedados (/t.js e /px.js) respondem 404. String.raw preserva as
            barras invertidas das regex/strings; num template literal comum elas
            seriam consumidas como escapes e quebrariam a leitura do cookie. */}
        <Script id="traffik-tracking" strategy="beforeInteractive">
          {String.raw`(function () {
  "use strict";
  var ACCOUNT = "cmry50c910000p4k8lenqkd8e";
  var API = "https://342dd-virid.vercel.app";
  var COOKIE = "traffik_track", SESSION = "traffik_session", DAYS = 30;
  var UTM = ["utm_source","utm_medium","utm_campaign","utm_content","utm_term"];
  var IDS = ["fbclid","gclid","ttclid"];
  // Domínios de checkout que recebem os parâmetros automaticamente.
  var CHECKOUT = ["hotmart","kirvano","cartpanda","kiwify","monetizze","pay.","checkout"];
  function readCookie(n){var m=document.cookie.match("(^|;)\\s*"+n+"\\s*=\\s*([^;]+)");return m?decodeURIComponent(m.pop()):null;}
  function writeCookie(n,v,d){var e=new Date(Date.now()+d*864e5).toUTCString();document.cookie=n+"="+encodeURIComponent(v)+";expires="+e+";path=/;SameSite=Lax";}
  function stored(){try{return JSON.parse(readCookie(COOKIE)||"{}");}catch(e){return {};}}
  function merge(a,b){var o={},k;for(k in a)o[k]=a[k];for(k in b)o[k]=b[k];return o;}
  function fromUrl(){var o={},q=new URLSearchParams(location.search);UTM.concat(IDS).forEach(function(k){var v=q.get(k);if(v)o[k]=v;});return o;}
  var fresh=fromUrl(), has=Object.keys(fresh).length>0, data=has?merge(stored(),fresh):stored();
  if(has||!readCookie(COOKIE))writeCookie(COOKIE,JSON.stringify(data),DAYS);
  window.traffik=window.traffik||{};
  window.traffik.getData=function(){return merge(stored(),{account:ACCOUNT});};
  window.traffik.data=data;
  // Propaga os parâmetros salvos para os links de checkout da página.
  function decorate(){
    var qs=[];UTM.concat(IDS).forEach(function(k){if(data[k])qs.push(k+"="+encodeURIComponent(data[k]));});
    if(data.click_id)qs.push("click_id="+encodeURIComponent(data.click_id));
    if(!qs.length)return;
    var links=document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
      var href=links[i].getAttribute("href")||"";
      var isCheckout=CHECKOUT.some(function(d){return href.indexOf(d)>-1;});
      if(!isCheckout)continue;
      links[i].href=href+(href.indexOf("?")>-1?"&":"?")+qs.join("&");
    }
  }
  function send(){
    if(sessionStorage.getItem(SESSION)){decorate();return;}
    var payload=merge(data,{account:ACCOUNT,url:location.href,referrer:document.referrer||null});
    var ep=API+"/api/track/click";
    function done(id){if(id){data.click_id=id;writeCookie(COOKIE,JSON.stringify(data),DAYS);window.traffik.data=data;}sessionStorage.setItem(SESSION,"1");decorate();}
    if(typeof fetch==="function"){
      fetch(ep,{method:"POST",headers:{"Content-Type":"text/plain"},body:JSON.stringify(payload),keepalive:true,mode:"cors"})
        .then(function(r){return r.ok?r.json():null;})
        .then(function(res){done(res&&res.click_id);})
        .catch(function(){if(navigator.sendBeacon){navigator.sendBeacon(ep,JSON.stringify(payload));}done(null);});
    }else if(navigator.sendBeacon){navigator.sendBeacon(ep,JSON.stringify(payload));done(null);}
    else{decorate();}
  }
  if(document.readyState==="complete"||document.readyState==="interactive")send();
  else window.addEventListener("DOMContentLoaded",send);
})();`}
        </Script>

        {/* Traffik Pixel */}
        <Script id="traffik-pixel" strategy="beforeInteractive">
          {String.raw`(function () {
  "use strict";
  var CONFIG = "cms0q2xpy000004k3d35p8hfi";
  var API = "https://342dd-virid.vercel.app";
  var LEAD = false;
  var ADD_TO_CART = false;
  var IC = { type: "clique_checkout", value: "https://pay.kirvano.com/" };
  var CHECKOUT = ["https://pay.kirvano.com/"];

  function fbclid() {
    try {
      if (window.traffik && typeof window.traffik.getData === "function") {
        var d = window.traffik.getData();
        if (d && d.fbclid) return d.fbclid;
      }
      var m = document.cookie.match(/traffik_track\s*=\s*([^;]+)/);
      if (m) {
        var j = JSON.parse(decodeURIComponent(m[1]));
        if (j.fbclid) return j.fbclid;
      }
      var q = new URLSearchParams(location.search);
      return q.get("fbclid");
    } catch (e) { return null; }
  }

  function eid(name) { return name + "-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8); }

  function track(event, extra) {
    var payload = { pixelConfigId: CONFIG, event: event, eventId: eid(event), url: location.href, fbclid: fbclid() };
    if (extra) for (var k in extra) payload[k] = extra[k];
    try {
      fetch(API + "/api/pixel/event", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
        keepalive: true,
        mode: "cors"
      }).catch(function () {});
    } catch (e) {}
  }

  window.traffikPixel = { track: track };

  // PageView: sempre ativo, dispara a cada carregamento de página. Não depende
  // de regra — é o evento base do pixel.
  track("PageView");

  // Lead: dispara ao enviar qualquer formulário.
  if (LEAD) document.addEventListener("submit", function () { track("Lead"); }, true);

  // AddToCart: clique em elementos com cara de carrinho.
  if (ADD_TO_CART) document.addEventListener("click", function (e) {
    var el = e.target;
    while (el && el !== document.body) {
      var t = (el.textContent || "").toLowerCase(), c = (el.className || "") + " " + (el.id || "");
      if (/adicionar ao carrinho|add to cart|comprar/.test(t) || /cart|carrinho/i.test(c)) { track("AddToCart"); return; }
      el = el.parentElement;
    }
  }, true);

  // InitiateCheckout conforme a regra de detecção.
  if (IC) {
    if (IC.type === "clique_checkout") {
      // Padrão: clique num link que leva ao checkout, capturado AQUI, na página
      // de vendas. É o único modo que funciona com checkout hospedado pelo
      // gateway (pay.kirvano.com e afins), onde não dá para instalar script.
      document.addEventListener("click", function (e) {
        var el = e.target, href = "";
        // Sobe até o <a>: o clique costuma cair num <span>/<img> dentro do link.
        while (el && el !== document.body) {
          if (el.tagName === "A" && el.getAttribute("href")) { href = el.getAttribute("href"); break; }
          el = el.parentElement;
        }
        if (!href) return;
        var alvo = href.toLowerCase();
        for (var i = 0; i < CHECKOUT.length; i++) {
          if (alvo.indexOf(CHECKOUT[i]) > -1) { track("InitiateCheckout", { destino: href.slice(0, 500) }); return; }
        }
      }, true);
    } else if (IC.type === "contem_url") {
      if (location.href.indexOf(IC.value) > -1) track("InitiateCheckout");
    } else {
      document.addEventListener("click", function (e) {
        var el = e.target;
        while (el && el !== document.body) {
          if (IC.type === "contem_texto" && (el.textContent || "").toLowerCase().indexOf(IC.value.toLowerCase()) > -1) { track("InitiateCheckout"); return; }
          if (IC.type === "contem_css") {
            try { if (el.matches(IC.value.charAt(0) === "." || IC.value.charAt(0) === "#" ? IC.value : "." + IC.value)) { track("InitiateCheckout"); return; } } catch (err) {}
          }
          el = el.parentElement;
        }
      }, true);
    }
  }
})();`}
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
