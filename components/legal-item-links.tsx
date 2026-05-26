import { ExternalLink } from "@/components/external-link";
import type { LegalItem } from "@/lib/data/legal-base";
import { getPrimaryLegalHref, resolveLegalLinks } from "@/lib/legal/link-resolver";

type Props = {
  item: LegalItem;
};

export function LegalItemLinks({ item }: Props) {
  const primaryHref = getPrimaryLegalHref(item);
  const links = resolveLegalLinks(item);

  return (
    <li className="legal-list-item">
      <a href={primaryHref} className="legal-list-title text-link" rel="noopener noreferrer">
        {item.title}
      </a>
      {item.note && <span className="muted legal-list-note"> — {item.note}</span>}
      <div className="legal-link-row">
        <span className="legal-link-label muted">Ссылки:</span>
        {links.map((link) => (
          <ExternalLink
            key={`${link.source}-${link.label}`}
            href={link.href}
            className="legal-chip text-link"
          >
            {link.label}
          </ExternalLink>
        ))}
      </div>
    </li>
  );
}
