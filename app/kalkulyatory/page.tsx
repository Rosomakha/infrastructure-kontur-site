import { publicCalculators } from "@/lib/data/calculators";
import { ExternalLink } from "@/components/external-link";
import Link from "next/link";
import { KALKULATORY_PAGE_TITLE } from "@/lib/site";

export const metadata = {
  title: `${KALKULATORY_PAGE_TITLE} — Контур согласований`,
  description:
    "Каталог ссылок на официальные тарифные страницы и публичные калькуляторы РСО: МОЭСК, МОЭК, ОЭК, Мосводоканал и др. Справочно, без замены договора о технологическом присоединении."
};

export default function CalculatorsPage() {
  return (
    <section className="section">
      <div className="container prose-wide">
        <p className="eyebrow">Справочно</p>
        <h1>{KALKULATORY_PAGE_TITLE}</h1>
        <p className="lead">
          Это <strong>не собственные калькуляторы практики</strong>, а{" "}
          <strong>каталог ссылок</strong> на официальные порталы сетевых и
          ресурсоснабжающих организаций: разделы «Тарифы», «Подключение»,
          «Технологическое присоединение», личные кабинеты заявителей. Там
          публикуются публичные инструменты расчёта и порядок подачи заявок.
        </p>

        <p className="muted">
          Результат на сайте РСО носит ориентировочный характер: итоговая плата
          и сроки фиксируются{" "}
          <strong>договором о технологическом присоединении</strong> и сметой по
          согласованной проектной документации. Нужен расчёт «под ключ» и защита
          от переплаты —{" "}
          <Link href="/kontakty?usluga=tehprisoedinenie">обсудите объект</Link>{" "}
          с нами.
        </p>

        <p className="muted">
          Документы для расчёта — в разделе{" "}
          <Link href="/uslugi/tehprisoedinenie">Технологическое присоединение</Link>
          . Экономия на официальной плате —{" "}
          <Link href="/uslugi/tehprisoedinenie#tehpris-economy">
            как сэкономить на техприс
          </Link>
          . Нормы — в{" "}
          <Link href="/normativnaya-baza">нормативно-правовой базе</Link>.
        </p>

        <div className="cards-2 kalk-cards">
          {publicCalculators.map((c) => (
            <article className="card" key={c.href + c.name}>
              <p className="kalk-badge">{c.area}</p>
              <h2 className="h3 card-title-tight">{c.name}</h2>
              <p className="muted kalk-org">{c.organization}</p>
              <p>{c.description}</p>
              <p>
                <ExternalLink href={c.href} className="text-link kalk-link">
                  Тарифы и калькулятор на сайте РСО
                </ExternalLink>
              </p>
            </article>
          ))}
        </div>

        <div className="info-strip warning-strip">
          <p>
            <strong>Дисклеймер:</strong> ссылки ведут на внешние ресурсы. Мы не
            отвечаем за их актуальность, работу форм и отображение
            тарифообразования. Перед сделкой согласуйте условия с выбранной сетью
            и, при необходимости, привлекайте наших специалистов —{" "}
            <Link href="/kontakty">свяжитесь с нами</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
