export const buildWhatsAppLink = (phone: string, text?: string) => {
  const normalized = phone.replace(/\D/g, "");
  const defaultText = "Hi, I'm interested in architectural services.";
  const finalText = (text ?? defaultText).trim();
  const encodedText = finalText ? encodeURIComponent(finalText) : "";

  // Most web endpoints (web.whatsapp.com / api.whatsapp.com) are blocked on some networks.
  // This tries to open the WhatsApp app directly.
  return `whatsapp://send?phone=${normalized}${encodedText ? `&text=${encodedText}` : ""}`;
};

