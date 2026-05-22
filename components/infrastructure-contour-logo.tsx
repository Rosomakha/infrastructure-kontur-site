import Link from "next/link";

type InfrastructureContourLogoProps = {
  linkToHome?: boolean;
  className?: string;
  tagline?: string;
  markSize?: number;
};

/**
 * Знак «Инфраструктурный контур» — чертёжный минимализм:
 * тонкий контур-квадрат, внутренний угол «└─» как у инженерной отметки,
 * акцент-точка золотом. Без шрифтовых излишеств — консалтинговая строгость.
 */
export function IkContourMark({
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
      {/* Внешний контур-квадрат */}
      <rect
        x={2.5}
        y={2.5}
        width={35}
        height={35}
        rx={2}
        stroke="var(--primary)"
        strokeWidth={1.4}
      />
      {/* Внутренняя угловая отметка */}
      <path
        d="M 13 13 L 13 27 L 27 27"
        stroke="var(--primary)"
        strokeWidth={1.4}
        strokeLinecap="square"
      />
      {/* Тонкая «измерительная» линия сверху */}
      <path
        d="M 13 9 L 27 9"
        stroke="var(--gold)"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
      {/* Золотая точка отметки на пересечении */}
      <circle cx={13} cy={13} r={1.9} fill="var(--gold)" />
    </svg>
  );
}

export function InfrastructureContourLogo({
  linkToHome = true,
  className,
  tagline = "Консалтинг по инженерной инфраструктуре",
  markSize = 40
}: InfrastructureContourLogoProps) {
  const inner = (
    <>
      <IkContourMark size={markSize} className="ik-logo-mark" />
      <div className="ik-logo-copy">
        <strong className="ik-logo-title">
          <span className="ik-logo-title-main">Инфраструктурный</span>
          <span className="ik-logo-title-accent">контур</span>
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
