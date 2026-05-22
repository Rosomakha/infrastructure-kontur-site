export default function ContactsPage() {
  return (
    <section className="section">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Контакты</p>
          <h1>Свяжитесь с нами</h1>
          <p className="lead">
            Подготовим дорожную карту и предварительную оценку по вашему объекту.
          </p>
          <ul className="contact-list">
            <li>Компания: ООО «Инфраструктурный контур»</li>
            <li>Генеральный директор: Новиков Олег Адарович</li>
            <li>
              Телефон: <a href="tel:+74950000000">+7 (495) 000-00-00</a>
            </li>
            <li>
              Email: <a href="mailto:info@trustenergy.ru">info@trustenergy.ru</a>
            </li>
            <li>Регион: Москва и Московская область</li>
            <li>Офис: Московская область, г. Химки</li>
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
