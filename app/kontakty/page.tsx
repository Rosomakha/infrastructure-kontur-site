export default function ContactsPage() {
  return (
    <section className="section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Контакты</p>
          <h1>Свяжитесь с руководителем</h1>
          <p className="lead">
            Подготовим дорожную карту и предварительную оценку по вашему
            объекту. На входе вы общаетесь напрямую с руководителем практики.
          </p>
          <ul className="contact-list">
            <li>Бренд: Контур согласований</li>
            <li>Юр. лицо: ООО «Инфраструктурный контур»</li>
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
        <form className="panel form" action="#" method="post">
          <h2>Оставить заявку</h2>
          <label>
            Имя
            <input type="text" name="name" required />
          </label>
          <label>
            Телефон
            <input type="tel" name="phone" required />
          </label>
          <label>
            Тип объекта
            <select name="objectType" defaultValue="Коммерческий">
              <option>Коммерческий</option>
              <option>Жилой</option>
              <option>Промышленный</option>
              <option>Инфраструктурный</option>
            </select>
          </label>
          <label>
            Комментарий
            <textarea name="message" rows={4} />
          </label>
          <button type="submit" className="btn btn-primary">
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
}
