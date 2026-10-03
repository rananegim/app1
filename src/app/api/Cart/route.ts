import { NextResponse } from 'next/server'
import { getTokenFun } from '@/utilities/getTokenData'

export async function GET() {
  const token = await getTokenFun()
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const response = await fetch('https://ecommerce.routemisr.com/api/v2/cart', {
    method: 'GET',
    headers: { token },
    cache: 'no-store',
  })

  const payload = await response.json()
  return NextResponse.json(payload, { status: response.status })
}