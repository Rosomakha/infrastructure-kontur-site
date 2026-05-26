import {
  legalDraftTracks,
  LEGAL_DRAFT_TOPICS_FILTER,
  type LegalDraftTrack
} from "@/lib/data/legal-drafts";

export type LegalSyncResult = {
  syncedAt: string;
  drafts: LegalDraftTrack[];
  regulationFetched: number;
  regulationMatched: number;
  note: string;
};

const REGULATION_STAGE_LABELS: Record<string, string> = {
  Undefined: "Статус уточняется",
  Notification: "Уведомление о разработке",
  Text: "Текст проекта",
  Discussion: "Публичное обсуждение",
  Complete: "Завершён",
  Rejected: "Отклонён"
};

function matchesZhkhTopic(text: string): boolean {
  const lower = text.toLowerCase();
  return LEGAL_DRAFT_TOPICS_FILTER.some((k) => lower.includes(k));
}

type RegulationApiProject = {
  id?: string;
  title?: string;
  stage?: string;
  status?: string;
  projectId?: string;
};

async function fetchRegulationProjects(): Promise<RegulationApiProject[]> {
  try {
    const res = await fetch(
      "https://regulation.gov.ru/api/public/projects?limit=150&sort=desc",
      {
        next: { revalidate: 43200, tags: ["legal-drafts"] },
        signal: AbortSignal.timeout(12_000)
      }
    );
    if (!res.ok) return [];
    const data = (await res.json()) as { result?: RegulationApiProject[] };
    return data.result ?? [];
  } catch {
    return [];
  }
}

function mapRegulationToDraft(p: RegulationApiProject): LegalDraftTrack | null {
  const title = (p.title ?? "").trim();
  if (!title || !matchesZhkhTopic(title)) return null;

  const stage = p.stage ?? "Undefined";
  const statusLabel =
    REGULATION_STAGE_LABELS[stage] ?? `Этап: ${stage}`;

  return {
    id: `reg-live-${p.id}`,
    title,
    type: "npa_project",
    statusLabel,
    statusCode:
      stage === "Discussion" ? "public_discussion" : "expertise",
    authority: "Портал regulation.gov.ru",
    href: `https://regulation.gov.ru/projects/${p.id}`,
    summary:
      "Проект нормативного правового акта с портала общественного обсуждения. Статус обновляется автоматически при синхронизации.",
    topics: ["ЖКХ", "НПА"],
    regulationProjectId: p.id
  };
}

/** Объединяет статический мониторинг с живыми проектами regulation.gov.ru */
export async function syncLegalDrafts(): Promise<LegalSyncResult> {
  const syncedAt = new Date().toISOString();
  const fromApi = await fetchRegulationProjects();
  const liveDrafts = fromApi
    .map(mapRegulationToDraft)
    .filter((d): d is LegalDraftTrack => d !== null)
    .slice(0, 12);

  const staticIds = new Set(legalDraftTracks.map((d) => d.id));
  const merged = [
    ...legalDraftTracks,
    ...liveDrafts.filter((d) => !staticIds.has(d.id))
  ];

  return {
    syncedAt,
    drafts: merged,
    regulationFetched: fromApi.length,
    regulationMatched: liveDrafts.length,
    note:
      liveDrafts.length > 0
        ? "Добавлены проекты с regulation.gov.ru по ключевым словам ЖКХ."
        : "Портал regulation.gov.ru не вернул названия проектов — показан актуальный статический мониторинг; синхронизация повторится по расписанию."
  };
}
