'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#1A1614] text-white">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-16 pb-8">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:max-w-xs">
            <div className="font-display text-2xl font-light italic text-white mb-4">
              SP Foam Centre
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Premium mid-century modern furniture, made to order. Designed for life, built to last.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: 'Instagram', href: 'https://instagram.com/spfoam/' },
                { label: 'Pinterest', href: 'https://pinterest.com/spfoam/' },
                { label: 'Facebook', href: 'https://facebook.com/spfoam' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs font-medium text-white/60 hover:bg-white hover:text-[#1A1614] transition-all duration-300"
                  aria-label={s.label}
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Shop</h4>
              <ul className="space-y-2.5">
                {['Sofas', 'Sectionals', 'Chairs', 'Dining', 'Bedroom', 'Outdoor'].map((l) => (
                  <li key={l}>
                    <Link href="/home-page" className="text-sm text-white/60 hover:text-white transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Company</h4>
              <ul className="space-y-2.5">
                {['About Us', 'Sustainability', 'Careers', 'Showrooms'].map((l) => (
                  <li key={l}>
                    <Link href="/home-page" className="text-sm text-white/60 hover:text-white transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Support</h4>
              <ul className="space-y-2.5">
                {['FAQ', 'Returns', 'Warranty', 'Care Guide', 'Contact'].map((l) => (
                  <li key={l}>
                    <Link href="/home-page" className="text-sm text-white/60 hover:text-white transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:max-w-xs">
            <h4 className="font-display text-xl font-light italic text-white mb-2">Join the club</h4>
            <p className="text-sm text-white/50 mb-4">
              Exclusive sales, VIP perks, and design inspiration delivered to your inbox.
            </p>
            {subscribed ? (
              <div className="bg-brand-teal/20 border border-brand-teal/30 rounded-xl px-4 py-3 text-sm text-brand-teal">
                Welcome to the club! ✓
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-teal focus:bg-white/15 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="bg-brand-teal hover:bg-brand-teal-light text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-teal"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <span>© {new Date().getFullYear()} JoybirdLux, a La-Z-Boy Incorporated Company. All Rights Reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/Terms-of-service" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            {/* <Link href="/" className="hover:text-white/60 transition-colors">Accessibility</Link> */}
          </div>
        </div>
      </div>
      <button
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center gap-2.5 bg-brand-teal hover:bg-brand-teal-light text-white 
        shadow-teal transition-all duration-300 w-14 h-14 md:w-auto md:h-auto
        p-0 md:pl-4 md:pr-5 md:py-3 
        rounded-full hover:scale-105 hover:-translate-y-0.5 
        text-sm font-semibold"
        aria-label="Get help from our design team">
        
        <svg className="w-4 h-6 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span className="hidden md:inline">Need Help?</span>
      </button>
    </footer>
    
  );
}