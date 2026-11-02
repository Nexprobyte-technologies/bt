import React from 'react';
import Link from 'next/link';
import { HOME_COLLECTIONS } from '@/data/vastrangData';

export default function CategoryList() {
  return (
    <section className="bg-[#fcfaf7] py-10 sm:py-14 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-7 sm:mb-9">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#7d4e48] font-bold">Featured Collection</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">Shop by Collection</h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">Discover designer collections for every occasion.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {HOME_COLLECTIONS.map((category) => (
            <Link
              key={category.id}
              href={`/collections/${category.id}`}
              className="group relative isolate aspect-[4/5] overflow-hidden rounded-lg bg-stone-200"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              {category.badge && (
                <span className="absolute left-2 top-2 z-20 rounded-sm bg-white/95 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-[#7d4e48]">
                  {category.badge}
                </span>
              )}
              <span className="absolute inset-x-2 bottom-3 z-20 text-center text-xs font-semibold text-white sm:bottom-4 sm:text-sm">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
