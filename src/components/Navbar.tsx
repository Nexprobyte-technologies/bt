'use client';

import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './Icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Clearance Sale', href: '/collections/clearance-sale', badge: '60% OFF', badgeColor: 'bg-rose-600' },
    { name: 'Saree', href: '/collections/saree' },
    { name: 'Salwar Suit', href: '/collections/salwar-suit' },
    { name: 'Blouse', href: '/collections/blouse' },
    { name: 'Lehenga Choli', href: '/collections/lehenga-choli' },
    { name: 'Best Seller', href: '/collections/best-seller', badge: 'HOT', badgeColor: 'bg-amber-600' },
  ];

  return (
    <header className={`sticky top-0 z-40 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'border-b border-gray-100 py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a
  href="/"
  className="flex flex-col items-start text-left cursor-pointer mr-auto"
  aria-label="Charmiqe home"
>
  <img
    src="/charmiqe_navbar.png"
    alt="Charmiqe Logo"
    className="h-17 w-auto object-contain"
  />
</a>

          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="p-2 -mr-2 text-gray-700 hover:text-[#7d4e48] transition lg:hidden"
          >
            <MenuIcon className="w-6 h-6" />
          </button>

          <nav className="hidden lg:flex items-center justify-end gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="group relative text-[13px] font-medium tracking-wide text-stone-700 hover:text-[#7d4e48] py-1 transition flex items-center gap-1.5">
                <span>{link.name}</span>
                {link.badge && <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full text-white uppercase tracking-tight ${link.badgeColor}`}>{link.badge}</span>}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7d4e48] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative flex-1 max-w-xs w-full bg-white shadow-xl flex flex-col justify-between p-6 z-10 animate-slideRight">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="font-serif text-xl font-bold tracking-wider text-[#7d4e48]">Charmiqe</div>
                <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu" className="p-1 rounded-full text-stone-400 hover:text-stone-800">
                  <XIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1 mt-6">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between py-2.5 px-3 rounded-lg text-stone-800 hover:bg-stone-50 hover:text-[#7d4e48] font-medium text-sm transition">
                    <span>{link.name}</span>
                    {link.badge && <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${link.badgeColor}`}>{link.badge}</span>}
                  </a>
                ))}
              </div>
            </div>
            <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 space-y-2">
              <p className="font-semibold text-stone-700">Need Help?</p>
              <p>WhatsApp: +91 95148 79599</p>
              <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
