export type PartnerCategory = "ogv" | "rso" | "corporate" | "operator";

export type ExperiencePartner = {
  id: string;
  /** Полное наименование */
  name: string;
  /** Краткая подпись в «знаке» (текстовый маркер, не официальный логотип) */
  mark: string;
  category: PartnerCategory;
  /** Цвет акцента маркера */
  accent?: string;
};

export const PARTNER_CATEGORY_LABELS: Record<PartnerCategory, string> = {
  ogv: "Органы власти",
  rso: "РСО и сетевые организации",
  corporate: "Корпоративный сектор",
  operator: "Операторы программ"
};

/**
 * Организации, с которыми у руководителя практики был служебный или проектный
 * опыт (по резюме и практике). Текстовые маркеры — не официальные логотипы.
 */
export const experiencePartners: ExperiencePartner[] = [
  {
    id: "minstroy",
    name: "Министерство строительства и ЖКХ Российской Федерации",
    mark: "Минстрой",
    category: "ogv",
    accent: "#0b3a6e"
  },
  {
    id: "minregion",
    name: "Министерство регионального развития Российской Федерации",
    mark: "Минрегион",
    category: "ogv",
    accent: "#0b3a6e"
  },
  {
    id: "gosstroy",
    name: "Федеральное агентство по строительству и ЖКХ (Госстрой)",
    mark: "Госстрой",
    category: "ogv",
    accent: "#0e7c86"
  },
  {
    id: "dagestan",
    name: "Минстрой, архитектуры и ЖКХ Республики Дагестан",
    mark: "Минстрой РД",
    category: "ogv",
    accent: "#0e7c86"
  },
  {
    id: "rosstroycontrol",
    name: "Росстройконтроль (ФБУ, взаимодействие с Минстроем и Минфином)",
    mark: "РСК",
    category: "ogv",
    accent: "#4b5563"
  },
  {
    id: "moesk",
    name: "ПАО «Московская объединённая электросетевая компания» (МОЭСК)",
    mark: "МОЭСК",
    category: "rso",
    accent: "#2563eb"
  },
  {
    id: "moek",
    name: "ПАО «Московская объединённая энергетическая компания» (МОЭК)",
    mark: "МОЭК",
    category: "rso",
    accent: "#dc2626"
  },
  {
    id: "oek",
    name: "АО «Объединённая энергетическая компания» (ОЭК)",
    mark: "ОЭК",
    category: "rso",
    accent: "#059669"
  },
  {
    id: "mosvodokanal",
    name: "ГУП «Мосводоканал»",
    mark: "МВК",
    category: "rso",
    accent: "#0284c7"
  },
  {
    id: "fsk",
    name: "ПАО «ФСК ЕЭС»",
    mark: "ФСК",
    category: "rso",
    accent: "#7c3aed"
  },
  {
    id: "gazprom-gd",
    name: "ПАО «Газпром газораспределение» (филиалы, в т.ч. МО)",
    mark: "ГГР",
    category: "rso",
    accent: "#0369a1"
  },
  {
    id: "frt",
    name: "Фонд развития территорий (сопровождение заявок регионов)",
    mark: "ФРТ",
    category: "operator",
    accent: "#0b3a6e"
  },
  {
    id: "pik",
    name: "ГК «ПИК-Комфорт»",
    mark: "ПИК",
    category: "corporate",
    accent: "#d9961a"
  },
  {
    id: "gazstroyprom",
    name: "«Газстройпром»",
    mark: "ГСП",
    category: "corporate",
    accent: "#64748b"
  }
];
