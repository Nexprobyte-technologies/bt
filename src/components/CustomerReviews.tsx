'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/vastrangData';
import { StarIcon, CheckIcon } from './Icons';

export default function CustomerReviews() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#7d4e48] font-bold">
            Customer Love
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 mt-1">
            Loved by 2 Lakh+ Women Across India
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-2 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="text-xs font-semibold text-stone-700 ml-1">
              4.8 out of 5 Overall Rating
            </span>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-stone-50 border border-stone-200/70 shadow-xs flex flex-col justify-between hover:border-[#7d4e48]/40 transition duration-300"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-stone-700 text-xs sm:text-sm font-light leading-relaxed italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/70 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-stone-900">
                    {t.name}
                  </h4>
                  <span className="text-[11px] text-stone-500">{t.location}</span>
                </div>
                {t.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckIcon className="w-3 h-3" />
                    <span>Verified Buyer</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
