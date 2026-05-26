"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { OgvServiceNotice } from "@/components/ogv-service-notice";
import {
  buildRequestEmailBody,
  getAllFederalPrograms,
  getChecklistFormItems,
  getFederalProgramById,
  getServiceOptionsForForm,
  isChecklistComplete,
  type ChecklistAnswers,
  type ChecklistFormItem,
  checklistStatusLabels,
  type ChecklistItemStatus
} from "@/lib/data/checklist-form";
import { getServiceBySlug } from "@/lib/data/services";

const CONTACT_EMAIL = "olegnovikov.gov@yandex.ru";

type Props = {
  initialServiceSlug?: string;
};

type WizardStep = 1 | 2 | 3;

export function ServiceRequestWizard({ initialServiceSlug }: Props) {
  const serviceOptions = useMemo(() => getServiceOptionsForForm(), []);
  const federalPrograms = useMemo(() => getAllFederalPrograms(), []);

  const [step, setStep] = useState<WizardStep>(
    initialServiceSlug && getServiceBySlug(initialServiceSlug) ? 2 : 1
  );
  const [serviceSlug, setServiceSlug] = useState(
    initialServiceSlug && getServiceBySlug(initialServiceSlug)
      ? initialServiceSlug
      : ""
  );
  const [federalProgramId, setFederalProgramId] = useState("");
  const [answers, setAnswers] = useState<ChecklistAnswers>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [objectType, setObjectType] = useState("Коммерческий");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copyHint, setCopyHint] = useState<string | null>(null);

  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;

  const checklistItems = useMemo(() => {
    if (!service) return [];
    return getChecklistFormItems(
      service,
      service.slug === "podderzhka-federalnogo-byudzheta"
        ? federalProgramId || undefined
        : undefined
    );
  }, [service, federalProgramId]);

  const checklistComplete = isChecklistComplete(checklistItems, answers);

  const groupedItems = useMemo(() => {
    const groups: { title: string; items: ChecklistFormItem[] }[] = [];
    for (const item of checklistItems) {
      const last = groups[groups.length - 1];
      if (last?.title === item.groupTitle) {
        last.items.push(item);
      } else {
        groups.push({ title: item.groupTitle, items: [item] });
      }
    }
    return groups;
  }, [checklistItems]);

  const resetAnswersForNewChecklist = useCallback(() => {
    setAnswers({});
  }, []);

  const handleServiceChange = (slug: string) => {
    setServiceSlug(slug);
    setFederalProgramId("");
    resetAnswersForNewChecklist();
  };

  const handleFederalProgramChange = (programId: string) => {
    setFederalProgramId(programId);
    resetAnswersForNewChecklist();
  };

  const setItemStatus = (id: string, status: ChecklistItemStatus) => {
    setAnswers((prev) => ({ ...prev, [id]: status }));
  };

  const federalProgram = federalProgramId
    ? getFederalProgramById(federalProgramId)
    : undefined;

  const emailBody = service
    ? buildRequestEmailBody({
        serviceTitle: service.title,
        federalProgramName: federalProgram?.name,
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        objectType,
        message: message.trim(),
        items: checklistItems,
        answers
      })
    : "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!service || !checklistComplete) return;

    try {
      await navigator.clipboard.writeText(emailBody);
      setCopyHint("Текст заявки скопирован в буфер обмена.");
    } catch {
      setCopyHint(null);
    }

    const mailtoBody =
      emailBody.length > 1800
        ? `${emailBody.slice(0, 1700)}\n\n[… текст обрезан из‑за лимита почтового клиента; полная версия скопирована в буфер обмена …]`
        : emailBody;

    const subject = encodeURIComponent(
      `Заявка: ${service.title}${federalProgram ? ` (${federalProgram.name.slice(0, 40)}…)` : ""}`
    );
    const body = encodeURIComponent(mailtoBody);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="panel form request-wizard request-wizard-done">
        <h2>Заявка подготовлена</h2>
        <p className="muted">
          Откроется почтовый клиент с заполненным письмом. Если окно не
          открылось — отправьте текст на{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> или позвоните{" "}
          <a href="tel:+79997474747">+7 (999) 747-47-47</a>.
        </p>
        {copyHint && <p className="request-wizard-copy-hint">{copyHint}</p>}
        <details className="request-wizard-preview">
          <summary>Показать текст заявки</summary>
          <pre>{emailBody}</pre>
        </details>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setSubmitted(false);
            setStep(1);
          }}
        >
          Новая заявка
        </button>
      </div>
    );
  }

  return (
    <div className="panel form request-wizard">
      <nav className="request-wizard-steps" aria-label="Шаги заявки">
        <span className={step === 1 ? "active" : step > 1 ? "done" : ""}>
          1. Услуга
        </span>
        <span className={step === 2 ? "active" : step > 2 ? "done" : ""}>
          2. Чек-лист
        </span>
        <span className={step === 3 ? "active" : ""}>3. Контакты</span>
      </nav>

      {step === 1 && (
        <div className="request-wizard-pane">
          <h2>Выберите услугу</h2>
          <p className="muted small-margin">
            Чек-лист формируется по документам и требованиям НПА для выбранной
            услуги. Без заполнения чек-листа заявку отправить нельзя.
          </p>
          <label>
            Услуга
            <select
              value={serviceSlug}
              onChange={(e) => handleServiceChange(e.target.value)}
              required
            >
              <option value="">— выберите услугу —</option>
              {serviceOptions.map((opt) => (
                <option key={opt.slug} value={opt.slug}>
                  {opt.title}
                </option>
              ))}
            </select>
          </label>
          {service && (
            <>
              {service.slug === "podderzhka-federalnogo-byudzheta" && (
                <OgvServiceNotice />
              )}
              <p className="muted small-margin">
                <Link href={`/uslugi/${service.slug}#chek-list`}>
                  Открыть полный чек-лист на странице услуги
                </Link>
              </p>
            </>
          )}
          <button
            type="button"
            className="btn btn-primary"
            disabled={!serviceSlug}
            onClick={() => setStep(2)}
          >
            Далее: заполнить чек-лист
          </button>
        </div>
      )}

      {step === 2 && service && (
        <div className="request-wizard-pane">
          <h2>Чек-лист: {service.title}</h2>
          <p className="muted small-margin">
            Отметьте статус по каждому пункту. Это нужно для первичной оценки
            объёма работ и недостающих документов.
          </p>

          {service.slug === "podderzhka-federalnogo-byudzheta" && (
            <>
              <OgvServiceNotice />
              <label>
                Федеральная программа (дополнит чек-лист)
                <select
                  value={federalProgramId}
                  onChange={(e) => handleFederalProgramChange(e.target.value)}
                >
                  <option value="">— общий чек-лист услуги —</option>
                  {federalPrograms.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </label>
            </>
          )}

          <div className="request-checklist">
            {groupedItems.map((group) => (
              <fieldset key={group.title} className="request-checklist-group">
                <legend>{group.title}</legend>
                <ul className="request-checklist-items">
                  {group.items.map((item) => (
                    <li key={item.id} className="request-checklist-row">
                      <p className="request-checklist-label">{item.label}</p>
                      <select
                        value={answers[item.id] ?? ""}
                        onChange={(e) =>
                          setItemStatus(
                            item.id,
                            e.target.value as ChecklistItemStatus
                          )
                        }
                        required
                        aria-label={`Статус: ${item.label.slice(0, 80)}`}
                      >
                        <option value="">— статус —</option>
                        {(Object.keys(checklistStatusLabels) as ChecklistItemStatus[]).map(
                          (key) => (
                            <option key={key} value={key}>
                              {checklistStatusLabels[key]}
                            </option>
                          )
                        )}
                      </select>
                    </li>
                  ))}
                </ul>
              </fieldset>
            ))}
          </div>

          <p className="request-wizard-progress muted">
            Заполнено: {checklistItems.filter((i) => Boolean(answers[i.id])).length}{" "}
            из {checklistItems.length}
          </p>

          <div className="request-wizard-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setStep(1)}
            >
              Назад
            </button>
            <button
              type="button"
              className="btn btn-primary"
              disabled={!checklistComplete}
              onClick={() => setStep(3)}
            >
              Далее: контакты
            </button>
          </div>
        </div>
      )}

      {step === 3 && service && (
        <form className="request-wizard-pane" onSubmit={handleSubmit}>
          <h2>Контакты и отправка</h2>
          <p className="muted small-margin">
            Услуга: <strong>{service.title}</strong>
            {federalProgram && (
              <>
                {" "}
                · программа: <strong>{federalProgram.name}</strong>
              </>
            )}
            . Чек-лист заполнен ({checklistItems.length} пунктов).
          </p>

          <label>
            Имя
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </label>
          <label>
            Телефон
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              autoComplete="tel"
            />
          </label>
          <label>
            E-mail (необязательно)
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </label>
          <label>
            Тип объекта
            <select
              name="objectType"
              value={objectType}
              onChange={(e) => setObjectType(e.target.value)}
            >
              <option>Коммерческий</option>
              <option>Жилой</option>
              <option>Промышленный</option>
              <option>Инфраструктурный</option>
              <option>МКД / УК / ТСЖ</option>
              <option>Орган власти (ОГВ / ОМС)</option>
            </select>
          </label>
          <label>
            Комментарий
            <textarea
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Сроки, адрес объекта, особые условия…"
            />
          </label>

          <div className="request-wizard-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setStep(2)}
            >
              Назад к чек-листу
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!checklistComplete || !name.trim() || !phone.trim()}
            >
              Отправить заявку
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
