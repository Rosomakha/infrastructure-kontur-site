import { ServiceRequestWizard } from "@/components/service-request-wizard";
import type { Metadata } from "next";

type PageProps = {
  searchParams: Promise<{ usluga?: string }>;
};

export const metadata: Metadata = {
  title: "Контакты и заявка — Контур согласований",
  description:
    "Оставить заявку на сопровождение: сначала чек-лист документов по услуге, затем контакты. Москва и Московская область."
};

export default async function ContactsPage({ searchParams }: PageProps) {
  const { usluga } = await searchParams;

  return (
    <section className="section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Контакты</p>
          <h1>Свяжитесь с руководителем</h1>
          <p className="lead">
            Перед отправкой заявки заполните чек-лист по нужной услуге — так мы
            быстрее оценим объём работ и перечень недостающих документов.
          </p>
          <ul className="contact-list">
            <li>Бренд: Контур согласований</li>
            <li>Юр. лицо: в процессе регистрации</li>
            <li>Руководитель: Новиков Олег Адарович</li>
            <li>
              Телефон: <a href="tel:+79997474747">+7 (999) 747-47-47</a>
            </li>
            <li>
              E-mail:{" "}
              <a href="mailto:olegnovikov.gov@yandex.ru">
                olegnovikov.gov@yandex.ru
              </a>
            </li>
            <li>Регион: Москва и Московская область</li>
          </ul>
        </div>
        <ServiceRequestWizard initialServiceSlug={usluga} />
      </div>
    </section>
  );
}
