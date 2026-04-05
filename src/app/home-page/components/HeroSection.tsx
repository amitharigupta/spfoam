'use client';

import React, { useState, useRef, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';
import { StarIcon, HeartIcon, ShareIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';

const PRODUCT_IMAGES = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_14b0d0fdd-1775393114184.png",
  alt: 'Aubrey Sofa in Lucky Turquoise fabric, mid-century modern design with curved arms, bright studio lighting'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1310a0b93-1775393115456.png",
  alt: 'Aubrey Sofa in Vibe Aquatic velvet, tufted cushions and walnut legs, well-lit product photography'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1da4bc134-1768741495566.png",
  alt: 'Aubrey Sofa in Essence Ash fabric, clean white background product shot, full front view'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_14eb5a2f9-1775393115291.png",
  alt: 'Aubrey Sofa 360 degree view in Essence Ash, showing sofa profile and cushion details'
}];


const FABRIC_OPTIONS = [
{ id: 'essence-ash', label: 'Essence Ash', swatch: "https://img.rocket.new/generatedImages/rocket_gen_img_1817e9ea4-1772144483658.png", tier: 'T1', available: true },
{ id: 'lucky-turquoise', label: 'Lucky Turquoise', swatch: '', color: '#5B9EA0', tier: 'T2', available: true },
{ id: 'vibe-aquatic', label: 'Vibe Aquatic', swatch: '', color: '#2E8B8B', tier: 'T3', available: true },
{ id: 'slate-blue', label: 'Slate Blue', swatch: '', color: '#6B7FA3', tier: 'T1', available: true },
{ id: 'cognac-leather', label: 'Cognac Leather', swatch: '', color: '#C4956A', tier: 'T2', available: true },
{ id: 'charcoal', label: 'Charcoal', swatch: '', color: '#4A4A4A', tier: 'T1', available: true }];


const SIZE_OPTIONS = [
{ id: '72', label: '72"', sublabel: 'Small' },
{ id: '84', label: '84"', sublabel: 'Standard' },
{ id: '96', label: '96"', sublabel: 'Large' }];


