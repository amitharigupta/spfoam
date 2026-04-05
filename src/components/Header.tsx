'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBagIcon, HeartIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline';

const NAV_ITEMS = [
  { label: 'Living Room', href: '/home-page' },
  { label: 'Dining Room', href: '/home-page' },
  { label: 'Bedroom', href: '/home-page' },
  { label: 'Home Office', href: '/home-page' },
  { label: 'Outdoor', href: '/home-page' },
  { label: 'Decor', href: '/home-page' },
  { label: 'Sale', href: '/home-page', highlight: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(1);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Promo bar */}
      <div className="w-full bg-brand-teal text-white text-center py-2 px-4 text-xs font-medium tracking-wide">
        Save 30% sitewide — Sale ends soon &nbsp;·&nbsp; Free In-Home Delivery on orders over $999
      </div>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-xl shadow-soft border-b border-[var(--border-light)]'
            : 'bg-cream/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/home-page" className="flex-shrink-0 group">
              <svg
                viewBox="0 0 100 20"
                className="h-5 w-auto"
                aria-label="JoybirdLux"
              >
                <text
                  x="0"
                  y="16"
                  fontFamily="Fraunces, serif"
                  fontSize="16"
                  fontWeight="500"
                  fill="#016A78"
                  letterSpacing="1"
                >
                  JOYBIRDLUX
                </text>
              </svg>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {NAV_ITEMS?.map((item) => (
                <Link
                  key={item?.label}
                  href={item?.href}
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
                    item?.highlight
                      ? 'text-brand-cognac' :'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {item?.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-teal group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <Link
                href="/home-page"
                className="text-sm font-semibold text-brand-teal hover:text-brand-teal-dark transition-colors duration-200"
              >
                Free Design Services
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              <button
                className="p-2 rounded-full hover:bg-[var(--bg-warm)] transition-colors hidden md:flex items-center justify-center"
                aria-label="Search"
              >
                <MagnifyingGlassIcon className="w-5 h-5 text-[var(--text-secondary)]" />
              </button>
              <button
                className="p-2 rounded-full hover:bg-[var(--bg-warm)] transition-colors hidden md:flex items-center justify-center"
                aria-label="Account"
              >
                <UserIcon className="w-5 h-5 text-[var(--text-secondary)]" />
              </button>
              <button
                className="p-2 rounded-full hover:bg-[var(--bg-warm)] transition-colors flex items-center justify-center"
                aria-label="Wishlist"
              >
                <HeartIcon className="w-5 h-5 text-[var(--text-secondary)]" />
              </button>
              <button className="relative p-2 rounded-full hover:bg-[var(--bg-warm)] transition-colors flex items-center justify-center" aria-label="Shopping bag">
                <ShoppingBagIcon className="w-5 h-5 text-[var(--text-primary)]" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-teal text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="lg:hidden p-2 rounded-full hover:bg-[var(--bg-warm)] transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? (
                  <XMarkIcon className="w-5 h-5 text-[var(--text-primary)]" />
                ) : (
                  <Bars3Icon className="w-5 h-5 text-[var(--text-primary)]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 cubic-bezier-spring ${
            mobileOpen ? 'max-h-[400px]' : 'max-h-0'
          }`}
        >
          <div className="bg-cream border-t border-[var(--border-light)] px-4 py-4">
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS?.map((item) => (
                <Link
                  key={item?.label}
                  href={item?.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                    item?.highlight
                      ? 'text-brand-cognac' :'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-warm)]'
                  }`}
                >
                  {item?.label}
                </Link>
              ))}
              <Link
                href="/home-page"
                onClick={() => setMobileOpen(false)}
                className="py-3 px-3 rounded-lg text-sm font-semibold text-brand-teal hover:bg-[var(--bg-warm)] transition-colors"
              >
                Free Design Services
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}