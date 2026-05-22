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
    title: "Девелоперам и застройщикам",
    description:
      "Жилые комплексы и коммерческие проекты: сетевые ТУ, проект ВЭС/ВНС, ввод объекта.",
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
      "Заводы, склады, технопарки: повышение мощности, тепло и водоснабжение, наружные сети.",
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
      "Договоры с РСО, ОДПУ/ИПУ, модернизация ИТП, энергоаудит МКД и сметы по 261-ФЗ.",
    href: "/uslugi/dogovory-rso",
    icon: (
      <Icon>
        <path d="M8 42 L8 14 L24 6 L40 14 L40 42 Z" />
        <path d="M16 22 L32 22 M16 30 L32 30 M16 38 L24 38" />
      </Icon>
    )
  },
  {
    title: "Частным владельцам",
    description:
      "Перепланировка и переустройство помещений в Москве и МО: проект и согласование.",
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
        <h2 id="segments-heading">Решения под профиль заказчика</h2>
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
