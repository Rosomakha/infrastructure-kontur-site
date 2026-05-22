import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const SITE_URL = "https://trastenergy-site.vercel.app";
const SITE_NAME = "Инфраструктурный контур";
const SITE_DESCRIPTION =
  "Независимый консалтинг по инженерной инфраструктуре: аудит, технологическое присоединение и сопровождение согласований по воде, стокам, газу, теплу и электроснабжению в Москве и Московской области.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — консалтинг по инженерной инфраструктуре`,
    template: `%s — ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — консалтинг по инженерной инфраструктуре`,
    description: SITE_DESCRIPTION
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — консалтинг по инженерной инфраструктуре`,
    description: SITE_DESCRIPTION
  },
  robots: {
    index: true,
    follow: true
  }
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  areaServed: [
    { "@type": "City", name: "Москва" },
    { "@type": "AdministrativeArea", name: "Московская область" }
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+7-495-000-00-00",
      contactType: "sales",
      areaServed: "RU",
      availableLanguage: ["Russian"]
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
