export interface Product {
  id: number;
  title: string;
  category: string;
  salePrice: string;
  regularPrice: string;
  priceNum: number;
  regularNum: number;
  discountPercent: number;
  badge: string;
  image: string;
  hoverImage: string;
  colors: string[];
  rating: string;
  reviewsCount: number;
  isTrending: boolean;
  isBestSeller: boolean;
  isClearance: boolean;
  isSalwarSuit: boolean;
  isLehenga?: boolean;
  isBlouse?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
  count: string;
  badge: string;
}

export interface HeroSlide {
  id: number;
  desktopImage: string;
  mobileImage: string;
  title: string;
  subtitle: string;
  badge: string;
  ctaText: string;
  ctaLink: string;
}

export const STORE_INFO = {
  name: "House Of Vastrang",
  tagline: "Online Buy Sari, Salwar Suit, Gown, Lehengas, Kurti",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "support@vastrang.in",
  address: "Surat Textile Market, Surat, Gujarat - 395002",
  hours: "Mon - Sat: 10:00 AM - 7:00 PM IST",
  socials: {
    instagram: "https://www.instagram.com/vastrang.in/",
    facebook: "https://facebook.com/vastrang.in",
    youtube: "https://youtube.com/@vastrang"
  }
};

export const ANNOUNCEMENTS = [
  "✨ SPECIAL OFFER: BUY 2 GET 1 FREE ON SELECTED FESTIVE COLLECTIONS ✨",
  "🚚 FREE SHIPPING ACROSS INDIA ON ALL ORDERS ABOVE ₹499",
  "💳 CASH ON DELIVERY (COD) AVAILABLE ALL OVER INDIA",
  "🎉 USE CODE: FESTIVE10 FOR EXTRA 10% OFF ON PREPAID ORDERS"
];

export const CATEGORIES: Category[] = [
  {
    "id": "saree",
    "name": "Saree",
    "image": "https://vastrang.in/cdn/shop/files/icons8-saree-48_1_small_50b66a77-ea67-4794-969d-91d5ded54896.png",
    "link": "#saree",
    "count": "350+ Designs",
    "badge": "Popular"
  },
  {
    "id": "salwar-suit",
    "name": "Salwar Suit",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-08-18at1.07.14PM_1.jpg?v=1788610390&width=600",
    "link": "#salwar-suit",
    "count": "180+ Designs",
    "badge": "Trending"
  },
  {
    "id": "lehenga-choli",
    "name": "Lehenga Choli",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2025-05-22at4.00.55PM.jpg?v=1747911074&width=600",
    "link": "#lehenga-choli",
    "count": "120+ Designs",
    "badge": "Festive"
  },
  {
    "id": "blouse",
    "name": "Designer Blouse",
    "image": "https://vastrang.in/cdn/shop/files/WhatsApp_Image_2025-06-19_at_12.26.00_PM.jpg?v=1750316683&width=600",
    "link": "#blouse",
    "count": "90+ Designs",
    "badge": "Stitched"
  },
  {
    "id": "clearance-sale",
    "name": "Clearance Sale",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-05-20at1.38.46PM.jpg?v=1779271110&width=600",
    "link": "#clearance",
    "count": "Up to 70% Off",
    "badge": "Hot Deal"
  },
  {
    "id": "best-seller",
    "name": "Best Sellers",
    "image": "https://vastrang.in/cdn/shop/files/IMG_4530_2d5f619e-52b8-4f5a-ac11-d426d3330f87.jpg?v=1792997560&width=600",
    "link": "#bestseller",
    "count": "Customer Favs",
    "badge": "Top Rated"
  }
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    "id": 1,
    "desktopImage": "https://vastrang.in/cdn/shop/files/web.png?v=1790404859&width=2000",
    "mobileImage": "https://vastrang.in/cdn/shop/files/ChatGPT_Image_Sep_26_2026_12_10_21_PM.png?v=1790404876&width=1200",
    "title": "Grand Festive & Wedding Edit",
    "subtitle": "Pure Satin Silk, Georgette & Banarasi Elegance",
    "badge": "BUY 2 GET 1 FREE",
    "ctaText": "Explore Collection",
    "ctaLink": "#trending"
  },
  {
    "id": 2,
    "desktopImage": "https://vastrang.in/cdn/shop/files/ChatGPT_Image_Sep_28_2026_10_53_51_AM.png?v=1790573146&width=2000",
    "mobileImage": "https://vastrang.in/cdn/shop/files/c29e0138-97b1-4a2c-ad82-8f2a85068c57.png?v=1790573168&width=1200",
    "title": "Ajrak Printed Pure Satin Silk Sarees",
    "subtitle": "Rich Pallu with Handcrafted Mirror Work",
    "badge": "FLAT 50% OFF",
    "ctaText": "Shop Best Sellers",
    "ctaLink": "#bestseller"
  }
];

