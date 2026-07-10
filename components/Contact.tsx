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

    if (!isContactFormValid(validationErrors)) return;

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
    "w-full border border-stone-300 bg-stone-50 px-4 py-3 text-navy placeholder:text-stone-400 transition-colors focus:border-navy focus:bg-white focus:outline-none";

  return (
    <section id="contact" className="bg-navy py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="self-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-light">
              {t("eyebrow")}
            </span>
            <h2 className="mt-5 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">{t("text")}</p>

            <dl className="mt-10 space-y-6 border-t border-white/20 pt-7">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                  {t("emailLabel")}
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${t("email")}`}
                    className="focus-ring text-lg font-medium text-white transition-colors hover:text-orange-light"
                  >
                    {t("email")}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                  {t("locationLabel")}
                </dt>
                <dd className="mt-2 text-lg font-medium text-white">{t("location")}</dd>
              </div>
            </dl>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="bg-cream p-7 sm:p-10 lg:p-12"
            noValidate
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Ne pas remplir : <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy">
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
                  <p id="name-error" className="mt-1.5 text-sm font-medium text-red-700">
                    {t(`form.errors.${errors.name}`)}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy">
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
                  <p id="email-error" className="mt-1.5 text-sm font-medium text-red-700">
                    {t(`form.errors.${errors.email}`)}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
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
                  <p id="message-error" className="mt-1.5 text-sm font-medium text-red-700">
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
