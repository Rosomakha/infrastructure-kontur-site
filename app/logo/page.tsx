import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Варианты знака — внутренняя страница",
  description: "Подборка вариантов знака для бренда «Контур согласований».",
  robots: { index: false, follow: false }
};

type LogoOption = {
  id: number;
  title: string;
  desc: string;
  svg: ReactNode;
  group: "mark" | "emblem";
};

function Lockup({ mark }: { mark: ReactNode }) {
  return (
    <div className="logo-card-lockup" aria-label="Применение в шапке сайта">
      <div className="logo-card-lockup-mark">{mark}</div>
      <div className="logo-card-lockup-text">
        <span className="lockup-main">КОНТУР</span>
        <span className="lockup-accent">согласований</span>
      </div>
    </div>
  );
}

const options: LogoOption[] = [
  {
    id: 1,
    group: "mark",
    title: "Печать с легендой",
    desc:
      "Официальная круглая печать с микро-надписью «КОНТУР · СОГЛАСОВАНИЙ» по верхней дуге и серифной К в центре.",
    svg: (
      <svg viewBox="0 0 140 140" fill="none" aria-hidden>
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
    group: "mark",
    title: "Геральдический щит",
    desc:
      "Французский щит с золотой полосой посередине, ромбами сверху и серифной К внизу. Чистая геральдика, статусный мотив.",
    svg: (
      <svg viewBox="0 0 140 140" fill="none" aria-hidden>
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
    group: "mark",
    title: "Монограмма КС",
    desc:
      "Крупная серифная монограмма из перекрытых К и С на тонкой линии-полке. Без рамки — стиль юридических и нотариальных контор.",
    svg: (
      <svg viewBox="0 0 140 140" fill="none" aria-hidden>
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
    group: "mark",
    title: "Документ с печатью",
    desc:
      "Стилизованный лист с загнутым уголком и круглой печатью с К в нижнем правом углу. Иллюстрирует продукт — согласованный документ.",
    svg: (
      <svg viewBox="0 0 140 140" fill="none" aria-hidden>
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
    group: "mark",
    title: "Колонна",
    desc:
      "Классический ордер: абак, эхинус, ствол с каннелюрами, база. Серифная К в центре ствола. Аллюзия на государственное здание.",
    svg: (
      <svg viewBox="0 0 140 140" fill="none" aria-hidden>
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
    group: "mark",
    title: "Защитный контур",
    desc:
      "Четыре угловых засечки и боковые отметки очерчивают пространство вокруг крупной серифной К. Минималистично, читается на любом размере.",
    svg: (
      <svg viewBox="0 0 140 140" fill="none" aria-hidden>
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
    group: "mark",
    title: "Башня",
    desc:
      "Геральдическая башня с зубцами, окном-крестом и флажком. Сильный геральдический образ — защита позиции клиента, цитадель.",
    svg: (
      <svg viewBox="0 0 140 140" fill="none" aria-hidden>
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
    group: "mark",
    title: "Венок",
    desc:
      "Лавровый венок с лентой-бантом снизу и серифной К в центре. Государственно-наградной мотив, понятный без объяснений.",
    svg: (
      <svg viewBox="0 0 140 140" fill="none" aria-hidden>
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
    group: "mark",
    title: "Усиленная печать",
    desc:
      "Развитие текущего знака: квадрат с угловыми засечками + вписанный двойной круг + крупная К с подчёркивающей линией.",
    svg: (
      <svg viewBox="0 0 140 140" fill="none" aria-hidden>
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
    group: "mark",
    title: "План",
    desc:
      "Архитектурный план в стиле инженерного чертежа: внешние стены, перегородка, дверной проём, размерная линия, серифная К внутри одной из «комнат».",
    svg: (
      <svg viewBox="0 0 140 140" fill="none" aria-hidden>
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
      </svg>
    )
  },
  {
    id: 11,
    group: "emblem",
    title: "Овальная печать «КОНТУР · СОГЛАСОВАНИЙ»",
    desc:
      "Эмблема с обоими словами: «КОНТУР» по верхней дуге, «СОГЛАСОВАНИЙ» по нижней, в центре серифная К. Полноценный знак-печать, читаемый без вордмарка.",
    svg: (
      <svg viewBox="0 0 160 140" fill="none" aria-hidden>
        <defs>
          <path id="emb-top-11" d="M 30 70 A 50 45 0 0 1 130 70" />
          <path id="emb-bot-11" d="M 130 78 A 50 45 0 0 0 30 78" />
        </defs>
        <ellipse cx={80} cy={72} rx={62} ry={56} stroke="var(--navy-deep)" strokeWidth={1.6} fill="#fff" />
        <ellipse cx={80} cy={72} rx={56} ry={50} stroke="var(--gold)" strokeWidth={0.6} opacity={0.55} />
        <text
          fontSize={9}
          letterSpacing={3.6}
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight={700}
          fill="var(--navy-deep)"
        >
          <textPath href="#emb-top-11" startOffset="50%" textAnchor="middle">
            КОНТУР
          </textPath>
        </text>
        <text
          fontSize={7.2}
          letterSpacing={3.2}
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight={600}
          fill="var(--navy-deep)"
        >
          <textPath href="#emb-bot-11" startOffset="50%" textAnchor="middle">
            СОГЛАСОВАНИЙ
          </textPath>
        </text>
        <line x1={48} y1={72} x2={60} y2={72} stroke="var(--gold)" strokeWidth={1} />
        <line x1={100} y1={72} x2={112} y2={72} stroke="var(--gold)" strokeWidth={1} />
        <text
          x={80}
          y={84}
          textAnchor="middle"
          fontSize={36}
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
    id: 12,
    group: "emblem",
    title: "Кольцо с обводным текстом",
    desc:
      "Текст «КОНТУР» наверху и «СОГЛАСОВАНИЙ» внизу идут по кольцу, в центре — золотой ромб как знак печати. Знак сам по себе раскрывает название.",
    svg: (
      <svg viewBox="0 0 140 140" fill="none" aria-hidden>
        <defs>
          <path id="emb-top-12" d="M 22 70 A 48 48 0 0 1 118 70" />
          <path id="emb-bot-12" d="M 118 76 A 48 48 0 0 0 22 76" />
        </defs>
        <circle cx={70} cy={70} r={64} stroke="var(--navy-deep)" strokeWidth={1.6} fill="#fff" />
        <circle cx={70} cy={70} r={56} stroke="var(--gold)" strokeWidth={0.6} opacity={0.55} />
        <circle cx={70} cy={70} r={32} stroke="var(--gold)" strokeWidth={0.5} opacity={0.4} />
        <text
          fontSize={8.5}
          letterSpacing={5}
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight={700}
          fill="var(--navy-deep)"
        >
          <textPath href="#emb-top-12" startOffset="50%" textAnchor="middle">
            КОНТУР
          </textPath>
        </text>
        <text
          fontSize={6.5}
          letterSpacing={4}
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight={600}
          fill="var(--navy-deep)"
        >
          <textPath href="#emb-bot-12" startOffset="50%" textAnchor="middle">
            СОГЛАСОВАНИЙ
          </textPath>
        </text>
        <path d="M 70 56 L 84 70 L 70 84 L 56 70 Z" fill="var(--gold)" />
        <path d="M 70 62 L 78 70 L 70 78 L 62 70 Z" fill="#fff" opacity={0.85} />
        <text
          x={70}
          y={74}
          textAnchor="middle"
          fontSize={11}
          fontWeight={700}
          fontFamily="Georgia, 'Times New Roman', serif"
          fill="var(--navy-deep)"
        >
          К
        </text>
        <circle cx={5} cy={70} r={1.4} fill="var(--gold)" />
        <circle cx={135} cy={70} r={1.4} fill="var(--gold)" />
      </svg>
    )
  },
  {
    id: 13,
    group: "emblem",
    title: "Щит с лентой «СОГЛАСОВАНИЙ»",
    desc:
      "Геральдический щит с золотой лентой посередине, на которой набрано слово «СОГЛАСОВАНИЙ» белым серифом, и крупная К над лентой.",
    svg: (
      <svg viewBox="0 0 140 140" fill="none" aria-hidden>
        <path
          d="M 22 16 L 118 16 L 118 80 C 118 106 96 124 70 134 C 44 124 22 106 22 80 Z"
          stroke="var(--navy-deep)"
          strokeWidth={1.6}
          fill="#fff"
        />
        <path
          d="M 27 21 L 113 21 L 113 79 C 113 102 94 117 70 126 C 46 117 27 102 27 79 Z"
          stroke="var(--gold)"
          strokeWidth={0.6}
          opacity={0.5}
        />
        <text
          x={70}
          y={56}
          textAnchor="middle"
          fontSize={32}
          fontWeight={700}
          fontFamily="Georgia, 'Times New Roman', serif"
          fill="var(--navy-deep)"
        >
          К
        </text>
        <path
          d="M 14 66 L 126 66 L 122 80 L 18 80 Z"
          fill="var(--gold)"
        />
        <path
          d="M 14 66 L 6 70 L 14 72 Z"
          fill="var(--gold)"
          opacity={0.7}
        />
        <path
          d="M 126 66 L 134 70 L 126 72 Z"
          fill="var(--gold)"
          opacity={0.7}
        />
        <text
          x={70}
          y={77}
          textAnchor="middle"
          fontSize={9}
          letterSpacing={2.4}
          fontWeight={700}
          fontFamily="Georgia, 'Times New Roman', serif"
          fill="#fff"
        >
          СОГЛАСОВАНИЙ
        </text>
        <line x1={32} y1={92} x2={108} y2={92} stroke="var(--gold)" strokeWidth={0.6} opacity={0.6} />
        <text
          x={70}
          y={114}
          textAnchor="middle"
          fontSize={6.5}
          letterSpacing={3.6}
          fontWeight={600}
          fontFamily="Georgia, 'Times New Roman', serif"
          fill="var(--navy-deep)"
          opacity={0.8}
        >
          КОНТУР
        </text>
      </svg>
    )
  },
  {
    id: 14,
    group: "emblem",
    title: "Клеймо «К» + вертикальный текст",
    desc:
      "Современная подача: крупная серифная К как клеймо, золотые горизонтальные черты сверху и снизу, вертикально набранное «СОГЛАСОВАНИЙ» вдоль правой стороны. Менее парадно, более редакционно.",
    svg: (
      <svg viewBox="0 0 140 140" fill="none" aria-hidden>
        <line x1={20} y1={22} x2={120} y2={22} stroke="var(--gold)" strokeWidth={1.4} />
        <line x1={20} y1={25} x2={120} y2={25} stroke="var(--gold)" strokeWidth={0.5} opacity={0.55} />
        <line x1={20} y1={118} x2={120} y2={118} stroke="var(--gold)" strokeWidth={1.4} />
        <line x1={20} y1={115} x2={120} y2={115} stroke="var(--gold)" strokeWidth={0.5} opacity={0.55} />
        <text
          x={38}
          y={108}
          fontSize={104}
          fontWeight={700}
          fontFamily="Georgia, 'Times New Roman', serif"
          fill="var(--navy-deep)"
        >
          К
        </text>
        <text
          transform="rotate(90 108 70)"
          x={108}
          y={70}
          textAnchor="middle"
          fontSize={10}
          letterSpacing={6}
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight={600}
          fill="var(--gold)"
        >
          СОГЛАСОВАНИЙ
        </text>
        <circle cx={108} cy={22} r={1.6} fill="var(--gold)" />
        <circle cx={108} cy={118} r={1.6} fill="var(--gold)" />
      </svg>
    )
  }
];

const marks = options.filter((o) => o.group === "mark");
const emblems = options.filter((o) => o.group === "emblem");

function LogoCard({ opt }: { opt: LogoOption }) {
  return (
    <article className="logo-card">
      <div className="logo-card-mark">{opt.svg}</div>
      <Lockup mark={opt.svg} />
      <div className="logo-card-meta">
        <p className="logo-card-num">№&nbsp;{opt.id}</p>
        <h2 className="logo-card-title">{opt.title}</h2>
        <p className="logo-card-desc">{opt.desc}</p>
      </div>
    </article>
  );
}

export default function LogoOptionsPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Внутренняя страница</p>
        <h1>Варианты знака</h1>
        <p className="lead" style={{ maxWidth: "62ch" }}>
          Логотип — это всегда пара: компактный <strong>знак</strong>{" "}
          (для шапки, фавикона, аватаров, печатей на бумаге) и развёрнутый{" "}
          <strong>вордмарк</strong> «Контур согласований». На сайте они всегда
          стоят рядом. Поэтому в большинстве вариантов знак строится на
          инициале «К» — он должен быть узнаваем даже на 16×16 пикселях. Слово
          «согласований» при этом не исчезает: оно живёт в наборном тексте
          рядом со знаком. Чтобы это было видно, под каждым большим превью я
          показал, как тот же знак выглядит в реальной шапке.
        </p>

        <p className="lead" style={{ maxWidth: "62ch" }}>
          Если хочется, чтобы слово «согласований» <strong>обязательно жило
          внутри самого знака</strong>, посмотрите второй блок — варианты
          №11–14: это полноценные эмблемы с интегрированным названием.
        </p>

        <h2 className="logo-section-title">Знак + вордмарк (классическая пара)</h2>
        <p className="logo-section-sub">
          Знак работает как эмблема, рядом всегда идёт текст «КОНТУР /
          согласований». Так выглядят логотипы юридических контор, банков,
          государственных учреждений.
        </p>
        <div className="logo-grid">
          {marks.map((opt) => (
            <LogoCard key={opt.id} opt={opt} />
          ))}
        </div>

        <h2 className="logo-section-title" style={{ marginTop: "3rem" }}>
          Эмблемы со словом «СОГЛАСОВАНИЙ» внутри
        </h2>
        <p className="logo-section-sub">
          Знак сам по себе содержит полное название — может использоваться без
          дополнительного вордмарка. Рядом с такими эмблемами в шапке вордмарк
          обычно дублируется укрупнённым набором — для разборчивости на любом
          размере.
        </p>
        <div className="logo-grid">
          {emblems.map((opt) => (
            <LogoCard key={opt.id} opt={opt} />
          ))}
        </div>

        <p className="logo-note">
          Палитра текущего бренда: тёмно-синий <code>#071a32</code> + бронза{" "}
          <code>#a67c32</code>. Любой из вариантов могу подать монохромно
          (только navy или только gold) — для документов, печатей на бумаге и
          одноцветных носителей. Также можно скомбинировать (например,
          монограмму №3 поместить в обводное кольцо №12 или поставить ленту
          «СОГЛАСОВАНИЙ» из №13 на щит №2).
        </p>
      </div>
    </section>
  );
}
