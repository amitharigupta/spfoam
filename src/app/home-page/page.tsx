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

const CATEGORIES: any = [
  { label: 'Sofas', image: '/images/categories/sofa.jpg', href: '/sofa' },
  { label: 'Chaises Sofa (Dewan Sofa)', image: '/images/categories/dewan-sofa.jpg', href: '/dewan-sofa' },
  { label: 'Sectionals Sofas', image: '/images/categories/sectional-sofas.jpg', href: '/sectional-sofa' },
  { label: 'Arm Chairs', image: '/images/categories/chair.jpg', href: '/arm-chairs' },
  { label: 'Banch', image: '/images/categories/banch.jpg', href: '/banch' },
  { label: 'Beside Table', image: '/images/categories/beside-table.jpg', href: '/beside-table' },
  { label: 'Center Table', image: '/images/categories/center-table.jpg', href: '/center-table' },
  { label: 'Coffee Table', image: '/images/categories/coffee-table.jpg', href: '/coffee-table' },
  { label: 'Bar Stool', image: '/images/categories/barstool.jpg', href: '/barstool' },
  { label: 'Puffy', image: '/images/categories/puffy.jpg', href: '/puffy' },
  { label: 'Sofa Raw Material', image: '/images/categories/raw-material.jpg', href: '/raw-material' },
  { label: 'Live Workshop', image: '/images/categories/live-workshop.jpg', href: '/live-workshop' },
];

export const metadata: Metadata = {
  title: 'Aubrey Sofa — Mid-Century Modern Custom Sofa | SP Foam Centre',
  description: 'Shop the Aubrey Sofa by SP Foam Centre. Iconic swoop arms, 200+ fabric options, lifetime warranty, and free in-home delivery. Made to order in the USA.',
  openGraph: {
    title: 'Aubrey Sofa | SP Foam Centre',
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
      

      {/* <Header /> */}

      <main>
        {/* Banner Section */}
        <HeroBanner />

        <CategoryStrip CATEGORIES={CATEGORIES} />

        {/* Hero: Product gallery + info */}
        {/* <HeroSection /> */}

        {/* Divider */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--border-light)] to-transparent" />
        </div>

        {/* Customization panel */}
        <CustomizationPanel />

        {/* Product details accordion */}
        <ProductDetailsSection />

        {/* Lifestyle / parallax */}
        {/* <LifestyleSection /> */}

        {/* Reviews */}
        {/* <ReviewsSection /> */}

        {/* Recommended products */}
        {/* <RecommendedProducts /> */}

        {/* Trust + FAQ */}
        <TrustSection />
      </main>

      {/* <Footer /> */}

      {/* Floating help button */}
      
    </>);

}