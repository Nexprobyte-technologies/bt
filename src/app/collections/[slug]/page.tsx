import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { CATEGORIES, HOME_COLLECTIONS, PRODUCTS } from '@/data/vastrangData';

type CollectionPageProps = {
  params: Promise<{ slug: string }>;
};

function findCollection(slug: string) {
  return HOME_COLLECTIONS.find((item) => item.id === slug) ?? CATEGORIES.find((item) => item.id === slug);
}

export function generateStaticParams() {
  const ids = new Set([...HOME_COLLECTIONS, ...CATEGORIES].map(({ id }) => id));
  return [...ids].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = findCollection(slug);
  return collection ? { title: `${collection.name} | Charmiqe` } : {};
}

function getCollectionProducts(slug: string) {
  switch (slug) {
    case 'featured-collection':
      return PRODUCTS;
    case 'trending-collection':
      return PRODUCTS.filter((product) => product.isTrending);
    case 'new-collection':
      return [...PRODUCTS].reverse().slice(0, 8);
    case 'best-seller':
      return PRODUCTS.filter((product) => product.isBestSeller);
    case 'clearance-sale':
      return PRODUCTS.filter((product) => product.isClearance);
    case 'salwar-suit':
      return PRODUCTS.filter((product) => product.isSalwarSuit);
    case 'lehenga-choli':
      return PRODUCTS.filter((product) => product.isLehenga);
    case 'blouse':
      return PRODUCTS.filter((product) => product.isBlouse);
    default:
      return PRODUCTS.filter((product) => product.category === slug);
  }
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = findCollection(slug);
  if (!collection) notFound();

  const products = getCollectionProducts(slug);

  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <section className="relative isolate flex min-h-64 items-end overflow-hidden bg-stone-900 sm:min-h-80">
          <Image src={collection.image} alt="" fill sizes="100vw" preload className="z-0 object-cover" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />
          <div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
            <Link href="/" className="text-xs font-medium text-white/80 hover:text-white">Home / Collections</Link>
            <h1 className="mt-2 font-serif text-3xl font-bold text-white sm:text-5xl">{collection.name}</h1>
            <p className="mt-2 text-sm text-white/85">Explore our {collection.name.toLowerCase()} collection.</p>
          </div>
        </section>

        <section className="bg-white py-9 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <h2 className="font-serif text-xl font-bold text-stone-900 sm:text-2xl">{collection.name}</h2>
                <p className="mt-1 text-xs text-stone-500">{products.length} products</p>
              </div>
              <Link href="/" className="text-xs font-semibold text-[#7d4e48] hover:underline">Continue shopping</Link>
            </div>
            {products.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-7">
                {products.map((product) => <ProductCard key={product.id} product={product} />)}
              </div>
            ) : (
              <p className="rounded-lg bg-stone-50 px-4 py-12 text-center text-sm text-stone-600">New items are coming soon. Browse another collection to shop now.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
