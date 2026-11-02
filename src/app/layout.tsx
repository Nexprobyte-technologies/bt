import type { Metadata } from "next";
import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";
import CartDrawer from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";
import SearchModal from "@/components/SearchModal";
import MobileBottomNav from "@/components/MobileBottomNav";
import Toast from "@/components/Toast";

export const metadata: Metadata = {
  title: "vastrang.in - Online Buy Sari, Salwar Suit, Gown, Lehengas, Kurti",
  description:
    "Online Buy New Saree Salwar Suit Lehenga Choli Gown Kurti Collection | vastrang Fancy Designer Party Wear Wedding Wear Collection | vastrang online Store Buy 2026 latest collection for women Ethnic wear",
  icons: {
    icon: "https://vastrang.in/cdn/shop/files/vastrang.in_2.jpg?crop=center&height=32&v=1785305911&width=32",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-stone-900 antialiased selection:bg-[#7d4e48] selection:text-white">
        <ShopProvider>
          {children}
          <CartDrawer />
          <QuickViewModal />
          <SearchModal />
          <MobileBottomNav />
          <Toast />
        </ShopProvider>
      </body>
    </html>
  );
}
