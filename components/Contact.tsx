"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import { contactFormEndpoint } from "@/lib/formspree";
import {
  validateContactForm,
  isContactFormValid,
  type ContactFormValues,
  type ContactFormErrors,
} from "@/lib/validation";

type Status = "idle" | "loading" | "success" | "error";

const INITIAL_VALUES: ContactFormValues = { name: "", email: "", message: "" };

export default function Contact() {
  const t = useTranslations("contact");
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(field: keyof ContactFormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (!isContactFormValid(validationErrors)) return;

    setStatus("loading");

    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setStatus("success");
        setValues(INITIAL_VALUES);
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-stone-200 bg-white px-4 py-3 text-navy shadow-sm placeholder:text-stone-400 transition-colors focus:border-navy focus:ring-2 focus:ring-navy/10 focus:outline-none";

  return (
    <section id="contact" className="bg-[#f5f5f7] py-20 lg:py-28">
      <Container>
        <div className="grid gap-10 overflow-hidden rounded-[2rem] bg-white p-7 shadow-[0_24px_70px_rgba(20,39,74,0.14)] ring-1 ring-black/5 sm:p-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14 lg:p-14 xl:rounded-[2.5rem]">
          <div className="self-center lg:pe-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-dark">
              {t("eyebrow")}
            </span>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-600">
              {t("text")}
            </p>

            <dl className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="4"
                      y="3.5"
                      width="16"
                      height="17"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M8 9.5h8M8 13h5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="m15 17 1.2 1.2L19 15.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                    {t("emailLabel")}
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${t("email")}`}
                      className="focus-ring text-base font-semibold text-navy transition-colors hover:text-orange-dark"
                    >
                      {t("email")}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="9"
                      r="2.2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                    {t("locationLabel")}
                  </dt>
                  <dd className="mt-1.5 text-base font-semibold text-navy">
                    {t("location")}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <form
            name="contact"
            method="POST"
            onSubmit={handleSubmit}
            className="rounded-[1.5rem] bg-[#f8fafc] p-7 ring-1 ring-stone-200 sm:p-10 lg:p-12"
            noValidate
          >
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-navy"
                  >
                    {t("form.name")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder={t("form.namePlaceholder")}
                    value={values.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={inputClasses}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-1.5 text-sm font-medium text-red-700"
                    >
                      {t(`form.errors.${errors.name}`)}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-navy"
                  >
                    {t("form.email")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={t("form.emailPlaceholder")}
                    value={values.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputClasses}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1.5 text-sm font-medium text-red-700"
                    >
                      {t(`form.errors.${errors.email}`)}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-navy"
                >
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={t("form.messagePlaceholder")}
                  value={values.message}
                  onChange={(event) => handleChange("message", event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`${inputClasses} resize-none`}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1.5 text-sm font-medium text-red-700"
                  >
                    {t(`form.errors.${errors.message}`)}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="focus-ring inline-flex w-full items-center justify-center bg-orange px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "loading" ? t("form.sending") : t("form.submit")}
              </button>

              <div role="status" aria-live="polite">
                {status === "success" && (
                  <p className="border-s-2 border-green-700 bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
                    {t("form.success")}
                  </p>
                )}
                {status === "error" && (
                  <p className="border-s-2 border-red-700 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
                    {t("form.error")}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
