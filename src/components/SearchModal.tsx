'use client';

import React, { useState, useMemo } from 'react';
import { useShop } from '@/context/ShopContext';
import { PRODUCTS } from '@/data/vastrangData';
import { SearchIcon, XIcon, ShoppingBagIcon } from './Icons';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, openQuickView, addToCart } = useShop();
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.colors.some((c) => c.toLowerCase().includes(q))
    );
  }, [query]);

  if (!isSearchOpen) return null;

  const popularTags = ['Satin Silk', 'Ajrak Print', 'Banarasi', 'Salwar Suit', 'Chanderi Cotton', 'Clearance'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="flex min-h-full items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24">
        <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-stone-200">
          
          {/* Search Header */}
          <div className="p-4 sm:p-6 border-b border-stone-100 flex items-center gap-3">
            <SearchIcon className="w-5 h-5 text-stone-400" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sarees, salwar suits, kurtis, prints..."
              className="flex-1 text-sm sm:text-base text-stone-900 placeholder-stone-400 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-xs text-stone-400 hover:text-stone-600 px-2 py-1"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1 rounded-full text-stone-400 hover:text-stone-800"
              aria-label="Close search"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Popular Search Suggestions */}
          {!query && (
            <div className="p-6 bg-stone-50/50">
              <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-2.5">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 rounded-full bg-white border border-stone-200 hover:border-[#7d4e48] hover:text-[#7d4e48] text-xs text-stone-700 transition"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results List */}
          {query && (
            <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
              <div className="text-xs text-stone-500 mb-2">
                Found {filteredProducts.length} product{filteredProducts.length === 1 ? '' : 's'} matching &ldquo;{query}&rdquo;
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-10 text-stone-400 text-sm">
                  No products found. Try searching for &ldquo;Saree&rdquo;, &ldquo;Silk&rdquo;, or &ldquo;Kurta&rdquo;.
                </div>
              ) : (
                filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between gap-3 p-2.5 rounded-xl hover:bg-stone-50 transition border border-transparent hover:border-stone-100"
                  >
                    <div
                      className="flex items-center gap-3 cursor-pointer flex-1"
                      onClick={() => {
                        setIsSearchOpen(false);
                        openQuickView(p);
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-14 h-16 object-cover object-top rounded-lg bg-stone-100 border border-stone-200 flex-shrink-0"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-medium text-stone-900 line-clamp-1">
                          {p.title}
                        </h4>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="font-bold text-xs sm:text-sm text-[#7d4e48]">
                            {p.salePrice}
                          </span>
                          {p.regularPrice && (
                            <span className="text-[11px] text-stone-400 line-through">
                              {p.regularPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        addToCart(p, 1);
                        setIsSearchOpen(false);
                      }}
                      className="p-2 rounded-full bg-stone-100 hover:bg-[#7d4e48] text-stone-700 hover:text-white transition flex-shrink-0"
                      aria-label="Add to cart"
                    >
                      <ShoppingBagIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
