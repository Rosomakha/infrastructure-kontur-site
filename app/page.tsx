import Link from "next/link";
import { HomeSegments } from "@/components/home-segments";
import { HomeCases } from "@/components/home-cases";

const heroBadges = [
  { label: "Под ключ", note: "проект, согласование, СМР, ввод" },
  { label: "Москва и МО", note: "знаем регламенты РСО" },
  { label: "Ответ за 1 день", note: "по любой заявке" }
];

const stats = [
  { value: "5+", label: "лет в инженерной отрасли" },
  { value: "60+", label: "согласованных подключений" },
  { value: "5", label: "направлений сетей и услуг" },
  { value: "24 ч", label: "первая обратная связь" }
];

const advantages = [
  {
    title: "Единое окно",
    text: "Один подрядчик на весь цикл: от предпроектного аудита до ввода объекта."
  },
  {
    title: "Экспертная команда",
    text: "Практический опыт сложных согласований и инфраструктурных проектов в Москве и МО."
  },
  {
    title: "Прозрачные сроки",
    text: "Работаем по дорожной карте этапов и еженедельной отчётности для заказчика."
  }
];

const homeFaq = [
  {
    q: "С чего начать, если нужно технологическое присоединение?",
    a: "Опишите объект и желаемые мощности через страницу контактов или сверьтесь с чек-листами на страницах услуг — так мы быстрее сориентируемся по этапам и перечню документов для РСО."
  },
  {
    q: "Можно ли получить только проект или только сопровождение согласований?",
    a: "Да: возможны отдельные этапы по согласованию — состав работ подбирается под задачу и ограничения объекта."
  },
  {
    q: "Нужны ли объекту материалы ОВОС или экологическая экспертиза?",
    a: "Зависит от вида объекта, вида воздействия на среду и действующего законодательства. После брифа уточняем применимость ОВОС, государственной экологической экспертизы и смежных процедур — см. страницу услуги «Экология, ОВОС и государственная экологическая экспертиза»."
  },
  {
    q: "Как связаться напрямую?",
    a: "Раздел «Контакты» содержит телефон и e-mail; можно запросить звонок или направить описание объекта для предварительной оценки."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero hero-v2">
        <div className="container hero-v2-inner">
          <div className="hero-v2-copy">
            <p className="eyebrow">Инфраструктурный контур</p>
            <h1>
              Инженерная инфраструктура{" "}
              <span className="hero-accent">под ключ</span>
            </h1>
            <p className="lead">
              Проектируем, согласовываем, строим и подключаем сети: электричество,
              вода, водоотведение, газ и тепло. Москва и Московская область — от
              бумажной работы до запуска объекта.
            </p>
            <div className="hero-actions">
              <Link href="/kontakty" className="btn btn-primary">
                Запросить расчёт
              </Link>
              <Link href="/uslugi" className="btn btn-ghost">
                Услуги и чек-листы
              </Link>
            </div>
            <ul className="hero-badges" aria-label="Ключевые преимущества">
              {heroBadges.map((b) => (
                <li key={b.label}>
                  <strong>{b.label}</strong>
                  <span>{b.note}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="hero-v2-stats" aria-label="Цифры компании">
            <div className="hero-stats-card">
              <h2>В цифрах</h2>
              <ul className="hero-stats-list">
                {stats.map((s) => (
                  <li key={s.label}>
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                  </li>
                ))}
              </ul>
              <p className="hero-stats-note">
                Расчёт и КП по объекту — в течение одного рабочего дня после
                получения исходных данных.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <HomeSegments />

      <section className="section section-alt">
        <div className="container">
          <h2>Почему выбирают нас</h2>
          <div className="cards-3">
            {advantages.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HomeCases />

      <section className="section">
        <div className="container">
          <h2>Как мы работаем</h2>
          <ol className="steps">
            <li>Бриф и предпроектный аудит объекта</li>
            <li>Дорожная карта подключений и согласований</li>
            <li>Подготовка документации и подача заявок</li>
            <li>Сопровождение до договоров и актов</li>
            <li>Строительство, ввод и передача исполнительной документации</li>
          </ol>
        </div>
      </section>

      <section className="section section-alt home-faq">
        <div className="container">
          <h2>Вопросы и ответы</h2>
          <p className="lead" style={{ marginBottom: "1rem" }}>
            Коротко о том, как начать сотрудничество и куда смотреть на сайте.
          </p>
          <div className="home-faq-list">
            {homeFaq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-strip-inner">
          <div>
            <p className="eyebrow eyebrow-light">1 шаг до старта</p>
            <h2>Расскажите о проекте — пришлём бриф и оценку</h2>
            <p>
              Возьмём ваш объект в работу: подберём дорожную карту, оценим сроки
              и стоимость по этапам. Без обязательств.
            </p>
          </div>
          <div className="cta-strip-actions">
            <Link href="/kontakty" className="btn btn-primary btn-light">
              Оставить заявку
            </Link>
            <a href="tel:+74950000000" className="btn btn-ghost btn-light">
              +7 (495) 000-00-00
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
