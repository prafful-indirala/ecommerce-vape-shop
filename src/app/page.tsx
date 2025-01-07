import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import VapeCategories from "@/components/homepage/VapeCategories";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";
import Image from 'next/image';

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "SMOK Nord 50W Pod Kit",
    srcUrl: "/images/devices/smok-nord-50w-main.png",
    gallery: [
      "/images/devices/smok-nord-50w-main.png",
      "/images/devices/smok-nord-50w-main.png",
      "/images/devices/smok-nord-50w-main.png"
    ],
    price: 34.99,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 2,
    title: "Geek Vape Aegis Legend 2",
    srcUrl: "/images/devices/smok-nord-50w-main.png",
    gallery: ["/images/devices/smok-nord-50w-main.png"],
    price: 89.99,
    discount: {
      amount: 0,
      percentage: 15,
    },
    rating: 4.8,
  },
  {
    id: 3,
    title: "Voopoo Drag X Pod Mod",
    srcUrl: "/images/devices/smok-nord-50w-main.png",
    gallery: ["/images/devices/smok-nord-50w-main.png"],
    price: 44.99,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.6,
  },
  {
    id: 4,
    title: "Uwell Caliburn G2",
    srcUrl: "/images/devices/smok-nord-50w-main.png",
    gallery: ["/images/devices/smok-nord-50w-main.png"],
    price: 29.99,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.7,
  },
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Elf Bar BC5000",
    srcUrl: "/images/devices/smok-nord-50w-main.png",
    gallery: ["/images/devices/smok-nord-50w-main.png"],
    price: 16.99,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.9,
  },
  {
    id: 6,
    title: "Lost Vape Orion Plus",
    srcUrl: "/images/devices/smok-nord-50w-main.png",
    gallery: ["/images/devices/smok-nord-50w-main.png"],
    price: 49.99,
    discount: {
      amount: 0,
      percentage: 10,
    },
    rating: 4.5,
  },
  {
    id: 7,
    title: "Vaporesso XROS 3",
    srcUrl: "/images/devices/smok-nord-50w-main.png",
    gallery: ["/images/devices/smok-nord-50w-main.png"],
    price: 24.99,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.3,
  },
  {
    id: 8,
    title: "JUUL 2 Starter Kit",
    srcUrl: "/images/devices/smok-nord-50w-main.png",
    gallery: ["/images/devices/smok-nord-50w-main.png"],
    price: 39.99,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.4,
  },
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Premium E-Liquid Pack",
    srcUrl: "/images/devices/smok-nord-50w-main.png",
    gallery: ["/images/devices/smok-nord-50w-main.png"],
    price: 59.99,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.7,
  },
  {
    id: 13,
    title: "Replacement Coils 5-Pack",
    srcUrl: "/images/devices/smok-nord-50w-main.png",
    gallery: ["/images/devices/smok-nord-50w-main.png"],
    price: 14.99,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.6,
  },
  {
    id: 14,
    title: "Pod Cartridge Bundle",
    srcUrl: "/images/devices/smok-nord-50w-main.png",
    gallery: ["/images/devices/smok-nord-50w-main.png"],
    price: 19.99,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
  },
  {
    id: 15,
    title: "Battery Pack 18650",
    srcUrl: "/images/devices/smok-nord-50w-main.png",
    gallery: ["/images/devices/smok-nord-50w-main.png"],
    price: 24.99,
    discount: {
      amount: 0,
      percentage: 15,
    },
    rating: 4.9,
  },
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Mike R.",
    content: "Best wholesale prices I've found for vape products. The customer service is exceptional, and shipping is always fast and reliable.",
    rating: 5,
    date: "March 15, 2024",
  },
  {
    id: 2,
    user: "David S.",
    content: "As a vape shop owner, finding reliable wholesale suppliers is crucial. This platform has never let me down with their product quality and competitive pricing.",
    rating: 5,
    date: "March 14, 2024",
  },
  {
    id: 3,
    user: "Lisa M.",
    content: "The variety of products available is impressive. From pod systems to mods, they have everything my store needs at great wholesale prices.",
    rating: 5,
    date: "March 13, 2024",
  },
  {
    id: 4,
    user: "James K.",
    content: "Their bulk ordering system is streamlined and efficient. The wholesale discounts are fantastic, and the product authenticity is guaranteed.",
    rating: 5,
    date: "March 12, 2024",
  },
  {
    id: 5,
    user: "Sarah P.",
    content: "Outstanding wholesale platform for vape products. The automated reordering system has made managing my inventory so much easier.",
    rating: 5,
    date: "March 11, 2024",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="NEW ARRIVALS"
          data={newArrivalsData}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="BEST SELLERS"
            data={topSellingData}
            viewAllLink="/shop#best-sellers"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <VapeCategories />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}
