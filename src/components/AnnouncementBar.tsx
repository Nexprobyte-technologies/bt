import React from 'react';

export default function AnnouncementBar() {
  const message = 'Free Shipping Across India | Cash on Delivery Available';
  const items = Array.from({ length: 8 }, (_, index) => `${message}-${index}`);

  return (
    <div className="w-full overflow-hidden bg-[#7d4e48] py-2 text-white" aria-label="Store announcements">
      <div className="flex w-max animate-marquee" aria-live="off">
        {items.map((item) => (
          <span key={item} className="flex items-center gap-6 px-4 text-[10px] font-semibold uppercase tracking-wider sm:text-xs">
            <span>{message}</span>
            <span className="text-amber-300" aria-hidden="true">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
