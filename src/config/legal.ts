import { siteConfig } from "@/config/site";

/**
 * Legal content (single source of truth) for the Privacy Policy and Terms of
 * Service pages. Kept as structured data so the copy can be edited without
 * touching the page components. Written in plain, professional English for a
 * small, India-based, one-person service.
 */
export type LegalSection = {
  heading: string;
  body: string[];
};

export type LegalDoc = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

const contactLine = `You can reach us on WhatsApp at +91 85058 23254 or by email at ${siteConfig.contact.email}.`;

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  updated: "Last updated: July 2026",
  intro:
    "Build. Sell. Repeat. (\u201cwe\u201d, \u201cus\u201d) helps small businesses set up simple ordering pages that send orders to WhatsApp. We keep the information we collect to a minimum, and this page explains what we collect and how we use it.",
  sections: [
    {
      heading: "Information we collect",
      body: [
        "When you contact us, we collect the details you choose to share — such as your name, business name, phone number, and the products, prices, and photos you send us to build your ordering page.",
        "We do not ask for sensitive information, and we never request payment card details over chat.",
      ],
    },
    {
      heading: "WhatsApp communication",
      body: [
        "Most of our conversation happens on WhatsApp. Those messages are protected by WhatsApp's own end-to-end encryption, and we only use them to understand your needs, build your page, and provide support.",
        "We do not add you to marketing broadcasts or share your number with third parties.",
      ],
    },
    {
      heading: "How we use your information",
      body: [
        "We use the information you share only to design and set up your ordering page, to communicate with you about your project, and to provide help after your page goes live.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "This website does not use tracking or advertising cookies. If we add basic, privacy-friendly analytics in the future to understand how the site is used, we will update this page.",
      ],
    },
    {
      heading: "How your ordering page handles orders",
      body: [
        "The ordering pages we build for you don't store customer data on a server. When a customer places an order, the details are sent directly to your WhatsApp so you can fulfil it. You remain responsible for how you handle your own customers' information.",
      ],
    },
    {
      heading: "Sharing and retention",
      body: [
        "We do not sell or rent your information. We keep the details you share only for as long as needed to deliver and support your page. You can ask us to delete your information at any time.",
      ],
    },
    {
      heading: "Contact",
      body: [
        `If you have any questions about your privacy or want your information removed, just reach out. ${contactLine}`,
      ],
    },
  ],
};

export const termsOfService: LegalDoc = {
  title: "Terms of Service",
  updated: "Last updated: July 2026",
  intro:
    "These terms explain what you can expect from Build. Sell. Repeat. and what we expect from you. By ordering an ordering page from us, you agree to the terms below.",
  sections: [
    {
      heading: "What we provide",
      body: [
        "We design and set up a custom, mobile-first ordering page for your business. Customers can browse your products and send their order straight to your WhatsApp. It's a one-time setup with no monthly fees — the page is yours to keep.",
      ],
    },
    {
      heading: "Delivery",
      body: [
        "We aim to deliver your ordering page within about 48 hours after you've sent us everything we need — your products, prices, and photos. If we're waiting on details from you, the timeline starts once we receive them.",
      ],
    },
    {
      heading: "Payment",
      body: [
        "The price is a one-time payment, agreed with you before we begin. We start building once payment is confirmed. There are no recurring charges or hidden fees.",
      ],
    },
    {
      heading: "Revisions and refunds",
      body: [
        "We want you to be happy with your page, so free minor revisions are included after delivery. If something isn't right, tell us and we'll fix it.",
        "Because each page is custom and work begins quickly, we're unable to offer refunds once your page has been delivered. If you change your mind before we've started building, we'll refund your payment in full.",
      ],
    },
    {
      heading: "Your responsibilities",
      body: [
        "You're responsible for making sure the product details, prices, and photos you send us are accurate and that you have the right to use them. You're also responsible for fulfilling the orders your customers place and for following the laws that apply to your business.",
      ],
    },
    {
      heading: "Ownership",
      body: [
        "Once your page is delivered and paid for, it's yours. Your business name, logo, and content remain yours at all times.",
      ],
    },
    {
      heading: "Limitation of liability",
      body: [
        "We build your page with care, but we can't guarantee a specific number of orders or sales. To the extent allowed by law, we aren't liable for indirect losses, and our total responsibility is limited to the amount you paid us.",
      ],
    },
    {
      heading: "Contact",
      body: [`Questions about these terms? We're happy to help. ${contactLine}`],
    },
  ],
};
