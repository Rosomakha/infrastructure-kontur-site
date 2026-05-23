"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";

const navItems = [
  { href: "/uslugi", label: "Услуги" },
  { href: "/kalkulyatory", label: "Калькуляторы" },
  { href: "/normativnaya-baza", label: "Нормативы" },
  { href: "/otrasli", label: "Отрасли" },
  { href: "/o-kompanii", label: "О\u00A0компании" },
  { href: "/kontakty", label: "Контакты" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandLogo tagline="" markSize={40} />

        <nav className="nav-desktop" aria-label="Главное меню">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? "is-active" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a className="header-phone" href="tel:+79997474747">
          +7 (999) 747-47-47
        </a>

        <button
          type="button"
          className={`burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? "is-active" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a className="mobile-phone" href="tel:+79997474747">
              +7 (999) 747-47-47
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
