import Link from "next/link";
import type { Metadata } from "next";
import { NpaProposalForm } from "@/components/npa-proposal-form";
import {
  NPA_PROPOSAL_PAGE_PATH,
  npaProposalAiNote,
  npaProposalDisclaimer,
  npaProposalGuidelines,
  npaProposalProcessSteps
} from "@/lib/data/npa-proposal-section";

export const metadata: Metadata = {
  title: "Предложения по доработке НПА в сфере ЖКХ | Контур согласований",
  description:
    "Направьте предложение по улучшению нормативных правовых актов в жилищно-коммунальной сфере. Экспертиза и в перспективе — анализ с помощью ИИ; достойные инициативы — продвижение на федеральном уровне."
};

export default function NpaProposalPage() {
  return (
    <section className="section npa-proposal-page">
      <div className="container npa-proposal-layout">
        <div className="prose-wide npa-proposal-copy">
          <p className="eyebrow">Нормотворчество</p>
          <h1>Предложения по доработке НПА в сфере ЖКХ</h1>
          <p className="lead">
            Отдельный раздел для инициатив по улучшению нормативных правовых
            актов в жилищно-коммунальной сфере. Если вы видите противоречие,
            пробел или избыточное бремя в федеральном или региональном акте —
            опишите проблему и предложите конкретную формулировку. Мы
            рассматриваем обращения и готовим к продвижению на федеральном
            уровне те предложения, которые выдерживают экспертную проверку.
          </p>

          <div className="info-strip npa-ai-roadmap">
            <p>
              <strong>Искусственный интеллект — в планах.</strong>{" "}
              {npaProposalAiNote}
            </p>
          </div>

          <section className="npa-block" id="process">
            <h2>Как устроен процесс</h2>
            <ol className="npa-process-list">
              {npaProposalProcessSteps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}.</strong> {step.text}
                </li>
              ))}
            </ol>
          </section>

          <section className="npa-block" id="guidelines">
            <h2>Как оформить сильное предложение</h2>
            <ul className="check-list">
              {npaProposalGuidelines.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="muted small-margin">
              Ориентир по действующим актам — в{" "}
              <Link href="/normativnaya-baza">нормативно-правовой базе</Link> на
              сайте. Раздел для органов власти по федеральным программам —{" "}
              <Link href="/organy-vlasti">«Органам власти»</Link>.
            </p>
          </section>

          <section className="npa-block" id="disclaimer">
            <h2>Важно</h2>
            <p className="muted">{npaProposalDisclaimer}</p>
          </section>

          <p className="muted small-margin">
            Раздел: <Link href={NPA_PROPOSAL_PAGE_PATH}>{NPA_PROPOSAL_PAGE_PATH}</Link>
          </p>
        </div>

        <div className="npa-proposal-form-wrap" id="forma">
          <NpaProposalForm />
        </div>
      </div>
    </section>
  );
}
