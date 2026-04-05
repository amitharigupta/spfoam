'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const LIFESTYLE_IMAGES = [
{
  src: "https://images.unsplash.com/photo-1638786245211-08b30be57820",
  alt: 'Aubrey sofa in Lucky Turquoise placed in a bright mid-century modern living room with wood floors and warm afternoon light',
  caption: 'The Aubrey in Lucky Turquoise',
  sub: 'Living Room · Mid-Century Modern'
},
{
  src: "https://images.unsplash.com/photo-1723396143844-aaf441e66db1",
  alt: 'Aubrey sofa in Vibe Aquatic velvet in a stylish living room with dark walls and curated accessories',
  caption: 'The Aubrey in Vibe Aquatic',
  sub: 'Living Room · Contemporary'
}];


export default function LifestyleSection() {
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      parallaxRefs.current.forEach((ref) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const windowH = window.innerHeight;
        if (rect.top < windowH && rect.bottom > 0) {
          const progress = (windowH - rect.top) / (windowH + rect.height);
          const offset = (progress - 0.5) * 60;
          const img = ref.querySelector('.parallax-img') as HTMLElement;
          if (img) {
            img.style.transform = `translateY(${offset}px)`;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-4 md:py-6 space-y-4" aria-label="Lifestyle gallery">
      {LIFESTYLE_IMAGES.map((img, i) =>
      <div
        key={i}
        ref={(el) => {parallaxRefs.current[i] = el;}}
        className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        
          <div className="parallax-img absolute inset-0 scale-110 will-change-transform">
            <AppImage
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0} />
          
          </div>
          {/* Scrim — dark text side (bottom) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent pointer-events-none" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 flex items-end justify-between">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-2">{img.sub}</p>
              <h3 className="font-display text-2xl md:text-4xl font-light text-white">{img.caption}</h3>
            </div>
            <button className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/20 transition-all">
              Shop This Look
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Numbered indicator */}
          <div className="absolute top-6 right-6 text-white/40 font-display text-5xl font-light select-none">
            0{i + 1}
          </div>
        </div>
      )}

      {/* Callout strip */}
      <div className="bg-[#1A1614] text-white py-10 px-4 md:px-8 text-center">
        <p className="font-display text-2xl md:text-3xl font-light italic mb-2">
          "Designed for life. Built to last."
        </p>
        <p className="text-white/50 text-sm mb-6">Every piece is made to order in the USA by skilled craftspeople.</p>
        <button className="inline-flex items-center gap-2 bg-brand-teal hover:bg-brand-teal-light text-white px-6 py-3 rounded-full text-sm font-semibold transition-all hover:shadow-teal">
          Explore the Collection
        </button>
      </div>
    </section>);

}