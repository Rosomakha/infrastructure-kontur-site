import { legalSections } from "@/lib/data/legal-base";
import { LegalDraftsSection } from "@/components/legal-drafts-section";
import { LegalItemLinks } from "@/components/legal-item-links";
import { syncLegalDrafts } from "@/lib/legal/sync-legal";
import { ExternalLink } from "@/components/external-link";
import Link from "next/link";

export const metadata = {
  title: "Нормативно-правовая база — Контур согласований",
  description:
    "Федеральные акты по ЖКХ, строительству и инженерии со ссылками на актуальные редакции. Проекты НПА и законопроекты с автоматическим обновлением статусов."
};

/** ISR: обновление ссылок на редакции и статусов проектов НПА */
export const revalidate = 43_200;

export default async function LegalBasePage() {
  const legalSync = await syncLegalDrafts();

  return (
    <section className="section">
      <div className="container prose-wide">
        <p className="eyebrow">Справочно</p>
        <h1>Нормативно-правовая база</h1>
        <p className="lead">
          Перечень актов со ссылками на{" "}
          <strong>актуальные редакции</strong> (КонсультантПлюс) и{" "}
          <strong>официальное опубликование</strong> (publication.pravo.gov.ru).
          Список проектов НПА и законопроектов по ЖКХ обновляется автоматически.{" "}
          <strong>Это не юридическая консультация.</strong>
        </p>

        <p className="muted">
          Для сметы и договора важен не только закон, но и договор о{" "}
          <Link href="/uslugi/tehprisoedinenie">технологическом присоединении</Link>
          , ТУ и локальные нормы Москвы/МО.
        </p>

        <aside className="npa-proposal-promo card">
          <p className="npa-proposal-promo-eyebrow">Нормотворчество</p>
          <h2 className="npa-proposal-promo-title">
            Предложения по доработке НПА в сфере ЖКХ
          </h2>
          <p className="muted small-margin">
            Если видите пробел или избыточное бремя в норме — опишите проблему и
            предложите формулировку. В перспективе — анализ с помощью ИИ;
            достойные инициативы готовы продвигать на федеральном уровне.
          </p>
          <Link className="btn btn-primary" href="/predlozheniya-npa-zhkh">
            Направить предложение
          </Link>
        </aside>

        <LegalDraftsSection sync={legalSync} />

        <p className="legal-quick-nav muted">
          <a className="text-link" href="#proekty-npa">
            Проекты НПА
          </a>
          {" · "}
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

        <p className="muted small-margin">
          У каждого акта — ссылка «Актуальная редакция» (поддерживается правовой
          системой{" "}
          <ExternalLink href="https://www.consultant.ru" className="text-link">
            КонсультантПлюс
          </ExternalLink>
          ) и поиск на{" "}
          <ExternalLink
            href="http://publication.pravo.gov.ru"
            className="text-link"
          >
            publication.pravo.gov.ru
          </ExternalLink>
          .
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
                      href="/organy-vlasti"
                      className="text-link"
                    >
                      Каталог программ для органов власти
                    </Link>
                    .
                  </>
                )}
              </p>
            )}
            <ol className="legal-list">
              {sec.items.map((item) => (
                <LegalItemLinks key={item.title} item={item} />
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
