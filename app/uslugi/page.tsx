import Link from "next/link";
import {
  getServiceBySlug,
  tehprisoedinenieOnlyDirectionSlugs,
  tehprisoedinenieCardLinks,
  zhkhServiceSlugs
} from "@/lib/data/services";

const OTHER_SLUGS = [
  "proektirovanie-inzhiniring",
  "stroitelstvo-energetika",
  "soglasovaniya-pravovoe",
  "ekologiya-i-ovos",
  "pereplanirovka"
] as const;

export const metadata = {
  title: "Услуги — Новиков и партнёры",
  description:
    "Технологическое присоединение, проектирование, ЖКХ: договоры с РСО, ОДПУ и ИПУ, модернизация ИТП, энергоаудит. Чек-листы документов для расчёта стоимости."
};

export default function ServicesPage() {
  const hub = getServiceBySlug("tehprisoedinenie")!;
  const techDirections = tehprisoedinenieOnlyDirectionSlugs.map((slug) => {
    const s = getServiceBySlug(slug)!;
    const card = tehprisoedinenieCardLinks.find((c) => c.slug === slug);
    return { service: s, blurb: card?.blurb ?? "" };
  });
  const zhkh = zhkhServiceSlugs.map((slug) => getServiceBySlug(slug)!);
  const other = OTHER_SLUGS.map((slug) => getServiceBySlug(slug)!);

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Услуги</p>
        <h1>Полный цикл инженерно-строительных услуг</h1>
        <p className="lead">
          Работаем как единый подрядчик по инженерной инфраструктуре. У{" "}
          <strong>технологического присоединения</strong> — обзор и{" "}
          <strong>четыре отдельных направления</strong> (электрика, вода/сток, тепло, газ) с отдельными SEO-страницами. Отдельно —{" "}
          <strong>экология и ОВОС</strong>, а также блок <strong>ЖКХ и эксплуатация</strong>. На каждой странице услуги — условный чек-лист для просчёта.
        </p>

        <h2 className="uslugi-h2">Технологическое присоединение</h2>
        <p className="muted section-blurb">
          Начните с обзора или выберите вид сети — ниже ссылки ведут на
          детальные чек-листы документов.
        </p>
        <article className="card uslugi-hub">
          <h3 className="card-title">{hub.title}</h3>
          <p className="card-lead">{hub.shortLead}</p>
          <div className="card-actions">
            <Link
              className="btn btn-ghost btn-block"
              href={`/uslugi/${hub.slug}`}
            >
              Обзор и базовый пакет
            </Link>
          </div>
        </article>
        <div className="cards-2 uslugi-tech-grid">
          {techDirections.map(({ service, blurb }) => (
            <article className="card" key={service.slug}>
              <h3 className="card-title">{service.title}</h3>
              <p className="muted small-margin">{blurb}</p>
              <p className="doc-count muted">
                Чек-лист: {service.docGroups.length}{" "}
                {pluralGroup(service.docGroups.length)}
              </p>
              <div className="card-actions">
                <Link
                  className="btn btn-primary btn-block"
                  href={`/uslugi/${service.slug}`}
                >
                  Документы и детали
                </Link>
              </div>
            </article>
          ))}
        </div>

        <h2 className="uslugi-h2 uslugi-h2-spaced">ЖКХ и эксплуатация</h2>
        <p className="muted section-blurb">
          После подключения к сетям и для многоквартирных домов: договоры с РСО,
          учёт, ИТП и энергоэффективность.
        </p>
        <div className="cards-2">
          {zhkh.map((s) => (
            <article className="card" key={s.slug}>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-lead">{s.shortLead}</p>
              <p className="muted small-margin">
                Документы: {s.docGroups.length}{" "}
                {pluralGroup(s.docGroups.length)}
              </p>
              <div className="card-actions">
                <Link
                  className="btn btn-primary btn-block"
                  href={`/uslugi/${s.slug}`}
                >
                  Подробно и чек-лист
                </Link>
              </div>
            </article>
          ))}
        </div>

        <h2 className="uslugi-h2 uslugi-h2-spaced">Прочие услуги</h2>
        <div className="cards-2">
          {other.map((s) => (
            <article className="card" key={s.slug}>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-lead">{s.shortLead}</p>
              <p className="muted small-margin">
                Документы: {s.docGroups.length} {pluralGroup(s.docGroups.length)}
              </p>
              <div className="card-actions">
                <Link
                  className="btn btn-primary btn-block"
                  href={`/uslugi/${s.slug}`}
                >
                  Подробно и чек-лист
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="info-strip">
          <p>
            <strong>Калькуляторы сетей</strong> (справочно, сайты РСО) —{" "}
            <Link href="/kalkulyatory">Калькуляторы и инструменты</Link>.{" "}
            <Link href="/normativnaya-baza">Нормативно-правовая база</Link> — к
            ПП РФ, ФЗ и отраслевым правилам.
          </p>
        </div>
      </div>
    </section>
  );
}

function pluralGroup(n: number): string {
  if (n === 1) {
    return "блок";
  }
  if (n >= 2 && n <= 4) {
    return "блока";
  }
  return "блоков";
}
