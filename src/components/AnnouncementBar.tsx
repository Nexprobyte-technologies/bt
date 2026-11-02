'use client';

import React, { useState, useEffect } from 'react';
import { ANNOUNCEMENTS, STORE_INFO } from '@/data/vastrangData';
import { ChevronLeftIcon, ChevronRightIcon, WhatsAppIcon } from './Icons';

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  };

  return (
    <div className="bg-[#7d4e48] text-white text-xs tracking-wider font-medium py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: WhatsApp support */}
        <div className="hidden lg:flex items-center gap-2 text-rose-100 hover:text-white transition">
          <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-300" />
          <span>Support: {STORE_INFO.phone}</span>
        </div>

        {/* Center: Rotating announcement with arrows */}
        <div className="flex-1 flex items-center justify-center gap-3">
          <button
            onClick={handlePrev}
            aria-label="Previous announcement"
            className="p-0.5 text-white/70 hover:text-white transition"
          >
            <ChevronLeftIcon className="w-3.5 h-3.5" />
          </button>
          
          <div className="text-center font-semibold overflow-hidden min-h-[1.25rem] flex items-center justify-center">
            <span className="animate-fadeIn transition-all duration-300 px-2">
              {ANNOUNCEMENTS[currentIndex]}
            </span>
          </div>

          <button
            onClick={handleNext}
            aria-label="Next announcement"
            className="p-0.5 text-white/70 hover:text-white transition"
          >
            <ChevronRightIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right: Country / Currency & Track Order */}
        <div className="hidden md:flex items-center gap-4 text-rose-100 text-xs">
          <a href="#track" className="hover:text-white transition">
            Track Order
          </a>
          <span className="text-white/40">|</span>
          <span className="font-semibold text-white flex items-center gap-1">
            <span className="inline-block w-4 h-3 bg-amber-600 rounded-xs"></span>
            INR (₹)
          </span>
        </div>
      </div>
    </div>
  );
}
