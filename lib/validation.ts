export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormErrorCode =
  | "nameRequired"
  | "emailRequired"
  | "emailInvalid"
  | "messageRequired"
  | "messageTooShort";

export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, ContactFormErrorCode>
>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MIN_LENGTH = 10;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "nameRequired";
  }

  if (!values.email.trim()) {
    errors.email = "emailRequired";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "emailInvalid";
  }

  if (!values.message.trim()) {
    errors.message = "messageRequired";
  } else if (values.message.trim().length < MESSAGE_MIN_LENGTH) {
    errors.message = "messageTooShort";
  }

  return errors;
}

export function isContactFormValid(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length === 0;
}
