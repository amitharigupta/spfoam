import { useEffect } from "react";
import { setSEOMetadata, setJsonLdSchema, createProductSchema, createBreadcrumbSchema } from "@/lib/seo";
import ProductNavbar from "@/components/product/ProductNavbar";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductDetails from "@/components/product/ProductDetails";
import LifestyleSection from "@/components/product/LifestyleSection";
import ReviewsSection from "@/components/product/ReviewsSection";
import RecommendedProducts from "@/components/product/RecommendedProducts";
import TrustSection from "@/components/product/TrustSection";
import ProductFAQ from "@/components/product/ProductFAQ";
import ProductFooter from "@/components/product/ProductFooter";
import StickyMobileCTA from "@/components/product/StickyMobileCTA";
import FloatingChatButton from "@/components/product/FloatingChatButton";

const ProductPage = () => {
  useEffect(() => {
    // Set SEO metadata
    setSEOMetadata({
      title: "Aubrey Sofa — MAISON | Premium Modern Furniture",
      description:
        "The Aubrey Sofa combines mid-century elegance with modern comfort. Customizable fabrics, 5-year warranty, free shipping. Starting at $1,899.",
      keywords: "sofa, furniture, mid-century modern, customizable, premium quality",
      ogImage: "/sofa-main.jpg",
      ogUrl: window.location.href,
    });

    // Set Product structured data
    const productSchema = createProductSchema({
      name: "Aubrey Sofa",
      description:
        "Mid-century modern sofa with customizable fabrics and premium hardwood frame. Features kiln-dried hardwood, high-resilience foam, and performance-grade upholstery.",
      image: ["/sofa-main.jpg", "/sofa-angle.jpg", "/sofa-side.jpg", "/sofa-detail.jpg"],
      price: 1899,
      ratingValue: 4.8,
      reviewCount: 127,
      brand: "MAISON",
      url: window.location.href,
    });
    setJsonLdSchema(productSchema);

    // Set Breadcrumb structured data
    const breadcrumbSchema = createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Furniture", url: "/furniture" },
      { name: "Sofas", url: "/furniture/sofas" },
      { name: "Aubrey Sofa", url: window.location.href },
    ]);
    const breadcrumbElement = document.querySelector('script[data-breadcrumb="true"]');
    if (breadcrumbElement) {
      breadcrumbElement.textContent = JSON.stringify(breadcrumbSchema);
    } else {
      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-breadcrumb", "true");
      script.textContent = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(script);
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
      <TrustSection />
      <RecommendedProducts />
      <ProductFAQ />
      <ProductFooter />
      <StickyMobileCTA />
      <FloatingChatButton />
    </div>
  );
};

export default ProductPage;
