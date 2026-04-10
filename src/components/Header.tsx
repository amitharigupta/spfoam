'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBagIcon, HeartIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline';

const NAV_ITEMS = [
  {
    label: 'Living Room', href: '/living-room',
    // submenu: [
    //   { label: 'Chairs', href: '/livingroom/chairs' },
    //   { label: 'Tables', href: '/livingroom/tables' },
    //   { label: 'Storage', href: '/livingroom/storage' },
    //   { label: 'New Arrivals', href: '/livingroom/new', tag: 'New' }
    // ]
  },
  {
    label: 'Barstool',
    href: '/barstool',
    // submenu: [
    //   { label: 'Dining Tables', href: '/dining/tables' },
    //   { label: 'Dining Chairs', href: '/dining/chairs' },
    //   { label: 'Bar Carts + Cabinets', href: '/dining/bar' },
    //   { label: 'New Arrivals', href: '/dining/new', tag: 'New' },
    // ],
    image: '/images/dining.jpg', // 👈 add your image in public/images
  },
  {
    label: 'Bedroom', icon: '🛏️', href: '/bedroom',
    // submenu: [
    //   { label: 'Beds', href: '/bedroom/beds' },
    //   { label: 'Nightstands', href: '/bedroom/nightstands' },
    //   { label: 'Dressers + Chests', href: '/bedroom/dressers&chest' },
    //   { label: 'New Arrivals', href: '/bedroom/new', tag: 'New' },
    // ],
  },
  {
    label: 'Arm Chairs', href: '/arm-chairs',
    // submenu: [
    //   { label: 'Beds', href: '/arm-chairs/desks' },
    //   { label: 'Book Cases', href: '/arm-chairs/book-cases' },
    //   { label: 'Office Chairs', href: '/arm-chairs/office-chair' },
    //   { label: 'New Arrivals', href: '/arm-chairs/new', tag: 'New' },
    // ],
  },
  {
    label: 'Banch', href: '/banch',
    // submenu: [
    //   { label: 'sofas', href: '/chairs/outdoor-sofas' },
    //   { label: 'chairs', href: '/chairs/outdoor-chairs' },
    //   { label: 'tables', href: '/chairs/outdoor-tables' },
    //   { label: 'New Arrivals', href: '/chairs/new', tag: 'New' },
    // ]
  },
  // { label: 'Decor', href: '/decor' },
  // { label: 'Sale', href: '/sale', highlight: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(1);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Promo bar */}
      <div className="w-full bg-brand-teal text-white text-center py-2 px-4 text-xs font-medium tracking-wide">
        Save 30% sitewide — Sale ends soon &nbsp;·&nbsp; Free In-Home Delivery on orders over Rs:1000
      </div>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled
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
                aria-label="SPFoamCentre"
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
                  SP Foam
                </text>
              </svg>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 relative">
              {NAV_ITEMS?.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`text-sm ${item.highlight
                      ? 'text-orange-600'
                      : 'text-gray-700 hover:text-black'
                      }`}
                  >
                    {item.label}
                  </Link>

                  {/* ✅ Mega Menu */}
                  {item.submenu && activeMenu === item.label && (
                    <div className="absolute left-0 top-full mt-4 w-[750px] bg-white shadow-xl rounded-xl p-6 flex gap-6 z-50">

                      {/* LEFT LINKS */}
                      <div className="w-1/3 flex flex-col gap-3">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="text-sm text-gray-700 hover:text-black flex items-center gap-2"
                          >
                            {sub.label}
                            {sub.tag && (
                              <span className="text-xs bg-gray-200 px-2 rounded">
                                {sub.tag}
                              </span>
                            )}
                          </Link>
                        ))}

                        <Link
                          href="/dining-room"
                          className="mt-4 bg-teal-700 text-white px-4 py-2 rounded text-sm text-center"
                        >
                          Shop All {item.label}
                        </Link>
                      </div>

                      {/* RIGHT IMAGE */}
                      <div className="w-2/3 relative h-[220px]">
                        {item?.image ? (
                          <Image
                            src={item.image}
                            alt={item.label}
                            fill
                            className="object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
                            No Image
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/live-workshop"
                className="text-sm font-semibold text-brand-teal hover:text-brand-teal-dark transition-colors duration-200"
              >
                Live Workshop Pics
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
          className={`lg:hidden overflow-hidden transition-all duration-500 cubic-bezier-spring ${mobileOpen ? 'max-h-[400px]' : 'max-h-0'
            }`}
        >
          <div className="bg-cream border-t border-[var(--border-light)] px-4 py-4">
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS?.map((item) => (
                <Link
                  key={item?.label}
                  href={item?.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 px-3 rounded-lg text-sm font-medium transition-colors ${item?.highlight
                    ? 'text-brand-cognac' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-warm)]'
                    }`}
                >
                  {item?.label}
                </Link>
              ))}
              <Link
                href="/live-workshop"
                onClick={() => setMobileOpen(false)}
                className="py-3 px-3 rounded-lg text-sm font-semibold text-brand-teal hover:bg-[var(--bg-warm)] transition-colors"
              >
                Live Workshop
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}