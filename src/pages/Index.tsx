import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ProductShowcase />
    <WhyChooseUs />
    <Testimonials />
    <ComparisonTable />
    <FAQSection />
    <Footer />
  </div>
);

export default Index;
