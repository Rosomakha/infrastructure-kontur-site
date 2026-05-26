import Link from "next/link";
import type { Metadata } from "next";
import { FederalSupportSection } from "@/components/federal-support-section";
import { OgvProgramsToc } from "@/components/ogv-programs-toc";
import { OgvServiceNotice } from "@/components/ogv-service-notice";
import { getFederalSupportCatalogSummary } from "@/lib/data/federal-support-programs";
import {
  ogvConsultingServices,
  ogvProcessSteps,
  OGV_PAGE_PATH
} from "@/lib/data/ogv-section";

const { programCount } = getFederalSupportCatalogSummary();

export const metadata: Metadata = {
  title: "Органам власти — федеральные программы и консалтинг | Контур согласований",
  description:
    "Каталог федеральных программ поддержки для субъектов РФ и муниципалитетов: ФРТ, МКИ, КРТ, ФКГС, переселение, газификация. Консалтинг по всей России."
};

export default function OrganyVlastiPage() {
  return (
    <section className="section ogv-page">
      <div className="container prose-wide">
        <p className="eyebrow">Органам власти</p>
        <h1>Федеральные программы и консалтинговое сопровождение</h1>
        <p className="lead">
          Отдельный раздел для органов государственной власти субъектов
          Российской Федерации и органов местного самоуправления. Ниже —{" "}
          <strong>{programCount} программ</strong>, по которым практика готова
          оказать консалтинг: от аудита применимости до сопровождения заявки в
          ФРТ, Минстрое, ФКР и иных операторах.
        </p>

        <OgvServiceNotice />

        <div className="ogv-page-actions card-actions-split">
          <Link
            className="btn btn-primary"
            href="/kontakty?usluga=podderzhka-federalnogo-byudzheta"
          >
            Заявка с чек-листом
          </Link>
          <Link className="btn btn-secondary" href="/normativnaya-baza#federalnaya-podderzhka">
            Нормативная база
          </Link>
          <Link
            className="btn btn-secondary"
            href="/uslugi/podderzhka-federalnogo-byudzheta"
          >
            Услуга в каталоге
          </Link>
        </div>

        <section className="ogv-block" id="komu">
          <h2>Кому предназначен раздел</h2>
          <ul className="check-list">
            <li>
              Органы государственной власти субъектов Российской Федерации
              (исполнительная власть, профильные министерства и ведомства).
            </li>
            <li>
              Органы местного самоуправления — муниципалитеты, городские округа,
              поселения (в т.ч. по ФКГС и местным программам через регион).
            </li>
            <li>
              Уполномоченные региональные и муниципальные организации — операторы
              программ на местах.
            </li>
          </ul>
        </section>

        <section className="ogv-block" id="konsalting">
          <h2>Что входит в консалтинг</h2>
          <p className="muted">
            По каждой программе из каталога ниже — индивидуальный чек-лист
            документов, привязка к НПА и типовой перечень работ по сопровождению.
          </p>
          <div className="ogv-consulting-grid">
            {ogvConsultingServices.map((item) => (
              <article className="card ogv-consulting-card" key={item.title}>
                <h3 className="card-title">{item.title}</h3>
                <p className="muted small-margin">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ogv-block" id="process">
          <h2>Как работаем</h2>
          <ol className="service-algorithm">
            {ogvProcessSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="muted small-margin">
            Сроки зависят от программы, зрелости проекта и регламента оператора.
            Ориентиры по этапам — на{" "}
            <Link href="/uslugi/podderzhka-federalnogo-byudzheta">
              странице услуги «Поддержка за счёт федерального бюджета»
            </Link>
            .
          </p>
        </section>

        <OgvProgramsToc />

        <section className="ogv-block" id="katalog">
          <h2>Программы, по которым оказываем консалтинг</h2>
          <FederalSupportSection
            showMissionNotice={false}
            showSectionIntro={false}
            showProgramsHeading={false}
          />
        </section>

        <aside className="info-strip ogv-page-cta">
          <p>
            <strong>Готовы обсудить мероприятие.</strong> Заполните чек-лист по
            выбранной программе и отправьте заявку — мы свяжемся для первичного
            брифа. Раздел:{" "}
            <Link href={OGV_PAGE_PATH}>{OGV_PAGE_PATH}</Link>.
          </p>
          <div className="card-actions card-actions-split ogv-page-actions">
            <Link
              className="btn btn-primary"
              href="/kontakty?usluga=podderzhka-federalnogo-byudzheta"
            >
              Перейти к заявке
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
