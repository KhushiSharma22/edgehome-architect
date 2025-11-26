const IntroSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Heading */}
          <div className="fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
              Complete Interior<br />Design & Construction<br />Services
            </h2>
          </div>

          {/* Right - Description */}
          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-base text-muted-foreground font-body leading-relaxed mb-6">
              KR Construction is a trusted name in Delhi for comprehensive interior design and construction services. 
              With extensive experience and a commitment to quality, we deliver projects that meet the highest standards.
            </p>
            <p className="text-base text-muted-foreground font-body leading-relaxed mb-6">
              Our team combines technical expertise with creative design to create functional, aesthetically pleasing spaces 
              for residential and commercial clients across Delhi.
            </p>
            <p className="text-base text-muted-foreground font-body leading-relaxed">
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
