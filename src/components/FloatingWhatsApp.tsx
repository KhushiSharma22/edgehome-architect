import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const FloatingWhatsApp = () => {
  return (
    <a
      href={buildWhatsAppLink(
        "919871522556",
        "Hi, I'm interested in interior design services."
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 w-14 h-14 rounded-full bg-primary/30 animate-ping" />
        
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-card border border-border rounded-lg px-3 py-2 whitespace-nowrap shadow-lg">
            <span className="text-sm text-foreground">Chat with us</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
