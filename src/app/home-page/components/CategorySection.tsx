'use client';

import Image from 'next/image';
import Link from 'next/link';

const CATEGORIES = [
  { label: 'Sofas and Sectionals', image: '/images/categories/sofa.jpg', href: '/sofas' },
  { label: 'Chairs', image: '/images/categories/chair.jpg', href: '/chairs' },
  { label: 'Bedroom', image: '/images/categories/bed.jpg', href: '/bed' },
  { label: 'Decor', image: '/images/categories/decor.jpg', href: '/decor' },
];

export default function CategoryStrip() {
  return (
    <section className="w-full bg-[#f5f5f5] py-8">
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 text-center">

          {CATEGORIES.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex flex-col items-center"
            >
              
              {/* 🔥 IMAGE CONTAINER (FIXED SIZE) */}
              <div className="relative w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] rounded-lg overflow-hidden bg-gray-100">
                
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* LABEL */}
              <p className="mt-3 text-sm md:text-base text-gray-800 group-hover:text-black">
                {item.label}
              </p>

            </Link>
          ))}

        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-200" />
      </div>
    </section>
  );
}