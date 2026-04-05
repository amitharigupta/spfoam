import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock database for products
const products = [
  {
    id: 1,
    name: "Aubrey Sofa",
    price: 1899,
    originalPrice: 2299,
    rating: 4.8,
    reviewCount: 127,
    description: "Mid-century modern sofa with customizable fabrics and premium hardwood frame.",
    image: "/sofa-main.jpg",
    images: ["/sofa-main.jpg", "/sofa-angle.jpg", "/sofa-side.jpg", "/sofa-detail.jpg", "/sofa-lifestyle.jpg"],
    features: ["Premium Materials", "Stain Resistant", "Built to Last", "Perfect Fit"],
    specifications: {
      width: "84 inches",
      depth: "36 inches",
      height: "33 inches",
      weight: "85 lbs",
    },
    fabrics: [
      { name: "Linen Beige", color: "#D4C5A9" },
      { name: "Velvet Sage", color: "#8B9E7E" },
      { name: "Boucle Cream", color: "#F0EAE0" },
      { name: "Tweed Charcoal", color: "#4A4A4A" },
      { name: "Velvet Blush", color: "#D4A5A5" },
      { name: "Linen Navy", color: "#2C3E60" },
    ],
    legOptions: ["Walnut", "Oak", "Black Metal", "Brass"],
    inStock: true,
    warranty: "5-year",
  },
  {
    id: 2,
    name: "Elara Accent Chair",
    price: 799,
    rating: 4.6,
    reviewCount: 54,
    description: "Modern accent chair with elegant curves and premium upholstery.",
    image: "/rec-chair.jpg",
    inStock: true,
    tag: "New",
  },
  {
    id: 3,
    name: "Nova Sectional",
    price: 2499,
    rating: 4.9,
    reviewCount: 89,
    description: "Large sectional sofa perfect for spacious living rooms.",
    image: "/rec-sectional.jpg",
    inStock: true,
    tag: "Best Seller",
  },
];

// Mock reviews database
const reviews = [
  {
    id: 1,
    productId: 1,
    name: "Sarah M.",
    date: "March 2026",
    rating: 5,
    title: "Absolutely stunning",
    body: "This sofa exceeded all expectations. The fabric is luxurious, the comfort is incredible, and it looks even better in person than in photos.",
    helpful: 24,
    verified: true,
  },
  {
    id: 2,
    productId: 1,
    name: "James K.",
    date: "February 2026",
    rating: 5,
    title: "Worth every penny",
    body: "We spent months looking for the perfect sofa. The Aubrey is it — beautiful, comfortable, and incredibly well-made.",
    helpful: 18,
    verified: true,
  },
];

// API Routes
// Get all products
app.get("/api/products", (req, res) => {
  res.json({
    success: true,
    data: products,
  });
});

// Get single product
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }
  res.json({
    success: true,
    data: product,
  });
});

// Get reviews for a product
app.get("/api/products/:id/reviews", (req, res) => {
  const productReviews = reviews.filter((r) => r.productId === parseInt(req.params.id));
  const avgRating =
    productReviews.length > 0
      ? (productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length).toFixed(1)
      : 0;

  res.json({
    success: true,
    data: {
      reviews: productReviews,
      avgRating,
      totalReviews: productReviews.length,
    },
  });
});

// Add to cart (mock)
app.post("/api/cart/add", (req, res) => {
  const { productId, quantity, fabric, legs } = req.body;

  if (!productId || !quantity) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }

  res.json({
    success: true,
    message: "Product added to cart",
    data: {
      productId,
      quantity,
      fabric,
      legs,
      totalPrice: product.price * quantity,
    },
  });
});

// Create order (mock)
app.post("/api/orders", (req, res) => {
  const { items, shippingAddress } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ success: false, message: "No items in order" });
  }

  const orderId = `ORD-${Date.now()}`;
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  res.json({
    success: true,
    message: "Order created successfully",
    data: {
      orderId,
      items,
      totalAmount,
      status: "pending",
      estimatedDelivery: "5-7 business days",
    },
  });
});

// Add review (mock)
app.post("/api/products/:id/reviews", (req, res) => {
  const { name, rating, title, body } = req.body;

  if (!name || !rating || !title || !body) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  const newReview = {
    id: reviews.length + 1,
    productId: parseInt(req.params.id),
    name,
    date: new Date().toLocaleDateString(),
    rating,
    title,
    body,
    helpful: 0,
    verified: false,
  };

  reviews.push(newReview);

  res.status(201).json({
    success: true,
    message: "Review added successfully",
    data: newReview,
  });
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Server is running" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});
