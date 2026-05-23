import Link from "next/link";
import {
  TEHPRIS_SAVINGS_DISCLAIMER,
  tehprisBenefits,
  tehprisSavingTips,
  tehprisSavingsLegalRefs,
  type TehprisResourceTag
} from "@/lib/data/tehpris-savings";

type TehprisSavingsSectionProps = {
  /** Если задан — показываем подсказки и льготы с этим тегом + «все» */
  resource?: TehprisResourceTag;
  compact?: boolean;
};

function filterByResource<T extends { tags: TehprisResourceTag[] }>(
  items: T[],
  resource?: TehprisResourceTag
): T[] {
  if (!resource || resource === "все") {
    return items;
  }
  return items.filter(
    (item) => item.tags.includes("все") || item.tags.includes(resource)
  );
}

export function TehprisSavingsSection({
  resource,
  compact = false
}: TehprisSavingsSectionProps) {
  const tips = filterByResource(tehprisSavingTips, resource);
  const benefits = filterByResource(tehprisBenefits, resource);

  return (
    <div className="tehpris-savings" id="tehpris-economy">
      <p className="eyebrow">Справочно</p>
      <h2>Как сэкономить на официальной плате за техприс</h2>
      <p className="muted small-margin">
        Ниже — практические подсказки по снижению{" "}
        <strong>платежа сетевой организации</strong> (не стоимости сопровождения).
        Отдельно — ориентиры по <strong>льготам и льготным категориям</strong>.
        Условия зависят от вида сети, статуса заявителя и даты обращения.
      </p>

      {!compact && (
        <>
          <h3 className="tehpris-savings-h3">Подсказки до подачи заявки</h3>
          <div className="tehpris-tips-grid">
            {tips.map((tip) => (
              <article className="tehpris-tip-card" key={tip.title}>
                <h4>{tip.title}</h4>
                <p>{tip.text}</p>
              </article>
            ))}
          </div>
        </>
      )}

      <h3 className="tehpris-savings-h3">
        {compact ? "Льготы и льготные условия" : "Льготы и льготные категории"}
      </h3>
      <div className="tehpris-benefits-list">
        {benefits.map((b) => (
          <details className="tehpris-benefit" key={b.title}>
            <summary>{b.title}</summary>
            <dl className="tehpris-benefit-dl">
              <div>
                <dt>Кому</dt>
                <dd>{b.who}</dd>
              </div>
              <div>
                <dt>Суть</dt>
                <dd>{b.benefit}</dd>
              </div>
              <div>
                <dt>Основание</dt>
                <dd>{b.basis}</dd>
              </div>
              {b.note ? (
                <div>
                  <dt>Примечание</dt>
                  <dd>{b.note}</dd>
                </div>
              ) : null}
            </dl>
          </details>
        ))}
      </div>

      {compact && tips.length > 0 && (
        <p className="muted small-margin">
          Полный список подсказок — на{" "}
          <Link href="/uslugi/tehprisoedinenie#tehpris-economy">
            обзорной странице техприс
          </Link>
          .
        </p>
      )}

      <div className="info-strip tehpris-savings-disclaimer">
        <p>
          <strong>Важно:</strong> {TEHPRIS_SAVINGS_DISCLAIMER}
        </p>
      </div>

      <ul className="inline-links tehpris-savings-links">
        {tehprisSavingsLegalRefs.map((ref) => (
          <li key={ref.href}>
            <Link href={ref.href}>{ref.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
