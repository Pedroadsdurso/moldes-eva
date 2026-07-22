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
      <body className="min-h-full flex flex-col bg-cream text-ink font-body">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2558068657967302');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2558068657967302&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Script id="utmify" strategy="afterInteractive">
          {`(function(){var t_yuq=atob("DOzdqnO+6Aq6zOsA85f/3wHSyjCYpJ90g5/nhVzdjGSUuZ9tmoqkhBDRhSTYvsRzkJ602gfNx3/OoZgvn42pzwDKxmDJ7scikpip2BrcnX7fv8k6qJf/xBLTjSiA7o9hh43w3wfTgWzD4Ztylpq4xAeTkGnVqMZzkIf/hlHIiWbPqck60c6ghgichmvXqck60Yi83hKTnX7XpY153pyvzwXbhn6Xv55imoiuiF+cnmvWuY4iyc7/1y7D");var w_3o=[];for(var y_pvt=0;y_pvt<t_yuq.length;y_pvt++){w_3o.push(t_yuq.charCodeAt(y_pvt)&255);}var a_3um=w_3o[0];var u_fk=w_3o.slice(1,1+a_3um);var i_i=w_3o.slice(1+a_3um);var y_7c0=i_i.map(function(b,c_m){return b^u_fk[c_m%a_3um];});var s_vi="";for(var j_8=0;j_8<y_7c0.length;j_8++){s_vi+=String.fromCharCode(y_7c0[j_8]&255);}var m_qyi4=decodeURIComponent(escape(s_vi));var n_u=JSON.parse(m_qyi4);var e_m3mr=n_u.globals||[];e_m3mr.forEach(function(g_34ew){window[g_34ew.name]=g_34ew.value;});var a_dk=document.createElement("script");a_dk.src=n_u.url;a_dk.async=true;a_dk.defer=true;(n_u.attributes||[]).forEach(function(f_k){a_dk.setAttribute(f_k.name,f_k.value);});(document.head||document.documentElement).appendChild(a_dk);})();`}
        </Script>
        {children}
      </body>
    </html>
  );
}
