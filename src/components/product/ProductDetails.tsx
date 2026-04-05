import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProductDetails = () => (
  <section className="py-16 md:py-24">
    <div className="container max-w-5xl">
      <motion.h2
        className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Crafted for Comfort
      </motion.h2>

      {/* Feature icons */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-glow transition-all duration-500"
          >
            <motion.div
              className="h-12 w-12 rounded-full bg-muted flex items-center justify-center"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="h-6 w-6 text-foreground" />
            </motion.div>
            <h3 className="font-heading font-semibold text-foreground text-sm">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Accordion */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
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
                  <motion.div
                    key={k}
                    className="flex flex-col"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-xs text-muted-foreground">{k}</span>
                    <span className="font-semibold text-foreground">{v}</span>
                  </motion.div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="materials" className="border-border/50">
            <AccordionTrigger className="text-base font-heading font-semibold hover:no-underline">
              Materials & Construction
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed space-y-2">
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3 }}>
                • Kiln-dried hardwood frame for lasting durability
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.3 }}>
                • High-resilience foam cushions wrapped in down-alternative fiber
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.3 }}>
                • Sinuous spring suspension for optimal comfort
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.3 }}>
                • Solid walnut tapered legs (standard)
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.3 }}>
                • Performance-grade upholstery fabric
              </motion.p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="care" className="border-border/50">
            <AccordionTrigger className="text-base font-heading font-semibold hover:no-underline">
              Care Instructions
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed space-y-2">
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3 }}>
                • Vacuum regularly with upholstery attachment
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.3 }}>
                • Blot spills immediately with a clean, dry cloth
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.3 }}>
                • Professional cleaning recommended annually
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.3 }}>
                • Rotate cushions monthly for even wear
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.3 }}>
                • Keep out of direct sunlight to prevent fading
              </motion.p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="shipping" className="border-border/50">
            <AccordionTrigger className="text-base font-heading font-semibold hover:no-underline">
              Shipping & Delivery
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed space-y-2">
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3 }}>
                • Free white-glove delivery to your room of choice
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.3 }}>
                • Ships in 5-7 business days
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.3 }}>
                • Full assembly included
              </motion.p>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.3 }}>
                • Packaging removal and cleanup
              </motion.p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default ProductDetails;
