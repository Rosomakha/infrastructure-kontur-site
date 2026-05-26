export type LegalDraftStatusCode =
  | "adopted"
  | "in_force_pending"
  | "in_progress"
  | "public_discussion"
  | "expertise"
  | "minstroy"
  | "monitoring";

export type LegalDraftTrack = {
  id: string;
  title: string;
  type: "bill" | "npa_project" | "pp_draft" | "monitor";
  statusLabel: string;
  statusCode: LegalDraftStatusCode;
  authority: string;
  href: string;
  secondaryHref?: string;
  summary: string;
  /** Для автоматического обновления статуса (SOZD, regulation.gov.ru) */
  sozdBillNumber?: string;
  regulationProjectId?: string;
  topics: string[];
};

/** Важные инициативы — вручную актуализируемые; ISR обновляет дату синхронизации */
export const legalDraftTracks: LegalDraftTrack[] = [
  {
    id: "fz-177-2025",
    title:
      "Федеральный закон от 24.06.2025 № 177-ФЗ (сроки оплаты ЖКУ, квитанций, ГИС ЖКХ)",
    type: "bill",
    statusLabel: "Принят, вступает в силу с 01.03.2026",
    statusCode: "in_force_pending",
    authority: "Федеральное собрание РФ",
    href: "https://www.consultant.ru/document/cons_doc_LAW_518201/",
    secondaryHref: "http://publication.pravo.gov.ru/search?text=177-ФЗ",
    summary:
      "Перенос срока внесения платы на 15-е число, выставление платёжных документов — до 5-го; размещение сведений об исполнительных производствах в ГИС ЖКХ.",
    topics: ["ЖКХ", "ГИС ЖКХ", "оплата"],
    sozdBillNumber: undefined
  },
  {
    id: "gd-956556-8",
    title:
      "Законопроект № 956556-8 — оплата коммунальных ресурсов на ОДН по показаниям ОДПУ",
    type: "bill",
    statusLabel: "Рассмотрение в Государственной Думе (поддержан Советом по кодификации)",
    statusCode: "in_progress",
    authority: "Госдума РФ, комитет по строительству и ЖКХ",
    href: "https://sozd.duma.gov.ru/bill/956556-8",
    secondaryHref: "https://www.pnp.ru/social/sovet-po-kodifikacii-podderzhal-oplatu-zhku-za-obshhedomovye-nuzhdy-po-schetchikam.html",
    summary:
      "Переход от оплаты ОДН по нормативам к расчёту по показаниям общедомовых приборов учёта; поправки в ст. 156 ЖК РФ.",
    topics: ["ЖКХ", "ОДН", "ОДПУ"],
    sozdBillNumber: "956556-8"
  },
  {
    id: "reg-zhkh-search",
    title: "Проекты нормативных актов на regulation.gov.ru (ЖКХ, коммуналка)",
    type: "monitor",
    statusLabel: "Мониторинг портала НПА",
    statusCode: "monitoring",
    authority: "Минэкономразвития России (портал regulation.gov.ru)",
    href: "https://regulation.gov.ru/projects?type=Grid",
    summary:
      "Публичное обсуждение проектов подзаконных актов. Отбираем инициативы по жилищно-коммунальной тематике для экспертизы и возможного продвижения.",
    topics: ["НПА", "ЖКХ"],
    regulationProjectId: undefined
  },
  {
    id: "sozd-zhkh-committee",
    title: "Законопроекты комитета Госдумы по строительству и ЖКХ",
    type: "monitor",
    statusLabel: "Мониторинг законопроектной повестки",
    statusCode: "monitoring",
    authority: "Государственная Дума РФ",
    href: "https://sozd.duma.gov.ru/oz/#data_source_tab_b=b&bill_search=жилищно-коммунальн",
    summary:
      "Отслеживание внесённых инициатив по ЖКХ, управлению МКД, лицензированию УО, капремонту.",
    topics: ["ЖКХ", "законопроекты"]
  },
  {
    id: "pp-tp-draft",
    title: "Проекты изменений в Правила технологического присоединения (ПП РФ № 2496)",
    type: "npa_project",
    statusLabel: "Мониторинг изменений (по публикациям Минэнерго / Минстроя)",
    statusCode: "expertise",
    authority: "Правительство РФ, профильные министерства",
    href: "http://publication.pravo.gov.ru/search?text=2496+технологическое+присоединение",
    secondaryHref: "https://regulation.gov.ru/projects?type=Grid",
    summary:
      "Изменения в порядке и сроках техприс, плате за подключение — критичны для девелопмента и собственников.",
    topics: ["техприс", "электроэнергетика"]
  },
  {
    id: "gis-zhkh-npa",
    title: "Нормативные акты по ГИС ЖКХ и раскрытию информации УО",
    type: "npa_project",
    statusLabel: "Действующие и проекты изменений",
    statusCode: "in_progress",
    authority: "Минстрой России",
    href: "https://www.consultant.ru/search/?q=ГИС+ЖКХ+размещение+информации",
    secondaryHref: "http://publication.pravo.gov.ru/search?text=ГИС+жилищно-коммунальное",
    summary:
      "Требования к составу и срокам размещения данных в ГИС ЖКХ; связаны с 177-ФЗ и исполнительным производством.",
    topics: ["ЖКХ", "ГИС ЖКХ"]
  },
  {
    id: "license-uo",
    title: "Лицензирование управления МКД — проекты изменений Положения о лицензировании",
    type: "npa_project",
    statusLabel: "Мониторинг (региональный и федеральный контроль)",
    statusCode: "monitoring",
    authority: "Минстрой России",
    href: "https://www.consultant.ru/document/cons_doc_LAW_717020/",
    summary:
      "Изменения в требованиях к лицензиям УО и региональному лицензионному контролю с 01.03.2026 — по блоку кодификации ЖКХ.",
    topics: ["ЖКХ", "лицензирование", "УО"]
  }
];

export const LEGAL_DRAFT_TOPICS_FILTER = [
  "жилищ",
  "жкх",
  "коммунал",
  "капремонт",
  "управляющ",
  "мкд",
  "теплоснабжен",
  "водоснабжен",
  "гис жкх",
  "фонд содействия",
  "фрт",
  "лицензирован"
];
