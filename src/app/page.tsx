import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import CategoryList from "@/components/CategoryList";
import ProductSection from "@/components/ProductSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import BrandStory from "@/components/BrandStory";
import TrustBadges from "@/components/TrustBadges";
import InstagramGrid from "@/components/InstagramGrid";
import Footer from "@/components/Footer";
import { WhatsAppIcon } from "@/components/Icons";
import { PRODUCTS } from "@/data/vastrangData";

export default function Home() {
  const trendingProducts = PRODUCTS.filter((product) => product.isTrending);
  const bestSellerProducts = PRODUCTS.filter((product) => product.isBestSeller);
  const clearanceProducts = PRODUCTS.filter((product) => product.isClearance);
  const salwarSuitProducts = PRODUCTS.filter((product) => product.isSalwarSuit);

  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        <HeroSlider />
        <div id="categories"><CategoryList /></div>

        <div id="trending">
          <ProductSection
            id="saree"
            tag="Festive & Wedding"
            title="Trending Collection"
            subtitle="Hand-block Ajrak prints, pure satin silks, and glistening mirror work sarees."
            products={trendingProducts}
            filterOptions={["All", "Satin Silk", "Georgette", "Chanderi"]}
            viewAllLink="/collections/saree"
          />
        </div>

        <ProductSection
          id="bestseller"
          tag="Top Rated Classics"
          title="Best Selling Sarees"
          subtitle="Bridal Banarasi tissue silks, Kanjivaram zari weaves, and crunchy silk sarees."
          products={bestSellerProducts}
          filterOptions={["All", "Silk", "Banarasi", "Zari"]}
          viewAllLink="/collections/best-seller"
          bgColor="bg-[#fcfaf7]"
        />

        <MarqueeBanner />

        <ProductSection
          id="clearance"
          tag="Clearance Sale"
          title="Clearance Sale"
          subtitle="Shop special prices on selected Charmiqe favorites."
          products={clearanceProducts}
          viewAllLink="/collections/clearance-sale"
          bgColor="bg-[#fcfaf7]"
        />

        <ProductSection
          id="salwar-suit"
          tag="Ready To Wear Sets"
          title="Salwar Suit Collection"
          subtitle="Elegant designer straight kurta sets with trousers and embellished dupattas."
          products={salwarSuitProducts}
          filterOptions={["All", "Roman Silk", "Cotton"]}
          viewAllLink="/collections/salwar-suit"
        />

        <BrandStory />
        <TrustBadges />
        <InstagramGrid />
      </main>

      <Footer />
      <a
        href="https://wa.me/919514879599"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Charmiqe on WhatsApp at +91 95148 79599"
        title="Chat with us on WhatsApp: +91 95148 79599"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1fb957] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
