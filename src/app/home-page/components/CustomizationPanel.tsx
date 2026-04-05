'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const FABRIC_CATEGORIES = ['All', 'Velvets', 'Pet-Friendly', 'Sustainable', 'GREENGUARD Gold'];

const ALL_FABRICS = [
  { id: 'essence-ash', label: 'Essence Ash', color: '#D4CDB8', tier: 'T1', category: 'Sustainable', popular: true },
  { id: 'lucky-turquoise', label: 'Lucky Turquoise', color: '#5B9EA0', tier: 'T2', category: 'Velvets', popular: true },
  { id: 'vibe-aquatic', label: 'Vibe Aquatic', color: '#2E8B8B', tier: 'T3', category: 'Velvets', popular: false },
  { id: 'slate-blue', label: 'Slate Blue', color: '#6B7FA3', tier: 'T1', category: 'Pet-Friendly', popular: false },
  { id: 'cognac', label: 'Cognac', color: '#C4956A', tier: 'T2', category: 'All', popular: true },
  { id: 'charcoal', label: 'Charcoal', color: '#4A4A4A', tier: 'T1', category: 'GREENGUARD Gold', popular: false },
  { id: 'blush-rose', label: 'Blush Rose', color: '#DBA8A0', tier: 'T2', category: 'Velvets', popular: false },
  { id: 'forest-green', label: 'Forest Green', color: '#4A6741', tier: 'T1', category: 'Sustainable', popular: false },
  { id: 'ivory', label: 'Ivory Linen', color: '#F0EBE1', tier: 'T1', category: 'Sustainable', popular: true },
  { id: 'navy', label: 'Deep Navy', color: '#1B3A5C', tier: 'T2', category: 'Pet-Friendly', popular: false },
  { id: 'terracotta', label: 'Terracotta', color: '#B8624A', tier: 'T2', category: 'Velvets', popular: false },
  { id: 'sage', label: 'Sage', color: '#8FAF8A', tier: 'T1', category: 'GREENGUARD Gold', popular: false },
];

const LEG_OPTIONS = [
  { id: 'walnut', label: 'Walnut', color: '#8B5E3C' },
  { id: 'oak', label: 'Light Oak', color: '#C4A97D' },
  { id: 'black', label: 'Matte Black', color: '#2A2A2A' },
  { id: 'brass', label: 'Brushed Brass', color: '#B8960C' },
];

const PREVIEW_IMAGES: Record<string, string> = {
  'lucky-turquoise': 'https://joybird2.imgix.net/product_hero/5261/Aubrey-Sofa-Lucky-Turquoise-T2-055.jpg',
  'vibe-aquatic': 'https://joybird2.imgix.net/product_hero/5261/Aubrey-Sofa-Vibe-Aquatic-T3-300.jpg',
  'essence-ash': 'https://joybird2.imgix.net/configurations/pid_5261/-CF339-WS03/5261-CF339-WS03-aubrey-sofa-essence-ash-t1-1_t.png',
};

