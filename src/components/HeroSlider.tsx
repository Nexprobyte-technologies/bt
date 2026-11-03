'use client';

import React, { useState, useEffect } from 'react';
import { getImageProps } from 'next/image';
import { HERO_SLIDES } from '@/data/vastrangData';
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from './Icons';

const optimizedHeroImages = HERO_SLIDES.map((slide) => ({
  desktop: getImageProps({
    src: slide.desktopImage,
    alt: slide.title,
    width: 1920,
    height: 1080,
    quality: 75,
    sizes: '100vw',
  }).props,
  mobile: getImageProps({
    src: slide.mobileImage,
    alt: slide.title,
    width: 750,
    height: 1000,
    quality: 75,
    sizes: '100vw',
  }).props,
}));

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
            <picture className="absolute inset-0 block h-full w-full">
              <source media="(max-width: 639px)" srcSet={optimizedHeroImages[index].mobile.srcSet} sizes="100vw" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                {...optimizedHeroImages[index].desktop}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover object-top"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
            </picture>

            {/* Gradient Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent sm:bg-gradient-to-r sm:from-black/70 sm:via-black/25 sm:to-transparent" />

            {/* Content Text Overlay */}
            <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col items-center justify-center sm:items-start p-6 sm:p-12 lg:p-16 min-h-[440px] md:min-h-[580px] lg:min-h-[660px]">
              <div className="max-w-xl text-center text-white space-y-3 sm:text-left sm:space-y-4">
                <span className="inline-block px-3 py-1 bg-[#d0473e] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-md animate-pulse">
                  {slide.badge}
                </span>

                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white drop-shadow-md">
                  {slide.title}
                </h1>

                <p className="text-sm sm:text-lg text-stone-200 font-light tracking-wide max-w-md">
                  {slide.subtitle}
                </p>

                <div className="pt-2 sm:pt-4 flex flex-wrap items-center justify-center gap-3 sm:justify-start sm:gap-4">
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
        className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-stone-800 shadow-md backdrop-blur-xs transition-all duration-200 sm:left-4 sm:h-12 sm:w-12 sm:bg-white/80 sm:hover:bg-white sm:opacity-70 sm:group-hover:opacity-100"
      >
        <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-stone-800 shadow-md backdrop-blur-xs transition-all duration-200 sm:right-4 sm:h-12 sm:w-12 sm:bg-white/80 sm:hover:bg-white sm:opacity-70 sm:group-hover:opacity-100"
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
