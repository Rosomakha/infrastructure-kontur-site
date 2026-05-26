import { getFederalSupportCatalogSummary } from "@/lib/data/federal-support-programs";

export function OgvProgramsToc() {
  const { categories, programCount, categoryCount } =
    getFederalSupportCatalogSummary();

  return (
    <nav className="ogv-toc" aria-label="Оглавление каталога программ">
      <h2 className="ogv-toc-title">Каталог программ</h2>
      <p className="muted small-margin">
        {programCount} программ в {categoryCount} направлениях — консалтинговое
        сопровождение по каждой из перечисленных мер.
      </p>
      <ol className="ogv-toc-list">
        {categories.map((cat) => (
          <li key={cat.id}>
            <a href={`#${cat.id}`} className="ogv-toc-category">
              {cat.title}
            </a>
            <span className="ogv-toc-count muted">
              {cat.programCount}{" "}
              {cat.programCount === 1
                ? "программа"
                : cat.programCount < 5
                  ? "программы"
                  : "программ"}
            </span>
            <ul className="ogv-toc-programs">
              {cat.programs.map((p) => (
                <li key={p.id}>
                  <a href={`#${p.id}`}>{p.name}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </nav>
  );
}
