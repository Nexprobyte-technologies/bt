'use client';

import React from 'react';
import { CATEGORIES } from '@/data/vastrangData';

export default function CategoryList() {
  return (
    <section className="py-12 sm:py-16 bg-[#fcfaf7] border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#7d4e48] font-bold">
            Curated Categories
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 mt-1 mb-2">
            Shop by Collection
          </h2>
          <div className="w-16 h-0.5 bg-[#7d4e48] mx-auto mb-3" />
          <p className="text-xs sm:text-sm text-stone-600 font-light">
            Discover handcrafted designer sarees and ethnic ensembles for every special occasion.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={cat.link}
              className="group flex flex-col items-center text-center cursor-pointer transition transform hover:-translate-y-1"
            >
              {/* Category Circle Image Container */}
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden p-1 bg-white border-2 border-stone-200 group-hover:border-[#7d4e48] shadow-sm group-hover:shadow-md transition-all duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-stone-100 flex items-center justify-center relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Badge if available */}
                {cat.badge && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#7d4e48] text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap">
                    {cat.badge}
                  </span>
                )}
              </div>

              {/* Title & Count */}
              <h3 className="mt-3 text-xs sm:text-sm font-semibold text-stone-900 group-hover:text-[#7d4e48] transition">
                {cat.name}
              </h3>
              <span className="text-[11px] text-stone-500 font-medium">
                {cat.count}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
