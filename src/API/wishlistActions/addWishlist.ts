'use server'

import { getTokenFun } from "@/utilities/getTokenData"

export async function AddToWishlist(prodId: string) {
  const token = await getTokenFun()
  if (!token) throw new Error('Unauthorized')

  const response = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist', {
    method: 'POST',
    body: JSON.stringify({ productId: prodId }),
    headers: {
      token: token,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) throw new Error('Failed to add')

  return response.json()
}