export default function HeroSection() {
  const [activeImage, setActiveImage] = useState(0);
  const [activeFabric, setActiveFabric] = useState('essence-ash');
  const [activeSize, setActiveSize] = useState('84');
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const touchStartX = useRef<number>(0);

  const nextImage = useCallback(() => {
    setActiveImage((prev) => (prev + 1) % PRODUCT_IMAGES.length);
  }, []);

  const prevImage = useCallback(() => {
    setActiveImage((prev) => (prev - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextImage() : prevImage();
    }
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12" aria-label="Product hero">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-start">

        {/* LEFT: Image Gallery */}
        <div className="space-y-3">
          {/* Main image */}
          <div
            className="relative rounded-3xl overflow-hidden bg-[var(--bg-warm)] aspect-[4/3] zoom-container group"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}>
            
            <AppImage
              src={PRODUCT_IMAGES[activeImage].src}
              alt={PRODUCT_IMAGES[activeImage].alt}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw" />
            

            {/* Gradient overlay bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

            {/* Nav arrows */}
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-medium hover:bg-white transition-all opacity-0 group-hover:opacity-100 hover:scale-105"
              aria-label="Previous image">
              
              <ChevronLeftIcon className="w-5 h-5 text-[var(--text-primary)]" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-medium hover:bg-white transition-all opacity-0 group-hover:opacity-100 hover:scale-105"
              aria-label="Next image">
              
              <ChevronRightIcon className="w-5 h-5 text-[var(--text-primary)]" />
            </button>

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-brand-cognac text-white text-xs font-semibold px-3 py-1 rounded-full">
                Trending
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-[var(--text-primary)] text-xs font-medium px-3 py-1 rounded-full">
                Save 30%
              </span>
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {PRODUCT_IMAGES.map((_, i) =>
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`rounded-full transition-all duration-300 ${
                i === activeImage ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'}`
                }
                aria-label={`View image ${i + 1}`} />

              )}
            </div>

            {/* 360° badge */}
            <div className="absolute bottom-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-brand-teal flex items-center gap-1.5 cursor-pointer hover:bg-white transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10" />
                  <path d="M16 12l4-4-4-4" />
                </svg>
                360° View
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2.5">
            {PRODUCT_IMAGES.map((img, i) =>
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`relative aspect-square rounded-xl overflow-hidden bg-[var(--bg-warm)] transition-all duration-300 ${
              i === activeImage ?
              'ring-2 ring-brand-teal ring-offset-1' : 'opacity-70 hover:opacity-100'}`
              }
              aria-label={`Thumbnail ${i + 1}`}>
              
                <AppImage
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="120px" />
              
              </button>
            )}
          </div>

          {/* See in your room */}
          <button className="w-full flex items-center justify-center gap-2.5 py-3 rounded-2xl border border-dashed border-brand-teal/40 text-brand-teal text-sm font-medium hover:bg-brand-teal/5 transition-all group">
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
            See in Your Room — AR Preview
          </button>
        </div>

        {/* RIGHT: Product Info */}
        <div className="lg:sticky lg:top-24 space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[var(--text-muted)]" aria-label="Breadcrumb">
            <span>Living Room</span>
            <span>/</span>
            <span>Sofas</span>
            <span>/</span>
            <span className="text-[var(--text-primary)]">Aubrey</span>
          </nav>

          {/* Title + actions */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl md:text-4xl xl:text-5xl font-light leading-tight text-[var(--text-primary)] mb-1">
                Aubrey Sofa
              </h1>
              <p className="text-[var(--text-muted)] text-sm">Mid-Century Modern · Customizable</p>
            </div>
            <div className="flex gap-2 flex-shrink-0 mt-1">
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`p-2.5 rounded-full border transition-all duration-300 ${
                wishlisted ?
                'bg-red-50 border-red-200 text-red-500' : 'border-[var(--border-light)] text-[var(--text-muted)] hover:border-[var(--border-medium)] hover:text-[var(--text-primary)]'}`
                }
                aria-label="Add to wishlist">
                
                <HeartIcon className="w-5 h-5" />
              </button>
              <button
                className="p-2.5 rounded-full border border-[var(--border-light)] text-[var(--text-muted)] hover:border-[var(--border-medium)] hover:text-[var(--text-primary)] transition-all"
                aria-label="Share">
                
                <ShareIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) =>
              s <= 4 ?
              <StarSolid key={s} className="w-4 h-4 text-amber-400" /> :
              <span key={s} className="relative w-4 h-4">
                      <StarSolid className="w-4 h-4 text-amber-400 absolute" style={{ clipPath: 'inset(0 20% 0 0)' }} />
                      <StarIcon className="w-4 h-4 text-amber-200 absolute" />
                    </span>
              )}
            </div>
            <span className="text-sm font-semibold text-[var(--text-primary)]">4.8</span>
            <button className="text-sm text-brand-teal hover:underline">847 reviews</button>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="font-display text-3xl font-light text-[var(--text-primary)]">$2,499</span>
            <span className="text-lg text-[var(--text-muted)] line-through">$3,570</span>
            <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">30% off</span>
          </div>
          <p className="text-sm text-[var(--text-muted)]">
            Or from <strong className="text-[var(--text-primary)]">$100/mo</strong> for 18 months at 0% APR
          </p>

          {/* Tagline */}
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic border-l-2 border-brand-teal/30 pl-4">
            "Iconic swoop arms and characteristic tufting equal a dramatic yet inviting sofa for the Mid-century purists."
          </p>

          {/* Size selector */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-[var(--text-primary)]">Size</span>
              <button className="text-xs text-brand-teal hover:underline">Size Guide</button>
            </div>
            <div className="flex gap-2.5">
              {SIZE_OPTIONS.map((size) =>
              <button
                key={size.id}
                onClick={() => setActiveSize(size.id)}
                className={`flex-1 py-3 rounded-xl border text-sm font-medium transition-all duration-300 ${
                activeSize === size.id ?
                'border-brand-teal bg-brand-teal/5 text-brand-teal' : 'border-[var(--border-light)] text-[var(--text-secondary)] hover:border-[var(--border-medium)]'}`
                }>
                
                  <div>{size.label}</div>
                  <div className="text-xs opacity-60 mt-0.5">{size.sublabel}</div>
                </button>
              )}
            </div>
          </div>

          {/* Fabric selector */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-[var(--text-primary)]">
                Fabric: <span className="font-normal text-[var(--text-secondary)]">
                  {FABRIC_OPTIONS.find((f) => f.id === activeFabric)?.label}
                </span>
              </span>
              <button className="text-xs text-brand-teal hover:underline">Get free swatches</button>
            </div>
            <div className="flex gap-2.5 flex-wrap">
              {FABRIC_OPTIONS.map((fabric) =>
              <button
                key={fabric.id}
                onClick={() => setActiveFabric(fabric.id)}
                title={`${fabric.label} (${fabric.tier})`}
                className={`relative w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${
                activeFabric === fabric.id ?
                'border-brand-teal shadow-teal scale-110' :
                'border-[var(--border-light)] hover:border-[var(--border-medium)]'}`
                }
                aria-label={fabric.label}>
                
                  {fabric.swatch ?
                <AppImage src={fabric.swatch} alt={fabric.label} fill className="object-cover" sizes="40px" /> :

                <div className="w-full h-full" style={{ backgroundColor: fabric.color }} />
                }
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-white border border-[var(--border-light)] rounded-full text-[8px] font-bold text-[var(--text-muted)] flex items-center justify-center">
                    {fabric.tier}
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-[var(--text-primary)]">Quantity</span>
            <div className="flex items-center border border-[var(--border-light)] rounded-xl overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--bg-warm)] transition-colors text-lg font-light"
                aria-label="Decrease quantity">
                
                −
              </button>
              <span className="w-10 text-center text-sm font-semibold text-[var(--text-primary)]">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--bg-warm)] transition-colors text-lg font-light"
                aria-label="Increase quantity">
                
                +
              </button>
            </div>
          </div>

          {/* CTA buttons — desktop */}
          <div className="hidden md:flex flex-col gap-3">
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-2xl text-base font-semibold transition-all duration-500 ${
              addedToCart ?
              'bg-green-600 text-white scale-95' : 'btn-primary text-white'}`
              }>
              
              {addedToCart ? '✓ Added to Bag' : 'Add to Bag'}
            </button>
            <button className="w-full py-4 rounded-2xl text-base font-semibold btn-secondary">
              Customize This Piece
            </button>
          </div>

          {/* Delivery note */}
          <div className="flex items-center gap-3 p-3 bg-[var(--bg-warm)] rounded-xl">
            <div className="w-8 h-8 bg-brand-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
                <rect x="9" y="11" width="14" height="10" rx="1" />
                <path d="m12 17 3-3 3 3" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--text-primary)]">Premium In-Home Delivery</p>
              <p className="text-xs text-[var(--text-muted)]">Ships in 8–10 weeks · White glove service included</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="sticky-cta md:hidden">
        <div className="flex gap-3">
          <button
            onClick={handleAddToCart}
            className={`flex-1 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
            addedToCart ? 'bg-green-600 text-white' : 'btn-primary text-white'}`
            }>
            
            {addedToCart ? '✓ Added to Bag' : `Add to Bag · $${(2499 * quantity).toLocaleString()}`}
          </button>
          <button className="px-4 py-3.5 rounded-xl text-sm font-semibold btn-secondary">
            Customize
          </button>
        </div>
      </div>
    </section>);

}