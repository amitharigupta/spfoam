import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is SmartGRID Technology?", a: "SmartGRID is a patented hyper-elastic polymer grid with 2500+ air channels that provides perfect pressure relief, body adaptability, and superior airflow. Unlike memory foam, it doesn't trap heat or cause a sinking feeling." },
  { q: "Do you offer a trial period?", a: "Yes! We offer a 100-night risk-free trial. If you're not completely satisfied, we'll pick up the mattress and give you a full refund — no questions asked." },
  { q: "How long does delivery take?", a: "We deliver across India within 5-7 business days. For metro cities, expect delivery in 3-4 days. Installation is free and handled by our trained team." },
  { q: "What warranty do you provide?", a: "All our mattresses come with a 10-year warranty covering manufacturing defects. Our pillows have a 3-year warranty and recliners have a 5-year warranty." },
  { q: "Is the mattress suitable for back pain?", a: "Absolutely. The SmartGRID technology provides targeted pressure relief and spinal alignment, making it highly recommended by orthopedic doctors for back pain relief." },
];

const FAQSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl lg:text-5xl font-bold font-heading text-foreground">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-xl border-none px-6">
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
