'use client';

import React, { useState } from 'react';
import { useShop } from '@/context/ShopContext';
import { XIcon, CheckIcon, ShieldCheckIcon, TruckIcon } from './Icons';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { cart, cartSubtotal, discountCode, discountAmount } = useShop();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'upi'>('cod');
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fakeOrderNum = 'VST-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(fakeOrderNum);
    setIsSuccess(true);
  };

  const finalTotal = cartSubtotal;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-stone-200">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50">
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold text-stone-900">
                {isSuccess ? 'Order Confirmed!' : 'Secure Express Checkout'}
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

          {isSuccess ? (
            <div className="p-6 sm:p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckIcon className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Thank You for Your Order!
              </h3>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 max-w-sm mx-auto text-left space-y-1.5 text-xs text-stone-600">
                <p><strong>Order ID:</strong> <span className="font-mono text-[#7d4e48] font-bold">{orderNumber}</span></p>
                <p><strong>Customer:</strong> {name}</p>
                <p><strong>Delivery To:</strong> {address}, {pincode}</p>
                <p><strong>Payment Mode:</strong> {paymentMethod === 'cod' ? 'Cash on Delivery' : 'Instant UPI'}</p>
                <p><strong>Total Amount:</strong> ₹{finalTotal.toLocaleString('en-IN')}</p>
              </div>

              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                We have sent an order confirmation message to <strong>+91 {phone}</strong>. Our team will dispatch your sarees within 24 hours!
              </p>

              <button
                onClick={onClose}
                className="mt-4 px-8 py-3 bg-[#7d4e48] text-white rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#633b36] shadow-md transition"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              {/* Order summary bar */}
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between text-xs">
                <div>
                  <span className="text-stone-500 block">Bag Items: {cart.length}</span>
                  <span className="font-bold text-stone-800 text-sm">
                    Total: ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                  {discountCode && (
                    <span className="text-[10px] text-emerald-600 font-semibold block">
                      Code {discountCode} applied (-₹{discountAmount})
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <TruckIcon className="w-3.5 h-3.5" />
                    <span>Free Shipping</span>
                  </span>
                </div>
              </div>

              {/* Delivery Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Shipping Address
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name *"
                    className="px-3.5 py-2.5 rounded-lg border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#7d4e48]"
                  />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit Mobile Number *"
                    className="px-3.5 py-2.5 rounded-lg border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#7d4e48]"
                  />
                </div>

                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street Address, House/Flat No, Landmark *"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#7d4e48]"
                />

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="6-digit Pincode *"
                    className="px-3.5 py-2.5 rounded-lg border border-stone-300 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#7d4e48]"
                  />
                  <input
                    type="text"
                    defaultValue="India"
                    readOnly
                    className="px-3.5 py-2.5 rounded-lg border border-stone-200 bg-stone-100 text-xs sm:text-sm text-stone-600 cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Payment Method
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between transition ${
                      paymentMethod === 'cod'
                        ? 'border-[#7d4e48] bg-rose-50/50 ring-1 ring-[#7d4e48]'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <span className="font-bold text-xs text-stone-900">Cash on Delivery</span>
                    <span className="text-[10px] text-stone-500 mt-1">Pay with cash or UPI at delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between transition ${
                      paymentMethod === 'upi'
                        ? 'border-[#7d4e48] bg-rose-50/50 ring-1 ring-[#7d4e48]'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <span className="font-bold text-xs text-stone-900">Prepaid / UPI</span>
                    <span className="text-[10px] text-stone-500 mt-1">GPay, PhonePe, Cards, NetBanking</span>
                  </button>
                </div>
              </div>

              {/* Place Order CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#7d4e48] hover:bg-[#633b36] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg transition duration-200 flex items-center justify-center gap-2"
                >
                  <ShieldCheckIcon className="w-4 h-4" />
                  <span>Place Order • ₹{finalTotal.toLocaleString('en-IN')}</span>
                </button>
                <div className="text-center text-[10px] text-stone-400 mt-2">
                  🔒 Guaranteed Safe & 100% Encrypted Checkout
                </div>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
