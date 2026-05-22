import Link from "next/link";

type InfrastructureContourLogoProps = {
  /** Ссылка на главную */
  linkToHome?: boolean;
  className?: string;
  /** Подпись под названием */
  tagline?: string;
  /** Размер знака в px */
  markSize?: number;
};

/**
 * Знак и блок названия для бренда «Инфраструктурный контур».
 * Знак v8: щит + чертёжный циркуль (дуга, ножки, шарнир), золото и слоновая кость, кайма.
 */
export function IkContourMark({
  size = 44,
  className
}: {
  size?: number;
  className?: string;
}) {
  const clipId = "ik-react-shield-clip";
  const goldGradId = "ik-react-gold-rim";
  const shieldPath =
    "M24 5 C32 5 39 9 41 17 L41 29 C41 36 34 41 24 43 C14 41 7 36 7 29 L7 17 C9 9 16 5 24 5 Z";

  const arc = "M 11.5 30.5 Q 24 11 36.5 30.5";
  const legL = "M 24 18.2 L 10.2 37.2";
  const legR = "M 24 18.2 L 37.8 37.2";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden
      role="img"
    >
      <defs>
        <linearGradient id={goldGradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5ebd4" />
          <stop offset="40%" stopColor="#d1a84a" />
          <stop offset="100%" stopColor="#7a5a24" />
        </linearGradient>
        <clipPath id={clipId}>
          <path d={shieldPath} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <path fill="var(--primary)" d={shieldPath} />
        <path
          fill="none"
          stroke="#a67c32"
          strokeWidth={2.35}
          strokeLinecap="round"
          d={arc}
        />
        <path
          fill="none"
          stroke="#f7f3ea"
          strokeWidth={1.05}
          strokeLinecap="round"
          d={arc}
        />
        <path
          fill="none"
          stroke="#a67c32"
          strokeWidth={3.65}
          strokeLinecap="round"
          strokeLinejoin="round"
          d={legL}
        />
        <path
          fill="none"
          stroke="#f7f3ea"
          strokeWidth={1.7}
          strokeLinecap="round"
          d={legL}
        />
        <path
          fill="none"
          stroke="#a67c32"
          strokeWidth={3.65}
          strokeLinecap="round"
          d={legR}
        />
        <path
          fill="none"
          stroke="#f7f3ea"
          strokeWidth={1.7}
          strokeLinecap="round"
          d={legR}
        />
        <circle
          cx={24}
          cy={17.8}
          r={4.2}
          stroke="#a67c32"
          strokeWidth={1.35}
          fill="#f7f3ea"
        />
        <circle cx={24} cy={17.8} r={1.35} fill="#a67c32" />
      </g>
      <path
        fill="none"
        stroke={`url(#${goldGradId})`}
        strokeWidth={0.9}
        d={shieldPath}
      />
    </svg>
  );
}

export function InfrastructureContourLogo({
  linkToHome = true,
  className,
  tagline = "Инженерные сети и сопровождение",
  markSize = 44
}: InfrastructureContourLogoProps) {
  const inner = (
    <>
      <IkContourMark size={markSize} className="ik-logo-mark" />
      <div className="ik-logo-copy">
        <strong className="ik-logo-title">
          <span className="ik-logo-title-main">Инфраструктурный</span>{" "}
          <span className="ik-logo-title-accent">контур</span>
        </strong>
        {tagline ? (
          <span className="ik-logo-tagline">{tagline}</span>
        ) : null}
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
