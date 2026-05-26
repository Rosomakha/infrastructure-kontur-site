import { ExternalLink } from "@/components/external-link";
import type { LegalSyncResult } from "@/lib/legal/sync-legal";

const STATUS_CLASS: Record<string, string> = {
  adopted: "legal-status--adopted",
  in_force_pending: "legal-status--pending",
  in_progress: "legal-status--progress",
  public_discussion: "legal-status--discussion",
  expertise: "legal-status--expertise",
  minstroy: "legal-status--progress",
  monitoring: "legal-status--monitor"
};

const TYPE_LABEL: Record<string, string> = {
  bill: "Законопроект / закон",
  npa_project: "Проект НПА",
  pp_draft: "Проект постановления",
  monitor: "Мониторинг"
};

type Props = {
  sync: LegalSyncResult;
};

export function LegalDraftsSection({ sync }: Props) {
  return (
    <section className="legal-drafts-block" id="proekty-npa">
      <h2>Проекты НПА и законопроекты (ЖКХ)</h2>
      <p className="muted">
        Отслеживаем важные инициативы по жилищно-коммунальной тематике. Статусы
        обновляются автоматически не реже одного раза в 12 часов (синхронизация
        с порталом{" "}
        <ExternalLink href="https://regulation.gov.ru" className="text-link">
          regulation.gov.ru
        </ExternalLink>{" "}
        и карточками{" "}
        <ExternalLink href="https://sozd.duma.gov.ru" className="text-link">
          СОЗД
        </ExternalLink>
        ). Достойные предложения готовы продвигать на федеральном уровне — см.{" "}
        <a href="/predlozheniya-npa-zhkh" className="text-link">
          раздел предложений
        </a>
        .
      </p>
      <p className="legal-sync-meta muted small-margin">
        Обновлено:{" "}
        {new Date(sync.syncedAt).toLocaleString("ru-RU", {
          dateStyle: "medium",
          timeStyle: "short"
        })}
        {sync.regulationFetched > 0 &&
          ` · с портала НПА: ${sync.regulationMatched} из ${sync.regulationFetched} проверенных записей`}
        {sync.regulationMatched === 0 && sync.note ? ` · ${sync.note}` : null}
      </p>

      <div className="legal-drafts-table-wrap">
        <table className="legal-drafts-table">
          <thead>
            <tr>
              <th>Инициатива</th>
              <th>Тип</th>
              <th>Статус</th>
              <th>Источник</th>
            </tr>
          </thead>
          <tbody>
            {sync.drafts.map((draft) => (
              <tr key={draft.id}>
                <td>
                  <p className="legal-draft-title">{draft.title}</p>
                  <p className="muted small-margin legal-draft-summary">
                    {draft.summary}
                  </p>
                  <p className="muted small-margin">{draft.authority}</p>
                </td>
                <td>{TYPE_LABEL[draft.type] ?? draft.type}</td>
                <td>
                  <span
                    className={`legal-status ${STATUS_CLASS[draft.statusCode] ?? ""}`}
                  >
                    {draft.statusLabel}
                  </span>
                </td>
                <td className="legal-draft-links">
                  <ExternalLink href={draft.href} className="text-link">
                    Открыть
                  </ExternalLink>
                  {draft.secondaryHref && (
                    <>
                      {" · "}
                      <ExternalLink
                        href={draft.secondaryHref}
                        className="text-link"
                      >
                        Доп.
                      </ExternalLink>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
