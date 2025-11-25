import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 luxury-beige">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto fade-in-up">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-background mb-6">
            Let's Transform Your Space
          </h2>
          <p className="text-xl text-background/80 font-body mb-10">
            Ready to bring your vision to life? Schedule a consultation with our design experts today.
          </p>
          <Button variant="luxury" size="lg">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
