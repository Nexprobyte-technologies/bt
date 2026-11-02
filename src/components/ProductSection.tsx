'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Product } from '@/data/vastrangData';
import ProductCard from './ProductCard';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface ProductSectionProps {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  products: Product[];
  filterOptions?: string[];
  viewAllLink?: string;
  bgColor?: string;
}

export default function ProductSection({
  id,
  tag,
  title,
  subtitle,
  products,
  filterOptions,
  viewAllLink = '#',
  bgColor = 'bg-white',
}: ProductSectionProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredProducts = activeFilter === 'All'
    ? products
    : products.filter((p) => p.title.toLowerCase().includes(activeFilter.toLowerCase()));

  const scrollCarousel = (direction: -1 | 1) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: direction * carouselRef.current.clientWidth * 0.85,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (isAutoPaused || filteredProducts.length < 2) return;

    const timer = window.setInterval(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      if (maxScroll <= 0) return;

      if (carousel.scrollLeft >= maxScroll - 8) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: carousel.clientWidth * 0.85, behavior: 'smooth' });
      }
    }, 4000);

    return () => window.clearInterval(timer);
  }, [filteredProducts.length, isAutoPaused]);

  return (
    <section id={id} className={`py-14 sm:py-20 ${bgColor} border-b border-stone-200/50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#7d4e48] font-bold">
              {tag}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 mt-1">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1.5 max-w-lg font-light">
              {subtitle}
            </p>
          </div>

          {/* Filter Pills if provided */}
          <div className="flex max-w-full items-center gap-3">
            {filterOptions && filterOptions.length > 0 && (
              <div className="flex min-w-0 items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                {filterOptions.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setActiveFilter(filter);
                      carouselRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all ${
                      activeFilter === filter
                        ? 'bg-[#7d4e48] text-white shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
            <div className="ml-auto flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel(-1)}
                aria-label={`Previous ${title} products`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:border-[#7d4e48] hover:bg-[#7d4e48] hover:text-white"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel(1)}
                aria-label={`Next ${title} products`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition hover:border-[#7d4e48] hover:bg-[#7d4e48] hover:text-white"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Carousel */}
        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-3 no-scrollbar sm:gap-5 lg:gap-7"
          onMouseEnter={() => setIsAutoPaused(true)}
          onMouseLeave={() => setIsAutoPaused(false)}
          onFocusCapture={() => setIsAutoPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setIsAutoPaused(false);
            }
          }}
          onTouchStart={() => setIsAutoPaused(true)}
          onTouchEnd={() => setIsAutoPaused(false)}
        >
          {filteredProducts.slice(0, 8).map((product) => (
            <div key={product.id} className="w-[calc((100%-0.75rem)/2)] shrink-0 snap-start sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-5.25rem)/4)]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a
            href={viewAllLink}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#7d4e48] text-[#7d4e48] hover:bg-[#7d4e48] hover:text-white font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-xs hover:shadow-md transition-all duration-300"
          >
            <span>View All ({products.length} Products)</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
