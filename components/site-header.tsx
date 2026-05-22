import Link from "next/link";
import { InfrastructureContourLogo } from "@/components/infrastructure-contour-logo";

const navItems = [
  { href: "/uslugi", label: "Услуги" },
  { href: "/kalkulyatory", label: "Калькуляторы" },
  { href: "/normativnaya-baza", label: "Нормативы" },
  { href: "/otrasli", label: "Отрасли" },
  { href: "/o-kompanii", label: "О\u00A0компании" },
  { href: "/kontakty", label: "Контакты" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <InfrastructureContourLogo tagline="" markSize={42} />
        <nav aria-label="Главное меню">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a className="header-phone" href="tel:+74950000000">
          +7 (495) 000-00-00
        </a>
      </div>
    </header>
  );
}
