'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';
import { Product } from '@/data/vastrangData';
import { getProductWhatsAppHref } from '@/lib/productWhatsApp';
import {
  XIcon,
  StarIcon,
  HeartIcon,
  PlusIcon,
  MinusIcon,
  TruckIcon,
  ShieldCheckIcon,
  WhatsAppIcon,
} from './Icons';

function QuickViewContent({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const { toggleWishlist, isWishlisted } = useShop();

  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors && product.colors.length > 0 ? product.colors[0] : 'Standard'
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.isSalwarSuit ? 'M' : 'Free Size'
  );
  const [quantity, setQuantity] = useState<number>(1);

  const wishlisted = isWishlisted(product.id);
  const sizeOptions = product.isSalwarSuit
    ? ['S', 'M', 'L', 'XL', 'XXL', '3XL']
    : ['Free Size (Saree with Blouse Piece)'];

  return (
    <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 text-stone-700 hover:text-stone-900 shadow-md flex items-center justify-center transition"
        aria-label="Close modal"
      >
        <XIcon className="w-5 h-5" />
      </button>

      {/* Left Column: Image Gallery */}
      <div className="w-full md:w-1/2 p-4 sm:p-6 bg-stone-50 flex flex-col justify-between">
        <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-stone-200 border border-stone-200 shadow-inner">
          <Image
            src={selectedImage}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition duration-300"
          />

          {product.badge && (
            <span className="absolute top-3 left-3 bg-[#d0473e] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded shadow-md">
              {product.badge}
            </span>
          )}
        </div>

        {/* Thumbnail Pickers */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          <button
            onClick={() => setSelectedImage(product.image)}
            className={`relative w-14 h-18 rounded-lg overflow-hidden border-2 transition ${
              selectedImage === product.image ? 'border-[#7d4e48]' : 'border-transparent opacity-70'
            }`}
          >
            <Image src={product.image} alt="Thumbnail 1" width={56} height={72} className="h-full w-full object-cover object-top" />
          </button>
          {product.hoverImage && (
            <button
              onClick={() => setSelectedImage(product.hoverImage)}
              className={`relative w-14 h-18 rounded-lg overflow-hidden border-2 transition ${
                selectedImage === product.hoverImage ? 'border-[#7d4e48]' : 'border-transparent opacity-70'
              }`}
            >
              <Image src={product.hoverImage} alt="Thumbnail 2" width={56} height={72} className="h-full w-full object-cover object-top" />
            </button>
          )}
        </div>
      </div>

      {/* Right Column: Product Configuration & Actions */}
      <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-4">
        <div>
          {/* Rating & Reviews */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs text-stone-500 font-medium">
              {product.rating} ({product.reviewsCount} verified reviews)
            </span>
          </div>

          {/* Title */}
          <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900 leading-snug">
            {product.title}
          </h2>

          {/* Price Block */}
          <div className="flex items-baseline gap-3 my-3">
            <span className="text-2xl font-bold text-[#7d4e48] font-serif">
              {product.salePrice}
            </span>
            {product.regularPrice && (
              <span className="text-sm text-stone-400 line-through">
                {product.regularPrice}
              </span>
            )}
            {product.discountPercent > 0 && (
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Save {product.discountPercent}%
              </span>
            )}
          </div>

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="my-4">
              <span className="text-xs font-semibold text-stone-800 block mb-2">
                Select Color: <span className="font-normal text-stone-600">{selectedColor}</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                      selectedColor === color
                        ? 'border-[#7d4e48] bg-rose-50 text-[#7d4e48] font-bold shadow-xs'
                        : 'border-stone-200 text-stone-700 hover:border-stone-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          <div className="my-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-stone-800">
                Size: <span className="font-normal text-stone-600">{selectedSize}</span>
              </span>
              <span className="text-[11px] text-[#7d4e48] hover:underline cursor-pointer">
                Size Guide
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {sizeOptions.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium border transition ${
                    selectedSize === size
                      ? 'border-[#7d4e48] bg-[#7d4e48] text-white shadow-xs'
                      : 'border-stone-200 text-stone-700 hover:border-stone-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="my-4">
            <span className="text-xs font-semibold text-stone-800 block mb-1.5">
              Quantity
            </span>
            <div className="inline-flex items-center border border-stone-200 rounded-lg">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-2 text-stone-600 hover:bg-stone-100 transition"
                aria-label="Decrease"
              >
                <MinusIcon className="w-3.5 h-3.5" />
              </button>
              <span className="px-4 text-xs font-bold text-stone-800">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-2 text-stone-600 hover:bg-stone-100 transition"
                aria-label="Increase"
              >
                <PlusIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="space-y-2.5 pt-2 border-t border-stone-100">
          <div className="flex gap-2">
            <a
              href={getProductWhatsAppHref(product, {
                color: selectedColor,
                size: selectedSize,
                quantity,
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-6 bg-[#7d4e48] hover:bg-[#633b36] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-md transition flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`p-3 rounded-xl border border-stone-200 hover:border-rose-400 transition flex items-center justify-center ${
                wishlisted ? 'bg-rose-50 text-rose-600' : 'text-stone-700'
              }`}
              aria-label="Wishlist"
            >
              <HeartIcon className="w-5 h-5" filled={wishlisted} />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-stone-600">
            <div className="flex items-center gap-1.5">
              <TruckIcon className="w-4 h-4 text-stone-400" />
              <span>Free shipping above ₹999</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheckIcon className="w-4 h-4 text-stone-400" />
              <span>100% Genuine Fabric</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function QuickViewModal() {
  const { quickViewProduct, closeQuickView } = useShop();

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeQuickView();
    };
    if (quickViewProduct) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [quickViewProduct, closeQuickView]);

  if (!quickViewProduct) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={closeQuickView}
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <QuickViewContent
          key={quickViewProduct.id}
          product={quickViewProduct}
          onClose={closeQuickView}
        />
      </div>
    </div>
  );
}
