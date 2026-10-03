'use server'

import { getTokenFun } from "@/utilities/getTokenData"

export async function getWishlist() {
  const token = await getTokenFun()
  // lw msh 3amel login nrg3 array fadya 3l4an mayzharsh error
  if (!token) return { data: [], count: 0 }

  const response = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist', {
    method: 'GET',
    headers: { token: token },
    cache: 'no-store',
  })

  if (!response.ok) throw new Error('Failed to fetch wishlist')

  return response.json()
}