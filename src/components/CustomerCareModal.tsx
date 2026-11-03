'use client';

import React, { useState } from 'react';
import { XIcon, TruckIcon, RotateCcwIcon, ShieldCheckIcon, WhatsAppIcon, CheckIcon } from './Icons';
import { STORE_INFO } from '@/data/vastrangData';

export type PolicyTab = 'track' | 'shipping' | 'returns' | 'contact' | 'privacy';

interface CustomerCareModalProps {
  isOpen: boolean;
  activeTab: PolicyTab;
  onClose: () => void;
  onTabChange: (tab: PolicyTab) => void;
}

export default function CustomerCareModal({
  isOpen,
  activeTab,
  onClose,
  onTabChange,
}: CustomerCareModalProps) {
  const [trackingId, setTrackingId] = useState('');
  const [trackingResult, setTrackingResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setTrackingResult(`Order #${trackingId.toUpperCase()} is Dispatched via Shiprocket Express. Estimated Delivery: 2-3 Business Days. Live tracking updates sent via WhatsApp.`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-2 sm:p-6">
        <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-stone-200">
          
          {/* Modal Header */}
          <div className="p-4 sm:p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50">
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                Customer Support & Policies
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-stone-400 hover:text-stone-800 transition"
              aria-label="Close"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-stone-100 overflow-x-auto no-scrollbar bg-stone-50/50 px-4 sm:px-6">
            <button
              onClick={() => onTabChange('track')}
              className={`py-3 px-3 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition ${
                activeTab === 'track'
                  ? 'border-[#7d4e48] text-[#7d4e48] font-bold'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              Track Order
            </button>
            <button
              onClick={() => onTabChange('shipping')}
              className={`py-3 px-3 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition ${
                activeTab === 'shipping'
                  ? 'border-[#7d4e48] text-[#7d4e48] font-bold'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              Shipping Policy
            </button>
            <button
              onClick={() => onTabChange('returns')}
              className={`py-3 px-3 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition ${
                activeTab === 'returns'
                  ? 'border-[#7d4e48] text-[#7d4e48] font-bold'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              Return & Exchange
            </button>
            <button
              onClick={() => onTabChange('contact')}
              className={`py-3 px-3 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition ${
                activeTab === 'contact'
                  ? 'border-[#7d4e48] text-[#7d4e48] font-bold'
                  : 'border-transparent text-stone-500 hover:text-stone-800'
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 max-h-[65vh] overflow-y-auto text-xs sm:text-sm text-stone-600 leading-relaxed space-y-4">
            {activeTab === 'track' && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 mb-1">
                    Track Your Charmiqe Order
                  </h3>
                  <p className="text-stone-500 text-xs">
                    Enter your Order ID (e.g., VST-9842) or 10-digit mobile number to get live dispatch updates.
                  </p>
                </div>

                <form onSubmit={handleTrack} className="flex gap-2">
                  <input
                    type="text"
                    required
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    placeholder="Enter Order ID / Mobile Number"
                    className="flex-1 px-4 py-2.5 rounded-lg border border-stone-300 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#7d4e48]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#7d4e48] text-white rounded-lg font-semibold hover:bg-[#633b36] transition shadow-xs"
                  >
                    Track
                  </button>
                </form>

                {trackingResult && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 space-y-1 animate-fadeIn">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                      <CheckIcon className="w-4 h-4 text-emerald-600" />
                      <span>Order Found</span>
                    </div>
                    <p className="text-xs">{trackingResult}</p>
                  </div>
                )}

                <div className="pt-2 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500">
                  <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                  <span>Need instant help? Contact WhatsApp Support: {STORE_INFO.whatsapp}</span>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-base">
                  <TruckIcon className="w-5 h-5 text-[#7d4e48]" />
                  <h4>Fast Pan-India Delivery</h4>
                </div>
                <ul className="space-y-2 list-disc pl-5 text-stone-600">
                  <li><strong>Free Express Shipping:</strong> Available on all orders above ₹999.</li>
                  <li><strong>Standard Delivery Timeline:</strong> Orders are dispatched within 24 hours from Surat warehouse. Delivered in 3–5 business days across 25,000+ pin codes.</li>
                  <li><strong>Cash on Delivery (COD):</strong> Available all over India with zero advance payment required.</li>
                  <li><strong>Discreet & Safe Packaging:</strong> All sarees are packed in weatherproof, tear-resistant secure tamper-evident bags.</li>
                </ul>
              </div>
            )}

            {activeTab === 'returns' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-base">
                  <RotateCcwIcon className="w-5 h-5 text-[#7d4e48]" />
                  <h4>Hassle-Free 7-Day Exchange Policy</h4>
                </div>
                <p>
                  We stand by the authentic craftsmanship of every product. If you receive an item with any manufacturing defect, sizing issue, or transit damage:
                </p>
                <ul className="space-y-2 list-disc pl-5 text-stone-600">
                  <li>Initiate exchange within 7 days of delivery by texting us on WhatsApp.</li>
                  <li>Our courier partner will pick up the item from your doorstep.</li>
                  <li>Replacement or full store credit is processed upon pickup.</li>
                  <li>Please ensure item tags, folds, and original blouse pieces are intact.</li>
                </ul>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-base">
                  <ShieldCheckIcon className="w-5 h-5 text-[#7d4e48]" />
                  <h4>Charmiqe Customer Care</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <span className="text-xs text-stone-400 uppercase font-semibold block">WhatsApp Support</span>
                    <a
                      href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      {STORE_INFO.whatsapp}
                    </a>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <span className="text-xs text-stone-400 uppercase font-semibold block">Customer Helpline</span>
                    <span className="text-stone-900 font-bold">{STORE_INFO.phone}</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <span className="text-xs text-stone-400 uppercase font-semibold block">Email Support</span>
                    <span className="text-stone-900 font-bold">{STORE_INFO.email}</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <span className="text-xs text-stone-400 uppercase font-semibold block">Operating Hours</span>
                    <span className="text-stone-900 font-bold">{STORE_INFO.hours}</span>
                  </div>
                </div>
                <p className="text-xs text-stone-400 pt-1">
                  Warehouse & Studio: {STORE_INFO.address}
                </p>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-stone-50 border-t border-stone-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium text-xs transition"
            >
              Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
