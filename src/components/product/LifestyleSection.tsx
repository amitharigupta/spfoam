import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import lifestyleImg from "@/assets/sofa-lifestyle.jpg";

const LifestyleSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${lifestyleImg})`,
          y,
        }}
      />

      {/* Gradient overlay */}
      <motion.div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-foreground/20" style={{ opacity }} />

      {/* Content */}
      <motion.div
        className="relative h-full flex items-center justify-center text-center px-6"
        style={{ opacity }}
      >
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-heading font-bold text-card mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Designed for Living
          </motion.h2>
          <motion.p
            className="text-lg text-card/80 font-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Every curve, every stitch — meticulously crafted to elevate your everyday moments.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LifestyleSection;
