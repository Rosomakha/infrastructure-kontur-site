import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Варианты знака — внутренняя страница",
  description: "Подборка из 10 вариантов знака для бренда «Контур согласований».",
  robots: { index: false, follow: false }
};

type LogoOption = {
  id: number;
  title: string;
  desc: string;
  svg: ReactNode;
};

const options: LogoOption[] = [
  {
    id: 1,
    title: "Печать с легендой",
    desc:
      "Официальная круглая печать с микро-надписью «КОНТУР · СОГЛАСОВАНИЙ» по верхней дуге, внутренний оттиск с серифной К.",
    svg: (
      <svg viewBox="0 0 140 140" width="120" height="120" fill="none" aria-hidden>
        <defs>
          <path id="seal-arc-1" d="M 28 70 A 42 42 0 0 1 112 70" />
        </defs>
        <circle cx={70} cy={70} r={62} stroke="var(--gold)" strokeWidth={1.2} />
        <circle cx={70} cy={70} r={54} stroke="var(--gold)" strokeWidth={0.6} opacity={0.6} />
        <circle cx={70} cy={70} r={38} stroke="var(--gold)" strokeWidth={0.9} />
        <text
          fontSize={5.5}
          letterSpacing={3.4}
          fill="var(--navy-deep)"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight={600}
        >
          <textPath href="#seal-arc-1" startOffset="50%" textAnchor="middle">
            КОНТУР  ·  СОГЛАСОВАНИЙ
          </textPath>
        </text>
        <text
          x={70}
          y={85}
          textAnchor="middle"
          fontSize={38}
          fontWeight={700}
          fontFamily="Georgia, 'Times New Roman', serif"
          fill="var(--navy-deep)"
        >
          К
        </text>
        <line x1={56} y1={96} x2={84} y2={96} stroke="var(--gold)" strokeWidth={0.9} />
        <circle cx={70} cy={8} r={1.5} fill="var(--gold)" />
        <circle cx={70} cy={132} r={1.5} fill="var(--gold)" />
        <circle cx={8} cy={70} r={1.5} fill="var(--gold)" />
        <circle cx={132} cy={70} r={1.5} fill="var(--gold)" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Геральдический щит",
    desc:
      "Французский щит с золотой полосой посередине, тремя ромбами сверху и серифной К внизу. Чистая геральдика, статусный мотив.",
    svg: (
      <svg viewBox="0 0 140 140" width="120" height="120" fill="none" aria-hidden>
        <path
          d="M 25 18 L 115 18 L 115 80 C 115 105 95 122 70 132 C 45 122 25 105 25 80 Z"
          stroke="var(--navy-deep)"
          strokeWidth={1.6}
          fill="#fff"
        />
        <path
          d="M 30 23 L 110 23 L 110 79 C 110 100 93 114 70 124 C 47 114 30 100 30 79 Z"
          stroke="var(--gold)"
          strokeWidth={0.6}
          opacity={0.5}
        />
        <line x1={32} y1={60} x2={108} y2={60} stroke="var(--gold)" strokeWidth={1.4} />
        <line x1={32} y1={65} x2={108} y2={65} stroke="var(--gold)" strokeWidth={0.5} opacity={0.6} />
        <path d="M 55 38 l 5 5 l -5 5 l -5 -5 z" fill="var(--gold)" />
        <path d="M 70 35 l 6 6 l -6 6 l -6 -6 z" fill="var(--gold)" />
        <path d="M 85 38 l 5 5 l -5 5 l -5 -5 z" fill="var(--gold)" />
        <text
          x={70}
          y={105}
          textAnchor="middle"
          fontSize={34}
          fontWeight={700}
          fontFamily="Georgia, 'Times New Roman', serif"
          fill="var(--navy-deep)"
        >
          К
        </text>
      </svg>
    )
  },
  {
    id: 3,
    title: "Монограмма КС",
    desc:
      "Крупная серифная монограмма из перекрытых букв К и С на тонкой линии-полке. Без рамки — стиль юридических и нотариальных контор.",
    svg: (
      <svg viewBox="0 0 140 140" width="120" height="120" fill="none" aria-hidden>
        <text
          x={28}
          y={108}
          fontSize={94}
          fontWeight={700}
          fontFamily="Georgia, 'Times New Roman', serif"
          fill="var(--navy-deep)"
        >
          К
        </text>
        <text
          x={62}
          y={108}
          fontSize={94}
          fontWeight={700}
          fontFamily="Georgia, 'Times New Roman', serif"
          fill="var(--gold)"
          opacity={0.92}
        >
          С
        </text>
        <line x1={20} y1={116} x2={122} y2={116} stroke="var(--gold)" strokeWidth={0.9} />
        <line x1={20} y1={119.5} x2={122} y2={119.5} stroke="var(--gold)" strokeWidth={0.4} opacity={0.5} />
      </svg>
    )
  },
  {
    id: 4,
    title: "Документ с печатью",
    desc:
      "Стилизованный лист с загнутым уголком и круглой печатью с буквой К в нижнем правом углу. Буквально иллюстрирует продукт — согласованный документ.",
    svg: (
      <svg viewBox="0 0 140 140" width="120" height="120" fill="none" aria-hidden>
        <path
          d="M 22 12 L 92 12 L 110 30 L 110 128 L 22 128 Z"
          stroke="var(--navy-deep)"
          strokeWidth={1.4}
          fill="#fff"
        />
        <path d="M 92 12 L 92 30 L 110 30 Z" fill="var(--gold)" opacity={0.18} />
        <path d="M 92 12 L 92 30 L 110 30" stroke="var(--navy-deep)" strokeWidth={1.1} />
        <line x1={32} y1={48} x2={100} y2={48} stroke="var(--muted)" strokeWidth={0.7} opacity={0.45} />
        <line x1={32} y1={55} x2={100} y2={55} stroke="var(--muted)" strokeWidth={0.7} opacity={0.45} />
        <line x1={32} y1={62} x2={82} y2={62} stroke="var(--muted)" strokeWidth={0.7} opacity={0.45} />
        <line x1={32} y1={76} x2={100} y2={76} stroke="var(--muted)" strokeWidth={0.7} opacity={0.45} />
        <line x1={32} y1={83} x2={100} y2={83} stroke="var(--muted)" strokeWidth={0.7} opacity={0.45} />
        <line x1={32} y1={90} x2={70} y2={90} stroke="var(--muted)" strokeWidth={0.7} opacity={0.45} />
        <circle cx={86} cy={108} r={18} stroke="var(--gold)" strokeWidth={1.3} fill="#fff" opacity={0.95} />
        <circle cx={86} cy={108} r={14} stroke="var(--gold)" strokeWidth={0.5} opacity={0.55} />
        <text
          x={86}
          y={114}
          textAnchor="middle"
          fontSize={15}
          fontWeight={700}
          fontFamily="Georgia, 'Times New Roman', serif"
          fill="var(--navy-deep)"
        >
          К
        </text>
      </svg>
    )
  },
  {
    id: 5,
    title: "Колонна",
    desc:
      "Классический ордер: абак, эхинус, ствол с каннелюрами, база. Серифная К в центре ствола. Аллюзия на государственное здание.",
    svg: (
      <svg viewBox="0 0 140 140" width="120" height="120" fill="none" aria-hidden>
        <rect x={14} y={14} width={112} height={6} fill="var(--navy-deep)" />
        <path d="M 22 20 L 118 20 L 110 30 L 30 30 Z" fill="#fff" stroke="var(--navy-deep)" strokeWidth={1.2} />
        <rect x={35} y={30} width={70} height={80} stroke="var(--navy-deep)" strokeWidth={1.4} fill="#fff" />
        <line x1={55} y1={30} x2={55} y2={110} stroke="var(--gold)" strokeWidth={0.7} opacity={0.55} />
        <line x1={85} y1={30} x2={85} y2={110} stroke="var(--gold)" strokeWidth={0.7} opacity={0.55} />
        <text
          x={70}
          y={82}
          textAnchor="middle"
          fontSize={42}
          fontWeight={700}
          fontFamily="Georgia, 'Times New Roman', serif"
          fill="var(--navy-deep)"
        >
          К
        </text>
        <path d="M 30 110 L 110 110 L 118 120 L 22 120 Z" fill="#fff" stroke="var(--navy-deep)" strokeWidth={1.2} />
        <rect x={14} y={120} width={112} height={6} fill="var(--navy-deep)" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Защитный контур",
    desc:
      "Четыре угловых засечки и боковые отметки очерчивают пространство вокруг крупной серифной К. Минималистично, читается на любом размере.",
    svg: (
      <svg viewBox="0 0 140 140" width="120" height="120" fill="none" aria-hidden>
        <path d="M 20 36 L 20 20 L 36 20" stroke="var(--gold)" strokeWidth={1.8} />
        <path d="M 104 20 L 120 20 L 120 36" stroke="var(--gold)" strokeWidth={1.8} />
        <path d="M 120 104 L 120 120 L 104 120" stroke="var(--gold)" strokeWidth={1.8} />
        <path d="M 36 120 L 20 120 L 20 104" stroke="var(--gold)" strokeWidth={1.8} />
        <line x1={20} y1={70} x2={32} y2={70} stroke="var(--gold)" strokeWidth={1.1} />
        <line x1={120} y1={70} x2={108} y2={70} stroke="var(--gold)" strokeWidth={1.1} />
        <line x1={70} y1={20} x2={70} y2={32} stroke="var(--gold)" strokeWidth={1.1} />
        <line x1={70} y1={120} x2={70} y2={108} stroke="var(--gold)" strokeWidth={1.1} />
        <text
          x={70}
          y={92}
          textAnchor="middle"
          fontSize={62}
          fontWeight={700}
          fontFamily="Georgia, 'Times New Roman', serif"
          fill="var(--navy-deep)"
        >
          К
        </text>
      </svg>
    )
  },
  {
    id: 7,
    title: "Башня",
    desc:
      "Геральдическая башня с зубцами, окном-крестом и флажком. Сильный геральдический образ: защита позиции клиента, цитадель.",
    svg: (
      <svg viewBox="0 0 140 140" width="120" height="120" fill="none" aria-hidden>
        <rect x={25} y={118} width={90} height={10} stroke="var(--navy-deep)" strokeWidth={1.4} fill="#fff" />
        <rect x={40} y={40} width={60} height={78} stroke="var(--navy-deep)" strokeWidth={1.4} fill="#fff" />
        <rect x={58} y={55} width={24} height={20} stroke="var(--gold)" strokeWidth={1} fill="none" />
        <line x1={70} y1={55} x2={70} y2={75} stroke="var(--gold)" strokeWidth={0.8} />
        <line x1={58} y1={65} x2={82} y2={65} stroke="var(--gold)" strokeWidth={0.8} />
        <path
          d="M 60 118 L 60 95 Q 60 88 70 88 Q 80 88 80 95 L 80 118"
          stroke="var(--navy-deep)"
          strokeWidth={1.2}
          fill="#fff"
        />
        <rect x={35} y={32} width={70} height={8} fill="var(--navy-deep)" />
        <rect x={36} y={22} width={10} height={10} fill="var(--navy-deep)" />
        <rect x={51} y={22} width={10} height={10} fill="var(--navy-deep)" />
        <rect x={66} y={22} width={10} height={10} fill="var(--navy-deep)" />
        <rect x={81} y={22} width={10} height={10} fill="var(--navy-deep)" />
        <rect x={96} y={22} width={10} height={10} fill="var(--navy-deep)" />
        <line x1={71} y1={22} x2={71} y2={10} stroke="var(--navy-deep)" strokeWidth={1.1} />
        <path d="M 71 10 L 84 14 L 71 18 Z" fill="var(--gold)" />
      </svg>
    )
  },
  {
    id: 8,
    title: "Венок",
    desc:
      "Лавровый венок с лентой-бантом снизу и серифной К в центре. Государственно-наградной мотив, понятный без объяснений.",
    svg: (
      <svg viewBox="0 0 140 140" width="120" height="120" fill="none" aria-hidden>
        <path d="M 30 112 Q 18 70 40 30" stroke="var(--gold)" strokeWidth={1.4} fill="none" />
        <ellipse cx={22} cy={100} rx={6} ry={3} transform="rotate(-30 22 100)" fill="var(--gold)" opacity={0.9} />
        <ellipse cx={20} cy={85} rx={6} ry={3} transform="rotate(-15 20 85)" fill="var(--gold)" opacity={0.9} />
        <ellipse cx={22} cy={70} rx={6} ry={3} transform="rotate(0 22 70)" fill="var(--gold)" opacity={0.9} />
        <ellipse cx={26} cy={55} rx={6} ry={3} transform="rotate(20 26 55)" fill="var(--gold)" opacity={0.9} />
        <ellipse cx={34} cy={42} rx={6} ry={3} transform="rotate(45 34 42)" fill="var(--gold)" opacity={0.9} />
        <path d="M 110 112 Q 122 70 100 30" stroke="var(--gold)" strokeWidth={1.4} fill="none" />
        <ellipse cx={118} cy={100} rx={6} ry={3} transform="rotate(30 118 100)" fill="var(--gold)" opacity={0.9} />
        <ellipse cx={120} cy={85} rx={6} ry={3} transform="rotate(15 120 85)" fill="var(--gold)" opacity={0.9} />
        <ellipse cx={118} cy={70} rx={6} ry={3} transform="rotate(0 118 70)" fill="var(--gold)" opacity={0.9} />
        <ellipse cx={114} cy={55} rx={6} ry={3} transform="rotate(-20 114 55)" fill="var(--gold)" opacity={0.9} />
        <ellipse cx={106} cy={42} rx={6} ry={3} transform="rotate(-45 106 42)" fill="var(--gold)" opacity={0.9} />
        <path
          d="M 48 116 L 70 110 L 92 116 L 92 128 L 70 122 L 48 128 Z"
          fill="var(--gold)"
          opacity={0.92}
        />
        <line x1={70} y1={110} x2={70} y2={122} stroke="#fff" strokeWidth={0.9} />
        <text
          x={70}
          y={90}
          textAnchor="middle"
          fontSize={56}
          fontWeight={700}
          fontFamily="Georgia, 'Times New Roman', serif"
          fill="var(--navy-deep)"
        >
          К
        </text>
      </svg>
    )
  },
  {
    id: 9,
    title: "Усиленная печать",
    desc:
      "Развитие текущего знака: квадрат с угловыми засечками + вписанный двойной круг + крупная К с подчёркивающей линией. Больше плотности, тот же узнаваемый каркас.",
    svg: (
      <svg viewBox="0 0 140 140" width="120" height="120" fill="none" aria-hidden>
        <path d="M 10 22 L 10 10 L 22 10" stroke="var(--gold)" strokeWidth={1.3} />
        <path d="M 118 10 L 130 10 L 130 22" stroke="var(--gold)" strokeWidth={1.3} />
        <path d="M 130 118 L 130 130 L 118 130" stroke="var(--gold)" strokeWidth={1.3} />
        <path d="M 22 130 L 10 130 L 10 118" stroke="var(--gold)" strokeWidth={1.3} />
        <rect x={20} y={20} width={100} height={100} stroke="var(--navy-deep)" strokeWidth={1.4} />
        <circle cx={70} cy={70} r={42} stroke="var(--gold)" strokeWidth={1} />
        <circle cx={70} cy={70} r={36} stroke="var(--gold)" strokeWidth={0.5} opacity={0.55} />
        <text
          x={70}
          y={88}
          textAnchor="middle"
          fontSize={46}
          fontWeight={700}
          fontFamily="Georgia, 'Times New Roman', serif"
          fill="var(--navy-deep)"
        >
          К
        </text>
        <line x1={58} y1={98} x2={82} y2={98} stroke="var(--gold)" strokeWidth={1} />
        <circle cx={70} cy={20} r={1.4} fill="var(--gold)" />
        <circle cx={70} cy={120} r={1.4} fill="var(--gold)" />
        <circle cx={20} cy={70} r={1.4} fill="var(--gold)" />
        <circle cx={120} cy={70} r={1.4} fill="var(--gold)" />
      </svg>
    )
  },
  {
    id: 10,
    title: "План",
    desc:
      "Архитектурный план в стиле инженерного чертежа: внешние стены, перегородка, дверной проём, размерная линия, серифная К внутри одной из «комнат». Профессиональный отраслевой знак.",
    svg: (
      <svg viewBox="0 0 140 140" width="120" height="120" fill="none" aria-hidden>
        <rect x={20} y={22} width={100} height={88} stroke="var(--navy-deep)" strokeWidth={2.6} fill="#fff" />
        <line x1={70} y1={22} x2={70} y2={70} stroke="var(--navy-deep)" strokeWidth={2.2} />
        <line x1={20} y1={70} x2={120} y2={70} stroke="var(--navy-deep)" strokeWidth={2.2} />
        <line x1={56} y1={70} x2={70} y2={70} stroke="#fff" strokeWidth={3.2} />
        <line x1={70} y1={42} x2={70} y2={56} stroke="#fff" strokeWidth={3.2} />
        <path d="M 56 70 A 14 14 0 0 1 70 56" stroke="var(--gold)" strokeWidth={0.8} fill="none" />
        <text
          x={45}
          y={56}
          textAnchor="middle"
          fontSize={22}
          fontWeight={700}
          fontFamily="Georgia, 'Times New Roman', serif"
          fill="var(--navy-deep)"
        >
          К
        </text>
        <line x1={20} y1={122} x2={120} y2={122} stroke="var(--gold)" strokeWidth={0.8} />
        <line x1={20} y1={119} x2={20} y2={125} stroke="var(--gold)" strokeWidth={0.8} />
        <line x1={120} y1={119} x2={120} y2={125} stroke="var(--gold)" strokeWidth={0.8} />
        <text
          x={70}
          y={134}
          textAnchor="middle"
          fontSize={6}
          letterSpacing={1.5}
          fontFamily="Manrope, Inter, sans-serif"
          fill="var(--muted)"
        >
          КОНТУР · СОГЛАСОВАНИЙ
        </text>
      </svg>
    )
  }
];

export default function LogoOptionsPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Внутренняя страница</p>
        <h1>Варианты знака</h1>
        <p className="lead" style={{ maxWidth: "60ch" }}>
          Десять направлений знака для бренда «Контур согласований» — от строгой
          геральдики и официальной печати до архитектурно-инженерных мотивов.
          Назовите номер — применю на сайт. Можно также скомбинировать (например,
          монограмму из №3 на печати из №9) или скорректировать толщину линий,
          цвет и шрифт буквы.
        </p>

        <div className="logo-grid">
          {options.map((opt) => (
            <article key={opt.id} className="logo-card">
              <div className="logo-card-mark">{opt.svg}</div>
              <div className="logo-card-meta">
                <p className="logo-card-num">№&nbsp;{opt.id}</p>
                <h2 className="logo-card-title">{opt.title}</h2>
                <p className="logo-card-desc">{opt.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="logo-note">
          Палитра текущего бренда: тёмно-синий <code>#071a32</code> + бронза{" "}
          <code>#a67c32</code>. Любой из вариантов могу подать монохромно
          (только navy или только gold) — для документов, печати на бумаге и
          одноцветных носителей.
        </p>
      </div>
    </section>
  );
}
