export const formFields = [
  { id: "firstName", title: "First Name", required: true, pattern: "" },
  { id: "secondName", title: "Second Name", required: true, pattern: "" },
  { id: "email", title: "Email", required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  {
    id: "phone",
    title: "Phone",
    required: true,
    pattern: /^\+38 \(\d{3}\) \d{3} \d{2} \d{2}$/,
    mask: "+38\\ (999) 999 99 99",
  },
];

export const creditCardForm = [
  {
    id: "card",
    title: "Card",
    required: true,
    placeholder: "**** **** **** ****",
    mask: "9999 9999 9999 9999",
    pattern: /^\d{4} \d{4} \d{4} \d{4}$/,
  },
  { id: "name", title: "Name on Card", required: true },
  {
    id: "expiration",
    title: "Expiration Date",
    required: true,
    placeholder: "MM/YY",
    mask: "99/99",
    pattern: /^(0[1-9]|1[0-2])\/\d{2}$/,
  },
  {
    id: "cvc",
    title: "CVC",
    required: true,
    placeholder: "CVC",
    mask: "999",
    pattern: /\d{3}$/,
  },
];

export const questionsForm = [
  {
    id: "name",
    title: "Name",
    required: true,
    placeholder: "Enter your name",
    pattern: "",
  },
  {
    id: "email",
    title: "Email",
    required: true,
    placeholder: "example@example.com",
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  {
    id: "phone",
    title: "Phone",
    required: true,
    pattern: /^\+38 \(\d{3}\) \d{3} \d{2} \d{2}$/,
    mask: "+38\\ (999) 999 99 99",
  },
];
