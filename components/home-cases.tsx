import Image from "next/image";
import Link from "next/link";

type CaseItem = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

const cases: CaseItem[] = [
  {
    src: "/keisy/mfk-stroitelstvo.jpg",
    alt: "Многофункциональный комплекс на этапе строительства",
    title: "МФК в Москве",
    caption: "Согласование схемы внешних сетей и техприсоединение"
  },
  {
    src: "/keisy/elektroseti-vl.jpg",
    alt: "Воздушная линия электропередач",
    title: "Электросети, ВЛ",
    caption: "Подключение площадки к 10 кВ, договор и акты"
  },
  {
    src: "/keisy/elektromontazh.jpg",
    alt: "Электромонтажные работы на щите",
    title: "Электромонтаж",
    caption: "Внутренние сети и приёмка узла учёта"
  },
  {
    src: "/keisy/kanalizatsiya-kolodtsy.jpg",
    alt: "Канализационные колодцы и наружные сети",
    title: "Водоотведение",
    caption: "Согласование наружных сетей и врезка"
  },
  {
    src: "/keisy/zemlyanye-raboty.jpg",
    alt: "Земляные работы на трассе сетей",
    title: "Прокладка трасс",
    caption: "Земляные работы и согласование с владельцами сетей"
  },
  {
    src: "/keisy/obrazovanie-fasad.jpg",
    alt: "Социальный объект — фасад здания",
    title: "Социальный объект",
    caption: "Подключение здания образования: тепло и электрика"
  }
];

export function HomeCases() {
  return (
    <section className="section cases-section" aria-labelledby="cases-heading">
      <div className="container">
        <p className="eyebrow">Направления и объекты</p>
        <h2 id="cases-heading">Что и где мы сопровождали</h2>
        <p className="lead cases-lead">
          Объекты и направления, где вели аудит, согласования и техническое
          сопровождение в Москве и Московской области. По любому из них готовы
          разобрать кейс детальнее.
        </p>
        <div className="cases-grid">
          {cases.map((c, i) => (
            <article className="case-card" key={c.src}>
              <div className="case-card-image">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  priority={i < 2}
                />
              </div>
              <div className="case-card-body">
                <h3>{c.title}</h3>
                <p>{c.caption}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="cases-cta">
          <Link href="/kontakty" className="btn btn-primary">
            Обсудить ваш объект
          </Link>
          <Link href="/uslugi" className="btn btn-ghost">
            Все направления
          </Link>
        </div>
      </div>
    </section>
  );
}
