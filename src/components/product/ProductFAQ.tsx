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

const ProductFAQ = () => (
  <section className="py-16 md:py-24">
    <div className="container max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-12">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
            <AccordionTrigger className="text-left text-base font-heading font-semibold hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default ProductFAQ;
