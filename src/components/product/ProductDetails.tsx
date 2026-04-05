import { Ruler, Layers, Sparkles, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { icon: Layers, title: "Premium Materials", desc: "Kiln-dried hardwood frame with sinuous spring support" },
  { icon: Sparkles, title: "Stain Resistant", desc: "Performance fabric repels spills and pet hair" },
  { icon: ShieldCheck, title: "Built to Last", desc: "5-year warranty on frame, foam, and fabric" },
  { icon: Ruler, title: "Perfect Fit", desc: "Customizable dimensions for your space" },
];

const ProductDetails = () => (
  <section className="py-16 md:py-24">
    <div className="container max-w-5xl">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-12">
        Crafted for Comfort
      </h2>

      {/* Feature icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
          >
            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
              <Icon className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-foreground text-sm">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* Accordion */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="dimensions" className="border-border/50">
          <AccordionTrigger className="text-base font-heading font-semibold hover:no-underline">
            Dimensions
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {[
                ["Width", '84"'],
                ["Depth", '36"'],
                ["Height", '33"'],
                ["Seat Height", '18"'],
                ["Seat Depth", '22"'],
                ["Arm Height", '25"'],
                ["Leg Height", '6"'],
                ["Weight", "85 lbs"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col">
                  <span className="text-xs text-muted-foreground">{k}</span>
                  <span className="font-semibold text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="materials" className="border-border/50">
          <AccordionTrigger className="text-base font-heading font-semibold hover:no-underline">
            Materials & Construction
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground leading-relaxed space-y-2">
            <p>• Kiln-dried hardwood frame for lasting durability</p>
            <p>• High-resilience foam cushions wrapped in down-alternative fiber</p>
            <p>• Sinuous spring suspension for optimal comfort</p>
            <p>• Solid walnut tapered legs (standard)</p>
            <p>• Performance-grade upholstery fabric</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="care" className="border-border/50">
          <AccordionTrigger className="text-base font-heading font-semibold hover:no-underline">
            Care Instructions
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground leading-relaxed space-y-2">
            <p>• Vacuum regularly with upholstery attachment</p>
            <p>• Blot spills immediately with a clean, dry cloth</p>
            <p>• Professional cleaning recommended annually</p>
            <p>• Rotate cushions monthly for even wear</p>
            <p>• Keep out of direct sunlight to prevent fading</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="shipping" className="border-border/50">
          <AccordionTrigger className="text-base font-heading font-semibold hover:no-underline">
            Shipping & Delivery
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground leading-relaxed space-y-2">
            <p>• Free white-glove delivery to your room of choice</p>
            <p>• Ships in 5-7 business days</p>
            <p>• Full assembly included</p>
            <p>• Packaging removal and cleanup</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
);

export default ProductDetails;
