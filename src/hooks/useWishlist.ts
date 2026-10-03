import { useQuery } from "@tanstack/react-query";
import { getWishlist } from "@/API/wishlistActions/getWishlist";
import { WishlistResponseType } from "@/types/wishlist";

export const WISHLIST_KEY = ["getWishlist"];

export function useWishlist(enabled: boolean = true) {
  return useQuery<WishlistResponseType>({
    queryKey: WISHLIST_KEY,
    queryFn: getWishlist,
    enabled,
  });
}