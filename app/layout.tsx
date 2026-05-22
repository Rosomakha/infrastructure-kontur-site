import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Инфраструктурный контур — инженерная инфраструктура и согласования",
  description:
    "Проектирование, технологическое присоединение и сопровождение согласований по воде, стокам, газу, теплу и электроснабжению в Москве и Московской области."
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
      </body>
    </html>
  );
}
