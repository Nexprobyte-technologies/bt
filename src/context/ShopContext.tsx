'use client';

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useSyncExternalStore,
} from 'react';
import { Product } from '@/data/vastrangData';

export interface CartItem {
  id: string; // unique item id based on product id + color + size
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

interface ShopContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, color?: string, size?: string) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  cartCount: number;
  cartSubtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;

  wishlist: number[];
  toggleWishlist: (productId: number) => void;
  isWishlisted: (productId: number) => boolean;
  wishlistCount: number;

  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;

  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  toastMessage: string | null;
  showToast: (msg: string) => void;

  discountCode: string;
  discountAmount: number;
  applyDiscountCode: (code: string) => boolean;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const FREE_SHIPPING_THRESHOLD = 999;

const CART_KEY = 'vastrang_cart';
const WISHLIST_KEY = 'vastrang_wishlist';

// In-memory cache to guarantee fast access and fallback
let memoryCart = '[]';
let memoryWishlist = '[]';

const subscribe = (callback: () => void) => {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener('storage', callback);
  window.addEventListener('vastrang_store_update', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('vastrang_store_update', callback);
  };
};

function dispatchUpdate() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('vastrang_store_update'));
  }
}

const getCartSnapshot = (): string => {
  if (typeof window === 'undefined') return '[]';
  try {
    const item = localStorage.getItem(CART_KEY);
    if (item !== null) {
      memoryCart = item;
      return item;
    }
  } catch {
    // fallback to memory
  }
  return memoryCart;
};
const getServerCartSnapshot = (): string => '[]';

const getWishlistSnapshot = (): string => {
  if (typeof window === 'undefined') return '[]';
  try {
    const item = localStorage.getItem(WISHLIST_KEY);
    if (item !== null) {
      memoryWishlist = item;
      return item;
    }
  } catch {
    // fallback to memory
  }
  return memoryWishlist;
};
const getServerWishlistSnapshot = (): string => '[]';

export function ShopProvider({ children }: { children: React.ReactNode }) {
  // Sync with localStorage safely across SSR and Client hydration without mismatch
  const cartRaw = useSyncExternalStore(subscribe, getCartSnapshot, getServerCartSnapshot);
  const wishlistRaw = useSyncExternalStore(subscribe, getWishlistSnapshot, getServerWishlistSnapshot);

  const cart: CartItem[] = useMemo(() => {
    try {
      return JSON.parse(cartRaw);
    } catch {
      return [];
    }
  }, [cartRaw]);

  const wishlist: number[] = useMemo(() => {
    try {
      return JSON.parse(wishlistRaw);
    } catch {
      return [];
    }
  }, [wishlistRaw]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  const persistCart = (newCart: CartItem[]) => {
    const serialized = JSON.stringify(newCart);
    memoryCart = serialized;
    try {
      localStorage.setItem(CART_KEY, serialized);
    } catch {
      // ignore
    }
    dispatchUpdate();
  };

  const persistWishlist = (newWishlist: number[]) => {
    const serialized = JSON.stringify(newWishlist);
    memoryWishlist = serialized;
    try {
      localStorage.setItem(WISHLIST_KEY, serialized);
    } catch {
      // ignore
    }
    dispatchUpdate();
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3000);
  };

  const addToCart = (product: Product, quantity = 1, color?: string, size?: string) => {
    const chosenColor = color || (product.colors && product.colors.length > 0 ? product.colors[0] : 'Standard');
    const chosenSize = size || (product.isSalwarSuit ? 'M' : 'Free Size');
    const itemId = `${product.id}-${chosenColor}-${chosenSize}`;

    const existing = cart.find((item) => item.id === itemId);
    let updatedCart: CartItem[];
    if (existing) {
      updatedCart = cart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
      );
    } else {
      updatedCart = [...cart, { id: itemId, product, quantity, selectedColor: chosenColor, selectedSize: chosenSize }];
    }

    persistCart(updatedCart);
    showToast(`Added "${product.title.slice(0, 28)}..." to bag! 🛍️`);
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    persistCart(cart.filter((item) => item.id !== itemId));
    showToast('Item removed from bag');
  };

  const updateQuantity = (itemId: string, delta: number) => {
    const updated = cart
      .map((item) => {
        if (item.id === itemId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      })
      .filter((item): item is CartItem => item !== null);
    persistCart(updated);
  };

  const toggleWishlist = (productId: number) => {
    const exists = wishlist.includes(productId);
    let updated: number[];
    if (exists) {
      updated = wishlist.filter((id) => id !== productId);
      showToast('Removed from your wishlist');
    } else {
      updated = [...wishlist, productId];
      showToast('Added to your wishlist! ❤️');
    }
    persistWishlist(updated);
  };

  const isWishlisted = (productId: number) => wishlist.includes(productId);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const rawSubtotal = cart.reduce((sum, item) => sum + item.product.priceNum * item.quantity, 0);
  const discountAmount = Math.round((rawSubtotal * discountPercent) / 100);
  const cartSubtotal = rawSubtotal - discountAmount;

  const applyDiscountCode = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'FESTIVE10' || clean === 'VASTRANG10') {
      setDiscountCode(clean);
      setDiscountPercent(10);
      showToast('Coupon applied: 10% Extra Discount!');
      return true;
    } else {
      showToast('Invalid coupon code. Try FESTIVE10');
      return false;
    }
  };

  const openQuickView = (product: Product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartSubtotal,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isWishlisted,
        wishlistCount: wishlist.length,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        toastMessage,
        showToast,
        discountCode,
        discountAmount,
        applyDiscountCode,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}
