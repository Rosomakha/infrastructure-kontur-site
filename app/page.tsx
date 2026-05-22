import Link from "next/link";
import {
  DraftingHeroWatermark,
  DraftingToolsStrip
} from "@/components/drafting-tools-decoration";

const services = [
  "Технологическое присоединение к электрическим, водопроводным, канализационным, тепловым и газовым сетям",
  "Инженерное проектирование и техническая документация",
  "Строительство объектов энергетики и инженерной инфраструктуры",
  "Сопровождение согласований в органах власти и ресурсоснабжающих организациях",
  "Экология: материалы ОВОС, государственная экологическая экспертиза и смежные вопросы — по применимости к объекту",
  "Перепланировка и переустройство жилых и нежилых помещений",
  "Договоры с РСО после техприсоединения, ОДПУ и ИПУ в МКД",
  "Модернизация ИТП и энергоаудит зданий"
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
    text: "Работаем по дорожной карте этапов и еженедельной отчетности для заказчика."
  }
];

const homeQuickLinks = [
  { href: "/uslugi", label: "Услуги и документы" },
  { href: "/uslugi/ekologiya-i-ovos", label: "Экология и ОВОС" },
  { href: "/kalkulyatory", label: "Калькуляторы сетей" },
  { href: "/normativnaya-baza", label: "Нормативы" },
  { href: "/otrasli", label: "Отрасли" },
  { href: "/o-kompanii", label: "О компании" },
  { href: "/kontakty", label: "Контакты" }
];

const homeTrust = [
  {
    title: "Ответ по заявке",
    text: "Первая обратная связь по запросу на расчёт или консультацию — в течение одного рабочего дня."
  },
  {
    title: "Договорная работа",
    text: "Фиксируем объём и этапы в договоре: проектирование, согласования, СМР и передача документации."
  },
  {
    title: "География",
    text: "Основной фокус — Москва и Московская область; разбираем интересующие вас объекты индивидуально."
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
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Инфраструктурный контур</p>
            <h1>Проектируем, согласовываем, строим и подключаем инженерные сети</h1>
            <p className="lead">
              Инженерно-строительный партнер полного цикла в Москве и Московской
              области: вода, водоотведение, газ, тепло и электроснабжение — с
              акцентом на документацию и управляемые сроки.
            </p>
            <div className="hero-actions">
              <Link href="/kontakty" className="btn btn-primary">
                Получить консультацию
              </Link>
              <Link href="/uslugi" className="btn btn-ghost">
                Смотреть услуги
              </Link>
            </div>
          </div>
          <aside className="hero-aside">
            <div className="hero-aside-inner">
              <DraftingHeroWatermark className="hero-drafting-watermark" />
              <div className="panel">
                <h2>Направления</h2>
                <ul className="check-list">
                  {services.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <DraftingToolsStrip />

      <section className="home-quick section-drafting-deco" aria-labelledby="home-quick-heading">
        <div className="container">
          <h2 id="home-quick-heading">Куда перейти на сайте</h2>
          <nav className="home-quick-links" aria-label="Быстрые разделы">
            {homeQuickLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="section section-drafting-deco">
        <div className="container">
          <h2>Справка для заказчика</h2>
          <p className="lead" style={{ marginBottom: "1rem" }}>
            Чек-листы документов для просчёта по направлению, ссылки на
            калькуляторы сетей и ориентиры по нормам.
          </p>
          <div className="cards-3" style={{ marginBottom: "0.5rem" }}>
            <article className="card">
              <h3 className="card-title" style={{ fontSize: "1.05rem" }}>
                Услуги и документы
              </h3>
              <p className="muted" style={{ margin: "0 0 0.75rem" }}>
                Какие исходные данные обычно нужны для коммерческого предложения
                и оценки сроков.
              </p>
              <Link href="/uslugi" className="text-link" style={{ fontWeight: 600 }}>
                Перейти к услугам →
              </Link>
            </article>
            <article className="card">
              <h3 className="card-title" style={{ fontSize: "1.05rem" }}>
                Калькуляторы
              </h3>
              <p className="muted" style={{ margin: "0 0 0.75rem" }}>
                Официальные порталы РСО: электричество, тепло, вода, газ (Москва, МО, федеральный уровень).
              </p>
              <Link href="/kalkulyatory" className="text-link" style={{ fontWeight: 600 }}>
                Открыть подборку →
              </Link>
            </article>
            <article className="card">
              <h3 className="card-title" style={{ fontSize: "1.05rem" }}>
                Нормативы
              </h3>
              <p className="muted" style={{ margin: "0 0 0.75rem" }}>
                ФЗ, ПП РФ и отраслевые ориентиры; не заменяют соглашения с
                сетями.
              </p>
              <Link
                href="/normativnaya-baza"
                className="text-link"
                style={{ fontWeight: 600 }}
              >
                Нормативная база →
              </Link>
            </article>
          </div>
        </div>
      </section>

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

      <section className="section home-trust section-drafting-deco" aria-labelledby="home-trust-heading">
        <div className="container">
          <h2 id="home-trust-heading">Что важно при старте проекта</h2>
          <div className="home-trust-inner">
            {homeTrust.map((item) => (
              <div key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="section cta">
        <div className="container cta-inner">
          <div>
            <h2>Нужен просчет проекта?</h2>
            <p>
              Подготовим предварительную дорожную карту и коммерческое предложение
              под ваш объект в течение 1 рабочего дня.
            </p>
          </div>
          <Link href="/kontakty" className="btn btn-primary">
            Оставить заявку
          </Link>
        </div>
      </section>
    </>
  );
}
