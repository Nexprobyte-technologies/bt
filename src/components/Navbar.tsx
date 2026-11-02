'use client';

import React, { useState, useEffect } from 'react';
import { useShop } from '@/context/ShopContext';
import { SearchIcon, HeartIcon, ShoppingBagIcon, MenuIcon, XIcon } from './Icons';

export default function Navbar() {
  const { cartCount, cartSubtotal, setIsCartOpen, wishlistCount, setIsSearchOpen } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Clearance Sale', href: '#clearance', badge: '60% OFF', badgeColor: 'bg-rose-600' },
    { name: 'Saree', href: '#saree' },
    { name: 'Salwar Suit', href: '#salwar-suit' },
    { name: 'Blouse', href: '#blouse' },
    { name: 'Lehenga Choli', href: '#lehenga' },
    { name: 'Best Seller', href: '#bestseller', badge: 'HOT', badgeColor: 'bg-amber-600' },
  ];

  return (
    <header className={`sticky top-0 z-40 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'border-b border-gray-100 py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="p-2 -ml-2 text-gray-700 hover:text-[#7d4e48] transition"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="p-2 text-gray-700 hover:text-[#7d4e48] transition"
            >
              <SearchIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Search Trigger / Input */}
          <div className="hidden lg:flex items-center flex-1 max-w-xs">
            <div
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center gap-2.5 px-3.5 py-2 bg-stone-50 border border-stone-200 rounded-full text-stone-500 hover:border-[#7d4e48] hover:bg-white cursor-pointer transition text-xs"
            >
              <SearchIcon className="w-4 h-4 text-stone-400" />
              <span>Search sarees, salwar suits, kurtis...</span>
            </div>
          </div>

          {/* Brand Logo - House of Vastrang */}
          <div className="flex flex-col items-center text-center cursor-pointer">
            <a href="#" className="flex flex-col items-center">
              <span className="text-[10px] tracking-[0.3em] font-medium text-[#7d4e48] uppercase">
                House Of
              </span>
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-stone-900 leading-tight">
                VASTRANG
              </span>
              <span className="text-[8px] tracking-[0.25em] text-stone-400 uppercase">
                Ethnic & Bridal Wear
              </span>
            </a>
          </div>

          {/* Actions: Wishlist & Cart */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Wishlist Button */}
            <a
              href="#wishlist-section"
              className="relative p-2 text-stone-700 hover:text-[#7d4e48] transition flex items-center"
              aria-label="Wishlist"
            >
              <HeartIcon className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span
                  suppressHydrationWarning
                  className="absolute -top-0.5 -right-0.5 bg-[#7d4e48] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse"
                >
                  {wishlistCount}
                </span>
              )}
            </a>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-stone-50 hover:bg-[#7d4e48] text-stone-800 hover:text-white transition group border border-stone-200 hover:border-[#7d4e48]"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBagIcon className="w-5 h-5 text-stone-700 group-hover:text-white transition" />
                {cartCount > 0 && (
                  <span
                    suppressHydrationWarning
                    className="absolute -top-2 -right-2 bg-[#d0473e] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
                  >
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:flex flex-col items-start text-left leading-none">
                <span className="text-[9px] uppercase tracking-wider text-stone-400 group-hover:text-rose-100 transition">
                  Bag
                </span>
                <span
                  suppressHydrationWarning
                  className="text-xs font-semibold text-stone-800 group-hover:text-white transition"
                >
                  ₹{cartSubtotal.toLocaleString('en-IN')}
                </span>
              </div>
            </button>
          </div>

        </div>

        {/* Desktop Navigation Category Links */}
        <nav className="hidden lg:flex items-center justify-center gap-8 mt-2 pt-2 border-t border-stone-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-[13px] font-medium tracking-wide text-stone-700 hover:text-[#7d4e48] py-1 transition flex items-center gap-1.5"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full text-white uppercase tracking-tight ${link.badgeColor}`}>
                  {link.badge}
                </span>
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7d4e48] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative flex-1 max-w-xs w-full bg-white shadow-xl flex flex-col justify-between p-6 z-10 animate-slideRight">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="font-serif text-xl font-bold tracking-wider text-[#7d4e48]">
                  VASTRANG
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-full text-stone-400 hover:text-stone-800"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Search */}
              <div
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="mt-4 flex items-center gap-2 p-2.5 bg-stone-100 rounded-lg text-xs text-stone-500 cursor-pointer"
              >
                <SearchIcon className="w-4 h-4 text-stone-400" />
                <span>Search ethnic collections...</span>
              </div>

              {/* Mobile Nav Links */}
              <div className="flex flex-col gap-1 mt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg text-stone-800 hover:bg-stone-50 hover:text-[#7d4e48] font-medium text-sm transition"
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${link.badgeColor}`}>
                        {link.badge}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Drawer Footer */}
            <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 space-y-2">
              <p className="font-semibold text-stone-700">Need Help?</p>
              <p>WhatsApp: +91 98765 43210</p>
              <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
