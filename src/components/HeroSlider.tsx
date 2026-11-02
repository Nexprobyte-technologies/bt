'use client';

import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '@/data/vastrangData';
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from './Icons';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-stone-900 group">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div key={slide.id} className="w-full flex-shrink-0 relative min-h-[440px] md:min-h-[580px] lg:min-h-[660px]">
            {/* Desktop Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.desktopImage}
              alt={slide.title}
              className="hidden sm:block absolute inset-0 w-full h-full object-cover object-top"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Mobile Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.mobileImage}
              alt={slide.title}
              className="sm:hidden absolute inset-0 w-full h-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
            />

            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent sm:bg-gradient-to-r sm:from-black/70 sm:via-black/25 sm:to-transparent" />

            {/* Content Text Overlay */}
            <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-end sm:justify-center p-6 sm:p-12 lg:p-16 min-h-[440px] md:min-h-[580px] lg:min-h-[660px]">
              <div className="max-w-xl text-white space-y-3 sm:space-y-4">
                <span className="inline-block px-3 py-1 bg-[#d0473e] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-md animate-pulse">
                  {slide.badge}
                </span>

                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white drop-shadow-md">
                  {slide.title}
                </h1>

                <p className="text-sm sm:text-lg text-stone-200 font-light tracking-wide max-w-md">
                  {slide.subtitle}
                </p>

                <div className="pt-2 sm:pt-4 flex items-center gap-4">
                  <a
                    href={slide.ctaLink}
                    className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-white hover:bg-[#7d4e48] text-stone-900 hover:text-white font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>

                  <a
                    href="#clearance"
                    className="inline-flex items-center gap-2 px-5 py-3 border border-white/80 hover:bg-white/10 text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded-full backdrop-blur-xs transition"
                  >
                    Clearance Sale
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / Next Arrow Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 hover:bg-white text-stone-800 shadow-md backdrop-blur-xs flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all duration-200"
      >
        <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 hover:bg-white text-stone-800 shadow-md backdrop-blur-xs flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all duration-200"
      >
        <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === i
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
