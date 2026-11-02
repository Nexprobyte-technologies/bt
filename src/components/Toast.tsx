'use client';

import React from 'react';
import { useShop } from '@/context/ShopContext';
import { CheckIcon } from './Icons';

export default function Toast() {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-16 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce">
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-stone-900/95 text-white rounded-full shadow-2xl backdrop-blur-md border border-stone-700 text-xs sm:text-sm font-medium">
        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
          <CheckIcon className="w-3.5 h-3.5" />
        </div>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}
