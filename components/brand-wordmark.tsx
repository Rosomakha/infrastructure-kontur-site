import Link from "next/link";

type BrandWordmarkProps = {
  /** Ссылка на главную (по умолчанию да) */
  linkToHome?: boolean;
  className?: string;
};

/**
 * Временный фирменный блок без отдельного знака: акцентная плашка + типографика.
 * Когда появится финальный логотип (SVG/PNG) — заменить на <img /> или BrandMark.
 */
export function BrandWordmark({ linkToHome = true, className }: BrandWordmarkProps) {
  const inner = (
    <>
      <span className="brand-accent-bar" aria-hidden="true" />
      <div className="brand-copy">
        <strong className="brand-name">
          <span className="brand-name-trust">Инфраструктурный</span>
          <span className="brand-name-energy">контур</span>
        </strong>
        <span className="brand-tagline">Инженерная инфраструктура под ключ</span>
      </div>
    </>
  );

  if (linkToHome) {
    return (
      <Link href="/" className={`brand brand-wordmark ${className ?? ""}`}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={`brand brand-wordmark ${className ?? ""}`}>{inner}</div>
  );
}
