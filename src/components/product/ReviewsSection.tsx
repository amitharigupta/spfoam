import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ThumbsUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  { name: "Sarah M.", date: "March 2026", rating: 5, title: "Absolutely stunning", body: "This sofa exceeded all expectations. The fabric is luxurious, the comfort is incredible, and it looks even better in person than in photos.", helpful: 24, verified: true },
  { name: "James K.", date: "February 2026", rating: 5, title: "Worth every penny", body: "We spent months looking for the perfect sofa. The Aubrey is it — beautiful, comfortable, and incredibly well-made. The delivery team was fantastic too.", helpful: 18, verified: true },
  { name: "Emily R.", date: "January 2026", rating: 4, title: "Beautiful but firm", body: "Gorgeous sofa with excellent build quality. It's a bit firmer than expected but breaking in nicely. The velvet sage fabric is absolutely beautiful.", helpful: 12, verified: true },
  { name: "Michael D.", date: "December 2025", rating: 5, title: "Perfect centerpiece", body: "This sofa transformed our living room. The mid-century design is timeless and the quality is exceptional for the price point.", helpful: 9, verified: true },
];

const ratingDist = [85, 10, 3, 1, 1];

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

const ReviewsSection = () => {
  const [sortBy, setSortBy] = useState("Most Helpful");
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container max-w-5xl">
        <motion.h2
          className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Customer Reviews
        </motion.h2>

        {/* Summary */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-2 md:pr-8 md:border-r border-border">
            <motion.span
              className="text-5xl font-heading font-bold text-foreground"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              4.8
            </motion.span>
            <motion.div
              className="flex gap-0.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                >
                  <Star className={`h-5 w-5 ${i < 5 ? "fill-amber-400 text-amber-400" : "text-border"}`} />
                </motion.div>
              ))}
            </motion.div>
            <span className="text-sm text-muted-foreground">Based on 127 reviews</span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            {ratingDist.map((pct, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              >
                <span className="w-8 text-right text-muted-foreground">{5 - i}★</span>
                <div className="flex-1 h-2 rounded-full bg-border overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-amber-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 1 }}
                  />
                </div>
                <span className="w-10 text-right text-muted-foreground">{pct}%</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sort */}
        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="text-sm text-muted-foreground">127 reviews</span>
          <motion.button
            className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sort: {sortBy} <ChevronDown className="h-4 w-4" />
          </motion.button>
        </motion.div>

        {/* Reviews list */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {(showAll ? reviews : reviews.slice(0, 3)).map((r, i) => (
              <motion.div
                key={r.name}
                variants={itemVariants}
                whileHover={{ y: -4, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-glow transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-semibold text-foreground">{r.name}</span>
                      {r.verified && (
                        <motion.span
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          Verified
                        </motion.span>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 + j * 0.05 }}
                      >
                        <Star
                          className={`h-3.5 w-3.5 ${j < r.rating ? "fill-amber-400 text-amber-400" : "text-border"}`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{r.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
                <motion.button
                  className="flex items-center gap-1.5 mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ThumbsUp className="h-3.5 w-3.5" /> Helpful ({r.helpful})
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {!showAll && (
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                onClick={() => setShowAll(true)}
                className="rounded-full px-8"
              >
                Show All Reviews
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
