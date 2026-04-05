import heroImg from "@/assets/hero-sleep.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-breathe" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-float" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/60 text-accent-foreground text-sm font-medium">
              <span className="w-2 h-2 rounded-full gradient-primary animate-breathe" />
              Patented SmartGRID Technology
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight text-foreground">
              Experience{" "}
              <span className="text-gradient">Smart Comfort</span>
              <br />
              Like Never Before
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Japan's revolutionary SmartGRID technology adapts to your body, providing perfect pressure relief and unmatched breathability for the sleep you deserve.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center px-8 py-4 rounded-full gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Shop Now
              </a>
              <a
                href="#technology"
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-primary/20 text-foreground font-semibold hover:bg-primary/5 transition-all duration-300"
              >
                Explore Technology
              </a>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-foreground">10L+</div>
                <div className="text-sm text-muted-foreground">Happy Sleepers</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground">4.8★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="text-2xl font-bold text-foreground">10yr</div>
                <div className="text-sm text-muted-foreground">Warranty</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={heroImg}
                alt="Premium smart mattress in a serene bedroom with calming ambient lighting"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 animate-float hidden sm:block">
              <div className="text-sm font-semibold text-foreground">SmartGRID™</div>
              <div className="text-xs text-muted-foreground">3000+ air channels</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
