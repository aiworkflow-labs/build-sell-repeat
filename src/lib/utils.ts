import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { WHATSAPP_BASE_URL } from "@/lib/constants";

/** Merge conditional class names, resolving Tailwind conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Build a WhatsApp click-to-chat link with an optional pre-filled message. */
export function whatsappLink(number: string, message?: string) {
  const url = `${WHATSAPP_BASE_URL}/${number}`;
  return message ? `${url}?text=${encodeURIComponent(message)}` : url;
}

/** Format an amount with a currency symbol using Indian digit grouping. */
export function formatPrice(amount: number, currency = "₹") {
  return `${currency}${amount.toLocaleString("en-IN")}`;
}

/** Resolve a path against the site origin into an absolute URL. */
export function absoluteUrl(path: string, base: string) {
  return new URL(path, base).toString();
}
