'use client';

import React, { useState } from 'react';
import { STORE_INFO } from '@/data/vastrangData';
import { WhatsAppIcon, InstagramIcon } from './Icons';
import CustomerCareModal, { PolicyTab } from './CustomerCareModal';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<PolicyTab>('track');

  const openPolicy = (tab: PolicyTab) => {
    setActiveTab(tab);
    setModalOpen(true);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <>
      <footer className="bg-stone-900 text-stone-300 pt-16 pb-24 lg:pb-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Newsletter Section */}
          <div className="bg-[#7d4e48] rounded-2xl p-6 sm:p-10 text-white mb-16 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-md text-center lg:text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200 font-bold">
                Exclusive Member Perk
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1">
                Get ₹200 OFF on Your First Order
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 mt-1 font-light">
                Subscribe to get secret deals, early festival drop access, and styling tips.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              {subscribed ? (
                <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-center text-xs font-semibold text-white animate-fadeIn">
                  🎉 Welcome to the Vastrang Family! Check your inbox for your ₹200 coupon code.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="px-4 py-3 rounded-full bg-white text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 flex-1"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-stone-900 hover:bg-black text-white font-semibold text-xs tracking-wider uppercase shadow-md transition whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-stone-800 text-xs">
            
            {/* Column 1: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex flex-col">
                <span className="text-[9px] tracking-[0.3em] font-medium text-amber-300 uppercase">
                  House Of
                </span>
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  VASTRANG
                </span>
                <span className="text-[8px] tracking-[0.2em] text-stone-400 uppercase">
                  {STORE_INFO.tagline}
                </span>
              </div>
              <p className="text-stone-400 font-light leading-relaxed max-w-sm">
                India&apos;s preferred online destination for handcrafted designer sarees, festive salwar suits, and bridal lehengas directly from Surat artisans.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={STORE_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#7d4e48] text-white flex items-center justify-center transition"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-emerald-600 text-white flex items-center justify-center transition"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Need Help? */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white uppercase tracking-wider text-xs">
                Need Help?
              </h4>
              <ul className="space-y-2.5 text-stone-400">
                <li>
                  <span className="block text-[10px] text-stone-500 uppercase">Customer Care:</span>
                  <a href={`tel:${STORE_INFO.phone}`} className="text-white hover:text-amber-300 transition">
                    {STORE_INFO.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-[10px] text-stone-500 uppercase">WhatsApp Chat:</span>
                  <a
                    href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline"
                  >
                    Chat with an Expert
                  </a>
                </li>
                <li>
                  <span className="block text-[10px] text-stone-500 uppercase">Email Us:</span>
                  <a href={`mailto:${STORE_INFO.email}`} className="text-stone-300 hover:text-white transition">
                    {STORE_INFO.email}
                  </a>
                </li>
                <li>
                  <span className="block text-[10px] text-stone-500 uppercase">Hours:</span>
                  <span>{STORE_INFO.hours}</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Customer Care Policy Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white uppercase tracking-wider text-xs">
                Customer Care
              </h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <button onClick={() => openPolicy('track')} className="hover:text-white transition text-left">
                    Track Your Order
                  </button>
                </li>
                <li>
                  <button onClick={() => openPolicy('shipping')} className="hover:text-white transition text-left">
                    Shipping Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => openPolicy('returns')} className="hover:text-white transition text-left">
                    Returns & Exchanges
                  </button>
                </li>
                <li>
                  <button onClick={() => openPolicy('shipping')} className="hover:text-white transition text-left">
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button onClick={() => openPolicy('shipping')} className="hover:text-white transition text-left">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => openPolicy('contact')} className="hover:text-white transition text-left">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Quick Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white uppercase tracking-wider text-xs">
                Quick Links
              </h4>
              <ul className="space-y-2 text-stone-400">
                <li><a href="#saree" className="hover:text-white transition">Pure Silk Sarees</a></li>
                <li><a href="#salwar-suit" className="hover:text-white transition">Salwar Suit Sets</a></li>
                <li><a href="#bestseller" className="hover:text-white transition">Best Seller Collection</a></li>
                <li><a href="#clearance" className="hover:text-white transition">Clearance Sale</a></li>
                <li><a href="#blouse" className="hover:text-white transition">Stitched Blouses</a></li>
                <li><a href="#lehenga" className="hover:text-white transition">Bridal Lehengas</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Payment Badges */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
            <p>© 2026 House Of Vastrang (vastrang.in). All Rights Reserved.</p>
            
            {/* Payment Badges */}
            <div className="flex flex-wrap items-center gap-2 text-[10px]">
              <span className="px-2 py-1 rounded bg-stone-800 border border-stone-700 text-stone-300 font-semibold">
                UPI / QR
              </span>
              <span className="px-2 py-1 rounded bg-stone-800 border border-stone-700 text-stone-300 font-semibold">
                GPay / PhonePe
              </span>
              <span className="px-2 py-1 rounded bg-stone-800 border border-stone-700 text-stone-300 font-semibold">
                Visa / Mastercard
              </span>
              <span className="px-2 py-1 rounded bg-stone-800 border border-stone-700 text-stone-300 font-semibold">
                RuPay
              </span>
              <span className="px-2 py-1 rounded bg-stone-800 border border-stone-700 text-emerald-400 font-semibold">
                Cash on Delivery (COD)
              </span>
            </div>
          </div>

        </div>
      </footer>

      {/* Customer Care Modal for Policies */}
      <CustomerCareModal
        isOpen={modalOpen}
        activeTab={activeTab}
        onClose={() => setModalOpen(false)}
        onTabChange={(tab) => setActiveTab(tab)}
      />
    </>
  );
}
