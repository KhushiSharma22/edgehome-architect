const IntroSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Heading */}
          <div className="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight">
              Providing<br />Everything<br />You Need
            </h2>
          </div>

          {/* Right - Description */}
          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
              At Dzign Tales Studio, we believe that exceptional interior design is where luxury meets functionality. 
              With years of expertise in creating bespoke spaces, we transform your vision into reality.
            </p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
              Our design philosophy centers on creating timeless interiors that reflect your personality while 
              incorporating premium materials and cutting-edge design trends.
            </p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              From concept to completion, we deliver turnkey solutions that exceed expectations, ensuring every 
              detail is meticulously crafted to perfection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
