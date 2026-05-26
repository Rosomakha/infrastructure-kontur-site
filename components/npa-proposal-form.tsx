"use client";

import { useMemo, useState } from "react";
import {
  buildNpaProposalEmailBody,
  getTopicLabel,
  isNpaProposalFormComplete,
  type NpaProposalFormData
} from "@/lib/data/npa-proposal-form";
import {
  npaProposalAuthorRoles,
  npaProposalTopics,
  type NpaProposalTopicId
} from "@/lib/data/npa-proposal-section";

const CONTACT_EMAIL = "olegnovikov.gov@yandex.ru";

const emptyForm = (): NpaProposalFormData => ({
  name: "",
  organization: "",
  role: npaProposalAuthorRoles[0],
  region: "",
  phone: "",
  email: "",
  topicId: "",
  npaReference: "",
  currentWording: "",
  problem: "",
  proposedChange: "",
  rationale: "",
  attachmentsNote: "",
  consentPublish: false
});

export function NpaProposalForm() {
  const [form, setForm] = useState<NpaProposalFormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [copyHint, setCopyHint] = useState<string | null>(null);

  const complete = useMemo(() => isNpaProposalFormComplete(form), [form]);
  const emailBody = useMemo(() => buildNpaProposalEmailBody(form), [form]);

  const update = <K extends keyof NpaProposalFormData>(
    key: K,
    value: NpaProposalFormData[K]
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!complete) return;

    try {
      await navigator.clipboard.writeText(emailBody);
      setCopyHint("Текст предложения скопирован в буфер обмена.");
    } catch {
      setCopyHint(null);
    }

    const mailtoBody =
      emailBody.length > 1800
        ? `${emailBody.slice(0, 1700)}\n\n[… текст обрезан из‑за лимита почтового клиента; полная версия в буфере обмена …]`
        : emailBody;

    const subject = encodeURIComponent(
      `Предложение по НПА (ЖКХ): ${getTopicLabel(form.topicId).slice(0, 50)}`
    );
    const body = encodeURIComponent(mailtoBody);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="panel form npa-proposal-form npa-proposal-form-done">
        <h2>Предложение подготовлено</h2>
        <p className="muted">
          Откроется почтовый клиент с заполненным письмом. Если окно не
          открылось — отправьте текст на{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
        {copyHint && <p className="request-wizard-copy-hint">{copyHint}</p>}
        <details className="request-wizard-preview">
          <summary>Показать текст предложения</summary>
          <pre>{emailBody}</pre>
        </details>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setSubmitted(false);
            setForm(emptyForm());
          }}
        >
          Новое предложение
        </button>
      </div>
    );
  }

  return (
    <form className="panel form npa-proposal-form" onSubmit={handleSubmit}>
      <h2 className="npa-form-title">Форма предложения</h2>
      <p className="muted small-margin">
        Поля со звёздочкой обязательны. Минимум в блоках «Проблема» и
        «Предлагаемая доработка» — по смыслу, не по количеству символов для
        галочки.
      </p>

      <fieldset className="npa-form-fieldset">
        <legend>Кто предлагает</legend>
        <label>
          ФИО / контактное лицо *
          <input
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            required
            autoComplete="name"
          />
        </label>
        <label>
          Организация (если есть)
          <input
            type="text"
            value={form.organization}
            onChange={(e) => update("organization", e.target.value)}
          />
        </label>
        <label>
          Статус *
          <select
            value={form.role}
            onChange={(e) => update("role", e.target.value)}
            required
          >
            {npaProposalAuthorRoles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
        <label>
          Регион (субъект РФ / город)
          <input
            type="text"
            value={form.region}
            onChange={(e) => update("region", e.target.value)}
            placeholder="Например: Республика Татарстан, г. Казань"
          />
        </label>
        <label>
          Телефон *
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+7 …"
          />
        </label>
        <label>
          E-mail *
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="для обратной связи"
          />
        </label>
        <p className="muted small-margin npa-form-hint">
          Укажите телефон или e-mail (лучше оба).
        </p>
      </fieldset>

      <fieldset className="npa-form-fieldset">
        <legend>Суть предложения</legend>
        <label>
          Тематика ЖКХ *
          <select
            value={form.topicId}
            onChange={(e) =>
              update("topicId", e.target.value as NpaProposalTopicId | "")
            }
            required
          >
            <option value="">— выберите тему —</option>
            {npaProposalTopics.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Нормативный акт (наименование, номер, статья) *
          <textarea
            value={form.npaReference}
            onChange={(e) => update("npaReference", e.target.value)}
            required
            rows={3}
            placeholder="Например: ч. 2 ст. 161 ЖК РФ; ПП РФ от … № …"
          />
        </label>
        <label>
          Действующая редакция (цитата или кратко)
          <textarea
            value={form.currentWording}
            onChange={(e) => update("currentWording", e.target.value)}
            rows={4}
          />
        </label>
        <label>
          В чём проблема *
          <textarea
            value={form.problem}
            onChange={(e) => update("problem", e.target.value)}
            required
            rows={5}
            placeholder="Кому мешает, какие последствия на практике"
          />
        </label>
        <label>
          Предлагаемая доработка *
          <textarea
            value={form.proposedChange}
            onChange={(e) => update("proposedChange", e.target.value)}
            required
            rows={5}
            placeholder="Конкретная формулировка нормы или механизма"
          />
        </label>
        <label>
          Обоснование и ожидаемый эффект *
          <textarea
            value={form.rationale}
            onChange={(e) => update("rationale", e.target.value)}
            required
            rows={4}
          />
        </label>
        <label>
          Приложения (что можете направить отдельно)
          <textarea
            value={form.attachmentsNote}
            onChange={(e) => update("attachmentsNote", e.target.value)}
            rows={2}
            placeholder="Расчёты, судебные акты, письма ведомств — перечислите"
          />
        </label>
        <label className="npa-form-checkbox">
          <input
            type="checkbox"
            checked={form.consentPublish}
            onChange={(e) => update("consentPublish", e.target.checked)}
          />
          Разрешаю обезличенное цитирование в аналитике и при подготовке
          инициатив (без публикации персональных данных без отдельного
          согласия).
        </label>
      </fieldset>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={!complete}
      >
        Отправить предложение
      </button>
      {!complete && (
        <p className="muted small-margin">
          Заполните обязательные поля и укажите телефон или e-mail.
        </p>
      )}
    </form>
  );
}
