import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Heart, Share2, Truck, Shield, RotateCcw, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const fabrics = [
  { name: "Linen Beige", color: "#D4C5A9" },
  { name: "Velvet Sage", color: "#8B9E7E" },
  { name: "Boucle Cream", color: "#F0EAE0" },
  { name: "Tweed Charcoal", color: "#4A4A4A" },
  { name: "Velvet Blush", color: "#D4A5A5" },
  { name: "Linen Navy", color: "#2C3E60" },
];

const legs = ["Walnut", "Oak", "Black Metal", "Brass"];

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

const ProductInfo = () => {
  const [selectedFabric, setSelectedFabric] = useState(0);
  const [selectedLeg, setSelectedLeg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <motion.div
      className="flex flex-col gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Breadcrumb */}
      <motion.nav className="flex items-center gap-2 text-sm text-muted-foreground" variants={itemVariants}>
        <span className="hover:text-foreground cursor-pointer transition-colors">Home</span>
        <span>/</span>
        <span className="hover:text-foreground cursor-pointer transition-colors">Sofas</span>
        <span>/</span>
        <span className="text-foreground">Aubrey Sofa</span>
      </motion.nav>

      {/* Title & Price */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight">
          Aubrey Sofa
        </h1>
        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.05 }}>
                <Star
                  className={`h-4 w-4 ${i < 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/30 text-amber-400/30"}`}
                />
              </motion.div>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">4.8 (127 reviews)</span>
        </div>
        <div className="flex items-baseline gap-3 mt-4">
          <span className="text-3xl font-heading font-bold text-foreground">$1,899</span>
          <span className="text-lg text-muted-foreground line-through">$2,299</span>
          <motion.span
            className="text-sm font-semibold px-2 py-0.5 rounded-full bg-destructive/10 text-destructive"
            whileHover={{ scale: 1.05 }}
          >
            17% OFF
          </motion.span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">or $158/mo with 12-month financing</p>
      </motion.div>

      {/* Fabric Selector */}
      <motion.div variants={itemVariants}>
        <p className="text-sm font-semibold text-foreground mb-3">
          Fabric: <span className="font-normal text-muted-foreground">{fabrics[selectedFabric].name}</span>
        </p>
        <div className="flex flex-wrap gap-3">
          {fabrics.map((f, i) => (
            <motion.button
              key={i}
              onClick={() => setSelectedFabric(i)}
              title={f.name}
              className={`h-10 w-10 rounded-full border-2 transition-all duration-300 ${
                i === selectedFabric
                  ? "border-foreground shadow-soft"
                  : "border-border"
              }`}
              style={{ backgroundColor: f.color }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: i === selectedFabric ? 1.1 : 1,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Leg Style */}
      <motion.div variants={itemVariants}>
        <p className="text-sm font-semibold text-foreground mb-3">
          Legs: <span className="font-normal text-muted-foreground">{legs[selectedLeg]}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {legs.map((leg, i) => (
            <motion.button
              key={i}
              onClick={() => setSelectedLeg(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                i === selectedLeg
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {leg}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Quantity */}
      <motion.div variants={itemVariants}>
        <p className="text-sm font-semibold text-foreground mb-3">Quantity</p>
        <div className="inline-flex items-center border border-border rounded-full">
          <motion.button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Minus className="h-4 w-4" />
          </motion.button>
          <motion.span className="w-10 text-center font-semibold text-foreground" key={quantity} initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            {quantity}
          </motion.span>
          <motion.button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Plus className="h-4 w-4" />
          </motion.button>
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div className="flex flex-col sm:flex-row gap-3" variants={itemVariants}>
        <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            size="lg"
            className="w-full h-14 text-base font-semibold rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
          >
            Add to Cart — ${(1899 * quantity).toLocaleString()}
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            size="lg"
            variant="outline"
            className="h-14 text-base font-semibold rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Customize
          </Button>
        </motion.div>
      </motion.div>

      {/* Action icons */}
      <motion.div className="flex gap-4" variants={itemVariants}>
        <motion.button
          onClick={() => setWishlisted(!wishlisted)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div animate={{ scale: wishlisted ? [1, 1.3, 1] : 1 }} transition={{ duration: 0.3 }}>
            <Heart className={`h-5 w-5 transition-all ${wishlisted ? "fill-destructive text-destructive" : ""}`} />
          </motion.div>
          {wishlisted ? "Saved" : "Save"}
        </motion.button>
        <motion.button
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Share2 className="h-5 w-5" /> Share
        </motion.button>
      </motion.div>

      {/* Trust badges */}
      <motion.div className="grid grid-cols-3 gap-4 pt-4 border-t border-border" variants={itemVariants}>
        {[
          { icon: Truck, label: "Free Shipping", sub: "5-7 business days" },
          { icon: Shield, label: "5-Year Warranty", sub: "Full coverage" },
          { icon: RotateCcw, label: "365-Day Returns", sub: "Hassle-free" },
        ].map(({ icon: Icon, label, sub }, idx) => (
          <motion.div
            key={label}
            className="flex flex-col items-center text-center gap-1.5"
            whileHover={{ scale: 1.05, y: -4 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + idx * 0.1 }}
          >
            <Icon className="h-5 w-5 text-muted-foreground" />
            <span className="text-xs font-semibold text-foreground">{label}</span>
            <span className="text-[10px] text-muted-foreground">{sub}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProductInfo;
