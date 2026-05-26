import { legalSections } from "@/lib/data/legal-base";
import { ExternalLink } from "@/components/external-link";
import Link from "next/link";

export const metadata = {
  title: "Нормативно-правовая база — Контур согласований",
  description:
    "Федеральные акты по экологии и ОВОС, электроэнергетике, воде, строительству; законы Москвы и Московской области. Ориентир, не юридическая консультация."
};

export default function LegalBasePage() {
  return (
    <section className="section">
      <div className="container prose-wide">
        <p className="eyebrow">Справочно</p>
        <h1>Нормативно-правовая база</h1>
        <p className="lead">
          Ниже — сжатый ориентир по актам, которые чаще всего встречаются в
          проектах по технологическому присоединению, сетям, строительству,
          экологии и переустройству.{" "}
          <strong>Это не юридическая консультация.</strong> Актуальные редакции
          проверяйте на{" "}
          <ExternalLink href="https://pravo.gov.ru" className="text-link">
            pravo.gov.ru
          </ExternalLink>
          , в{" "}
          <ExternalLink href="https://www.garant.ru" className="text-link">
            Гаранте
          </ExternalLink>{" "}
          /{" "}
          <ExternalLink href="https://www.consultant.ru" className="text-link">
            КонсультантПлюс
          </ExternalLink>{" "}
          и в официальных письмах РСО.
        </p>

        <p className="muted">
          Для сметы и договора важен не только закон, но и договор о{" "}
          <Link href="/uslugi/tehprisoedinenie">технологическом присоединении</Link>
          , ТУ и локальные нормы Москвы/МО.
        </p>

        <div className="info-strip npa-proposal-promo">
          <p>
            <strong>Есть предложение по доработке НПА в ЖКХ?</strong>{" "}
            Направьте его в отдельном разделе — в перспективе предложения
            будут анализироваться с помощью ИИ, достойные инициативы практика
            готова продвигать на федеральном уровне.{" "}
            <Link href="/predlozheniya-npa-zhkh">Предложения по НПА →</Link>
          </p>
        </div>

        <p className="legal-quick-nav muted">
          Федеральная база:{" "}
          <a className="text-link" href="#ekologiya-ovos">
            экология и ОВОС
          </a>
          {" · "}
          <a className="text-link" href="#federalnaya-podderzhka">
            федеральная поддержка
          </a>
          {" · "}
          региональные базы:{" "}
          <a className="text-link" href="#moskva-zakonodatelstvo">
            Москва
          </a>
          {" · "}
          <a className="text-link" href="#mo-zakonodatelstvo">
            Московская область
          </a>
        </p>

        {legalSections.map((sec) => (
          <div className="legal-section" id={sec.id} key={sec.id}>
            <h2>{sec.heading}</h2>
            {sec.intro && (
              <p>
                {sec.intro}
                {sec.id === "ekologiya-ovos" && (
                  <>
                    {" "}
                    <Link href="/uslugi/ekologiya-i-ovos" className="text-link">
                      Услуга: экология, ОВОС и ГЭЭ
                    </Link>
                    .
                  </>
                )}
                {sec.id === "federalnaya-podderzhka" && (
                  <>
                    {" "}
                    <Link
                      href="/uslugi/podderzhka-federalnogo-byudzheta"
                      className="text-link"
                    >
                      Каталог программ и чек-лист
                    </Link>
                    .
                  </>
                )}
              </p>
            )}
            <ol className="legal-list">
              {sec.items.map((item) => (
                <li key={item.title}>
                  {item.title}
                  {item.note && <span className="muted"> — {item.note}</span>}
                  {item.href && (
                    <>
                      {" "}
                      <ExternalLink href={item.href} className="text-link">
                        Источник
                      </ExternalLink>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}

        <div className="info-strip">
          <p>
            Нужен разбор по конкретному проекту?{" "}
            <Link href="/kontakty">Напишите или позвоните</Link> — подскажем
            дорожную карту и пакет исходных данных.
          </p>
        </div>
      </div>
    </section>
  );
}
