import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-40 luxury-beige relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50Z' fill='%230D0D0D' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background mb-4 relative inline-block">
            Ready to Start Your Project?
            {/* Gold Underline */}
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </h2>
          <p className="text-lg md:text-xl text-background/75 font-body mb-12 mt-10 leading-relaxed">
            Contact us today for a free consultation and quote. Our team is ready to help bring your vision to life.
          </p>
          <Button 
            variant="luxury" 
            size="lg" 
            className="font-semibold rounded-full px-12 py-7 text-base border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 shadow-[0_4px_20px_rgba(197,165,107,0.3)]"
          >
            Contact Us Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
