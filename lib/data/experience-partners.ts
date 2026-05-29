export type PartnerCategory = "ogv" | "rso" | "corporate" | "operator";

export type ExperiencePartner = {
  id: string;
  /** Полное наименование */
  name: string;
  /** Краткая подпись (fallback, если нет logoSrc) */
  mark: string;
  category: PartnerCategory;
  /** Цвет акцента маркера (fallback) */
  accent?: string;
  /** Локальный путь к логотипу с официального сайта (public/partners) */
  logoSrc?: string;
  /** Краткое описание для alt */
  logoAlt?: string;
};

export const PARTNER_CATEGORY_LABELS: Record<PartnerCategory, string> = {
  ogv: "Органы власти",
  rso: "РСО и сетевые организации",
  corporate: "Корпоративный сектор",
  operator: "Операторы программ"
};

/**
 * Организации, с которыми у руководителя практики был служебный или проектный
 * опыт. Логотипы загружены с официальных сайтов организаций (см. public/partners).
 */
export const experiencePartners: ExperiencePartner[] = [
  {
    id: "minstroy",
    name: "Министерство строительства и ЖКХ Российской Федерации",
    mark: "Минстрой",
    category: "ogv",
    accent: "#0b3a6e",
    logoSrc: "/partners/minstroy.svg",
    logoAlt: "Логотип Минстроя России"
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
    accent: "#0e7c86",
    logoSrc: "/partners/gosstroy.svg",
    logoAlt: "Логотип Госстроя"
  },
  {
    id: "dagestan",
    name: "Минстрой, архитектуры и ЖКХ Республики Дагестан",
    mark: "Минстрой РД",
    category: "ogv",
    accent: "#0e7c86",
    logoSrc: "/partners/dagestan.png",
    logoAlt: "Логотип официального портала Республики Дагестан"
  },
  {
    id: "rosstroycontrol",
    name: "Росстройконтроль (ФБУ, взаимодействие с Минстроем и Минфином)",
    mark: "РСК",
    category: "ogv",
    accent: "#4b5563",
    logoSrc: "/partners/rosstroycontrol.png",
    logoAlt: "Логотип Росстройконтроля"
  },
  {
    id: "moesk",
    name: "ПАО «Московская объединённая электросетевая компания» (МОЭСК)",
    mark: "МОЭСК",
    category: "rso",
    accent: "#2563eb",
    logoSrc: "/partners/moesk.png",
    logoAlt: "Логотип МОЭСК"
  },
  {
    id: "moek",
    name: "ПАО «Московская объединённая энергетическая компания» (МОЭК)",
    mark: "МОЭК",
    category: "rso",
    accent: "#dc2626",
    logoSrc: "/partners/moek.png",
    logoAlt: "Логотип МОЭК"
  },
  {
    id: "oek",
    name: "АО «Объединённая энергетическая компания» (ОЭК)",
    mark: "ОЭК",
    category: "rso",
    accent: "#059669",
    logoSrc: "/partners/oek.jpg",
    logoAlt: "Логотип ОЭК"
  },
  {
    id: "mosvodokanal",
    name: "ГУП «Мосводоканал»",
    mark: "МВК",
    category: "rso",
    accent: "#0284c7",
    logoSrc: "/partners/mosvodokanal.png",
    logoAlt: "Логотип Мосводоканала"
  },
  {
    id: "fsk",
    name: "ПАО «ФСК ЕЭС»",
    mark: "ФСК",
    category: "rso",
    accent: "#7c3aed",
    logoSrc: "/partners/fsk.png",
    logoAlt: "Логотип ФСК ЕЭС"
  },
  {
    id: "gazprom-gd",
    name: "ПАО «Газпром газораспределение» (филиалы, в т.ч. МО)",
    mark: "ГГР",
    category: "rso",
    accent: "#0369a1",
    logoSrc: "/partners/gazprom-gd.svg",
    logoAlt: "Логотип Газпром газораспределение"
  },
  {
    id: "frt",
    name: "Фонд развития территорий (сопровождение заявок регионов)",
    mark: "ФРТ",
    category: "operator",
    accent: "#0b3a6e",
    logoSrc: "/partners/frt.svg",
    logoAlt: "Логотип Фонда развития территорий"
  },
  {
    id: "pik",
    name: "ГК «ПИК-Комфорт»",
    mark: "ПИК",
    category: "corporate",
    accent: "#d9961a",
    logoSrc: "/partners/pik.png",
    logoAlt: "Логотип ПИК-Комфорт"
  },
  {
    id: "gazstroyprom",
    name: "«Газстройпром»",
    mark: "ГСП",
    category: "corporate",
    accent: "#64748b",
    logoSrc: "/partners/gazstroyprom.svg",
    logoAlt: "Логотип Газстройпром"
  }
];
