'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import AppImage from '@/components/ui/AppImage';


const FEATURES = [
{
  icon:
  <svg className="w-6 h-6 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>,

  label: 'Limited Lifetime Warranty',
  sub: 'On frame & cushions'
},
{
  icon:
  <svg className="w-6 h-6 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>,

  label: '8–10 Week Lead Time',
  sub: 'Made to order in the USA'
},
{
  icon:
  <svg className="w-6 h-6 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>,

  label: 'Free In-Home Delivery',
  sub: 'White glove setup included'
},
{
  icon:
  <svg className="w-6 h-6 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>,

  label: 'Limited Period Return',
  sub: 'Love it or return it'
}];


const ACCORDIONS = [
{
  id: 'dimensions',
  title: 'Dimensions & Specifications',
  content:
  <div className="grid grid-cols-2 gap-4 text-sm">
        {[
    ['Overall Width', '84"'],
    ['Overall Depth', '37"'],
    ['Overall Height', '33"'],
    ['Seat Height', '18"'],
    ['Seat Depth', '22"'],
    ['Arm Height', '27"'],
    ['Leg Height', '6"'],
    ['Weight', '145 lbs']]?.
    map(([label, val]) =>
    <div key={label} className="flex justify-between py-2 border-b border-[var(--border-light)]">
            <span className="text-[var(--text-muted)]">{label}</span>
            <span className="font-semibold text-[var(--text-primary)]">{val}</span>
          </div>
    )}
      </div>

},
{
  id: 'materials',
  title: 'Materials & Construction',
  content:
  <div className="space-y-4 text-sm text-[var(--text-secondary)]">
        <div>
          <h4 className="font-semibold text-[var(--text-primary)] mb-2">Frame</h4>
          <p>Kiln-dried solid hardwood frame with corner blocks for lasting durability. Engineered wood used in non-stress areas.</p>
        </div>
        <div>
          <h4 className="font-semibold text-[var(--text-primary)] mb-2">Cushions</h4>
          <p>High-resiliency foam core wrapped in fiber fill. Sinuous spring suspension for consistent support. Cushion covers are removable and washable.</p>
        </div>
        <div>
          <h4 className="font-semibold text-[var(--text-primary)] mb-2">Legs</h4>
          <p>Solid walnut wood with protective floor glides. Available in 4 finishes: Walnut, Light Oak, Matte Black, Brushed Brass.</p>
        </div>
      </div>

},
{
  id: 'care',
  title: 'Care & Cleaning',
  content:
  <div className="space-y-3 text-sm text-[var(--text-secondary)]">
        <p>Spot clean with a damp cloth and mild soap. For fabric upholstery, blot spills immediately — do not rub.</p>
        <p>Vacuum regularly with a soft brush attachment. Rotate cushions monthly for even wear.</p>
        <p>Avoid direct sunlight and heat sources to prevent fading. Professional cleaning recommended annually.</p>
        <div className="flex gap-3 mt-4">
          {['Spot Clean', 'No Bleach', 'Air Dry', 'Professional Clean']?.map((label) =>
      <span key={label} className="text-xs bg-[var(--bg-warm)] border border-[var(--border-light)] rounded-full px-3 py-1 text-[var(--text-muted)]">
              {label}
            </span>
      )}
        </div>
      </div>

},
{
  id: 'certifications',
  title: 'Certifications & Standards',
  content:
  <div className="grid grid-cols-2 gap-3 text-sm">
        {['GREENGUARD Gold Certified', 'PANTONE™ Color Matched', 'CertiPUR-US® Foam', 'Made in the USA', 'FSC-Certified Wood', 'OEKO-TEX® Fabrics']?.map((cert) =>
    <div key={cert} className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="text-[var(--text-secondary)]">{cert}</span>
          </div>
    )}
      </div>

}];


export default function ProductDetailsSection() {
  const [openAccordion, setOpenAccordion] = useState<string | null>('dimensions');

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-20" id="details" aria-label="Product details">
      {/* Feature icons */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 p-6 bg-[var(--bg-warm)] rounded-3xl">
        {FEATURES?.map((f) =>
        <div key={f?.label} className="flex flex-col items-center text-center gap-2 p-3">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-soft mb-1">
              {f?.icon}
            </div>
            <p className="text-sm font-semibold text-[var(--text-primary)]">{f?.label}</p>
            <p className="text-xs text-[var(--text-muted)]">{f?.sub}</p>
          </div>
        )}
      </div> */}
      {/* Description + accordion */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
        {/* Description */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-3 block">About This Piece</span>
          <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--text-primary)] mb-6 leading-tight">
            Timeless design.<br />
            <span className="italic text-[var(--text-muted)]">Built to last.</span>
          </h2>
          <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
            <p>
              Aubrey epitomizes classic-contemporary style with the right amount of curves. At home in spaces both eclectic and modern, it's sure to make your room a stylish refuge.
            </p>
            <p>
              Embrace its timeless look that enlivens any space and serves as a gathering place for the whole family. The iconic swoop arms and characteristic tufting create a piece that's dramatic yet inviting.
            </p>
            <p>
              Every Aubrey is made to order in the USA by skilled craftspeople, using sustainably sourced materials and time-tested construction methods.
            </p>
          </div>

          {/* Dimension diagram */}
          <div className="mt-8 bg-[var(--bg-warm)] rounded-2xl p-4 border border-[var(--border-light)]">
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-3">Dimensions</p>
            <div className="relative aspect-[2/1] rounded-xl overflow-hidden">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_17e419e87-1775393113164.png"
                alt="Aubrey Sofa dimension diagram showing width 84 inches, depth 37 inches, height 33 inches with measurement labels"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {ACCORDIONS?.map((acc) =>
          <div
            key={acc?.id}
            className="bg-white rounded-2xl border border-[var(--border-light)] overflow-hidden shadow-soft">
            
              <button
              onClick={() => setOpenAccordion(openAccordion === acc?.id ? null : acc?.id)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-[var(--bg-warm)] transition-colors"
              aria-expanded={openAccordion === acc?.id}>
              
                <span className="text-sm font-semibold text-[var(--text-primary)]">{acc?.title}</span>
                <ChevronDownIcon
                className={`w-5 h-5 text-[var(--text-muted)] flex-shrink-0 transition-transform duration-400 ${
                openAccordion === acc?.id ? 'rotate-180' : ''}`
                } />
              
              </button>
              <div
              className={`overflow-hidden transition-all duration-500 ${
              openAccordion === acc?.id ? 'max-h-[600px]' : 'max-h-0'}`
              }>
              
                <div className="p-5 pt-0 border-t border-[var(--border-light)]">
                  <div className="pt-4">{acc?.content}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}