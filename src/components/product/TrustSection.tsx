import { motion } from "framer-motion";
import { Truck, Shield, RotateCcw, Award, Lock, Leaf } from "lucide-react";

const trustItems = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Premium white-glove delivery & setup to your room",
    feature: "5-7 business days",
  },
  {
    icon: Shield,
    title: "5-Year Warranty",
    description: "Complete coverage on frame, foam, and fabric",
    feature: "Full protection",
  },
  {
    icon: RotateCcw,
    title: "365-Day Returns",
    description: "Hassle-free returns within a year of purchase",
    feature: "No questions asked",
  },
  {
    icon: Award,
    title: "Certified Quality",
    description: "Tested and certified by independent labs",
    feature: "Premium standards",
  },
  {
    icon: Lock,
    title: "Secure Payment",
    description: "Bank-level encryption for all transactions",
    feature: "100% protected",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainably sourced materials and ethical production",
    feature: "Certified sustainable",
  },
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Why Choose MAISON
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We stand behind every piece we create with industry-leading warranties, sustainable practices, and exceptional customer service.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-glow transition-all duration-500"
              >
                <motion.div
                  className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-muted mb-4"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="h-7 w-7 text-foreground" />
                </motion.div>

                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.description}
                </p>
                <motion.div
                  className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.feature}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-muted-foreground mb-4">
            Have questions? Our design experts are here to help.
          </p>
          <motion.button
            className="px-8 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Chat with an Expert
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