export const PRODUCTS: Product[] = [
  {
    "id": 1,
    "title": "Luxury Party Wear Pure Satin Silk Ajrak Printed Rich Pallu n Original Mirror Work Designer Saree With Blouse Piece",
    "salePrice": "Rs. 1,999.00",
    "regularPrice": "MRP 4,000.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/IMG_4530_2d5f619e-52b8-4f5a-ac11-d426d3330f87.jpg?v=1792997560&width=3941",
    "hoverImage": "https://vastrang.in/cdn/shop/files/IMG_4528_e1a205ab-4c51-46c6-a3c2-45cf73cafce8.jpg?v=1792997560&width=4284",
    "colors": [
      "Blue",
      "Wine",
      "Yellow",
      "Green",
      "Black",
      "Red"
    ],
    "category": "saree",
    "priceNum": 1999,
    "regularNum": 4000,
    "discountPercent": 50,
    "rating": "4.6",
    "reviewsCount": 38,
    "isTrending": true,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": false
  },
  {
    "id": 2,
    "title": "Entrancing Festive Wear Georgette Print Design Zarkan Diamond Work Fancy Saree With Contrast Blouse Piece",
    "salePrice": "Rs. 1,999.00",
    "regularPrice": "MRP 4,000.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-10-27at13.37.56.jpg?v=1793090642&width=1098",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-10-27at13.37.57_1.jpg?v=1793090642&width=1038",
    "colors": [
      "Brown",
      "Blue",
      "Wine",
      "Purple"
    ],
    "category": "saree",
    "priceNum": 1999,
    "regularNum": 4000,
    "discountPercent": 50,
    "rating": "4.7",
    "reviewsCount": 45,
    "isTrending": true,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": false
  },
  {
    "id": 3,
    "title": "Graceful Party Wear Chanderi Cotton Embroidery Thread n Tussels Work Fancy Saree With Stitched Blouse For Occasion",
    "salePrice": "Rs. 2,249.00",
    "regularPrice": "MRP 4,300.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-10-22at15.08.19.jpg?v=1792664066&width=1200",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-10-22at15.08.18.jpg?v=1792664066&width=1200",
    "colors": [
      "Purple",
      "Black"
    ],
    "category": "saree",
    "priceNum": 2249,
    "regularNum": 4300,
    "discountPercent": 48,
    "rating": "4.8",
    "reviewsCount": 52,
    "isTrending": true,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": false
  },
  {
    "id": 4,
    "title": "Entrancing Wedding Wear Georgette Embroidery n Thread Work Designer Saree With Contrast Blouse Piece",
    "salePrice": "Rs. 1,999.00",
    "regularPrice": "MRP 4,000.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-09-23at07.16.19.jpg?v=1790145371&width=960",
    "hoverImage": "https://vastrang.in/cdn/shop/files/be7df35a-db7c-4dfd-a375-a76bc18b02f5.jpg?v=1793115587&width=3024",
    "colors": [
      "Golden",
      "Purple",
      "Mahendi",
      "Peach",
      "Pink",
      "Sea Green"
    ],
    "category": "saree",
    "priceNum": 1999,
    "regularNum": 4000,
    "discountPercent": 50,
    "rating": "4.9",
    "reviewsCount": 59,
    "isTrending": true,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": false
  },
  {
    "id": 5,
    "title": "Mellifluous Wedding Wear Silk Print Embroidery n Sequence Work Zari Border Saree With Blouse Piece",
    "salePrice": "Rs. 1,999.00",
    "regularPrice": "MRP 5,999.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-10-15at17.38.25.jpg?v=1792066792&width=1294",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-10-15at17.38.25_1.jpg?v=1792066792&width=1026",
    "colors": [
      "White",
      "Yellow",
      "Pink",
      "Sky Blue",
      "Peach"
    ],
    "category": "saree",
    "priceNum": 1999,
    "regularNum": 5999,
    "discountPercent": 67,
    "rating": "4.6",
    "reviewsCount": 66,
    "isTrending": true,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": false
  },
  {
    "id": 6,
    "title": "Party Wear Sky Blue Color Chiffon Embroidery n Sequence Work Fancy Designer Saree",
    "salePrice": "Rs. 1,899.00",
    "regularPrice": "MRP 2,500.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/preview_images/9600fb3bc29f442790c798f4eab89c27.thumbnail.0000000000.jpg?v=1720272570",
    "hoverImage": "https://vastrang.in/cdn/shop/files/IMG_3181.jpg?v=1761552365&width=2793",
    "colors": [
      "White",
      "Preciosblue",
      "Black"
    ],
    "category": "saree",
    "priceNum": 1899,
    "regularNum": 2500,
    "discountPercent": 24,
    "rating": "4.7",
    "reviewsCount": 73,
    "isTrending": true,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": false
  },
  {
    "id": 7,
    "title": "New Chanderi Cotton Embroidery n Tussels Work Fancy Designer Festive Wear Saree With Stitched Blouse",
    "salePrice": "Rs. 2,099.00",
    "regularPrice": "MRP 6,500.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/WhatsApp_Image_2025-06-19_at_12.26.00_PM.jpg?v=1750316683&width=2515",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsAppImage2025-06-04at6.47.35PM.jpg?v=1749216622&width=2583",
    "colors": [
      "BLACK-2",
      "BLUE-2",
      "OFFWHITE-1",
      "PINK-2",
      "OFFWHITE-2",
      "ORANGE-1",
      "PINK-1",
      "ORANGE-2",
      "BLUE-1",
      "BLACK-1",
      "BLACK-3",
      "BLACK-4",
      "RED-1",
      "RED-2",
      "PERROT-1",
      "PERROT-2",
      "WINE-1",
      "WINE-2"
    ],
    "category": "saree",
    "priceNum": 2099,
    "regularNum": 6500,
    "discountPercent": 68,
    "rating": "4.8",
    "reviewsCount": 80,
    "isTrending": false,
    "isBestSeller": true,
    "isClearance": false,
    "isSalwarSuit": false
  },
  {
    "id": 8,
    "title": "Wedding Wear Purple Color Kanjivaram Silk Pure Zari Weaving with Beautiful Meena Weaving Saree",
    "salePrice": "Rs. 2,499.00",
    "regularPrice": "MRP 3,000.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/preview_images/39ae2c1eea5b420083cad982caa1c466.thumbnail.0000000000.jpg?v=1685344599",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsAppImage2025-03-06at6.27.01PM_2.jpg?v=1741266816&width=3024",
    "colors": [
      "BEIGE",
      "YELLOW"
    ],
    "category": "saree",
    "priceNum": 2499,
    "regularNum": 3000,
    "discountPercent": 17,
    "rating": "4.9",
    "reviewsCount": 87,
    "isTrending": false,
    "isBestSeller": true,
    "isClearance": false,
    "isSalwarSuit": false
  },
  {
    "id": 9,
    "title": "New Wedding Wear Banarasi Kota Tissue Silk Zari Weaving Saree With Blouse",
    "salePrice": "Rs. 1,299.00",
    "regularPrice": "MRP 4,000.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/1_6070a121-485a-4994-8f87-b99254d3ed04.jpg?v=1739338016&width=600",
    "hoverImage": "https://vastrang.in/cdn/shop/files/preview_images/25693311b74c43af9ab09209d5bf5d15.thumbnail.0000000000.jpg?v=1717480627",
    "colors": [
      "Gold",
      "Orange",
      "Pink"
    ],
    "category": "saree",
    "priceNum": 1299,
    "regularNum": 4000,
    "discountPercent": 68,
    "rating": "4.6",
    "reviewsCount": 94,
    "isTrending": false,
    "isBestSeller": true,
    "isClearance": false,
    "isSalwarSuit": false
  },
  {
    "id": 10,
    "title": "Marvellous Wedding Wear Pure Crunchy Silk Embroidery Work Fancy Desginer Saree With Blouse",
    "salePrice": "Rs. 1,799.00",
    "regularPrice": "MRP 3,200.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/1_d62c3923-0759-475c-b54d-99d5e767026c.jpg?v=1754048611&width=4284",
    "hoverImage": "https://vastrang.in/cdn/shop/files/preview_images/b5459dc30a034e4b9b5f6eb30e03b76a.thumbnail.0000000000.jpg?v=1754048648",
    "colors": [
      "Purple",
      "Pink",
      "Yellow",
      "Green",
      "Blue"
    ],
    "category": "saree",
    "priceNum": 1799,
    "regularNum": 3200,
    "discountPercent": 44,
    "rating": "4.7",
    "reviewsCount": 101,
    "isTrending": false,
    "isBestSeller": true,
    "isClearance": false,
    "isSalwarSuit": false
  },
  {
    "id": 11,
    "title": "Gratifying Function Wear Pure Satin Silk Ajrak Printed Rich Pallu n Mirror Work Designer Saree With Blouse Piece",
    "salePrice": "Rs. 1,499.00",
    "regularPrice": "MRP 6,000.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-05-20at1.38.46PM.jpg?v=1779271110&width=960",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsApp_Image_2026-05-21_at_1.45.11_PM_2.jpg?v=1779352333&width=960",
    "colors": [
      "Black",
      "Red",
      "Purple",
      "Pink",
      "Wine",
      "Green",
      "Yellow",
      "Sky Blue"
    ],
    "category": "saree",
    "priceNum": 1499,
    "regularNum": 6000,
    "discountPercent": 75,
    "rating": "4.8",
    "reviewsCount": 108,
    "isTrending": false,
    "isBestSeller": true,
    "isClearance": false,
    "isSalwarSuit": false
  },
  {
    "id": 12,
    "title": "Artisanal Function Wear Pure Satin Silk Ajrak Printed Rich Pallu n Mirror Work Designer Saree",
    "salePrice": "Rs. 1,499.00",
    "regularPrice": "MRP 6,200.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/IMG_1477_f61e214d-d3a2-41dd-a839-7a9a79896090.jpg?v=1781681269&width=4099",
    "hoverImage": "https://vastrang.in/cdn/shop/files/IMG_1127_b1406c63-f29a-4bac-8241-f361dbe6ad4c.jpg?v=1781089311&width=4207",
    "colors": [
      "Wine",
      "Blue",
      "Purple"
    ],
    "category": "saree",
    "priceNum": 1499,
    "regularNum": 6200,
    "discountPercent": 76,
    "rating": "4.9",
    "reviewsCount": 115,
    "isTrending": false,
    "isBestSeller": true,
    "isClearance": false,
    "isSalwarSuit": false
  },
  {
    "id": 13,
    "title": "Blossom Party Wear Faux Georgette Sequence Heavy Border n Real Mirror Work Fancy Designer Saree With Unstitched Blouse",
    "salePrice": "Rs. 1,999.00",
    "regularPrice": "MRP 6,500.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/red_bb63f408-026f-4f39-bb0d-55dd0760fa8a.jpg?v=1759314810&width=3024",
    "hoverImage": "https://vastrang.in/cdn/shop/files/wine_f2231ce4-93fb-4d97-bd8b-95c515d956ef.jpg?v=1759314810&width=3024",
    "colors": [
      "RED",
      "WINE",
      "MARRON",
      "BLACK",
      "GREEN",
      "LAVENDER",
      "BLUE",
      "PINK"
    ],
    "category": "saree",
    "priceNum": 1999,
    "regularNum": 6500,
    "discountPercent": 69,
    "rating": "4.6",
    "reviewsCount": 122,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": true,
    "isSalwarSuit": false
  },
  {
    "id": 14,
    "title": "Confounding Festive Wear Crunchy Crush Embroidery Thread Work Lace Border Siroski Designer Saree With Blouse Piece",
    "salePrice": "Rs. 1,599.00",
    "regularPrice": "MRP 4,999.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-07-31at12.27.33PM.jpg?v=1785486064&width=1128",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-07-31at12.27.33PM_1.jpg?v=1785486064&width=1046",
    "colors": [
      "Gold",
      "Orange",
      "Pink"
    ],
    "category": "saree",
    "priceNum": 1599,
    "regularNum": 4999,
    "discountPercent": 68,
    "rating": "4.7",
    "reviewsCount": 129,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": true,
    "isSalwarSuit": false
  },
  {
    "id": 15,
    "title": "New Chanderi Cotton Embroidery n Tussels Work Fancy Designer Festive Wear Saree With Stitched Blouse",
    "salePrice": "Rs. 2,099.00",
    "regularPrice": "MRP 6,500.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/WhatsApp_Image_2025-06-19_at_12.26.00_PM.jpg?v=1750316683&width=2515",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsAppImage2025-06-04at6.47.35PM.jpg?v=1749216622&width=2583",
    "colors": [
      "BLACK-2",
      "BLUE-2",
      "OFFWHITE-1",
      "PINK-2",
      "OFFWHITE-2",
      "ORANGE-1",
      "PINK-1",
      "ORANGE-2",
      "BLUE-1",
      "BLACK-1",
      "BLACK-3",
      "BLACK-4",
      "RED-1",
      "RED-2",
      "PERROT-1",
      "PERROT-2",
      "WINE-1",
      "WINE-2"
    ],
    "category": "saree",
    "priceNum": 2099,
    "regularNum": 6500,
    "discountPercent": 68,
    "rating": "4.8",
    "reviewsCount": 136,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": true,
    "isSalwarSuit": false
  },
  {
    "id": 16,
    "title": "Latest Function wear Viscose Georgette Jacquard Weaving Work Fancy Designer Saree",
    "salePrice": "Rs. 1,099.00",
    "regularPrice": "MRP 3,000.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2024-07-09at9.43.04PM_1.jpg?v=1720593716&width=1200",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsAppImage2024-07-09at9.43.05PM_2.jpg?v=1720593716&width=1200",
    "colors": [
      "Perrot",
      "Red",
      "Purple",
      "White"
    ],
    "category": "saree",
    "priceNum": 1099,
    "regularNum": 3000,
    "discountPercent": 63,
    "rating": "4.9",
    "reviewsCount": 143,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": true,
    "isSalwarSuit": false
  },
  {
    "id": 17,
    "title": "Partywear Red Color Soft Net Sequence Work Fancy Designer Saree With Embroidered Blouse",
    "salePrice": "Rs. 1,599.00",
    "regularPrice": "MRP 3,000.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/preview_images/13d946f081ef4c6888d54162a90353f4.thumbnail.0000000000.jpg?v=1691049535",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsAppImage2025-02-20at5.42.38PM.jpg?v=1740137865&width=3120",
    "colors": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "category": "saree",
    "priceNum": 1599,
    "regularNum": 3000,
    "discountPercent": 47,
    "rating": "4.6",
    "reviewsCount": 150,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": true,
    "isSalwarSuit": false
  },
  {
    "id": 18,
    "title": "Charming Festive Wear  Cotton Embroidery Work Designer Straight Kurta With Trouser n Dupatta Set",
    "salePrice": "Rs. 2,099.00",
    "regularPrice": "MRP 4,999.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-08-18at1.07.14PM_1.jpg?v=1788610390&width=3024",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsApp_Image_2024-09-18_at_2.17.37_PM_de94b3f0-c8d7-4a13-9e95-e51ea8438be0.jpg?v=1788609535&width=1600",
    "colors": [
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "3XL"
    ],
    "category": "salwar-suit",
    "priceNum": 2099,
    "regularNum": 4999,
    "discountPercent": 58,
    "rating": "4.7",
    "reviewsCount": 157,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": true
  },
  {
    "id": 19,
    "title": "Splendorous Festive Wear Roman Silk Embroidery n Sequence Work Designer Straight Kurta With Trouser n Dupatta Set",
    "salePrice": "Rs. 2,099.00",
    "regularPrice": "MRP 4,999.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-10-08at12.06.23_2.jpg?v=1791528790&width=3024",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsApp_Image_2024-09-18_at_2.17.37_PM_1024x1024_2x_1024x1024_2x_71357185-8f94-4ff2-8a66-a0740d6cdad7.webp?v=1791528322&width=1600",
    "colors": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "category": "salwar-suit",
    "priceNum": 2099,
    "regularNum": 4999,
    "discountPercent": 58,
    "rating": "4.8",
    "reviewsCount": 164,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": true
  },
  {
    "id": 20,
    "title": "New Wedding Wear Roman Silk Embroidery n Sequence Work Designer Straight Kurta With Trouser Dupatta Set",
    "salePrice": "Rs. 2,099.00",
    "regularPrice": "MRP 4,999.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-05-29at11.02.32AM_d18c7776-956f-47fd-9b28-c8811e401826.jpg?v=1788609214&width=3024",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsApp_Image_2024-09-18_at_2.17.37_PM_c919d027-3506-4b13-ac4d-fd6d842777c3.jpg?v=1788609256&width=1600",
    "colors": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "category": "salwar-suit",
    "priceNum": 2099,
    "regularNum": 4999,
    "discountPercent": 58,
    "rating": "4.9",
    "reviewsCount": 171,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": true
  },
  {
    "id": 21,
    "title": "New Festive Wear Wine Color Roman Silk Embroidery n Sequence Work Designer Straight Kurta With Trouser n Dupatta Set",
    "salePrice": "Rs. 999.00",
    "regularPrice": "MRP 3,500.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2025-02-14at10.56.10AM_1.jpg?v=1739775632&width=3120",
    "hoverImage": "https://vastrang.in/cdn/shop/files/preview_images/cc3e08eba97042f5b3e736b24c824aeb.thumbnail.0000000000.jpg?v=1741333486",
    "colors": [
      "2XL",
      "XL",
      "M",
      "3XL",
      "L"
    ],
    "category": "salwar-suit",
    "priceNum": 999,
    "regularNum": 3500,
    "discountPercent": 71,
    "rating": "4.6",
    "reviewsCount": 178,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": true
  },
  {
    "id": 22,
    "title": "Heritage Function Wear Cotton Embroidery Work Fancy  Straight Kurta With Trouser n Dupatta Set",
    "salePrice": "Rs. 2,099.00",
    "regularPrice": "MRP 4,100.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-10-01at08.29.07_2_7659707e-7541-4b50-b6b7-94d357a289ce.jpg?v=1790855111&width=960",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-10-01at08.29.08_2_21658bc5-8e56-4264-9900-8821f0757b6d.jpg?v=1790855112&width=960",
    "colors": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "category": "salwar-suit",
    "priceNum": 2099,
    "regularNum": 4100,
    "discountPercent": 49,
    "rating": "4.7",
    "reviewsCount": 185,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": true
  },
  {
    "id": 23,
    "title": "Scrupulous Festive Wear Cotton Embroidery Work Designer Straight Kurta With Trouser Dupatta Set",
    "salePrice": "Rs. 2,099.00",
    "regularPrice": "MRP 4,999.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/WhatsApp_Image_2026-08-18_at_1.36.29_PM_5.jpg?v=1788755212&width=960",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsApp_Image_2024-09-18_at_2.17.37_PM_35c54ebe-9295-495c-974c-1c7072ad48ac.jpg?v=1788598711&width=1600",
    "colors": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "category": "salwar-suit",
    "priceNum": 2099,
    "regularNum": 4999,
    "discountPercent": 58,
    "rating": "4.8",
    "reviewsCount": 192,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": true
  },
  {
    "id": 24,
    "title": "Latest Function Wear Teal Blue Color Cotton Embroidery n Sequence Work Designer Straight Kurta With Trouser n Dupatta Set",
    "salePrice": "Rs. 999.00",
    "regularPrice": "MRP 3,500.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2025-04-11at5.27.36PM_1.jpg?v=1744437120&width=3120",
    "hoverImage": "https://vastrang.in/cdn/shop/files/preview_images/0aae887d685e44d0bfecad7d9cfe67e1.thumbnail.0000000000.jpg?v=1744437064",
    "colors": [
      "L",
      "2XL",
      "S",
      "M",
      "XL",
      "3XL"
    ],
    "category": "salwar-suit",
    "priceNum": 999,
    "regularNum": 3500,
    "discountPercent": 71,
    "rating": "4.9",
    "reviewsCount": 199,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": true
  },
  {
    "id": 25,
    "title": "Grand Bridal Velvet Heavy Zari Embroidery Semi-Stitched Lehenga Choli with Net Dupatta",
    "salePrice": "Rs. 3,999.00",
    "regularPrice": "MRP 8,999.00",
    "badge": "BRIDAL SPECIAL",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2025-05-22at4.00.55PM.jpg?v=1747911074&width=1200",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsAppImage2025-02-20at5.42.38PM.jpg?v=1740137865&width=3120",
    "colors": ["Maroon", "Wine", "Royal Blue", "Bottle Green"],
    "category": "lehenga",
    "priceNum": 3999,
    "regularNum": 8999,
    "discountPercent": 56,
    "rating": "4.9",
    "reviewsCount": 84,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": false,
    "isLehenga": true
  },
  {
    "id": 26,
    "title": "Festive Wear Georgette Mirror & Foil Work Flared Lehenga Choli with Stitched Blouse",
    "salePrice": "Rs. 2,999.00",
    "regularPrice": "MRP 6,500.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/pink_02e0dde9-4001-4e9f-bbef-cfe554150558.jpg?v=1793514531&width=1200",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-10-27at13.37.56.jpg?v=1793090642&width=1098",
    "colors": ["Pink", "Yellow", "Lavender", "Teal"],
    "category": "lehenga",
    "priceNum": 2999,
    "regularNum": 6500,
    "discountPercent": 54,
    "rating": "4.8",
    "reviewsCount": 62,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": false,
    "isLehenga": true
  },
  {
    "id": 27,
    "title": "Royal Organza Silk Floral Print Sequence Border Designer Lehenga Choli",
    "salePrice": "Rs. 2,499.00",
    "regularPrice": "MRP 5,200.00",
    "badge": "TRENDING",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-10-15at17.38.25.jpg?v=1792066792&width=1294",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-10-15at17.38.25_1.jpg?v=1792066792&width=1026",
    "colors": ["Peach", "Sky Blue", "Pista Green"],
    "category": "lehenga",
    "priceNum": 2499,
    "regularNum": 5200,
    "discountPercent": 52,
    "rating": "4.7",
    "reviewsCount": 49,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": false,
    "isLehenga": true
  },
  {
    "id": 28,
    "title": "Traditional Bandhani Print Silk Festive Wear Lehenga Choli with Embroidered Belt",
    "salePrice": "Rs. 2,799.00",
    "regularPrice": "MRP 5,999.00",
    "badge": "HOT SELLER",
    "image": "https://vastrang.in/cdn/shop/files/red_bb63f408-026f-4f39-bb0d-55dd0760fa8a.jpg?v=1759314810&width=1200",
    "hoverImage": "https://vastrang.in/cdn/shop/files/wine_f2231ce4-93fb-4d97-bd8b-95c515d956ef.jpg?v=1759314810&width=1200",
    "colors": ["Red", "Wine", "Mustard Yellow"],
    "category": "lehenga",
    "priceNum": 2799,
    "regularNum": 5999,
    "discountPercent": 53,
    "rating": "4.8",
    "reviewsCount": 77,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": false,
    "isLehenga": true
  },
  {
    "id": 29,
    "title": "Pure Raw Silk Heavy Thread & Hand Zari Work Ready-to-Wear Stitched Designer Blouse",
    "salePrice": "Rs. 999.00",
    "regularPrice": "MRP 2,499.00",
    "badge": "BUY 2 GET 1 FREE",
    "image": "https://vastrang.in/cdn/shop/files/WhatsApp_Image_2025-06-19_at_12.26.00_PM.jpg?v=1750316683&width=1200",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsAppImage2025-06-04at6.47.35PM.jpg?v=1749216622&width=1200",
    "colors": ["Gold", "Red", "Black", "Bottle Green", "Royal Blue"],
    "category": "blouse",
    "priceNum": 999,
    "regularNum": 2499,
    "discountPercent": 60,
    "rating": "4.8",
    "reviewsCount": 112,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": false,
    "isBlouse": true
  },
  {
    "id": 30,
    "title": "Party Wear Velvet Mirror Embroidery Deep Neck Padded Designer Stitched Blouse",
    "salePrice": "Rs. 1,199.00",
    "regularPrice": "MRP 2,800.00",
    "badge": "BESTSELLER",
    "image": "https://vastrang.in/cdn/shop/files/IMG_4530_2d5f619e-52b8-4f5a-ac11-d426d3330f87.jpg?v=1792997560&width=1200",
    "hoverImage": "https://vastrang.in/cdn/shop/files/IMG_4528_e1a205ab-4c51-46c6-a3c2-45cf73cafce8.jpg?v=1792997560&width=1200",
    "colors": ["Black", "Maroon", "Navy Blue", "Dark Green"],
    "category": "blouse",
    "priceNum": 1199,
    "regularNum": 2800,
    "discountPercent": 57,
    "rating": "4.9",
    "reviewsCount": 94,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": false,
    "isBlouse": true
  },
  {
    "id": 31,
    "title": "Graceful Brocade Banarasi Silk Golden Zari Weaving Sleeveless Crop Blouse",
    "salePrice": "Rs. 899.00",
    "regularPrice": "MRP 2,199.00",
    "badge": "FLAT 60% OFF",
    "image": "https://vastrang.in/cdn/shop/files/1_6070a121-485a-4994-8f87-b99254d3ed04.jpg?v=1739338016&width=600",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsAppImage2025-03-06at6.27.01PM_2.jpg?v=1741266816&width=1200",
    "colors": ["Gold", "Silver", "Rose Gold", "Copper"],
    "category": "blouse",
    "priceNum": 899,
    "regularNum": 2199,
    "discountPercent": 59,
    "rating": "4.7",
    "reviewsCount": 78,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": false,
    "isBlouse": true
  },
  {
    "id": 32,
    "title": "Chikankari Thread Embroidery Pure Cotton Designer Stretchable Blouse",
    "salePrice": "Rs. 799.00",
    "regularPrice": "MRP 1,999.00",
    "badge": "SUMMER EDIT",
    "image": "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-08-18at1.07.14PM_1.jpg?v=1788610390&width=1200",
    "hoverImage": "https://vastrang.in/cdn/shop/files/WhatsApp_Image_2026-08-18_at_1.36.29_PM_5.jpg?v=1788755212&width=960",
    "colors": ["White", "Off-White", "Beige", "Black"],
    "category": "blouse",
    "priceNum": 799,
    "regularNum": 1999,
    "discountPercent": 60,
    "rating": "4.8",
    "reviewsCount": 89,
    "isTrending": false,
    "isBestSeller": false,
    "isClearance": false,
    "isSalwarSuit": false,
    "isBlouse": true
  }
];

