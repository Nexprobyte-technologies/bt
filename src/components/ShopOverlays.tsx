'use client';

import dynamic from 'next/dynamic';
import { useShop } from '@/context/ShopContext';

const CartDrawer = dynamic(() => import('./CartDrawer'), { ssr: false });
const QuickViewModal = dynamic(() => import('./QuickViewModal'), { ssr: false });
const SearchModal = dynamic(() => import('./SearchModal'), { ssr: false });
const Toast = dynamic(() => import('./Toast'), { ssr: false });

export default function ShopOverlays() {
  const { isCartOpen, quickViewProduct, isSearchOpen, toastMessage } = useShop();

  return (
    <>
      {isCartOpen && <CartDrawer />}
      {quickViewProduct && <QuickViewModal />}
      {isSearchOpen && <SearchModal />}
      {toastMessage && <Toast />}
    </>
  );
}
