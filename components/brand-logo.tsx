import Link from "next/link";

type BrandLogoProps = {
  linkToHome?: boolean;
  className?: string;
  tagline?: string;
  markSize?: number;
};

/**
 * Знак «Контур согласований» — корпоративная печать: двойной круг,
 * серифная монограмма «КС» в центре и декоративные риски сверху/снизу.
 * Архетип официального документооборота: статус и доверие.
 */
export function BrandMark({
  size = 44,
  className
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      className={className}
      aria-hidden
      role="img"
      fill="none"
    >
      <circle
        cx={22}
        cy={22}
        r={20}
        stroke="var(--gold)"
        strokeWidth={1.3}
      />
      <circle
        cx={22}
        cy={22}
        r={16}
        stroke="var(--gold)"
        strokeWidth={0.7}
        opacity={0.55}
      />
      <text
        x={22}
        y={28.6}
        textAnchor="middle"
        fontFamily='Georgia, "Times New Roman", serif'
        fontSize={16}
        fontWeight={700}
        fill="var(--navy-deep)"
        letterSpacing="0.02em"
      >
        КС
      </text>
      <line
        x1={13.5}
        y1={32}
        x2={30.5}
        y2={32}
        stroke="var(--gold)"
        strokeWidth={0.9}
      />
      <circle cx={22} cy={5.5} r={0.9} fill="var(--gold)" />
      <circle cx={22} cy={38.5} r={0.9} fill="var(--gold)" />
      <circle cx={5.5} cy={22} r={0.9} fill="var(--gold)" />
      <circle cx={38.5} cy={22} r={0.9} fill="var(--gold)" />
    </svg>
  );
}

export function BrandLogo({
  linkToHome = true,
  className,
  tagline = "Согласования в строительстве, ЖКХ и инфраструктуре",
  markSize = 44
}: BrandLogoProps) {
  const inner = (
    <>
      <BrandMark size={markSize} className="ik-logo-mark" />
      <div className="ik-logo-copy">
        <strong className="ik-logo-title">
          <span className="ik-logo-title-main">Контур</span>
          <span className="ik-logo-title-accent">согласований</span>
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
