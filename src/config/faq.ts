/**
 * FAQ content (single source of truth).
 *
 * The most common questions a business owner asks before ordering. Kept as
 * data so questions and answers can change without touching the component.
 */
export type FaqItem = {
  question: string;
  answer: string;
};

export const faqHeading = {
  title: "Frequently asked questions",
  supporting: "Everything you might want to know before we get started.",
};

export const faqItems: FaqItem[] = [
  {
    question: "How long does it take?",
    answer:
      "Most ordering pages are delivered within 48 hours after we receive your products, prices, and photos.",
  },
  {
    question: "Do I have to pay every month?",
    answer:
      "No. This is a one-time payment. Once your ordering page is built, it's yours.",
  },
  {
    question: "Can I update products later?",
    answer:
      "Yes. Minor updates are included after delivery, and additional changes can be requested anytime.",
  },
  {
    question: "How do customers place orders?",
    answer:
      "Customers tap the link in your Instagram bio, choose their products, and the completed order is sent directly to your WhatsApp.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer:
      "Not at all. Just send your product details over WhatsApp and we'll handle everything else.",
  },
];
