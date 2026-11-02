'use client';

import React from 'react';
import { useShop } from '@/context/ShopContext';
import { PRODUCTS } from '@/data/vastrangData';
import ProductCard from './ProductCard';
import { HeartIcon, ArrowRightIcon } from './Icons';

export default function WishlistSection() {
  const { wishlist, wishlistCount } = useShop();

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <section id="wishlist-section" className="py-12 sm:py-16 bg-rose-50/40 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2">
            <HeartIcon className="w-6 h-6 text-rose-600" filled={wishlistCount > 0} />
            <h2 suppressHydrationWarning className="font-serif text-xl sm:text-3xl font-bold text-stone-900">
              My Wishlist ({wishlistCount})
            </h2>
          </div>
          {wishlistCount > 0 && (
            <a
              href="#saree"
              className="text-xs font-semibold text-[#7d4e48] hover:underline flex items-center gap-1"
            >
              <span>Explore More</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {wishlistCount === 0 ? (
          <div className="text-center py-10 bg-white/70 rounded-2xl border border-rose-100 p-8 max-w-lg mx-auto">
            <div className="w-14 h-14 rounded-full bg-rose-100/60 text-rose-500 flex items-center justify-center mx-auto mb-3">
              <HeartIcon className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-800 mb-1">
              Your Wishlist is Empty
            </h3>
            <p className="text-xs text-stone-500 font-light mb-4">
              Explore our designer sarees, salwar suits, and lehengas. Tap the ❤️ icon on any card to save your favorites here!
            </p>
            <a
              href="#saree"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#7d4e48] text-white font-semibold text-xs tracking-wider uppercase shadow-sm hover:bg-[#633b36] transition"
            >
              Browse Trending Sarees
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-7">
            {wishlistedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
