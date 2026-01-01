export const buildWhatsAppLink = (phone: string, text?: string) => {
  const normalized = phone.replace(/\D/g, "");
  const encodedText = text ? encodeURIComponent(text) : "";

  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // Important: wa.me redirects to api.whatsapp.com which is blocked for some users.
  // Mobile: try to open the WhatsApp app directly.
  // Desktop: open WhatsApp Web.
  if (isMobile) {
    return `whatsapp://send?phone=${normalized}${encodedText ? `&text=${encodedText}` : ""}`;
  }

  return `https://web.whatsapp.com/send?phone=${normalized}${encodedText ? `&text=${encodedText}` : ""}`;
};
