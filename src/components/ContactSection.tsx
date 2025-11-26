import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 luxury-beige">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-background mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-background/80 font-body mb-10">
            Contact us today for a free consultation and quote. Our team is ready to help bring your vision to life.
          </p>
          <Button variant="luxury" size="lg" className="font-semibold">
            Contact Us Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
