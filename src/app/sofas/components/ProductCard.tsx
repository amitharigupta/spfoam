'use client';

import Image from 'next/image';

export default function ProductCard({ product }: any) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">
      
      {/* Image */}
      <div className="relative h-[220px] w-full mb-3">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>

      {/* Tag */}
      {product.tag && (
        <span className="text-xs bg-gray-200 px-2 py-1 rounded">
          {product.tag}
        </span>
      )}

      {/* Name */}
      <h3 className="mt-2 text-sm font-medium">{product.name}</h3>

      {/* Price */}
      <p className="text-sm text-gray-600">{product.price}</p>
    </div>
  );
}