'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '@/data/vastrangData';
import ProductCard from './ProductCard';
import { SparklesIcon } from './Icons';

interface ClearanceSectionProps {
  products: Product[];
}

export default function ClearanceSection({ products }: ClearanceSectionProps) {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="clearance" className="py-14 sm:py-20 bg-rose-50/50 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with Timer */}
        <div className="bg-gradient-to-r from-[#7d4e48] via-[#8d5851] to-[#633b36] rounded-2xl p-6 sm:p-10 text-white shadow-xl mb-10 sm:mb-14 relative overflow-hidden">
          {/* Background decorative circles */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          <div className="absolute right-1/3 -top-10 w-48 h-48 rounded-full bg-amber-400/10 blur-xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-amber-200 text-xs font-bold uppercase tracking-wider mb-3">
                <SparklesIcon className="w-3.5 h-3.5" />
                <span>Limited Time Mega Deal</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Clearance Sale: Up to 70% Off
              </h2>
              <p className="text-stone-200 text-xs sm:text-sm mt-2 max-w-lg">
                Exclusive festive collection sarees and kurta sets at factory-direct clearance prices. Hurry, limited stocks available!
              </p>
            </div>

            {/* Live Countdown Clock */}
            <div className="flex flex-col items-center">
              <span className="text-[11px] uppercase tracking-widest text-amber-200 font-bold mb-2">
                ⚡ Deals Expire In
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex flex-col items-center bg-black/40 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-white/10 min-w-[55px] sm:min-w-[65px]">
                  <span className="text-xl sm:text-3xl font-mono font-bold text-white">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-stone-300">Hours</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold text-amber-300">:</span>
                <div className="flex flex-col items-center bg-black/40 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-white/10 min-w-[55px] sm:min-w-[65px]">
                  <span className="text-xl sm:text-3xl font-mono font-bold text-white">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-stone-300">Mins</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold text-amber-300">:</span>
                <div className="flex flex-col items-center bg-black/40 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-white/10 min-w-[55px] sm:min-w-[65px]">
                  <span className="text-xl sm:text-3xl font-mono font-bold text-amber-300 animate-pulse">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-stone-300">Secs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clearance Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-7">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
