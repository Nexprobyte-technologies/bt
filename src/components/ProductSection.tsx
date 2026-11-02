'use client';

import React, { useState } from 'react';
import { Product } from '@/data/vastrangData';
import ProductCard from './ProductCard';
import { ArrowRightIcon } from './Icons';

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

  const filteredProducts = activeFilter === 'All'
    ? products
    : products.filter((p) => p.title.toLowerCase().includes(activeFilter.toLowerCase()));

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
          {filterOptions && filterOptions.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
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
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-7">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
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
