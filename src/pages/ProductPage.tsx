import { useEffect } from "react";
import ProductNavbar from "@/components/product/ProductNavbar";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductDetails from "@/components/product/ProductDetails";
import LifestyleSection from "@/components/product/LifestyleSection";
import ReviewsSection from "@/components/product/ReviewsSection";
import RecommendedProducts from "@/components/product/RecommendedProducts";
import ProductFAQ from "@/components/product/ProductFAQ";
import ProductFooter from "@/components/product/ProductFooter";
import StickyMobileCTA from "@/components/product/StickyMobileCTA";
import FloatingChatButton from "@/components/product/FloatingChatButton";

const ProductPage = () => {
  useEffect(() => {
    document.title = "Aubrey Sofa — MAISON | Premium Modern Furniture";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "The Aubrey Sofa combines mid-century elegance with modern comfort. Customizable fabrics, 5-year warranty, free shipping. Starting at $1,899.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <ProductNavbar />

      {/* Hero product section */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <ProductGallery />
            <ProductInfo />
          </div>
        </div>
      </section>

      <ProductDetails />
      <LifestyleSection />
      <ReviewsSection />
      <RecommendedProducts />
      <ProductFAQ />
      <ProductFooter />
      <StickyMobileCTA />
      <FloatingChatButton />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Aubrey Sofa",
            image: "",
            description: "Mid-century modern sofa with customizable fabrics and premium hardwood frame.",
            brand: { "@type": "Brand", name: "MAISON" },
            offers: {
              "@type": "Offer",
              price: "1899",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "127",
            },
          }),
        }}
      />
    </div>
  );
};

export default ProductPage;
