import type { Metadata } from "next";
import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";
import CartDrawer from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";
import SearchModal from "@/components/SearchModal";
import MobileBottomNav from "@/components/MobileBottomNav";
import Toast from "@/components/Toast";

export const metadata: Metadata = {
  title: "Charmiqe | Designer Ethnic and Bridal Wear",
  description:
    "Shop designer sarees, salwar suits, lehengas, blouses, and ethnic wear at Charmiqe.",
  icons: {
    icon: "/charmiqe.svg",
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
