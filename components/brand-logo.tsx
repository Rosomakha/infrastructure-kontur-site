import Link from "next/link";

type BrandLogoProps = {
  linkToHome?: boolean;
  className?: string;
  tagline?: string;
  markSize?: number;
};

/**
 * Знак бренда «Новиков и партнёры» — корпоративная монограмма «Н»
 * в тонкой золотой рамке с серифной типографикой и нижней риской-клеймом.
 * Минимализм в духе buy-side консалтинга (Bain / McKinsey / BCG).
 */
export function BrandMark({
  size = 40,
  className
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      aria-hidden
      role="img"
      fill="none"
    >
      <rect
        x={2.5}
        y={2.5}
        width={35}
        height={35}
        rx={2}
        stroke="var(--gold)"
        strokeWidth={1.2}
      />
      <text
        x={20}
        y={27.5}
        textAnchor="middle"
        fontFamily='Georgia, "Times New Roman", serif'
        fontSize={22}
        fontWeight={700}
        fill="var(--navy-deep)"
        letterSpacing="0.01em"
      >
        Н
      </text>
      <line
        x1={14}
        y1={32}
        x2={26}
        y2={32}
        stroke="var(--gold)"
        strokeWidth={1}
      />
    </svg>
  );
}

export function BrandLogo({
  linkToHome = true,
  className,
  tagline = "Консалтинг по инженерной инфраструктуре",
  markSize = 40
}: BrandLogoProps) {
  const inner = (
    <>
      <BrandMark size={markSize} className="ik-logo-mark" />
      <div className="ik-logo-copy">
        <strong className="ik-logo-title">
          <span className="ik-logo-title-main">Новиков</span>
          <span className="ik-logo-title-accent">и партнёры</span>
        </strong>
        {tagline ? <span className="ik-logo-tagline">{tagline}</span> : null}
      </div>
    </>
  );

  const wrapperClass = `brand ik-brand-wordmark ${className ?? ""}`;

  if (linkToHome) {
    return (
      <Link href="/" className={wrapperClass}>
        {inner}
      </Link>
    );
  }

  return <div className={wrapperClass}>{inner}</div>;
}
