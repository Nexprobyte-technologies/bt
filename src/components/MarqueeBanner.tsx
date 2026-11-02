'use client';

import React from 'react';
import { MARQUEE_ITEMS } from '@/data/vastrangData';

export default function MarqueeBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-[#7d4e48] text-white py-3.5 border-y border-[#633b36]">
      <div className="flex w-max animate-marquee space-x-10">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center space-x-8 text-xs sm:text-sm font-semibold tracking-wider uppercase whitespace-nowrap">
            <span>{item}</span>
            <span className="text-amber-300">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
