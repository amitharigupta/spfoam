import { useState } from "react";
import { Star, ShoppingCart } from "lucide-react";
import mattressImg from "@/assets/mattress-product.jpg";
import pillowImg from "@/assets/pillow-product.jpg";
import reclinerImg from "@/assets/recliner-product.jpg";

const products = [
  {
    id: 1,
    name: "Smart Luxe Mattress",
    tag: "Bestseller",
    price: 24999,
    originalPrice: 34999,
    rating: 4.8,
    reviews: 12453,
    image: mattressImg,
    feature: "SmartGRID Technology",
  },
  {
    id: 2,
    name: "SmartGRID Pillow",
    tag: "New",
    price: 2999,
    originalPrice: 4499,
    rating: 4.7,
    reviews: 8321,
    image: pillowImg,
    feature: "Adaptive Support",
  },
  {
    id: 3,
    name: "Smart Recliner",
    tag: "Premium",
    price: 44999,
    originalPrice: 59999,
    rating: 4.9,
    reviews: 3245,
    image: reclinerImg,
    feature: "Zero Gravity Mode",
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const [hovered, setHovered] = useState(false);
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <div
      className="group relative bg-card rounded-2xl overflow-hidden shadow-card transition-all duration-500 hover:shadow-glow"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "perspective(1000px) rotateY(-2deg) rotateX(2deg) scale(1.02)" : "perspective(1000px) rotateY(0) rotateX(0) scale(1)",
        transition: "transform 0.5s ease",
      }}
    >
      <div className="relative overflow-hidden bg-muted/30 p-6">
        <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-bold">
          {product.tag}
        </span>
        <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-bold">
          {discount}% OFF
        </span>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-64 object-contain transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-muted-foreground">{product.rating} ({product.reviews.toLocaleString()})</span>
        </div>
        <h3 className="text-lg font-bold font-heading text-foreground">{product.name}</h3>
        <div className="text-xs font-medium text-primary px-2 py-1 bg-primary/5 rounded-md inline-block">
          {product.feature}
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-foreground">₹{product.price.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
          </div>
          <button className="p-3 rounded-full gradient-primary text-primary-foreground shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-110" aria-label="Add to cart">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductShowcase = () => (
  <section id="products" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl lg:text-5xl font-bold font-heading text-foreground">
          Our <span className="text-gradient">Bestsellers</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Engineered for the perfect night's sleep with Japan's patented SmartGRID technology.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductShowcase;
