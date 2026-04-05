import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative bg-foreground text-primary-foreground overflow-hidden">
      {/* Wave */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg viewBox="0 0 1440 60" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,0 L0,0 Z" fill="hsl(var(--background))" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-28 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold">
              Dream<span className="text-primary">Rest</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              India's most loved sleep brand. Engineered with Japan's SmartGRID technology for the perfect night's sleep.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 rounded-full bg-primary-foreground/10 hover:bg-primary/30 transition-colors" aria-label="Social media">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider">Products</h4>
            {["Mattresses", "Pillows", "Recliners", "Bed Frames", "Comforters"].map((l) => (
              <a key={l} href="#" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{l}</a>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider">Company</h4>
            {["About Us", "Careers", "Blog", "Press", "Contact"].map((l) => (
              <a key={l} href="#" className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{l}</a>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-sm text-primary-foreground/60">Get sleep tips and exclusive offers.</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/10 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="px-5 py-3 rounded-xl gradient-primary font-semibold text-sm hover:shadow-glow transition-all">
                Join
              </button>
            </div>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> 1800-123-4567</div>
              <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> hello@dreamrest.in</div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/40">
          © 2026 DreamRest. All rights reserved. Made with ♥ for better sleep.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
