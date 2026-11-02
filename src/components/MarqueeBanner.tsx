import React from 'react';

const BENEFITS = [
  'Free Shipping Across India',
  '3 Lakh+ Happy Customers',
  'Cash on Delivery Available',
];

export default function MarqueeBanner() {
  const items = [...BENEFITS, ...BENEFITS, ...BENEFITS, ...BENEFITS];

  return (
    <div className="relative w-full overflow-hidden border-y border-stone-200 bg-[#fcfaf7] py-4 text-stone-800">
      <div className="flex w-max animate-marquee" aria-live="off">
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-8 px-5 text-xs font-semibold tracking-wide sm:text-sm">
            <span>{item}</span>
            <span className="text-[#7d4e48]" aria-hidden="true">&#10022;</span>
          </div>
        ))}
      </div>
    </div>
  );
}
