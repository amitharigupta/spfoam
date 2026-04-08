import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import CustomizationPanel from './components/CustomizationPanel';
import ProductDetailsSection from './components/ProductDetailsSection';
import LifestyleSection from './components/LifestyleSection';
import ReviewsSection from './components/ReviewsSection';
import RecommendedProducts from './components/RecommendedProducts';
import TrustSection from './components/TrustSection';
import HeroBanner from './components/HeroBanner';
import CategoryStrip from './components/CategorySection';

export const metadata: Metadata = {
  title: 'Aubrey Sofa — Mid-Century Modern Custom Sofa | JoybirdLux',
  description: 'Shop the Aubrey Sofa by JoybirdLux. Iconic swoop arms, 200+ fabric options, lifetime warranty, and free in-home delivery. Made to order in the USA.',
  openGraph: {
    title: 'Aubrey Sofa | JoybirdLux',
    description: 'Mid-century modern sofa with 200+ fabric choices. Free delivery, lifetime warranty.',
    images: [
    {
      url: 'https://joybird2.imgix.net/product_hero/5261/Aubrey-Sofa-Lucky-Turquoise-T2-055.jpg',
      width: 1200,
      height: 630,
      alt: 'Aubrey Sofa in Lucky Turquoise by JoybirdLux'
    }]

  }
};

// JSON-LD structured data
const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Aubrey Sofa',
  description: 'Iconic swoop arms and characteristic tufting equal a dramatic yet inviting sofa for the Mid-century purists.',
  brand: {
    '@type': 'Brand',
    name: 'JoybirdLux'
  },
  image: [
  'https://joybird2.imgix.net/product_hero/5261/Aubrey-Sofa-Lucky-Turquoise-T2-055.jpg',
  'https://joybird2.imgix.net/product_hero/5261/Aubrey-Sofa-Vibe-Aquatic-T3-300.jpg'],

  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: '2499',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Organization',
      name: 'JoybirdLux'
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '847',
    bestRating: '5',
    worstRating: '1'
  }
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      

      <Header />

      <main>
        {/* Banner Section */}
        <HeroBanner />

        <CategoryStrip />

        {/* Hero: Product gallery + info */}
        <HeroSection />

        {/* Divider */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--border-light)] to-transparent" />
        </div>

        {/* Customization panel */}
        <CustomizationPanel />

        {/* Product details accordion */}
        <ProductDetailsSection />

        {/* Lifestyle / parallax */}
        <LifestyleSection />

        {/* Reviews */}
        <ReviewsSection />

        {/* Recommended products */}
        <RecommendedProducts />

        {/* Trust + FAQ */}
        <TrustSection />
      </main>

      <Footer />

      {/* Floating help button */}
      <button
        className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2.5 bg-brand-teal hover:bg-brand-teal-light text-white pl-4 pr-5 py-3 rounded-full shadow-teal transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 text-sm font-semibold"
        aria-label="Get help from our design team">
        
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        Need Help?
      </button>
    </>);

}