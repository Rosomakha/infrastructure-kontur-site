import { publicCalculators } from "@/lib/data/calculators";
import { ExternalLink } from "@/components/external-link";
import Link from "next/link";

export const metadata = {
  title: "Калькуляторы и публичные инструменты — Инфраструктурный контур",
  description:
    "Ссылки на официальные сайты сетевых и ресурсоснабжающих организаций: расчёты, подключение, кабинеты. Справочно, без замены соглашения с РСО."
};

export default function CalculatorsPage() {
  return (
    <section className="section">
      <div className="container prose-wide">
        <p className="eyebrow">Справочно</p>
        <h1>Калькуляторы и публичные инструменты (техприс и тарифы)</h1>
        <p className="lead">
          Здесь собраны ссылки на <strong>официальные</strong> порталы сетей и
          надзорных ведомств, где публикуются{" "}
          <strong>калькуляторы стоимости</strong>, формы заявок и порядок
          подключения. Результат публичного калькулятора носит ориентировочный
          характер: итоговая плата и сроки фиксируются{" "}
          <strong>договором о технологическом присоединении</strong> с вашей
          сетевой организацией и сметой по согласованной проектной документации.
        </p>

        <p className="muted">
          Документы, которые сеть запросит для расчёта, смотрите в разделе{" "}
          <Link href="/uslugi/tehprisoedinenie">Технологическое присоединение</Link>
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
                  Перейти на сайт
                </ExternalLink>
              </p>
            </article>
          ))}
        </div>

        <div className="info-strip warning-strip">
          <p>
            <strong>Дисклеймер:</strong> ссылки ведут на внешние ресурсы. Мы не
            отвечаем за их актуальность, работу кнопок и отображение
            тарифообразования. Перед сделкой согласуйте условия с выбранной сетью
            и, при необходимости, привлекайте наших инженеров —{" "}
            <Link href="/kontakty">свяжитесь с нами</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
