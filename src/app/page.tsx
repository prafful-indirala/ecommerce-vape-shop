'use client';
import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import VapeCategories from "@/components/homepage/VapeCategories";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";


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

  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [topSelling, setTopSelling] = useState<Product[]>([]);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data: newArrivalsData } = await supabase
        .from('products')
        .select('*')
        .eq('category_id', 1); // Assuming category_id 1 is for new arrivals

      const { data: topSellingData } = await supabase
        .from('products')
        .select('*')
        .eq('category_id', 2); // Assuming category_id 2 is for top selling

      const { data: relatedProductData } = await supabase
        .from('products')
        .select('*')
        .eq('category_id', 3); // Assuming category_id 3 is for related products

      setNewArrivals(newArrivalsData || []);
      setTopSelling(topSellingData || []);
      setRelatedProducts(relatedProductData || []);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="NEW ARRIVALS"
          data={newArrivals}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="BEST SELLERS"
            data={topSelling}
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
