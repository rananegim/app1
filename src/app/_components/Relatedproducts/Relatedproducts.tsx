"use client";

import React, { useEffect, useRef, useState } from "react";
import { prodType } from "../../interfaces/Product";
import Link from "next/link";

export default function RelatedProducts({ excludeId }: { excludeId?: string }) {
  const [products, setProducts] = useState<prodType[]>([]);
  const [wishlisted, setWishlisted] = useState<Record<string, boolean>>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function getRelatedProducts() {
      try {
        const request = await fetch(
          "https://ecommerce.routemisr.com/api/v1/products?limit=40",
        );
        const payload = await request.json();
        const all: prodType[] = payload?.data || [];
        const filtered = all.filter((p) => p._id !== excludeId);

        // shuffle and take a random subset
        const shuffled = [...filtered].sort(() => Math.random() - 0.5);
        setProducts(shuffled.slice(0, 10));
      } catch (error) {
        console.log("error", error);
      }
    }
    getRelatedProducts();
  }, [excludeId]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 260;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const toggleWishlist = (id: string) => {
    setWishlisted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (products.length === 0) return null;

  return (
    <div className="w-full py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <span className="w-1 h-5 bg-emerald-600 rounded-full" />
          You May Also <span className="text-emerald-600">Like</span>
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="size-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="size-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => {
          const hasDiscount =
            !!product.priceAfterDiscount && product.priceAfterDiscount < product.price;
          const discountPercent = hasDiscount
            ? Math.round(
                ((product.price - (product.priceAfterDiscount as number)) / product.price) * 100,
              )
            : 0;
          const isWishlisted = !!wishlisted[product._id];

          return (
            <Link
              key={product._id}
              href={`/productDetails/${product._id}`}
              className="shrink-0 w-57.5 border rounded-lg bg-white hover:shadow-md transition"
            >
              <div className="relative">
                {hasDiscount && (
                  <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
                    -{discountPercent}%
                  </span>
                )}
                <img
                  src={product.imageCover}
                  alt={product.title}
                  className="w-full h-47.5 object-contain bg-gray-50 rounded-t-lg"
                />
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product._id);
                    }}
                    aria-label="Add to wishlist"
                    className="size-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={isWishlisted ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className={`size-4 ${isWishlisted ? "text-red-500" : "text-gray-500"}`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="Compare"
                    className="size-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-50 text-gray-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </button>
                  <button
                    aria-label="Quick view"
                    className="size-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-50 text-gray-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-3">
                <p className="text-xs text-gray-400 mb-1">{product.category?.name}</p>
                <p className="font-medium text-sm mb-1 line-clamp-2">{product.title}</p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-3.5 ${
                        i < Math.round(product.ratingsAverage || 0) ? "text-yellow-500" : "text-gray-300"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">
                    {(product.ratingsAverage || 0).toFixed(1)} ({product.ratingsQuantity || 0})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`font-bold ${hasDiscount ? "text-emerald-600" : "text-gray-900"}`}>
                      {hasDiscount ? product.priceAfterDiscount : product.price} EGP
                    </span>
                    {hasDiscount && (
                      <span className="text-xs text-gray-400 line-through">{product.price} EGP</span>
                    )}
                  </div>
                  <button
                    onClick={(e) => e.preventDefault()}
                    aria-label="Add to cart"
                    className="size-8 flex items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}