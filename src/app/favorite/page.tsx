'use client'
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getWishlist } from "@/API/wishlistActions/getWishlist";
import { WishlistResponseType } from "@/types/wishlist";
import WishlistBtn from "../_components/WishlistBtn/WishlistBtn";
import AddBtn from "../_components/AddBtn/AddBtn";

export default function FavoritePage() {
  const { data, isLoading } = useQuery<WishlistResponseType>({
    queryKey: ['getWishlist'],
    queryFn: getWishlist,
  })

  const products = data?.data ?? []

  return (
    <>
    <div className="container p-5 py-10">
      <div className="flex items-center gap-3 my-8">
        <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full" />
        <h1 className="text-3xl font-bold text-gray-800">
          My <span className="text-emerald-600">Wishlist</span>
        </h1>
      </div>

      {isLoading && <p className="text-center text-gray-500 py-10">Loading wishlist...</p>}

      {!isLoading && products.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 mb-4">Your wishlist is empty.</p>
          <Link href="/shop" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
            Start Shopping
          </Link>
        </div>
      )}

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4">
        {products.map((prod) => (
          <Link
            key={prod._id}
            href={`/productDetails/${prod._id}`}
            className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl duration-200"
          >
            <div className="relative">
              <img className="w-full h-60 object-contain bg-white" alt={prod.title} src={prod.imageCover} />
              <div className="absolute top-3 right-3">
                <WishlistBtn prodId={prod._id} />
              </div>
            </div>
            <div className="p-4">
              <div className="text-xs text-gray-500 mb-1">{prod.category?.name}</div>
              <h3 className="font-medium mb-1" title={prod.title}>
                <span className="line-clamp-2">{prod.title}</span>
              </h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-bold text-gray-800">{prod.price} EGP</span>
                <AddBtn
                  prodId={prod._id}
                  cls="h-10 w-10 rounded-full cursor-pointer flex items-center justify-center transition bg-green-600 text-white hover:bg-green-700 disabled:opacity-70"
                  child={
                    <svg viewBox="0 0 448 512" aria-hidden="true" className="h-5 w-5">
                      <path
                        fill="currentColor"
                        d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"
                      />
                    </svg>
                  }
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  )
}