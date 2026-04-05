import { Wind, Shield, Zap, Heart, ThermometerSun, Award } from "lucide-react";

const features = [
  { icon: Zap, title: "SmartGRID Tech", desc: "2500+ air channels for unmatched breathability and support." },
  { icon: Wind, title: "Hyper Breathable", desc: "3x more airflow than memory foam for cool, comfortable sleep." },
  { icon: Shield, title: "10-Year Warranty", desc: "Built to last with the highest quality materials and craftsmanship." },
  { icon: Heart, title: "Ergonomic Design", desc: "Conforms to every curve for pressure-free, pain-free mornings." },
  { icon: ThermometerSun, title: "Temperature Neutral", desc: "No heat trapping. Stays cool in summer and warm in winter." },
  { icon: Award, title: "Award Winning", desc: "Recognized by 50+ media outlets as India's best mattress brand." },
];

const WhyChooseUs = () => (
  <section id="technology" className="py-20 lg:py-28 bg-lavender/50">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl lg:text-5xl font-bold font-heading text-foreground">
          Why <span className="text-gradient">DreamRest</span>?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Every detail is designed to help you sleep better, wake refreshed, and live fully.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="group glass rounded-2xl p-8 hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <f.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold font-heading text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
