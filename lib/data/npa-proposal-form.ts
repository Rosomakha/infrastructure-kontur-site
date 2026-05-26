import {
  npaProposalTopics,
  type NpaProposalTopicId
} from "@/lib/data/npa-proposal-section";

export type NpaProposalFormData = {
  name: string;
  organization: string;
  role: string;
  region: string;
  phone: string;
  email: string;
  topicId: NpaProposalTopicId | "";
  npaReference: string;
  currentWording: string;
  problem: string;
  proposedChange: string;
  rationale: string;
  attachmentsNote: string;
  consentPublish: boolean;
};

export function getTopicLabel(topicId: NpaProposalTopicId | ""): string {
  if (!topicId) return "—";
  return npaProposalTopics.find((t) => t.id === topicId)?.label ?? topicId;
}

export function isNpaProposalFormComplete(data: NpaProposalFormData): boolean {
  return (
    data.name.trim().length >= 2 &&
    data.role.trim().length > 0 &&
    data.topicId !== "" &&
    data.npaReference.trim().length >= 10 &&
    data.problem.trim().length >= 30 &&
    data.proposedChange.trim().length >= 30 &&
    data.rationale.trim().length >= 20 &&
    (data.phone.trim().length >= 10 || data.email.trim().includes("@"))
  );
}

export function buildNpaProposalEmailBody(data: NpaProposalFormData): string {
  const lines: string[] = [
    "Предложение по доработке НПА в сфере ЖКХ",
    "Сайт: Контур согласований",
    "",
    "——— Автор ———",
    `ФИО / контактное лицо: ${data.name.trim()}`,
    `Организация: ${data.organization.trim() || "—"}`,
    `Статус: ${data.role.trim()}`,
    `Регион: ${data.region.trim() || "—"}`,
    `Телефон: ${data.phone.trim() || "—"}`,
    `E-mail: ${data.email.trim() || "—"}`,
    "",
    "——— Предмет ———",
    `Тематика: ${getTopicLabel(data.topicId)}`,
    "",
    "Нормативный акт (ссылка / реквизиты):",
    data.npaReference.trim(),
    "",
    "Действующая редакция (цитата или суть):",
    data.currentWording.trim() || "—",
    "",
    "Описание проблемы:",
    data.problem.trim(),
    "",
    "Предлагаемая доработка:",
    data.proposedChange.trim(),
    "",
    "Обоснование и ожидаемый эффект:",
    data.rationale.trim(),
    "",
    "Приложения / материалы:",
    data.attachmentsNote.trim() || "—",
    "",
    `Согласие на обезличенное цитирование в аналитике: ${data.consentPublish ? "да" : "нет"}`
  ];

  return lines.join("\n");
}
