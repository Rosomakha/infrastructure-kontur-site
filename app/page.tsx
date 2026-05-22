import Link from "next/link";
import { HomeSegments } from "@/components/home-segments";

const heroBadges = [
  { label: "20+ лет в отрасли", note: "опыт государственных и частных структур" },
  { label: "Москва и МО", note: "знаем регламенты и сроки РСО" },
  { label: "Партнёр на связи", note: "решения принимает не менеджер" }
];

const stats = [
  { value: "20+", label: "лет опыта партнёра в отрасли" },
  { value: "60+", label: "сопровождённых подключений" },
  { value: "5", label: "направлений сетей и регламентов" },
  { value: "24\u00A0ч", label: "первый ответ по объекту" }
];

const advantages = [
  {
    title: "Личное участие партнёра",
    text: "Решения по сложным вопросам принимает не аккаунт-менеджер, а партнёр компании с многолетним опытом в отрасли. Клиент работает напрямую с тем, кто отвечает за результат."
  },
  {
    title: "Опыт крупных структур",
    text: "За плечами — работа в государственных и частных строительных компаниях, реализация инфраструктурных программ от площадки до сдачи объекта. Понимаем обе стороны: и заказчика, и подрядчика, и РСО."
  },
  {
    title: "Независимая позиция",
    text: "Не аффилированы с сетевыми организациями и подрядчиками. Защищаем интересы собственника или инвестора и показываем, где скрываются риски и переплаты."
  }
];

const approachSteps = [
  {
    title: "Бриф и аудит исходных данных",
    text: "Анализируем объект, имеющиеся ТУ, проектную и правоустанавливающую документацию."
  },
  {
    title: "Оценка рисков и дорожная карта",
    text: "Фиксируем юридические, технические и временные риски. Готовим план согласований с этапами и контрольными точками."
  },
  {
    title: "Подготовка и подача документации",
    text: "Готовим заявки, проектные материалы и сопроводительные документы под требования профильных РСО и контролирующих органов."
  },
  {
    title: "Сопровождение РСО и комиссий",
    text: "Ведём переписку, защищаем технические решения, отрабатываем замечания и доводим до договоров и актов."
  },
  {
    title: "Ввод и передача исполнительной документации",
    text: "Контролируем подрядчиков на этапе СМР, фиксируем готовность сетей и передаём пакет документов собственнику."
  }
];

const homeFaq = [
  {
    q: "Я работаю напрямую с партнёром или с менеджером?",
    a: "На входе и в ключевых точках проекта — напрямую с партнёром. Текущие операции ведёт команда, но решения по стратегии и сложным вопросам остаются за партнёром. Это позиция, ради которой к нам и приходят."
  },
  {
    q: "Когда подключать вас к проекту, чтобы было выгоднее всего?",
    a: "На стадии участка и концепции. Это самая дешёвая точка входа: аудит ТУ и наружных сетей на старте экономит месяцы согласований и десятки процентов бюджета инфраструктуры."
  },
  {
    q: "Вы строите сами или сопровождаете чужие подрядные звенья?",
    a: "Основная компетенция — консалтинг и сопровождение: предпроектный аудит, согласования, экспертиза договоров с РСО, контроль подрядчиков. СМР выполняем через проверенные подрядные команды на условиях открытой сметы."
  },
  {
    q: "Можно ли заказать только аудит или экспертизу одного договора?",
    a: "Да. Часто начинаем с короткого аудита: проверяем ТУ, договор с РСО, расчёты мощностей и плату за присоединение. По итогам даём заключение и рекомендации, а сопровождение — уже опционально."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero hero-v2">
        <div className="container hero-v2-inner">
          <div className="hero-v2-copy">
            <p className="eyebrow">Новиков и партнёры · Консалтинг</p>
            <h1>
              Независимый консалтинг по инженерной{" "}
              <span className="hero-accent">инфраструктуре</span>
            </h1>
            <p className="lead">
              Помогаем инвесторам, девелоперам и собственникам подключать
              объекты к сетям, согласовывать инфраструктуру и снижать стоимость
              ошибок. За проектами стоит партнёр компании — лично и с
              ответственностью за результат.
            </p>
            <div className="hero-actions">
              <Link href="/kontakty" className="btn btn-primary">
                Обсудить объект с партнёром
              </Link>
              <Link href="/uslugi" className="btn btn-ghost">
                Направления консалтинга
              </Link>
            </div>
            <ul className="hero-badges" aria-label="Принципы работы">
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
                Предварительная оценка и дорожная карта — в течение одного
                рабочего дня после получения исходных данных по объекту.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <HomeSegments />

      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">Почему выбирают нас</p>
          <h2>Консалтинг, который защищает интересы собственника</h2>
          <div className="cards-3 advantage-cards">
            {advantages.map((item, i) => (
              <article key={item.title} className="card advantage-card">
                <span className="advantage-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <p className="eyebrow">Подход</p>
          <h2>Как мы ведём проект</h2>
          <ol className="approach-steps">
            {approachSteps.map((s, i) => (
              <li key={s.title}>
                <span className="approach-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-alt home-faq">
        <div className="container">
          <p className="eyebrow">Вопросы и ответы</p>
          <h2>Часто спрашивают</h2>
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
            <p className="eyebrow eyebrow-light">Первый шаг</p>
            <h2>Расскажите о проекте — пришлём оценку и дорожную карту</h2>
            <p>
              По описанию объекта и исходным данным подготовим короткое
              заключение: где находятся риски, какие шаги нужны и сколько это
              займёт. Без обязательств.
            </p>
          </div>
          <div className="cta-strip-actions">
            <Link href="/kontakty" className="btn btn-primary btn-light">
              Запросить оценку
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
