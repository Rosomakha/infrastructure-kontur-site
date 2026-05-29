import { KALKULATORY_NAV_LABEL, SITE_MOTTO, SITE_TAGLINE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h3>Контур согласований</h3>
          <p className="site-motto">{SITE_MOTTO}</p>
          <p>
            Консалтинговая практика: {SITE_TAGLINE.toLowerCase()}. Москва и
            Московская область.
          </p>
        </section>
        <section>
          <h3>Юридическое лицо</h3>
          <ul>
            <li>Руководитель: Новиков О.&nbsp;А.</li>
            <li>Юр. лицо: в процессе регистрации</li>
            <li>Реквизиты опубликуем после внесения сведений в ЕГРЮЛ</li>
          </ul>
        </section>
        <section>
          <h3>Материалы</h3>
          <ul>
            <li>
              <a href="/uslugi">Услуги и чек-листы документов</a>
            </li>
            <li>
              <a href="/organy-vlasti">Органам власти — программы и консалтинг</a>
            </li>
            <li>
              <a href="/kalkulyatory">{KALKULATORY_NAV_LABEL}</a>
            </li>
            <li>
              <a href="/normativnaya-baza">Нормативно-правовая база</a>
            </li>
            <li>
              <a href="/predlozheniya-npa-zhkh">Предложения по доработке НПА (ЖКХ)</a>
            </li>
            <li>
              <a href="/uslugi/dogovory-rso">Договоры с РСО</a>
            </li>
            <li>
              <a href="/uslugi/odpu-ipu-mkd">ОДПУ и ИПУ в МКД</a>
            </li>
            <li>
              <a href="/o-kompanii">О компании</a>
            </li>
          </ul>
        </section>
        <section>
          <h3>Контакты</h3>
          <ul>
            <li>Москва и Московская область</li>
            <li>
              <a href="tel:+79997474747">+7 (999) 747-47-47</a>
            </li>
            <li>
              <a href="mailto:olegnovikov.gov@yandex.ru">
                olegnovikov.gov@yandex.ru
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
