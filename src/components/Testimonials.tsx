import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  { name: "Priya Sharma", role: "Verified Buyer", rating: 5, text: "Best mattress I've ever slept on! The SmartGRID technology really makes a difference. My back pain is completely gone after just 2 weeks.", avatar: "PS" },
  { name: "Rahul Kapoor", role: "Verified Buyer", rating: 5, text: "The quality is outstanding. It stays cool all night even in Delhi summers. Worth every rupee spent on this mattress!", avatar: "RK" },
  { name: "Ananya Desai", role: "Verified Buyer", rating: 5, text: "I was skeptical at first, but the 100-night trial convinced me. Now I can't imagine sleeping on anything else. My sleep score improved by 40%!", avatar: "AD" },
  { name: "Vikram Singh", role: "Verified Buyer", rating: 4, text: "Great support and comfort. The recliner is perfect for reading and watching TV. Delivery was quick and the setup team was professional.", avatar: "VS" },
];

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIdx((i) => (i + 1) % reviews.length);
  const review = reviews[idx];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold font-heading text-foreground">
            Loved by <span className="text-gradient">Thousands</span>
          </h2>
          <p className="text-muted-foreground text-lg">Real reviews from real sleepers.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-8 lg:p-12 text-center relative">
            <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />
            <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic">
              "{review.text}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {review.avatar}
              </div>
              <div className="text-left">
                <div className="font-bold text-foreground">{review.name}</div>
                <div className="text-sm text-muted-foreground">{review.role}</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 mt-4 text-amber-400">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 rounded-full glass hover:shadow-glow transition-all" aria-label="Previous review">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === idx ? "gradient-primary w-8" : "bg-muted-foreground/30"}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-3 rounded-full glass hover:shadow-glow transition-all" aria-label="Next review">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
