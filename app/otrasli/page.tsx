const sectors = [
  {
    name: "Девелоперы и застройщики",
    text: "Сопровождаем жилые комплексы и коммерческие объекты от стадии концепции до ввода."
  },
  {
    name: "Промышленность и логистика",
    text: "Обеспечиваем инженерную инфраструктуру для производств, складов и технопарков."
  },
  {
    name: "Коммерческая недвижимость",
    text: "Подключение и модернизация сетей для офисных, торговых и mixed-use объектов."
  },
  {
    name: "Инфраструктурные и энергетические проекты",
    text: "Строительно-монтажные работы и согласования в проектах повышенной сложности."
  }
];

export default function SectorsPage() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Отраслевые решения</p>
        <h1>Работаем со всеми, кто строит</h1>
        <div className="cards-2">
          {sectors.map((sector) => (
            <article className="card" key={sector.name}>
              <h2>{sector.name}</h2>
              <p>{sector.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
