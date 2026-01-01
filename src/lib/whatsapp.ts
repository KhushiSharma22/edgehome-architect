export const buildWhatsAppLink = (phone: string, text?: string) => {
  const normalized = phone.replace(/\D/g, "");
  const encodedText = text ? encodeURIComponent(text) : "";

  // Most web endpoints (web.whatsapp.com / api.whatsapp.com) are blocked on some networks.
  // This tries to open the WhatsApp app directly.
  return `whatsapp://send?phone=${normalized}${encodedText ? `&text=${encodedText}` : ""}`;
};

