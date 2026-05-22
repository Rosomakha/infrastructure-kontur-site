import Link from "next/link";

type Segment = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg
    viewBox="0 0 48 48"
    width="44"
    height="44"
    aria-hidden
    className="segment-icon"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const segments: Segment[] = [
  {
    title: "Инвесторам и девелоперам",
    description:
      "Жилые и коммерческие проекты: аудит ТУ, дорожная карта согласований, контроль сетевого подрядчика и защита бюджета инфраструктуры.",
    href: "/uslugi/tehprisoedinenie",
    icon: (
      <Icon>
        <path d="M6 42 L6 18 L24 6 L42 18 L42 42 Z" />
        <path d="M16 42 L16 26 L32 26 L32 42" />
        <path d="M22 32 L22 36 M26 32 L26 36" />
      </Icon>
    )
  },
  {
    title: "Промышленности и логистике",
    description:
      "Заводы, склады, технопарки: повышение мощности, экспертиза договоров с РСО, навигация по техусловиям и согласованиям.",
    href: "/uslugi/tehprisoedinenie-elektrosnabzhenie",
    icon: (
      <Icon>
        <path d="M6 38 L6 22 L18 22 L18 14 L42 14 L42 38 Z" />
        <path d="M24 22 L24 38 M32 22 L32 38" />
        <path d="M10 28 L14 28 M10 34 L14 34" />
      </Icon>
    )
  },
  {
    title: "Управляющим компаниям и ТСЖ",
    description:
      "Аудит договоров с РСО, проверка расчётов ОДН, узлов учёта и тарифных решений. Защита интересов МКД при модернизации.",
    href: "/uslugi/dogovory-rso",
    icon: (
      <Icon>
        <path d="M8 42 L8 14 L24 6 L40 14 L40 42 Z" />
        <path d="M16 22 L32 22 M16 30 L32 30 M16 38 L24 38" />
      </Icon>
    )
  },
  {
    title: "Собственникам помещений",
    description:
      "Сопровождение перепланировки и переустройства в Москве и МО: проектные решения и прохождение Мосжилинспекции.",
    href: "/uslugi/pereplanirovka",
    icon: (
      <Icon>
        <path d="M6 42 L6 10 L42 10 L42 42 Z" />
        <path d="M6 24 L42 24" />
        <path d="M24 10 L24 42" />
        <path d="M14 16 L18 16 M30 30 L34 30" />
      </Icon>
    )
  }
];

export function HomeSegments() {
  return (
    <section className="section segments-section" aria-labelledby="segments-heading">
      <div className="container">
        <p className="eyebrow">Кому подходит</p>
        <h2 id="segments-heading">С кем мы работаем</h2>
        <p className="lead segments-lead">
          Подбираем формат сопровождения под профиль заказчика: от короткого
          аудита до ведения проекта от ТУ до акта.
        </p>
        <div className="segments-grid">
          {segments.map((s) => (
            <Link key={s.href} href={s.href} className="segment-card">
              {s.icon}
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <span className="segment-link">Подробнее →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
