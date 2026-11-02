import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import CategoryList from "@/components/CategoryList";
import WishlistSection from "@/components/WishlistSection";
import ProductSection from "@/components/ProductSection";
import ClearanceSection from "@/components/ClearanceSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import BrandStory from "@/components/BrandStory";
import TrustBadges from "@/components/TrustBadges";
import InstagramGrid from "@/components/InstagramGrid";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/data/vastrangData";

export default function Home() {
  const trendingProducts = PRODUCTS.filter((p) => p.isTrending);
  const bestSellerProducts = PRODUCTS.filter((p) => p.isBestSeller);
  const clearanceProducts = PRODUCTS.filter((p) => p.isClearance);
  const salwarSuitProducts = PRODUCTS.filter((p) => p.isSalwarSuit);
  const lehengaProducts = PRODUCTS.filter((p) => p.isLehenga);
  const blouseProducts = PRODUCTS.filter((p) => p.isBlouse);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Banner & Sticky Navigation */}
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        {/* Hero Slideshow Banner */}
        <HeroSlider />

        {/* Categories Circle Grid */}
        <div id="categories">
          <CategoryList />
        </div>

        {/* Dynamic Wishlist Section */}
        <WishlistSection />

        {/* Featured Collection: Trending Collection */}
        <div id="trending">
          <ProductSection
            id="saree"
            tag="Festive & Wedding"
            title="Trending Collection"
            subtitle="Hand-block Ajrak prints, pure satin silks, and glistening mirror work sarees."
            products={trendingProducts}
            filterOptions={["All", "Satin Silk", "Georgette", "Chanderi"]}
            viewAllLink="#saree"
          />
        </div>

        {/* Moving Ticker Ribbon */}
        <MarqueeBanner />

        {/* Featured Collection: Best Selling */}
        <ProductSection
          id="bestseller"
          tag="Top Rated Classics"
          title="Best Selling Sarees"
          subtitle="Bridal Banarasi tissue silks, Kanjivaram zari weaves, and crunchy silk sarees."
          products={bestSellerProducts}
          filterOptions={["All", "Silk", "Banarasi", "Zari"]}
          viewAllLink="#bestseller"
          bgColor="bg-[#fcfaf7]"
        />

        {/* Clearance Sale with Live Countdown */}
        <ClearanceSection products={clearanceProducts} />

        {/* Salwar Suit Special Collection */}
        <ProductSection
          id="salwar-suit"
          tag="Ready To Wear Sets"
          title="Salwar Suit Collection"
          subtitle="Elegant designer straight kurta sets with trousers and embellished dupattas."
          products={salwarSuitProducts}
          filterOptions={["All", "Roman Silk", "Cotton"]}
          viewAllLink="#salwar-suit"
        />

        {/* Lehenga Choli Special Collection */}
        <ProductSection
          id="lehenga"
          tag="Bridal & Festive"
          title="Lehenga Choli Collection"
          subtitle="Grand bridal velvet and flared georgette lehengas with heavy zari and foil embroidery."
          products={lehengaProducts}
          filterOptions={["All", "Velvet", "Georgette", "Organza"]}
          viewAllLink="#lehenga"
          bgColor="bg-[#fcfaf7]"
        />

        {/* Designer Blouses Collection */}
        <ProductSection
          id="blouse"
          tag="Stitched & Ready To Wear"
          title="Designer Blouses"
          subtitle="Padded velvet, pure raw silk, and brocade Banarasi crop blouses with hand embroidery."
          products={blouseProducts}
          filterOptions={["All", "Raw Silk", "Velvet", "Brocade"]}
          viewAllLink="#blouse"
        />

        {/* Brand Story Editorial */}
        <BrandStory />

        {/* 4 Pillars Trust Badges */}
        <TrustBadges />

        {/* Instagram Lookbook Gallery */}
        <InstagramGrid />

        {/* Customer Reviews & Ratings */}
        <CustomerReviews />
      </main>

      {/* Footer with Support & Policy Modals */}
      <Footer />
    </div>
  );
}
