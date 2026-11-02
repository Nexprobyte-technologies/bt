'use client';

import React from 'react';
import { TruckIcon, CreditCardIcon, HeartIcon, RotateCcwIcon } from './Icons';

export default function TrustBadges() {
  const badges = [
    {
      icon: <TruckIcon className="w-8 h-8 text-[#7d4e48]" />,
      title: "Free Shipping Across India",
      desc: "Fast doorstep delivery with live tracking on all prepaid orders."
    },
    {
      icon: <CreditCardIcon className="w-8 h-8 text-[#7d4e48]" />,
      title: "Cash on Delivery Available",
      desc: "Safe & verified COD available across 25,000+ pin codes."
    },
    {
      icon: <HeartIcon className="w-8 h-8 text-[#7d4e48]" filled />,
      title: "Trusted by 2 Lakh+ Patrons",
      desc: "Rated 4.8/5 on product quality, fabric richness & stitching."
    },
    {
      icon: <RotateCcwIcon className="w-8 h-8 text-[#7d4e48]" />,
      title: "Easy 7-Day Exchange",
      desc: "Hassle-free size exchange and dedicated support on WhatsApp."
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-stone-50/70 border border-stone-100 hover:border-[#7d4e48]/30 hover:bg-stone-50 transition duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-white shadow-xs flex items-center justify-center mb-3">
                {badge.icon}
              </div>
              <h3 className="font-semibold text-xs sm:text-sm text-stone-900 mb-1">
                {badge.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-stone-500 font-light leading-relaxed">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
