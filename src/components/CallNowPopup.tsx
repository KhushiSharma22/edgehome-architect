import { useState, useEffect } from "react";
import { Phone, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CallNowPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the popup in this session
    const dismissed = sessionStorage.getItem("callPopupDismissed");
    if (dismissed) return;

    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("callPopupDismissed", "true");
    }, 400);
  };

  const handleCall = () => {
    window.location.href = "tel:+919871522556";
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              duration: 0.5 
            }}
            className="fixed left-1/2 top-1/2 z-[101] -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-background via-background to-muted border border-primary/20 shadow-2xl shadow-primary/20">
              {/* Animated background glow */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-primary/20 via-transparent to-transparent animate-pulse" />
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-primary/15 via-transparent to-transparent animate-pulse delay-500" />
              </div>

              {/* Content */}
              <div className="relative px-8 py-10 sm:px-12 sm:py-12">
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute right-4 top-4 p-2 rounded-full bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-300 group"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Sparkle decoration */}
                <div className="absolute top-6 left-6">
                  <Sparkles className="w-5 h-5 text-primary/50 animate-pulse" />
                </div>

                {/* Phone icon with ring animation */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 animate-ping rounded-full bg-primary/30" style={{ animationDuration: '2s' }} />
                    <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
                    
                    {/* Icon container */}
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/40">
                      <Phone className="w-9 h-9 text-primary-foreground animate-bounce" style={{ animationDuration: '2s' }} />
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">
                    Let's Create
                    <span className="block text-gradient-gold">Something Beautiful</span>
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base max-w-xs mx-auto leading-relaxed">
                    Speak directly with our design experts for a personalized consultation
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleCall}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary via-primary to-primary/90 px-8 py-4 text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02]"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <span className="relative flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </span>
                </button>

                {/* Phone number display */}
                <p className="text-center mt-4 text-sm text-muted-foreground">
                  +91 98715 22556
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CallNowPopup;
