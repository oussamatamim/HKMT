"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import {
  validateContactForm,
  isContactFormValid,
  type ContactFormValues,
  type ContactFormErrors,
} from "@/lib/validation";

type Status = "idle" | "loading" | "success" | "error";

const INITIAL_VALUES: ContactFormValues = { name: "", email: "", message: "" };

function encodeFormData(data: Record<string, string>): string {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
}

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

    if (!isContactFormValid(validationErrors)) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({ "form-name": "contact", ...values }),
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
    "w-full border-0 border-b border-stone-300 bg-transparent px-0 py-3 text-navy placeholder:text-stone-400 transition-colors focus:border-navy focus:outline-none";

  return (
    <section id="contact" className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-orange" aria-hidden="true" />
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
                {t("eyebrow")}
              </span>
            </div>
            <h2 className="mt-5 font-serif text-3xl font-medium tracking-tight text-navy sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-600">
              {t("text")}
            </p>

            <dl className="mt-10 space-y-5 border-t border-stone-200 pt-8">
              <div>
                <dt className="text-sm font-medium uppercase tracking-wide text-stone-500">
                  {t("emailLabel")}
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={`mailto:${t("email")}`}
                    className="focus-ring rounded-sm text-lg font-medium text-navy transition-colors hover:text-orange"
                  >
                    {t("email")}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium uppercase tracking-wide text-stone-500">
                  {t("locationLabel")}
                </dt>
                <dd className="mt-1.5 text-lg font-medium text-navy">{t("location")}</dd>
              </div>
            </dl>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="border-navy/10 lg:border-s lg:ps-14"
            noValidate
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Ne pas remplir : <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="space-y-7">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium uppercase tracking-wide text-stone-500"
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
                  onChange={(e) => handleChange("name", e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={inputClasses}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-sm font-medium text-red-600">
                    {t(`form.errors.${errors.name}`)}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium uppercase tracking-wide text-stone-500"
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
                  onChange={(e) => handleChange("email", e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputClasses}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-sm font-medium text-red-600">
                    {t(`form.errors.${errors.email}`)}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium uppercase tracking-wide text-stone-500"
                >
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={t("form.messagePlaceholder")}
                  value={values.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`${inputClasses} resize-none`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-sm font-medium text-red-600">
                    {t(`form.errors.${errors.message}`)}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="focus-ring inline-flex w-full items-center justify-center bg-orange px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-orange-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "loading" ? t("form.sending") : t("form.submit")}
              </button>

              <div role="status" aria-live="polite">
                {status === "success" && (
                  <p className="border-s-2 border-green-600 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                    {t("form.success")}
                  </p>
                )}
                {status === "error" && (
                  <p className="border-s-2 border-red-600 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
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
