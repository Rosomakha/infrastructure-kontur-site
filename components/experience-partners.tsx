import {
  experiencePartners,
  PARTNER_CATEGORY_LABELS,
  type PartnerCategory
} from "@/lib/data/experience-partners";

const CATEGORY_ORDER: PartnerCategory[] = [
  "ogv",
  "rso",
  "operator",
  "corporate"
];

function PartnerMark({
  mark,
  accent
}: {
  mark: string;
  accent?: string;
}) {
  return (
    <span
      className="partner-mark"
      style={accent ? { borderColor: accent, color: accent } : undefined}
      aria-hidden
    >
      {mark}
    </span>
  );
}

type Props = {
  /** Компактный вариант для полосы под hero */
  variant?: "strip" | "section";
};

export function ExperiencePartners({ variant = "strip" }: Props) {
  const byCategory = CATEGORY_ORDER.map((cat) => ({
    cat,
    label: PARTNER_CATEGORY_LABELS[cat],
    items: experiencePartners.filter((p) => p.category === cat)
  })).filter((g) => g.items.length > 0);

  if (variant === "strip") {
    return (
      <section
        className="partners-strip"
        aria-label="Опыт работы с организациями"
      >
        <div className="container partners-strip-inner">
          <div className="partners-strip-head">
            <span className="partners-eyebrow">Опыт работы</span>
            <p className="partners-strip-lead muted">
              Служебный и проектный опыт руководителя практики. Маркеры —
              текстовые, не официальные логотипы правообладателей.
            </p>
          </div>
          <ul className="partners-logo-row">
            {experiencePartners.map((p) => (
              <li key={p.id} className="partner-logo-item">
                <PartnerMark mark={p.mark} accent={p.accent} />
                <span className="partner-logo-name">{p.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className="section section-alt partners-section">
      <div className="container">
        <p className="eyebrow">Опыт работы</p>
        <h2>Органы власти, РСО и заказчики</h2>
        <p className="lead partners-section-lead">
          Указаны организации, с которыми у руководителя практики был служебный
          или проектный опыт сопровождения. Используются текстовые маркеры для
          идентификации; товарные знаки принадлежат правообладателям.
        </p>
        {byCategory.map((group) => (
          <div className="partners-group" key={group.cat}>
            <h3 className="partners-group-title">{group.label}</h3>
            <ul className="partners-grid">
              {group.items.map((p) => (
                <li key={p.id} className="partner-card">
                  <PartnerMark mark={p.mark} accent={p.accent} />
                  <p className="partner-card-name">{p.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
