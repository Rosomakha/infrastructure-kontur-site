import Link from "next/link";
import { federalSupportCategories } from "@/lib/data/federal-support-programs";
import { getFederalProgramChecklist } from "@/lib/data/federal-program-checklists";
import { programConsultingBullets } from "@/lib/data/ogv-section";
import { OgvServiceNotice } from "@/components/ogv-service-notice";

type FederalSupportSectionProps = {
  showMissionNotice?: boolean;
  showSectionIntro?: boolean;
  showProgramsHeading?: boolean;
};

export function FederalSupportSection({
  showMissionNotice = true,
  showSectionIntro = true,
  showProgramsHeading = true
}: FederalSupportSectionProps = {}) {
  return (
    <div className="federal-support-catalog">
      {showMissionNotice && <OgvServiceNotice />}

      <div className="info-strip federal-support-disclaimer">
        <p>
          <strong>Справочный каталог.</strong> Перечень программ, операторов и
          НПА носит ориентировочный характер: состав федеральных проектов,
          приложения к ПП РФ № 1710 и бюджетные таблицы обновляются ежегодно.
          Перед подачей заявки проверяйте актуальные редакции на{" "}
          <a href="https://pravo.gov.ru" className="text-link" rel="noopener noreferrer">
            pravo.gov.ru
          </a>
          , на сайтах{" "}
          <a
            href="https://xn--p1aee.xn--p1ai"
            className="text-link"
            rel="noopener noreferrer"
          >
            ФРТ
          </a>
          ,{" "}
          <a
            href="https://minstroyrf.gov.ru"
            className="text-link"
            rel="noopener noreferrer"
          >
            Минстроя
          </a>{" "}
          и{" "}
          <a
            href="https://fondgkh.ru"
            className="text-link"
            rel="noopener noreferrer"
          >
            ФКР
          </a>
          . Полный перечень НПА — в{" "}
          <Link href="/normativnaya-baza#federalnaya-podderzhka">
            нормативно-правовой базе
          </Link>
          .
        </p>
      </div>

      {showProgramsHeading && (
        <>
          <h2>Программы по направлениям</h2>
          <p className="muted">
            У каждой программы — индивидуальный чек-лист документов для первичного
            брифа и подготовки заявки. С 2025 г. большинство мер реализуется в рамках
            нацпроекта «Инфраструктура для жизни»; отдельные механизмы (бюджетные
            кредиты ФРТ, субсидии по приложениям к ПП РФ № 1710, ФКГС, газификация)
            сохраняют собственные регламенты отбора.{" "}
            <Link href="/organy-vlasti">Полный раздел для органов власти</Link>.
          </p>
        </>
      )}

      {federalSupportCategories.map((cat) => (
        <section className="federal-category" id={cat.id} key={cat.id}>
          <h3>{cat.title}</h3>
          <p className="muted">{cat.intro}</p>
          <p className="ogv-category-consulting">
            <strong>Консалтинг:</strong> {cat.consultingIntro}
          </p>

          <div className="federal-program-list">
            {cat.programs.map((program) => (
              <details className="federal-program" key={program.id} id={program.id}>
                <summary>{program.name}</summary>
                <div className="federal-program-body">
                  {program.statusNote && (
                    <p className="federal-status-note">
                      <strong>Статус:</strong> {program.statusNote}
                    </p>
                  )}
                  <dl className="federal-program-meta">
                    <div>
                      <dt>Оператор</dt>
                      <dd>{program.operator}</dd>
                    </div>
                    <div>
                      <dt>Заявитель</dt>
                      <dd>{program.applicant}</dd>
                    </div>
                    <div>
                      <dt>Цель</dt>
                      <dd>{program.purpose}</dd>
                    </div>
                  </dl>

                  <h4>Консалтинговое сопровождение</h4>
                  <ul className="check-list">
                    {programConsultingBullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <h4>Меры поддержки</h4>
                  <ul className="check-list">
                    {program.measures.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>

                  <h4>Ключевые НПА</h4>
                  <ul className="federal-npa-list">
                    {program.npas.map((npa) => (
                      <li key={npa.title}>
                        {npa.href ? (
                          <a
                            href={npa.href}
                            className="text-link"
                            rel="noopener noreferrer"
                          >
                            {npa.title}
                          </a>
                        ) : (
                          npa.title
                        )}
                        {npa.note && (
                          <span className="muted federal-npa-note"> — {npa.note}</span>
                        )}
                      </li>
                    ))}
                  </ul>

                  <h4>Индивидуальный чек-лист документов</h4>
                  <p className="muted small-margin">
                    Пункты сформированы с учётом ключевых НПА программы (см. блок
                    «Ключевые НПА»); актуальные формы заявок и приложения —
                    на pravo.gov.ru и сайте оператора.
                  </p>
                  <ul className="check-list federal-program-checklist">
                    {getFederalProgramChecklist(program).map((item) => (
                      <li key={item.slice(0, 72)}>{item}</li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
