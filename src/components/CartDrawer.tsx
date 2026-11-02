'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useShop, FREE_SHIPPING_THRESHOLD } from '@/context/ShopContext';
import { XIcon, PlusIcon, MinusIcon, ShoppingBagIcon, TruckIcon } from './Icons';
import CheckoutModal from './CheckoutModal';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    cartCount,
    discountCode,
    discountAmount,
    applyDiscountCode,
  } = useShop();

  const [couponInput, setCouponInput] = useState('');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isCartOpen) return null;

  const freeShippingLeft = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);
  const freeShippingProgress = Math.min(100, (cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput) {
      applyDiscountCode(couponInput);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
            
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-stone-100 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-2">
                <ShoppingBagIcon className="w-5 h-5 text-[#7d4e48]" />
                <h2 className="font-serif text-lg font-bold text-stone-900">
                  Your Shopping Bag ({cartCount})
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 rounded-full text-stone-400 hover:text-stone-800 transition"
                aria-label="Close cart"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Meter */}
            <div className="px-4 sm:px-6 py-3 bg-amber-50/70 border-b border-amber-100 text-xs text-amber-900">
              <div className="flex items-center gap-2 mb-1.5 font-medium">
                <TruckIcon className="w-4 h-4 text-amber-700" />
                {freeShippingLeft === 0 ? (
                  <span className="text-emerald-700 font-bold">
                    🎉 Congratulations! You have unlocked FREE Express Shipping!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-[#7d4e48]">₹{freeShippingLeft.toLocaleString('en-IN')}</strong> more for <strong className="font-bold text-stone-900">FREE SHIPPING</strong>
                  </span>
                )}
              </div>
              <div className="w-full h-1.5 bg-amber-200/60 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-[#7d4e48] transition-all duration-300 rounded-full"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                    <ShoppingBagIcon className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-800">Your bag is empty</h3>
                  <p className="text-xs text-stone-500 max-w-xs font-light">
                    Looks like you haven&apos;t added any beautiful sarees or suits yet!
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-2 px-6 py-2.5 bg-[#7d4e48] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-md hover:bg-[#633b36] transition"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-3 pb-4 border-b border-stone-100 last:border-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.title}
                      width={80}
                      height={96}
                      className="w-20 h-24 object-cover object-top rounded-lg bg-stone-100 border border-stone-200 flex-shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-medium text-stone-900 line-clamp-2 leading-tight">
                            {item.product.title}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-stone-400 hover:text-rose-600 transition p-0.5"
                            aria-label="Remove item"
                          >
                            <XIcon className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-stone-500">
                          {item.selectedColor && (
                            <span className="bg-stone-100 px-2 py-0.5 rounded text-stone-700">
                              Color: {item.selectedColor}
                            </span>
                          )}
                          {item.selectedSize && (
                            <span className="bg-stone-100 px-2 py-0.5 rounded text-stone-700">
                              {item.selectedSize}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-stone-200 rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 text-stone-600 hover:bg-stone-100 transition"
                            aria-label="Decrease quantity"
                          >
                            <MinusIcon className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-semibold text-stone-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 text-stone-600 hover:bg-stone-100 transition"
                            aria-label="Increase quantity"
                          >
                            <PlusIcon className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="font-bold text-xs sm:text-sm text-[#7d4e48]">
                            ₹{(item.product.priceNum * item.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Subtotal & Checkout */}
            {cart.length > 0 && (
              <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 space-y-3">
                {/* Coupon Code Input */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Coupon code (e.g. FESTIVE10)"
                    className="flex-1 px-3 py-1.5 rounded-lg border border-stone-300 text-xs focus:outline-none focus:ring-1 focus:ring-[#7d4e48]"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 bg-stone-800 text-white rounded-lg text-xs font-semibold hover:bg-black transition"
                  >
                    Apply
                  </button>
                </form>

                {discountCode && (
                  <div className="flex items-center justify-between text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                    <span>Coupon ({discountCode}):</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs text-stone-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-emerald-700">
                    {freeShippingLeft === 0 ? 'FREE' : '₹99 (Free above ₹999)'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm sm:text-base font-bold text-stone-900 pt-1 border-t border-stone-200">
                  <span>Estimated Total</span>
                  <span className="text-[#7d4e48] text-lg font-serif">
                    ₹{cartSubtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-[10px] text-stone-400 text-center">
                  Taxes included. Discounts applied.
                </p>

                {/* Checkout Button */}
                <button
                  onClick={() => setIsCheckoutOpen(true)}
                  className="w-full py-3.5 bg-[#7d4e48] hover:bg-[#633b36] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg transition duration-200 flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                </button>

                <div className="flex items-center justify-center gap-4 text-[10px] text-stone-500 pt-1">
                  <span>🔒 256-Bit Secure</span>
                  <span>•</span>
                  <span>💳 COD Available</span>
                  <span>•</span>
                  <span>🔄 7 Days Exchange</span>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Checkout Simulation Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => {
          setIsCheckoutOpen(false);
          setIsCartOpen(false);
        }}
      />
    </>
  );
}
