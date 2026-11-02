'use client';

import React, { useState } from 'react';
import { Product } from '@/data/vastrangData';
import { useShop } from '@/context/ShopContext';
import { getProductWhatsAppHref } from '@/lib/productWhatsApp';
import { HeartIcon, EyeIcon, StarIcon, WhatsAppIcon } from './Icons';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toggleWishlist, isWishlisted, openQuickView } = useShop();
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors && product.colors.length > 0 ? product.colors[0] : ''
  );
  const [isHovered, setIsHovered] = useState(false);
  const wishlisted = isWishlisted(product.id);

  // Map color names to approximate CSS colors for swatch display
  const getColorHex = (colorName: string): string => {
    const lower = colorName.toLowerCase();
    if (lower.includes('blue')) return '#2563eb';
    if (lower.includes('wine')) return '#722f37';
    if (lower.includes('yellow') || lower.includes('gold')) return '#eab308';
    if (lower.includes('green') || lower.includes('mahendi') || lower.includes('perrot')) return '#15803d';
    if (lower.includes('black')) return '#111827';
    if (lower.includes('red') || lower.includes('marron')) return '#dc2626';
    if (lower.includes('white') || lower.includes('offwhite')) return '#f3f4f6';
    if (lower.includes('pink')) return '#ec4899';
    if (lower.includes('purple') || lower.includes('lavender')) return '#9333ea';
    if (lower.includes('peach') || lower.includes('orange')) return '#f97316';
    if (lower.includes('beige')) return '#d4b996';
    return '#a8a29e';
  };

  return (
    <div
      className="group relative flex flex-col bg-white rounded-xl overflow-hidden border border-stone-200/80 hover:border-[#7d4e48]/40 hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Media Image Container (Aspect Ratio 3:4) */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 cursor-pointer" onClick={() => openQuickView(product)}>
        {/* Primary Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.title}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ${
            isHovered && product.hoverImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          loading="lazy"
        />

        {/* Hover / Secondary Image */}
        {product.hoverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.hoverImage}
            alt={`${product.title} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            loading="lazy"
          />
        )}

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.badge && (
            <span className="bg-[#d0473e] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow-sm tracking-wider">
              {product.badge}
            </span>
          )}
          {product.discountPercent > 0 && (
            <span className="bg-stone-900/90 backdrop-blur-xs text-amber-300 text-[9px] font-bold px-2 py-0.5 rounded shadow-sm">
              {product.discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Floating Actions on Top Right */}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-2 z-10 transition-transform duration-300">
          {/* Wishlist Button */}
          <button
            suppressHydrationWarning
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            aria-label="Add to wishlist"
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-stone-700 shadow-md backdrop-blur-xs flex items-center justify-center transition-all ${
              wishlisted ? 'text-rose-600 !bg-white' : 'hover:text-[#7d4e48]'
            }`}
          >
            <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5" filled={wishlisted} />
          </button>

          {/* Quick View Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              openQuickView(product);
            }}
            aria-label="Quick View"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-[#7d4e48] shadow-md backdrop-blur-xs flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
          >
            <EyeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* WhatsApp inquiry on desktop */}
        <div className="absolute bottom-3 left-3 right-3 z-10 hidden sm:block opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <a
            href={getProductWhatsAppHref(product, { color: selectedColor })}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full py-2.5 px-4 bg-white/95 hover:bg-[#7d4e48] text-stone-900 hover:text-white font-semibold text-xs tracking-wider uppercase rounded-lg shadow-lg backdrop-blur-xs flex items-center justify-center gap-2 transition-all duration-200"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between gap-2">
        <div>
          {/* Star Rating */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-[11px] text-stone-500 font-medium">
              {product.rating} ({product.reviewsCount})
            </span>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => openQuickView(product)}
            className="font-medium text-xs sm:text-sm text-stone-900 hover:text-[#7d4e48] line-clamp-2 cursor-pointer transition leading-snug"
            title={product.title}
          >
            {product.title}
          </h3>
        </div>

        {/* Color Swatch Dots if available */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 pt-1 overflow-x-auto py-0.5 no-scrollbar">
            {product.colors.slice(0, 6).map((color) => (
              <button
                key={color}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColor(color);
                }}
                title={color}
                className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                  selectedColor === color
                    ? 'ring-2 ring-[#7d4e48] scale-110 border-white'
                    : 'border-stone-300 hover:scale-105'
                }`}
                style={{ backgroundColor: getColorHex(color) }}
              />
            ))}
            {product.colors.length > 6 && (
              <span className="text-[10px] text-stone-400 font-medium">
                +{product.colors.length - 6}
              </span>
            )}
          </div>
        )}

        {/* Price Row */}
        <div className="pt-1 flex items-baseline justify-between border-t border-stone-100 mt-1">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-sm sm:text-base text-[#7d4e48]">
              {product.salePrice}
            </span>
            {product.regularPrice && (
              <span className="text-xs text-stone-400 line-through">
                {product.regularPrice}
              </span>
            )}
          </div>

          {/* Mobile WhatsApp inquiry */}
          <a
            href={getProductWhatsAppHref(product, { color: selectedColor })}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden p-1.5 rounded-full bg-[#7d4e48] text-white hover:bg-[#633b36] shadow-sm transition"
            aria-label={`Ask about ${product.title} on WhatsApp`}
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
