'use client';

import React, { useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';

const PRODUCTS = [
{
  id: 1,
  name: 'Hughes Sofa',
  tagline: 'Clean lines, plush comfort',
  price: 1999,
  originalPrice: 2856,
  rating: 4.7,
  reviews: 312,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a6adec3f-1768281245481.png",
  alt: 'Hughes sofa in grey linen, mid-century modern style with tapered wood legs, studio photography bright background',
  badge: 'Best Seller',
  colors: ['#D4CDB8', '#4A4A4A', '#6B7FA3']
},
{
  id: 2,
  name: 'Briar Chair',
  tagline: 'The perfect accent piece',
  price: 899,
  originalPrice: 1285,
  rating: 4.9,
  reviews: 189,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb5a00ce-1770043114555.png",
  alt: 'Briar accent chair in cognac velvet, curved silhouette with brass legs, well-lit product photography',
  badge: 'New',
  colors: ['#C4956A', '#DBA8A0', '#2E8B8B']
},
{
  id: 3,
  name: 'Eliot Sectional',
  tagline: 'Modular, customizable comfort',
  price: 3299,
  originalPrice: 4713,
  rating: 4.8,
  reviews: 423,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b4aa223e-1773090345770.png",
  alt: 'Eliot sectional sofa in sage green, L-shaped configuration with chaise, bright open living room',
  badge: 'Trending',
  colors: ['#8FAF8A', '#1B3A5C', '#D4CDB8']
},
{
  id: 4,
  name: 'Tatum Loveseat',
  tagline: 'Small space, big style',
  price: 1599,
  originalPrice: 2284,
  rating: 4.6,
  reviews: 156,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_198961702-1775393114110.png",
  alt: 'Tatum loveseat in ivory linen, compact two-seater with button tufting, neutral studio background',
  badge: null,
  colors: ['#F0EBE1', '#B8624A', '#4A4A4A']
},
{
  id: 5,
  name: 'Soto Ottoman',
  tagline: 'Versatile · Stylish · Functional',
  price: 599,
  originalPrice: 856,
  rating: 4.8,
  reviews: 97,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19bf3bb71-1772135682807.png",
  alt: 'Soto round ottoman in terracotta velvet, walnut tray top, warm living room setting',
  badge: null,
  colors: ['#B8624A', '#C4956A', '#4A6741']
}];


export default function RecommendedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-20" aria-label="Recommended products">
      <div className="flex items-end justify-between mb-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-2 block">You May Also Love</span>
          <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--text-primary)]">
            Complete the Look
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-[var(--border-light)] flex items-center justify-center hover:bg-[var(--bg-warm)] transition-colors"
            aria-label="Scroll left">
            
            <ChevronLeftIcon className="w-5 h-5 text-[var(--text-secondary)]" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-[var(--border-light)] flex items-center justify-center hover:bg-[var(--bg-warm)] transition-colors"
            aria-label="Scroll right">
            
            <ChevronRightIcon className="w-5 h-5 text-[var(--text-secondary)]" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto no-scrollbar scroll-snap-x pb-2">
        
        {PRODUCTS.map((product) =>
        <div
          key={product.id}
          className="scroll-snap-item flex-shrink-0 w-[280px] md:w-[300px] product-card bg-white rounded-3xl overflow-hidden border border-[var(--border-light)] group cursor-pointer">
          
            {/* Image */}
            <div className="relative aspect-[4/3] bg-[var(--bg-warm)] overflow-hidden">
              <AppImage
              src={product.image}
              alt={product.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="300px" />
            
              {/* Overlay */}
              <div className="quick-view-overlay absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="bg-white text-[var(--text-primary)] text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[var(--bg-warm)] transition-colors">
                  Quick View
                </button>
              </div>
              {/* Badge */}
              {product.badge &&
            <div className="absolute top-3 left-3">
                  <span className="bg-brand-cognac text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    {product.badge}
                  </span>
                </div>
            }
              {/* Save % */}
              <div className="absolute top-3 right-3">
                <span className="bg-white/90 backdrop-blur-sm text-green-600 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  Save 30%
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="font-display text-lg font-light text-[var(--text-primary)] mb-0.5">{product.name}</h3>
              <p className="text-xs text-[var(--text-muted)] mb-2">{product.tagline}</p>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-3">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) =>
                <StarSolid key={s} className={`w-3 h-3 ${s <= Math.floor(product.rating) ? 'text-amber-400' : 'text-amber-200'}`} />
                )}
                </div>
                <span className="text-xs text-[var(--text-muted)]">({product.reviews})</span>
              </div>

              {/* Colors */}
              <div className="flex gap-1.5 mb-3">
                {product.colors.map((c, ci) =>
              <div
                key={ci}
                className="w-4 h-4 rounded-full border border-[var(--border-light)]"
                style={{ backgroundColor: c }}
                aria-hidden="true" />

              )}
                <span className="text-[10px] text-[var(--text-muted)] ml-1 self-center">+more</span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-semibold text-[var(--text-primary)]">${product.price.toLocaleString()}</span>
                  <span className="text-xs text-[var(--text-muted)] line-through">${product.originalPrice.toLocaleString()}</span>
                </div>
                <button className="text-xs font-semibold text-brand-teal hover:text-brand-teal-dark transition-colors">
                  View →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>);

}