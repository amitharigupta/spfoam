'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  TruckIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  GiftIcon,
} from '@heroicons/react/24/outline';

export default function HeroBanner() {
  return (
    <section className="w-full">
      
      {/* 🔥 MAIN BANNER */}
      <div className="grid md:grid-cols-2 w-full">
        
        {/* LEFT CONTENT */}
        <div className="bg-[#8B4A2B] text-white flex flex-col justify-center px-6 md:px-12 py-10 md:py-16">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
            Save 30% off your entire order!*
          </h1>

          <Link
            href="/sale"
            className="inline-block bg-white text-black px-6 py-3 text-sm font-medium rounded-md hover:bg-gray-100 transition w-fit"
          >
            Shop Sale
          </Link>

          <p className="text-xs mt-6 opacity-80">
            Hurry, these deals end 4/13. *Exclusions apply
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[300px] md:h-[420px]">
          <Image
            src="/images/sofa.jpg"
            alt="Sofa Banner"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* 🔥 BOTTOM FEATURE BAR */}
      <div className="bg-white border-t flex flex-wrap justify-center gap-6 md:gap-12 py-4 text-sm text-gray-700">
        
        <div className="flex items-center gap-2">
          <TruckIcon className="w-5 h-5" />
          <span>Premium In-Home Delivery</span>
        </div>

        <div className="flex items-center gap-2">
          <CheckCircleIcon className="w-5 h-5" />
          <span>Financing as low as 0% APR</span>
        </div>

        <div className="flex items-center gap-2">
          <CheckCircleIcon className="w-5 h-5" />
          <span>Limited lifetime warranty*</span>
        </div>

        <div className="flex items-center gap-2">
          <WrenchScrewdriverIcon className="w-5 h-5" />
          <span>Free Design Services*</span>
        </div>

        <div className="flex items-center gap-2">
          <GiftIcon className="w-5 h-5" />
          <span>Free Swatch Kit</span>
        </div>
      </div>
    </section>
  );
}