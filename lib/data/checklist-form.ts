import { getFederalProgramChecklist } from "@/lib/data/federal-program-checklists";
import {
  federalSupportCategories,
  type FederalSupportProgram
} from "@/lib/data/federal-support-programs";
import type { ServiceDetail } from "@/lib/data/services";
import { services } from "@/lib/data/services";

export type ChecklistItemStatus = "ready" | "need" | "na" | "unknown";

export type ChecklistFormItem = {
  id: string;
  groupTitle: string;
  label: string;
};

export const checklistStatusLabels: Record<ChecklistItemStatus, string> = {
  ready: "Есть / готово",
  need: "Нужно подготовить",
  na: "Не применимо",
  unknown: "Пока нет данных"
};

export function getAllFederalPrograms(): FederalSupportProgram[] {
  return federalSupportCategories.flatMap((cat) => cat.programs);
}

export function getFederalProgramById(id: string): FederalSupportProgram | undefined {
  return getAllFederalPrograms().find((p) => p.id === id);
}

/** Плоский чек-лист для формы заявки по услуге */
export function getChecklistFormItems(
  service: ServiceDetail,
  federalProgramId?: string
): ChecklistFormItem[] {
  const items: ChecklistFormItem[] = [];

  service.docGroups.forEach((group, groupIndex) => {
    group.items.forEach((label, itemIndex) => {
      items.push({
        id: `${service.slug}-g${groupIndex}-i${itemIndex}`,
        groupTitle: group.title,
        label
      });
    });
  });

  if (service.slug === "podderzhka-federalnogo-byudzheta" && federalProgramId) {
    const program = getFederalProgramById(federalProgramId);
    if (program) {
      getFederalProgramChecklist(program).forEach((label, itemIndex) => {
        items.push({
          id: `${service.slug}-fp-${federalProgramId}-i${itemIndex}`,
          groupTitle: `Программа: ${program.name}`,
          label
        });
      });
    }
  }

  return items;
}

export function getServiceOptionsForForm(): { slug: string; title: string }[] {
  return services.map((s) => ({ slug: s.slug, title: s.title }));
}

export type ChecklistAnswers = Record<string, ChecklistItemStatus>;

export function isChecklistComplete(
  items: ChecklistFormItem[],
  answers: ChecklistAnswers
): boolean {
  if (items.length === 0) return false;
  return items.every((item) => {
    const status = answers[item.id];
    return status === "ready" || status === "need" || status === "na" || status === "unknown";
  });
}

export function buildRequestEmailBody(params: {
  serviceTitle: string;
  federalProgramName?: string;
  name: string;
  phone: string;
  email?: string;
  objectType: string;
  message?: string;
  items: ChecklistFormItem[];
  answers: ChecklistAnswers;
}): string {
  const lines: string[] = [
    "Заявка с сайта «Контур согласований»",
    "",
    `Услуга: ${params.serviceTitle}`,
  ];

  if (params.federalProgramName) {
    lines.push(`Федеральная программа: ${params.federalProgramName}`);
  }

  lines.push(
    "",
    "Контакты:",
    `Имя: ${params.name}`,
    `Телефон: ${params.phone}`,
  );

  if (params.email?.trim()) {
    lines.push(`E-mail: ${params.email.trim()}`);
  }

  lines.push(`Тип объекта: ${params.objectType}`);

  if (params.message?.trim()) {
    lines.push("", "Комментарий:", params.message.trim());
  }

  lines.push("", "——— Чек-лист ———", "");

  let currentGroup = "";
  for (const item of params.items) {
    if (item.groupTitle !== currentGroup) {
      currentGroup = item.groupTitle;
      lines.push("", `[${currentGroup}]`);
    }
    const status = params.answers[item.id];
    const statusLabel = status ? checklistStatusLabels[status] : "—";
    lines.push(`• ${item.label}`);
    lines.push(`  Статус: ${statusLabel}`);
  }

  return lines.join("\n");
}
