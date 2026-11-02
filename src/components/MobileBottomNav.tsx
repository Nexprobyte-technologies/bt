'use client';

import React from 'react';
import { useShop } from '@/context/ShopContext';
import { SearchIcon, HeartIcon, ShoppingBagIcon } from './Icons';

export default function MobileBottomNav() {
  const { cartCount, wishlistCount, setIsCartOpen, setIsSearchOpen } = useShop();

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 lg:hidden py-1.5 px-4 shadow-lg">
      <div className="flex items-center justify-around text-stone-700">
        
        {/* Home */}
        <a href="#" className="flex flex-col items-center gap-0.5 text-[#7d4e48] transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 1-1.06 1.06l-.91-.91V20a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4h-2v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.32l-.91.91a.75.75 0 0 1-1.06-1.06l8.69-8.69Z" />
          </svg>
          <span className="text-[10px] font-medium">Home</span>
        </a>

        {/* Collections */}
        <a href="#saree" className="flex flex-col items-center gap-0.5 hover:text-[#7d4e48] transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
          </svg>
          <span className="text-[10px] font-medium">Categories</span>
        </a>

        {/* Search */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="flex flex-col items-center gap-0.5 hover:text-[#7d4e48] transition"
        >
          <SearchIcon className="w-5 h-5" />
          <span className="text-[10px] font-medium">Search</span>
        </button>

        {/* Wishlist */}
        <a href="#wishlist-section" className="relative flex flex-col items-center gap-0.5 hover:text-[#7d4e48] transition">
          <HeartIcon className="w-5 h-5" />
          {wishlistCount > 0 && (
            <span
              suppressHydrationWarning
              className="absolute -top-1 right-2 bg-[#7d4e48] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center"
            >
              {wishlistCount}
            </span>
          )}
          <span className="text-[10px] font-medium">Wishlist</span>
        </a>

        {/* Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center gap-0.5 hover:text-[#7d4e48] transition"
        >
          <ShoppingBagIcon className="w-5 h-5" />
          {cartCount > 0 && (
            <span
              suppressHydrationWarning
              className="absolute -top-1 right-1 bg-[#d0473e] text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center"
            >
              {cartCount}
            </span>
          )}
          <span className="text-[10px] font-medium">Bag</span>
        </button>

      </div>
    </div>
  );
}
