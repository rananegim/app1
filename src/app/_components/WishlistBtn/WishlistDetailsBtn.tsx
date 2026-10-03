'use client'
import { AddToWishlist } from "@/API/wishlistActions/addWishlist";
import { RemoveFromWishlist } from "@/API/wishlistActions/removeWishlist";
import { useWishlist, WISHLIST_KEY } from "@/hooks/useWishlist";
import { toast } from "@/components/ui/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

export default function WishlistDetailsBtn({ prodId }: { prodId: string }) {
  const query = useQueryClient()
  const { data: wishlist } = useWishlist()

  const liked = !!wishlist?.data?.some((p) => p._id === prodId)

  const { mutate: add, isPending: adding } = useMutation({
    mutationFn: AddToWishlist,
    onSuccess: () => {
      toast.add({ type: 'success', description: 'Added to wishlist' })
      query.invalidateQueries({ queryKey: WISHLIST_KEY })
    },
    onError: () => {
      toast.add({ type: 'error', description: 'login first please' })
    },
  })

  const { mutate: remove, isPending: removing } = useMutation({
    mutationFn: RemoveFromWishlist,
    onSuccess: () => {
      toast.add({ type: 'success', description: 'Removed from wishlist' })
      query.invalidateQueries({ queryKey: WISHLIST_KEY })
    },
    onError: () => {
      toast.add({ type: 'error', description: 'Failed' })
    },
  })

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (adding || removing) return
    if (liked) {
      remove(prodId)
    } else {
      add(prodId)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={adding || removing}
      className={`w-full flex gap-2 items-center justify-center border px-6 py-2.5 rounded-md mb-3 cursor-pointer disabled:opacity-60 ${
        liked
          ? "border-red-300 text-red-500 bg-red-50 hover:bg-red-100"
          : "border-gray-300 text-gray-700 hover:bg-gray-50"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={liked ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
      {liked ? "Remove from Wishlist" : "Add to Wishlist"}
    </button>
  )
}