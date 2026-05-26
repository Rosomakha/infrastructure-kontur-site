import type { LegalItem } from "@/lib/data/legal-base";

export type LegalLink = {
  label: string;
  href: string;
  source: "consultant" | "pravo" | "pravo_publication" | "mos" | "mosreg" | "custom";
};

/** Consultant Plus: cons_doc_LAW_* — редакция поддерживается правовой системой */
const CONSULTANT_LAW_IDS: Record<string, string> = {
  "fz:35": "116242",
  "fz:190": "102754",
  "fz:261": "115110",
  "fz:185": "78136",
  "fz:304": "90114",
  "fz:488": "363409",
  "fz:478": "323541",
  "fz:494": "362073",
  "fz:7": "34825",
  "fz:174": "4660",
  "fz:96": "4327",
  "fz:89": "4550",
  "fz:177": "518201",
  "zk": "350299",
  "gk": "5142",
  "grk": "340886",
  "bk": "39331",
  "pp:861": "9009574",
  "pp:2496": "406384",
  "pp:442": "714986",
  "pp:1710": "366685",
  "pp:2253": "402015",
  "pp:1189": "402857",
  "pp:18": "71755",
  "pp:567": "450017",
  "pp:644": "777228",
  "pp:1180": "7035348",
  "pp:1596": "368307",
  "pp:316": "70103036",
  "pp:1050": "652880",
  "pp:169": "717020",
  "pp:891": "717020",
  "mos:48": "58615"
};

function encodeQuery(q: string): string {
  return encodeURIComponent(q.trim());
}

/** Ключ для поиска в реестре consultantLawId */
export function parseLegalDocKey(title: string): string | null {
  const fz = title.match(/№\s*(\d+)-ФЗ/i);
  if (fz) return `fz:${fz[1]}`;

  if (/жилищн\w+\s+кодекс/i.test(title) && !/гражданск/i.test(title)) {
    return "zk";
  }
  if (/градостроительн\w+\s+кодекс/i.test(title)) return "grk";
  if (/бюджетн\w+\s+кодекс/i.test(title)) return "bk";

  const pp = title.match(
    /(\d{2})\.(\d{2})\.(\d{4})\s+№\s*(\d+)|№\s*(\d+).*?(\d{4})\s+г\./i
  );
  if (pp) {
    const num = pp[4] || pp[5];
    if (num) return `pp:${num}`;
  }

  if (/закон\s+города\s+москвы.*?№\s*48/i.test(title)) return "mos:48";

  return null;
}

export function buildPravoSearchQuery(title: string, item?: LegalItem): string {
  if (item?.pravoSearch) return item.pravoSearch;
  const fz = title.match(/№\s*(\d+-ФЗ)/i);
  if (fz) return fz[1];
  const pp = title.match(/№\s*(\d+)/);
  if (pp && /постановлен/i.test(title)) {
    const date = title.match(/(\d{2}\.\d{2}\.\d{4})/);
    return date ? `ПП РФ ${date[1]} № ${pp[1]}` : `ПП РФ № ${pp[1]}`;
  }
  return title.slice(0, 120);
}

export function resolveLegalLinks(item: LegalItem): LegalLink[] {
  const links: LegalLink[] = [];
  const docKey =
    item.actKey ?? parseLegalDocKey(item.title) ?? undefined;
  const consultantId =
    item.consultantLawId ??
    (docKey ? CONSULTANT_LAW_IDS[docKey] : undefined);
  const searchQuery = buildPravoSearchQuery(item.title, item);
  const enc = encodeQuery(searchQuery);

  if (item.href) {
    links.push({ label: "Источник", href: item.href, source: "custom" });
  }

  if (consultantId) {
    links.push({
      label: "Актуальная редакция",
      href: `https://www.consultant.ru/document/cons_doc_LAW_${consultantId}/`,
      source: "consultant"
    });
  } else {
    links.push({
      label: "Актуальная редакция",
      href: `https://www.consultant.ru/search/?q=${enc}`,
      source: "consultant"
    });
  }

  links.push({
    label: "Официальное опубликование",
    href: `http://publication.pravo.gov.ru/search?text=${enc}`,
    source: "pravo_publication"
  });

  links.push({
    label: "pravo.gov.ru",
    href: `https://www.pravo.gov.ru/search/?query=${enc}`,
    source: "pravo"
  });

  if (/закон\s+города\s+москвы|правительства\s+москвы|москвы/i.test(item.title)) {
    links.push({
      label: "mos.ru",
      href: `https://www.mos.ru/search/?q=${enc}`,
      source: "mos"
    });
  }

  if (/московск\w+\s+област/i.test(item.title)) {
    links.push({
      label: "mosreg.ru",
      href: `https://mosreg.ru/search?query=${enc}`,
      source: "mosreg"
    });
  }

  return links;
}

export function getPrimaryLegalHref(item: LegalItem): string {
  const links = resolveLegalLinks(item);
  const consultant = links.find((l) => l.source === "consultant");
  return consultant?.href ?? links[0]?.href ?? "#";
}
