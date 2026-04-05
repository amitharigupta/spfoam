import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How long will my sofa take to arrive?", a: "Standard delivery takes 5-7 business days. Custom orders may take 4-6 weeks depending on fabric and configuration." },
  { q: "Can I see fabric samples before ordering?", a: "Yes! We offer free fabric swatches. Order up to 5 samples and they'll arrive within 2-3 business days." },
  { q: "What's included in the warranty?", a: "Our 5-year warranty covers the frame, springs, cushion cores, and fabric defects. Normal wear and tear is not covered." },
  { q: "Can I return the sofa if I don't love it?", a: "Absolutely. Our 365-day return policy lets you live with it. If it's not right, we'll arrange free pickup and issue a full refund." },
  { q: "Do you offer financing?", a: "Yes, we partner with Affirm to offer 0% APR financing for up to 12 months on qualifying purchases. Apply at checkout." },
  { q: "How do I clean my sofa?", a: "Vacuum regularly and blot spills immediately. Our performance fabrics are designed to resist stains. Professional cleaning is recommended annually." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

const ProductFAQ = () => (
  <section className="py-16 md:py-24">
    <div className="container max-w-3xl">
      <motion.h2
        className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={itemVariants}>
              <AccordionItem value={`faq-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left text-base font-heading font-semibold hover:no-underline hover:text-primary transition-colors duration-300">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.a}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <p className="text-muted-foreground mb-4">
          Still have questions? Our team is here to help.
        </p>
        <motion.button
          className="px-8 py-3 rounded-full bg-muted border border-border text-foreground font-semibold text-sm hover:bg-foreground hover:text-background transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Support
        </motion.button>
      </motion.div>
    </div>
  </section>
);

export default ProductFAQ;
