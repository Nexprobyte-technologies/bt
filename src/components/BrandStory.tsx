'use client';

import React from 'react';
import { SparklesIcon } from './Icons';

export default function BrandStory() {
  return (
    <section className="py-16 sm:py-24 bg-[#fcfaf7] relative overflow-hidden border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Emblem / Brand Crest */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#7d4e48]/10 text-[#7d4e48] mb-6">
          <SparklesIcon className="w-7 h-7" />
        </div>

        <span className="text-xs uppercase tracking-[0.3em] text-[#7d4e48] font-bold block mb-2">
          The Heritage of Indian Weaves
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-tight max-w-3xl mx-auto">
          Discover Timeless Elegance with Charmiqe
        </h2>

        <div className="w-20 h-0.5 bg-[#7d4e48] mx-auto my-6" />

        <div className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto space-y-4 font-light">
          <p>
            At <strong className="font-semibold text-stone-900">Charmiqe</strong>, we celebrate the eternal grace of Indian craftsmanship. Every saree, salwar suit, and lehenga choli is a symphony of heritage art — crafted from the finest pure satin silks, delicate georgettes, and regal Banarasi zari weaves.
          </p>
          <p>
            From the intricate Ajrak hand-block prints adorned with glistening mirror work to modern silhouette kurta sets, we bring authentic artisan couture directly from the loom to your wardrobe at affordable prices with complete quality guarantee.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mt-12 pt-8 border-t border-stone-200">
          <div className="flex-1 p-4 bg-white rounded-xl shadow-xs border border-stone-100">
            <span className="text-2xl font-serif font-bold text-[#7d4e48] block mb-1">100%</span>
            <span className="text-xs font-semibold text-stone-900 uppercase tracking-wider block">Handcrafted Fabric</span>
            <p className="text-[11px] text-stone-500 mt-1">Authentic weaves sourced directly from master weavers across India.</p>
          </div>
          <div className="flex-1 p-4 bg-white rounded-xl shadow-xs border border-stone-100">
            <span className="text-2xl font-serif font-bold text-[#7d4e48] block mb-1">2 Lakh+</span>
            <span className="text-xs font-semibold text-stone-900 uppercase tracking-wider block">Delighted Patrons</span>
            <p className="text-[11px] text-stone-500 mt-1">Trusted by women for festive, wedding, and party wear occasions.</p>
          </div>
          <div className="flex-1 p-4 bg-white rounded-xl shadow-xs border border-stone-100">
            <span className="text-2xl font-serif font-bold text-[#7d4e48] block mb-1">Direct</span>
            <span className="text-xs font-semibold text-stone-900 uppercase tracking-wider block">Factory Pricing</span>
            <p className="text-[11px] text-stone-500 mt-1">No middlemen markups. Pure luxury made accessible for everyone.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
