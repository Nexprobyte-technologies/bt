import React from 'react';

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 lg:hidden px-4 pt-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom))] shadow-lg">
      <div className="flex items-center justify-around text-stone-700">
        <a href="/" className="flex min-w-16 flex-col items-center gap-0.5 py-1 text-[#7d4e48] transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 1-1.06 1.06l-.91-.91V20a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4h-2v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.32l-.91.91a.75.75 0 0 1-1.06-1.06l8.69-8.69Z" />
          </svg>
          <span className="text-[10px] font-medium">Home</span>
        </a>
        <a href="/#categories" className="flex min-w-16 flex-col items-center gap-0.5 py-1 hover:text-[#7d4e48] transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25A2.25 2.25 0 0 1 10.5 15.75V18A2.25 2.25 0 0 1 8.25 20.25H6a2.25 2.25 0 0 1-2.25-2.25v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25a2.25 2.25 0 0 1-2.25 2.25h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
          </svg>
          <span className="text-[10px] font-medium">Categories</span>
        </a>
      </div>
    </div>
  );
}
