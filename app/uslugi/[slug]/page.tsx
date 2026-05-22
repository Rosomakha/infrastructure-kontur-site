import Link from "next/link";
import { notFound } from "next/navigation";
import {
  DEFAULT_SERVICE_TIMELINE_DISCLAIMER,
  getServiceBySlug,
  services,
  tehprisoedinenieCardLinks,
  tehprisoedinenieOnlyDirectionSlugs
} from "@/lib/data/services";
import type { Metadata } from "next";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

function isTehprisoedinenieDirection(slug: string): boolean {
  return tehprisoedinenieOnlyDirectionSlugs.includes(slug);
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  if (!s) {
    return { title: "Услуга" };
  }
  const title = s.seoTitle ?? `${s.title} — Инфраструктурный контур`;
  const description = s.seoDescription ?? s.shortLead.slice(0, 180);
  return {
    title,
    description,
    openGraph: {
      title,
      description
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  if (!s) {
    notFound();
  }

  const isDirection = isTehprisoedinenieDirection(slug);
  const showBreadcrumb = isDirection;
  const showHubGrid = s.isTehprisoedinenieHub === true;

  return (
    <section className="section">
      <div className="container prose-wide">
        {showBreadcrumb && (
          <p className="eyebrow breadcrumb">
            <Link href="/uslugi">Услуги</Link>
            {" → "}
            <Link href="/uslugi/tehprisoedinenie">Техприс: обзор</Link>
          </p>
        )}
        {!showBreadcrumb && (
          <p className="eyebrow">
            <Link href="/uslugi">Услуги</Link>
          </p>
        )}

        <h1>{s.title}</h1>
        <p className="lead">{s.shortLead}</p>

        {showHubGrid && (
          <div className="tehpris-directions">
            <h2>Направления по виду сети</h2>
            <p className="muted">
              Откройте страницу с детальным чек-листом исходных документов для
              оценки стоимости и сроков.
            </p>
            <div className="cards-2 uslugi-tech-grid">
              {tehprisoedinenieCardLinks.map((c) => (
                <article className="card" key={c.slug}>
                  <h3 className="card-title">{c.label}</h3>
                  <p className="muted small-margin">{c.blurb}</p>
                  <Link
                    className="btn btn-primary btn-block"
                    href={`/uslugi/${c.slug}`}
                  >
                    Чек-лист и сопровождение
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )}

        {(s.algorithmSteps?.length ?? 0) > 0 && (
          <div className="service-flow">
            <h2>Алгоритм работ (условный порядок)</h2>
            <p className="muted small-margin">
              Конкретная последовательность зависит от вида процедуры, объекта и условий договоров с заказчиком
              (при технологическом присоединении — также от регламентов РСО и договора о подключении).
            </p>
            <ol className="algorithm-steps">
              {s.algorithmSteps!.map((step, i) => (
                <li key={step.slice(0, 48) + i}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        {(s.timelinePhases?.length ?? 0) > 0 && (
          <div className="service-timeline-block">
            <h2>Ориентировочные сроки по этапам</h2>
            <div className="timeline-table-wrap">
              <table className="timeline-table">
                <thead>
                  <tr>
                    <th scope="col">Этап</th>
                    <th scope="col">Типовой диапазон</th>
                    <th scope="col">Комментарий</th>
                  </tr>
                </thead>
                <tbody>
                  {s.timelinePhases!.map((row) => (
                    <tr key={row.phase}>
                      <td>{row.phase}</td>
                      <td>{row.typicalRange}</td>
                      <td className="muted">{row.note ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="timeline-disclaimer muted">
              {s.timelineDisclaimer ?? DEFAULT_SERVICE_TIMELINE_DISCLAIMER}
            </p>
          </div>
        )}

        <h2>Чем занимаемся</h2>
        <ul className="check-list">
          {s.scope.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <h2>Документы для предварительного расчёта стоимости</h2>
        <p className="muted">{s.introDocs}</p>

        {s.docGroups.map((group) => (
          <div className="doc-block" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="check-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {s.helpfulLinks && s.helpfulLinks.length > 0 && (
          <>
            <h2>Дополнительно на сайте</h2>
            <ul className="inline-links">
              {s.helpfulLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="doc-cta">
          <p>
            Пришлите данные в свободной форме на{" "}
            <a href="mailto:info@trustenergy.ru">info@trustenergy.ru</a> или
            оставьте заявку — подготовим бриф и уточним список под вашу
            ситуацию.
          </p>
          <Link className="btn btn-primary" href="/kontakty">
            Запросить расчёт
          </Link>
        </div>
      </div>
    </section>
  );
}
