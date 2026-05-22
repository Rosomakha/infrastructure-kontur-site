type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className={className}
      role="img"
    >
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B3A6E" />
          <stop offset="100%" stopColor="#0E7C86" />
        </linearGradient>
      </defs>
      <path
        d="M60 6l42 14v31c0 30-17 50-42 63C35 101 18 81 18 51V20L60 6z"
        fill="url(#shieldGrad)"
      />
      <path
        d="M60 20c20 0 32 7 32 7v24c0 23-13 39-32 50-19-11-32-27-32-50V27s12-7 32-7z"
        fill="none"
        stroke="#D9961A"
        strokeWidth="2.5"
      />
      <path
        d="M40 43h40M40 55h40M40 67h40"
        stroke="#E5E7EB"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="40" cy="43" r="3.5" fill="#D9961A" />
      <circle cx="80" cy="43" r="3.5" fill="#D9961A" />
      <circle cx="40" cy="55" r="3.5" fill="#D9961A" />
      <circle cx="80" cy="55" r="3.5" fill="#D9961A" />
      <circle cx="40" cy="67" r="3.5" fill="#D9961A" />
      <circle cx="80" cy="67" r="3.5" fill="#D9961A" />
    </svg>
  );
}
