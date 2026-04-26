'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const TRUST_ITEMS = [
  {
    icon: (
      <svg className="w-7 h-7 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Premium In-Home Delivery',
    desc: 'White glove delivery team brings your sofa inside, assembles it, and removes all packaging. Free on orders over $999.',
    detail: 'Available nationwide. 2-hour delivery window. Call-ahead service included.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Limited Lifetime Warranty',
    desc: 'Our frames and cushions are covered for life against manufacturing defects. Fabric warranty up to 3 years.',
    detail: 'Transferable warranty. No registration required. Claim process takes 24 hours.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
    title: 'Easy Returns (Limited Period)',
    desc: 'Hassle-free product replacement or return',
    detail: 'Enjoy free return pickup. Refunds are processed within 5–7 business days.'
  },
  {
    icon: (
      <svg className="w-7 h-7 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: '0% APR Financing',
    desc: 'Pay over 18 months with zero interest. From $100/mo. Apply in seconds — no impact to credit score.',
    detail: 'Subject to credit approval. Multiple financing options available.',
  },
];

const FAQS = [
  {
    q: 'What products does SP Foam Centre offer?',
    a: 'We offer a wide range of furniture including sofas, benches, barstools, puffies (ottomans), centre tables, coffee tables, and bedside tables designed for both comfort and style.',
  },
  {
    q: 'Do you provide customization options?',
    a: 'Yes, we specialize in customized furniture. You can choose your preferred size, design, fabric, foam quality, and color to match your home or office interiors.',
  },
  {
    q: 'What types of materials are used in your furniture?',
    a: 'We use high-quality materials such as premium foam, durable wood, engineered boards, metal frames, and long-lasting upholstery fabrics to ensure comfort and durability.',
  },
  {
    q: 'How do I choose the right sofa or furniture for my space?',
    a: 'Our team can guide you based on your room size, usage, design preference, and budget. We recommend measuring your space and sharing requirements before placing an order.',
  },
  {
    q: 'Do you offer delivery services?',
    a: 'Yes, we provide delivery services. Delivery timelines may vary depending on your location and whether the product is customized or ready-made.',
  },
  {
    q: 'What is the average delivery time?',
    a: 'For ready-made products, delivery usually takes a few days. Customized orders may take 7–15 days depending on the design and complexity.'
  },
  {
    q: 'Do your products come with a warranty?',
    a: 'Yes, most of our products come with a limited warranty covering manufacturing defects. Warranty terms may vary depending on the product type.'
  },
  {
    q: 'How should I maintain and clean my furniture?',
    a: 'Regular dusting and occasional cleaning with a soft cloth are recommended. For upholstered items, avoid harsh chemicals and use fabric-safe cleaning solutions.'
  },
  {
    q: 'Can I visit your store to see the products?',
    a: 'Yes, you can visit our store to explore our collection, check material quality, and discuss customization options with our team.'
  },
  {
    q: 'Do you offer bulk or commercial orders?',
    a: 'Yes, we cater to bulk orders for offices, cafes, restaurants, and other commercial spaces with special pricing and customization options.'
  }
];

export default function TrustSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Trust section */}
      <section className="bg-[#1A1614] py-16 md:py-20 relative overflow-hidden" aria-label="Trust and policies">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-teal/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-3 block">Our Promise</span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-white">
              Buy with complete confidence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_ITEMS?.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-teal/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-teal/30 transition-colors">
                  {item?.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{item?.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed mb-3">{item?.desc}</p>
                <p className="text-[10px] text-white/30 leading-relaxed">{item?.detail}</p>
              </div>
            ))}
          </div>

          {/* Support CTA */}
          <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Need a Hand?</p>
                <p className="text-white/50 text-xs">Mon–Fri 6am–5pm PST · Sat–Sun 8am–4pm PST</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="bg-brand-teal hover:bg-brand-teal-light text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-teal">
                Ask the SP Foam Centre Team
              </button>
              {/* <button className="border border-white/20 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-white/10 transition-all">
                Free Design Services
              </button> */}
            </div>
          </div>
        </div>
      </section>
      {/* FAQ section */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-20" id="faq" aria-label="Frequently asked questions">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-teal mb-3 block">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-light text-[var(--text-primary)]">
              Common questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS?.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[var(--border-light)] overflow-hidden shadow-soft"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[var(--bg-warm)] transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-sm font-semibold text-[var(--text-primary)] pr-4">{faq?.q}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-[var(--text-muted)] flex-shrink-0 transition-transform duration-400 ${openFaq === i ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-[300px]' : 'max-h-0'
                    }`}
                >
                  <div className="p-5 pt-0 border-t border-[var(--border-light)]">
                    <p className="pt-4 text-sm text-[var(--text-secondary)] leading-relaxed">{faq?.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}