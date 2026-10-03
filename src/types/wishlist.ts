import { prodType } from "@/app/interfaces/Product";

export interface WishlistResponseType {
  status: string
  count: number
  data: prodType[]
}