export const TRUST_FEATURES = [
  {
    icon: "truck",
    title: "Free Shipping Across India",
    description: "Fast delivery to 25,000+ pin codes with live tracking"
  },
  {
    icon: "credit-card",
    title: "Cash on Delivery Available",
    description: "Pay safely when your order arrives at your doorstep"
  },
  {
    icon: "heart",
    title: "2 Lakh+ Happy Customers",
    description: "Rated 4.8/5 on customer reviews across India"
  },
  {
    icon: "rotate-ccw",
    title: "Easy 7-Day Exchange",
    description: "Hassle-free size exchange and dedicated support team"
  }
];

export const MARQUEE_ITEMS = [
  "✨ HANDCRAFTED ETHNIC WEAR",
  "🚚 FREE SHIPPING ALL OVER INDIA",
  "💳 CASH ON DELIVERY AVAILABLE",
  "❤️ TRUSTED BY 2 LAKH+ PATRONS",
  "🔥 BUY 2 GET 1 FREE",
  "⭐ 100% PURE SILK & QUALITY PROMISE",
  "⚡ DISPATCH WITHIN 24 HOURS"
];

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: "https://vastrang.in/cdn/shop/files/IMG_4530_2d5f619e-52b8-4f5a-ac11-d426d3330f87.jpg?v=1792997560&width=600",
    likes: "2.4k",
    comments: "142",
    tag: "@vastrang.in"
  },
  {
    id: 2,
    image: "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-10-27at13.37.56.jpg?v=1793090642&width=600",
    likes: "3.8k",
    comments: "215",
    tag: "@vastrang.in"
  },
  {
    id: 3,
    image: "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-10-22at15.08.19.jpg?v=1792664066&width=600",
    likes: "1.9k",
    comments: "98",
    tag: "@vastrang.in"
  },
  {
    id: 4,
    image: "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-09-23at07.16.19.jpg?v=1790145371&width=600",
    likes: "4.2k",
    comments: "304",
    tag: "@vastrang.in"
  },
  {
    id: 5,
    image: "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-10-15at17.38.25.jpg?v=1792066792&width=600",
    likes: "5.1k",
    comments: "412",
    tag: "@vastrang.in"
  },
  {
    id: 6,
    image: "https://vastrang.in/cdn/shop/files/WhatsAppImage2026-08-18at1.07.14PM_1.jpg?v=1788610390&width=600",
    likes: "2.9k",
    comments: "187",
    tag: "@vastrang.in"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment: "The Pure Satin Silk Ajrak saree exceeded my expectations! The mirror work and pallu detailing are breathtaking. Got so many compliments at my sister's wedding.",
    product: "Pure Satin Silk Ajrak Saree",
    verified: true
  },
  {
    id: 2,
    name: "Ananya Iyer",
    location: "Chennai",
    rating: 5,
    comment: "Super fast delivery to Chennai within 3 days. Fabric is very rich, soft, and feels luxurious. The Buy 2 Get 1 offer is absolutely genuine!",
    product: "Banarasi Kota Tissue Silk Saree",
    verified: true
  },
  {
    id: 3,
    name: "Kavita Patel",
    location: "Ahmedabad",
    rating: 5,
    comment: "Vastrang has become my go-to for ethnic wear. The salwar suit fitting and fabric quality are top tier. Customer care on WhatsApp helped me with sizing too.",
    product: "Roman Silk Straight Kurta Set",
    verified: true
  }
];
