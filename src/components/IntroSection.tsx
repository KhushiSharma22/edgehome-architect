const IntroSection = () => {
  return (
    <section id="about" className="py-32 luxury-warm-beige">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start max-w-6xl mx-auto">
          {/* Left - Heading with Gold Divider */}
          <div className="fade-in-up relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background leading-[1.2] mb-8">
              Complete Interior<br />Design & Construction<br />Services
            </h2>
            <div className="gold-divider"></div>
          </div>

          {/* Vertical Gold Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>

          {/* Right - Description */}
          <div className="fade-in-up space-y-6" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-background/80 font-body leading-relaxed">
              EdgeHomes Architects and Construction is a trusted name in Pitampura, Delhi for comprehensive interior design and construction services. 
              With extensive experience and a commitment to quality, we deliver projects that meet the highest standards.
            </p>
            <p className="text-lg text-background/80 font-body leading-relaxed">
              Our team combines technical expertise with creative design to create functional, aesthetically pleasing spaces 
              for residential and commercial clients across Delhi.
            </p>
            <p className="text-lg text-background/80 font-body leading-relaxed">
              From initial design to final execution, we provide end-to-end solutions with transparent processes, 
              timely delivery, and cost-effective results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