export default function CustomizationPanel() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedFabric, setSelectedFabric] = useState('essence-ash');
  const [selectedLeg, setSelectedLeg] = useState('walnut');
  const [imageLoading, setImageLoading] = useState(false);

  const filteredFabrics = activeCategory === 'All'
    ? ALL_FABRICS
    : ALL_FABRICS.filter(f => f.category === activeCategory);

  const previewSrc = PREVIEW_IMAGES[selectedFabric] || PREVIEW_IMAGES['essence-ash'];
  const selectedFabricData = ALL_FABRICS.find(f => f.id === selectedFabric);

  const handleFabricSelect = (id: string) => {
    if (id === selectedFabric) return;
    setImageLoading(true);
    setSelectedFabric(id);
    setTimeout(() => setImageLoading(false), 600);
  };

  return (
    <section className="bg-[var(--bg-warm)] py-16 md:py-20" id="customize" aria-label="Product customization">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-teal mb-3">
            Make It Yours
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--text-primary)]">
            Customize Your Aubrey
          </h2>
          <p className="text-[var(--text-muted)] mt-2 text-sm max-w-md mx-auto">
            Choose from 200+ fabrics and 4 leg finishes. Every piece is made to order.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Preview */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[var(--bg-cream)] shadow-medium">
              {/* Skeleton */}
              {imageLoading && (
                <div className="absolute inset-0 skeleton z-10" />
              )}
              <AppImage
                src={previewSrc}
                alt={`Aubrey Sofa in ${selectedFabricData?.label || 'selected fabric'}, customized preview`}
                fill
                className={`object-cover transition-all duration-700 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Selected badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-soft">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-5 h-5 rounded-full border border-[var(--border-light)]"
                    style={{ backgroundColor: selectedFabricData?.color }}
                  />
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-primary)]">{selectedFabricData?.label}</p>
                    <p className="text-[10px] text-[var(--text-muted)]">{selectedFabricData?.tier} · {selectedFabricData?.category}</p>
                  </div>
                </div>
              </div>

              {/* Rotating badge */}
              <div className="absolute bottom-4 right-4">
                <div className="relative w-16 h-16">
                  <svg className="rotate-slow w-full h-full" viewBox="0 0 64 64" aria-hidden="true">
                    <path
                      id="customBadgePath"
                      d="M 32,32 m -24,0 a 24,24 0 1,1 48,0 a 24,24 0 1,1 -48,0"
                      fill="transparent"
                    />
                    <text fontSize="7" fontFamily="DM Sans" fontWeight="600" fill="#016A78" letterSpacing="1.5">
                      <textPath href="#customBadgePath" startOffset="0%">
                        CUSTOM MADE · CUSTOM MADE ·
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leg preview */}
            <div className="mt-4 p-4 bg-white rounded-2xl shadow-soft">
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-3">Leg Finish</p>
              <div className="flex gap-3">
                {LEG_OPTIONS.map((leg) => (
                  <button
                    key={leg.id}
                    onClick={() => setSelectedLeg(leg.id)}
                    title={leg.label}
                    className={`flex flex-col items-center gap-1 group transition-all duration-300`}
                    aria-label={`Select ${leg.label} leg finish`}
                  >
                    <div
                      className={`w-9 h-9 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                        selectedLeg === leg.id
                          ? 'border-brand-teal scale-110 shadow-teal'
                          : 'border-[var(--border-light)]'
                      }`}
                      style={{ backgroundColor: leg.color }}
                    />
                    <span className={`text-[10px] transition-colors ${
                      selectedLeg === leg.id ? 'text-brand-teal font-semibold' : 'text-[var(--text-muted)]'
                    }`}>
                      {leg.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Fabric selector */}
          <div>
            {/* Category filter */}
            <div className="flex gap-2 flex-wrap mb-5">
              {FABRIC_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-brand-teal text-white shadow-teal'
                      : 'bg-white text-[var(--text-secondary)] border border-[var(--border-light)] hover:border-[var(--border-medium)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Fabric grid */}
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 max-h-[320px] overflow-y-auto pr-1">
              {filteredFabrics.map((fabric) => (
                <button
                  key={fabric.id}
                  onClick={() => handleFabricSelect(fabric.id)}
                  className="group flex flex-col items-center gap-1.5 relative"
                  aria-label={`Select ${fabric.label} fabric`}
                >
                  <div
                    className={`relative w-12 h-12 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${
                      selectedFabric === fabric.id
                        ? 'border-brand-teal shadow-teal scale-110'
                        : 'border-transparent hover:border-[var(--border-medium)]'
                    }`}
                  >
                    {fabric.id === 'essence-ash' ? (
                      <AppImage
                        src="https://joybird2.imgix.net/option_images/swatches/290x290-XL-Essence-Ash-T1-210.png"
                        alt={fabric.label}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    ) : (
                      <div className="w-full h-full" style={{ backgroundColor: fabric.color }} />
                    )}
                    {fabric.popular && (
                      <div className="absolute top-0.5 right-0.5 w-2 h-2 bg-brand-cognac rounded-full" />
                    )}
                  </div>
                  <span className={`text-[10px] text-center leading-tight transition-colors ${
                    selectedFabric === fabric.id ? 'text-brand-teal font-semibold' : 'text-[var(--text-muted)]'
                  }`}>
                    {fabric.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Swatch CTA */}
            <div className="mt-6 p-4 bg-white rounded-2xl border border-[var(--border-light)] flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[var(--text-primary)]">Not sure? Get free swatches.</p>
                <p className="text-xs text-[var(--text-muted)]">Order up to 5 fabric samples, shipped free.</p>
              </div>
              <button className="text-xs font-semibold text-brand-teal hover:underline whitespace-nowrap">
                Order Free →
              </button>
            </div>

            {/* Summary */}
            <div className="mt-4 p-4 bg-brand-teal/5 rounded-2xl border border-brand-teal/20">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Your Configuration</p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    Aubrey 84" · {selectedFabricData?.label} · {LEG_OPTIONS.find(l => l.id === selectedLeg)?.label}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-[var(--text-primary)]">$2,499</p>
                  <p className="text-xs text-green-600">Save $1,071</p>
                </div>
              </div>
              <button className="w-full mt-3 py-3 btn-primary rounded-xl text-sm font-semibold">
                Save Configuration
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
