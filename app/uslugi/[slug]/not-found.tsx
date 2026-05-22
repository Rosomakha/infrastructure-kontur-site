import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1>Услуга не найдена</h1>
        <p className="lead">
          Такой страницы нет. Вернитесь к{" "}
          <Link href="/uslugi">списку услуг</Link> или на{" "}
          <Link href="/">главную</Link>.
        </p>
      </div>
    </section>
  );
}
