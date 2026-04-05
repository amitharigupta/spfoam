import { useState } from "react";
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

const ProductInfo = () => {
  const [selectedFabric, setSelectedFabric] = useState(0);
  const [selectedLeg, setSelectedLeg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="hover:text-foreground cursor-pointer transition-colors">Home</span>
        <span>/</span>
        <span className="hover:text-foreground cursor-pointer transition-colors">Sofas</span>
        <span>/</span>
        <span className="text-foreground">Aubrey Sofa</span>
      </nav>

      {/* Title & Price */}
      <div>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight">
          Aubrey Sofa
        </h1>
        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/30 text-amber-400/30"}`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">4.8 (127 reviews)</span>
        </div>
        <div className="flex items-baseline gap-3 mt-4">
          <span className="text-3xl font-heading font-bold text-foreground">$1,899</span>
          <span className="text-lg text-muted-foreground line-through">$2,299</span>
          <span className="text-sm font-semibold px-2 py-0.5 rounded-full bg-destructive/10 text-destructive">
            17% OFF
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">or $158/mo with 12-month financing</p>
      </div>

      {/* Fabric Selector */}
      <div>
        <p className="text-sm font-semibold text-foreground mb-3">
          Fabric: <span className="font-normal text-muted-foreground">{fabrics[selectedFabric].name}</span>
        </p>
        <div className="flex flex-wrap gap-3">
          {fabrics.map((f, i) => (
            <button
              key={i}
              onClick={() => setSelectedFabric(i)}
              title={f.name}
              className={`h-10 w-10 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                i === selectedFabric
                  ? "border-foreground scale-110 shadow-soft"
                  : "border-border"
              }`}
              style={{ backgroundColor: f.color }}
            />
          ))}
        </div>
      </div>

      {/* Leg Style */}
      <div>
        <p className="text-sm font-semibold text-foreground mb-3">
          Legs: <span className="font-normal text-muted-foreground">{legs[selectedLeg]}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {legs.map((leg, i) => (
            <button
              key={i}
              onClick={() => setSelectedLeg(i)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                i === selectedLeg
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {leg}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-sm font-semibold text-foreground mb-3">Quantity</p>
        <div className="inline-flex items-center border border-border rounded-full">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-10 text-center font-semibold text-foreground">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          size="lg"
          className="flex-1 h-14 text-base font-semibold rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
        >
          Add to Cart — ${(1899 * quantity).toLocaleString()}
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="h-14 text-base font-semibold rounded-full border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Customize
        </Button>
      </div>

      {/* Action icons */}
      <div className="flex gap-4">
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Heart className={`h-5 w-5 transition-all ${wishlisted ? "fill-destructive text-destructive" : ""}`} />
          {wishlisted ? "Saved" : "Save"}
        </button>
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <Share2 className="h-5 w-5" /> Share
        </button>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
        {[
          { icon: Truck, label: "Free Shipping", sub: "5-7 business days" },
          { icon: Shield, label: "5-Year Warranty", sub: "Full coverage" },
          { icon: RotateCcw, label: "365-Day Returns", sub: "Hassle-free" },
        ].map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex flex-col items-center text-center gap-1.5">
            <Icon className="h-5 w-5 text-muted-foreground" />
            <span className="text-xs font-semibold text-foreground">{label}</span>
            <span className="text-[10px] text-muted-foreground">{sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
