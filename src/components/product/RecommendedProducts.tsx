import { motion } from "framer-motion";
import recChair from "@/assets/rec-chair.jpg";
import recSectional from "@/assets/rec-sectional.jpg";
import recLoveseat from "@/assets/rec-loveseat.jpg";
import recTable from "@/assets/rec-table.jpg";

const products = [
  { name: "Elara Accent Chair", price: "$799", img: recChair, tag: "New" },
  { name: "Nova Sectional", price: "$2,499", img: recSectional, tag: "Best Seller" },
  { name: "Petal Loveseat", price: "$1,299", img: recLoveseat, tag: null },
  { name: "Orbit Coffee Table", price: "$449", img: recTable, tag: null },
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const RecommendedProducts = () => (
  <section className="py-16 md:py-24 bg-gradient-to-b from-background via-background to-muted/20">
    <div className="container">
      <motion.h2
        className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        You May Also Love
      </motion.h2>
      <motion.div
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {products.map((p, idx) => (
          <motion.div
            key={p.name}
            variants={itemVariants}
            className="flex-none w-64 md:w-72 snap-start group cursor-pointer"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative aspect-square rounded-2xl overflow-hidden bg-muted mb-4 shadow-card hover:shadow-glow transition-all duration-500"
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7 }}
              />
              {p.tag && (
                <motion.span
                  className="absolute top-3 left-3 text-[10px] font-bold px-3 py-1 rounded-full bg-card/90 backdrop-blur text-foreground"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {p.tag}
                </motion.span>
              )}
              <motion.div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />

              {/* Quick view button on hover */}
              <motion.button
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  className="px-6 py-2 rounded-full bg-foreground text-background font-semibold text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Quick View
                </motion.div>
              </motion.button>
            </motion.div>
            <motion.h3
              className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.05, duration: 0.5 }}
            >
              {p.name}
            </motion.h3>
            <motion.p
              className="text-sm text-muted-foreground mt-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.05, duration: 0.5 }}
            >
              {p.price}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default RecommendedProducts;
