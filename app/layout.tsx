import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const SITE_URL = "https://trastenergy-site.vercel.app";
const SITE_NAME = "Контур согласований";
const LEGAL_NAME = "ООО «Инфраструктурный контур»";
const SITE_DESCRIPTION =
  "Контур согласований — консалтинговая практика по согласованиям в строительстве, ЖКХ и инженерной инфраструктуре. Технологическое присоединение, нормативно-правовая экспертиза, сопровождение в государственных органах и работа с ресурсоснабжающими организациями. Москва и Московская область.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — согласования в строительстве, ЖКХ и инфраструктуре`,
    template: `%s — ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — согласования в строительстве, ЖКХ и инфраструктуре`,
    description: SITE_DESCRIPTION
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — согласования в строительстве, ЖКХ и инфраструктуре`,
    description: SITE_DESCRIPTION
  },
  robots: {
    index: true,
    follow: true
  }
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  legalName: LEGAL_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  areaServed: [
    { "@type": "City", name: "Москва" },
    { "@type": "AdministrativeArea", name: "Московская область" }
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+7-999-747-47-47",
      email: "olegnovikov.gov@yandex.ru",
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
