/**
 * Декоративные чертёжные инструменты (циркуль, линейки, угольник) — в стиле знака.
 */
export function DraftingHeroWatermark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g opacity={0.92} strokeLinecap="round" strokeLinejoin="round">
        {/* Циркуль */}
        <g stroke="var(--gold, #a67c32)" strokeWidth={1.35}>
          <circle cx={118} cy={88} r={38} />
          <path d="M 118 126 L 98 198 M 118 126 L 138 198" />
          <path d="M 98 198 L 104 212 M 132 212 L 138 198" />
          <circle cx={118} cy={88} r={3.2} fill="var(--gold, #a67c32)" stroke="none" />
        </g>
        {/* Транспортир / дуга разметки */}
        <path
          d="M 210 155 A 52 52 0 0 1 258 118"
          stroke="var(--primary, #0b3a6e)"
          strokeWidth={1.2}
          opacity={0.85}
        />
        <path
          d="M 210 155 L 258 155"
          stroke="var(--primary, #0b3a6e)"
          strokeWidth={1}
          opacity={0.6}
        />
        {/* Линейка с делениями */}
        <g stroke="var(--primary, #0b3a6e)" strokeWidth={1.15} fill="none">
          <rect x={175} y={42} width={130} height={14} rx={2} opacity={0.9} />
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <line
              key={i}
              x1={178 + i * 12}
              y1={42}
              x2={178 + i * 12}
              y2={i % 5 === 0 ? 56 : 50}
              opacity={0.85}
            />
          ))}
        </g>
        {/* Угольник 30–60 */}
        <path
          d="M 42 175 L 42 235 L 118 235 Z"
          stroke="var(--gold, #a67c32)"
          strokeWidth={1.35}
          fill="rgba(166, 124, 50, 0.06)"
        />
        <path
          d="M 52 225 L 108 225"
          stroke="var(--gold, #a67c32)"
          strokeWidth={0.9}
          strokeDasharray="4 3"
          opacity={0.7}
        />
        {/* Второй циркуль — мини */}
        <g stroke="var(--primary, #0b3a6e)" strokeWidth={1}>
          <circle cx={248} cy={198} r={22} opacity={0.85} />
          <path d="M 248 220 L 238 248 M 248 220 L 258 248" opacity={0.85} />
        </g>
        {/* Карандаш */}
        <g stroke="var(--gold, #a67c32)" strokeWidth={1.1}>
          <path d="M 145 200 L 195 145" />
          <path d="M 192 148 L 198 142 L 195 139 L 189 145 Z" fill="var(--gold, #a67c32)" />
        </g>
      </g>
    </svg>
  );
}

/** Узкая полоса с повтором силуэтов — под героем или между секциями */
export function DraftingToolsStrip() {
  return (
    <div className="drafting-strip" aria-hidden>
      <svg viewBox="0 0 1200 48" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="drafting-pattern" width={200} height={48} patternUnits="userSpaceOnUse">
            <g fill="none" stroke="currentColor" strokeWidth={1} opacity={0.35}>
              <circle cx={30} cy={24} r={14} />
              <path d="M 30 38 L 22 44 M 30 38 L 38 44" strokeLinecap="round" />
              <rect x={58} y={14} width={56} height={8} rx={1} />
              <path d="M 130 34 L 130 14 L 154 34 Z" />
              <line x1={170} y1={12} x2={188} y2={36} strokeLinecap="round" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height={48} fill="url(#drafting-pattern)" className="drafting-strip-fill" />
      </svg>
    </div>
  );
}
