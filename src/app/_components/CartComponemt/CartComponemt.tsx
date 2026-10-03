'use client'
import { clearCart } from '@/API/cartActions/clearCart.action'
import { DeleteCartItem } from '@/API/cartActions/deleteCartItem'
import { UpdateToCart } from '@/API/cartActions/updateCartItem'
import { toast } from '@/components/ui/toast'
import { CartResponseType } from '@/types/productCart'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'

export default function CartComponemt() {
  const query = useQueryClient()

  const { data: cartData, isLoading } = useQuery<CartResponseType>({
    queryKey: ['getCart'],
    queryFn: async () => {
      const response = await fetch('/api/Cart')
      if (!response.ok) throw new Error('faild To Fetch')
      return response.json()
    },
  })

  // delete
  const { mutate: delCartItem } = useMutation({
    mutationFn: DeleteCartItem,
    onSuccess: () => {
      toast.add({ type: 'success', description: 'Product Deleted Successfully' })
      query.invalidateQueries({ queryKey: ['getCart'] })
    },
    onError: () => {
      toast.add({ type: 'error', description: 'Failed' })
    },
  })

  // update
  function HandleUpdateCart(prodId: string, count: number) {
  updateCartItem({ prodId, count })
}
  const { mutate: updateCartItem } = useMutation({
    mutationFn: UpdateToCart,
    onSuccess: () => {
      toast.add({ type: 'success', description: 'Product updated Successfully' })
      query.invalidateQueries({ queryKey: ['getCart'] })
    },
    onError: () => {
      toast.add({ type: 'error', description: 'Failed' })
    },
  })



  

  // clear Cart
  const { data:clearData ,  mutate: clearCartItems } = useMutation({
    mutationFn: clearCart,
    onSuccess: () => {
      toast.add({ type: 'success', description: 'Cart Deleted Successfully' })
      query.invalidateQueries({ queryKey: ['getCart'] })
    },
    onError: () => {
      toast.add({ type: 'error', description: 'Failed' })
    },
  })

  function handleClearCart() {
    clearCartItems()
  }
 

  if (isLoading) {
    return <h2 className="py-20 text-center text-gray-500">Loading......</h2>
  }

  if (!cartData?.numOfCartItems) {
    return (
      <section className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-[#f8faf9] dark:bg-[#0A2025]">
        <h2 className="text-2xl font-semibold text-[#191919] dark:text-white">Your cart is empty</h2>
        <Link href="/" className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700">
          Continue Shopping
        </Link>
      </section>
    )
  }

  const itemsCount = cartData.numOfCartItems
  const total = cartData.data.totalCartPrice

  return (
    <section className="w-full bg-[#f8faf9] dark:bg-[#0A2025] min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span className="mx-1.5">/</span>
          <span className="text-[#191919] dark:text-white">Shopping Cart</span>
        </nav>

        {/* Header */}
        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#191919] dark:text-white">Shopping Cart</h1>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          You have <span className="font-semibold text-green-600">{itemsCount} items</span> in your cart
        </p>

        <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1fr_360px]">
          {/* Items */}
          <div>
            <div className="space-y-4">
              {cartData.data.products.map((product) => (
                <article
                  key={product._id}
                  className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
                >
                  {/* Image + stock badge */}
                  <div className="relative shrink-0">
                    <img
                      src={product.product.imageCover}
                      alt={product.product.title}
                      className="h-24 w-24 rounded-lg bg-gray-50 object-contain sm:h-28 sm:w-28"
                    />
                    <span className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-green-600 px-2 py-0.5 text-[10px] font-medium text-white">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      In Stock
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <h3 className="truncate text-sm font-semibold text-[#191919] sm:text-base">
                      {product.product.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-gray-400">
                      <span className="rounded-full bg-green-50 px-2 py-0.5 font-medium text-green-700">
                        {product.product.category?.name}
                      </span>
                      <span>• SKU: {product.product.id?.slice(-6).toUpperCase()}</span>
                    </div>
                    <p className="text-base font-bold text-green-600">
                      {product.price} EGP <span className="text-[11px] font-normal text-gray-400">per unit</span>
                    </p>

                    {/* Quantity */}
                    <div className="inline-flex w-fit items-center gap-1 rounded-lg border border-gray-200 bg-gray-50 p-1">
                      <button
                        type="button"
                        disabled={product.count <= 1}
                        onClick={() => HandleUpdateCart(product.product._id, product.count - 1)}
                        className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md text-gray-500 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label="Decrease quantity"
                      >
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                          <path d="M2 7h10" />
                        </svg>
                      </button>
                      <span className="w-8 text-center text-sm font-semibold text-[#191919]">{product.count}</span>
                      <button
                        type="button"
                        onClick={() => HandleUpdateCart(product.product._id, product.count + 1)}
                        className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md bg-green-600 text-white hover:bg-green-700"
                        aria-label="Increase quantity"
                      >
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                          <path d="M2 7h10M7 2v10" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Total + delete */}
                  <div className="flex shrink-0 items-end gap-3 self-stretch">
                    <div className="flex flex-col items-end justify-end">
                      <span className="text-[10px] text-gray-400">Total</span>
                      <span className="text-lg font-bold text-[#191919]">
                        {product.count * product.price}
                        <span className="ml-0.5 text-[10px] font-normal text-gray-400">EGP</span>
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => delCartItem(product.product._id)}
                      className="flex h-9 w-9 cursor-pointer items-center justify-center self-center rounded-lg bg-red-50 text-red-500 hover:bg-red-100"
                      aria-label="Remove item"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                        <path d="M10 11v6M14 11v6" />
                        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Footer actions */}
            <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4 text-xs">
              <Link href="/" className="font-medium text-green-600 hover:underline">
                ← Continue Shopping
              </Link>
              <button
                type="button"
                onClick={handleClearCart}
                className="flex cursor-pointer items-center gap-1.5 text-gray-400 hover:text-red-500"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                </svg>
                Clear all items
              </button>
            </div>
          </div>

          {/* Order summary */}
          <aside className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm lg:sticky lg:top-6">
            <div className="bg-linear-to-r from-green-600 to-green-700 px-5 py-4 text-white">
              <h2 className="flex items-center gap-2 text-sm font-semibold">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 7h12l1 14H5L6 7zm3-1a3 3 0 0 1 6 0v1H9V6z" />
                </svg>
                Order Summary
              </h2>
              <p className="mt-1 text-xs text-green-100">{itemsCount} items in your cart</p>
            </div>

            <div className="space-y-4 p-5">
              <div className="flex items-center gap-3 rounded-lg bg-green-50 px-3 py-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-green-700">Free Shipping!</p>
                  <p className="text-[11px] text-green-600">You qualify for free delivery</p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="text-[#191919]">{total.toLocaleString()} EGP</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
              </div>

              <div className="flex items-baseline justify-between border-t border-gray-100 pt-4">
                <span className="text-xs font-semibold text-[#191919]">Total</span>
                <span className="text-xl font-bold text-[#191919]">
                  {total.toLocaleString()} <span className="text-[10px] font-normal text-gray-400">EGP</span>
                </span>
              </div>

              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2.5 text-xs text-gray-600 hover:bg-gray-50"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 11.5 12.5 3H4v8.5L12.5 20 21 11.5zM7.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
                Apply Promo Code
              </button>

              <Link
                href={`/checkout/${cartData.cartId}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-green-600 to-green-700 py-3 text-sm font-semibold text-white shadow-lg shadow-green-600/30 hover:opacity-95"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 10V8a6 6 0 1 1 12 0v2h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1zm2 0h8V8a4 4 0 1 0-8 0v2z" />
                </svg>
                Secure Checkout
              </Link>

              <div className="flex items-center justify-center gap-6 text-[10px] text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="text-green-600">●</span> Secure Payment
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-blue-600">●</span> Fast Delivery
                </span>
              </div>

              <div className="text-center">
                <Link href="/" className="text-xs text-green-600 hover:underline">
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}