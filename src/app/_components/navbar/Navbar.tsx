"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Contact from "@/app/contact/page";
import MobileMenu from "../mobilesidebar/MobileMenu";
import { signOut, useSession } from "next-auth/react";
import { CartResponseType } from "@/types/productCart";
import { useQuery } from "@tanstack/react-query";
import { WishlistResponseType } from "@/types/wishlist";
import { getWishlist } from "@/API/wishlistActions/getWishlist";
import { getCategories } from "@/API/categoriesactions/categoriesactions";

export default function Navbar() {
  let path = usePathname();
  let links = [
    { path: "/", elem: "Home" },
    { path: "/shop", elem: "Shop" },
    { path: "/brands", elem: "Brands" },
    { path: "/categories", elem: "Categories" },
  ];
  const { data: sessionData, status } = useSession();
  function handleLogOut() {
    signOut({ redirect: true, callbackUrl: "/login" });
  }

  //cart
  const { data: cartData } = useQuery<CartResponseType>({
    queryKey: ["getCart"],
    queryFn: async () => {
      const response = await fetch("/api/Cart");
      if (!response.ok) throw new Error("Failed to fetch cart");
      return response.json();
    },
    enabled: status === "authenticated",
  });
  //console.log("cart Data..", cartData);

  //favorite
  const { data: favoriteData } = useQuery<WishlistResponseType>({
    queryKey: ["getWishlist"],
    queryFn: getWishlist,
    enabled: status === "authenticated",
  });

  //categories
  const { data: categories } = useQuery<{ _id: string; name: string }[]>({
    queryKey: ["getCategories"],
    queryFn: getCategories,
  });

  return (
    <>
      <div className="flex gap-2 items-center p-4 justify-between sticky top-0 bg-white border-b-gray-200 shadow-lg z-99">
        {/* logooo */}
        <div>
          <img
            alt="FreshCart"
            width={160}
            height={31}
            data-nimg={1}
            className="h-8 "
            style={{ color: "transparent" }}
            src="https://freshcart-route.vercel.app/_next/static/media/freshcart-logo.49f1b44d.svg"
          />
        </div>

        {/* serach */}
        <div>
          <div className=" hidden md:flex relative rounded-2xl w-max-125 border-2 border-gray-400">
            <input
              type="text"
              placeholder="search for product"
              className="w-full p-3 rounded-2xl  rounded-r-none  placeholder-gray-500 dark:placeholder-gray-300 dark:text-gray-300 "
            />
            <button className="inline-flex items-center gap-2 bg-green-700 text-white text-lg font-semibold py-3 px-6 rounded-r-2xl">
              <span className=" md:block">
                <svg
                  className="text-gray-200 h-5 w-5 p-0 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* links */}
        <ul className="hidden lg:flex gap-5 items-center px-4 text-xl">
          {links.map((link) => {
            // Categories leha dropdown
            if (link.path === "/categories") {
              return (
                <li key={link.path} className="group relative">
                  <Link
                    href="/categories"
                    className={`flex items-center gap-1 group-hover:text-green-500 ${
                      path.startsWith("/categories") ? "active1" : ""
                    }`}
                  >
                    {link.elem}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-200 group-hover:rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </Link>

                  {/* pt-3 bridge: 3ashan el hover mayet2te3sh bein el link w el menu */}
                  <div
                    className="invisible absolute left-0 top-full z-50 pt-3 opacity-0
                       transition-all duration-200 group-hover:visible group-hover:opacity-100"
                  >
                    <ul className="w-60 rounded-2xl border border-gray-100 bg-white py-3 text-base shadow-xl">
                      <li>
                        <Link
                          href="/categories"
                          className="block px-5 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-600"
                        >
                          All Categories
                        </Link>
                      </li>
                      {categories?.slice(0, 4).map((cat) => (
                        <li key={cat._id}>
                          <Link
                            href={`/categories/${cat._id}`}
                            className="block px-5 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-600"
                          >
                            {cat.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }

            return (
              <li key={link.path} className="hover:text-green-500">
                <Link
                  href={link.path}
                  className={path == link.path ? "active1" : ""}
                >
                  {link.elem}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* contact us  */}
        <Link
          href="/contact"
          className="hidden lg:flex gap-1 items-center px-3"
        >
          <div className=" text-green-700 bg-green-300 rounded-3xl p-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-7 w-7 fill-current"
            >
              <path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256v144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24h-32c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24h110.4c22.1 0 40-17.9 40-40l0-.9c-5.2 1.9-10.8 2.9-16.6 2.9H384c-17.7 0-32-14.3-32-32V304c0-17.7 14.3-32 32-32h32c5.8 0 11.4 1 16.6 2.9C428.2 165.8 350.7 96 256 96s-172.2 69.8-176.6 173.9c5.2-1.9 10.8-2.9 16.6-2.9h32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V256c0-114.9 93.1-208 208-208z" />
            </svg>{" "}
          </div>
          <div className="text-sm">
            <p className="text-gray-400 m-0">Support</p>
            <span>24/7 Help</span>
          </div>
        </Link>

        {/* cart and favorites && hidden setting */}
        <div className="flex gap-2 border-l-2 border-gray-400 px-4">
          {status === "authenticated" ? (
            <>
              {/* favorite */}
              <Link
                href="/favorite"
                className={`p-2 rounded-3xl duration-200 cursor-pointer hover:bg-green-300 hover:text-green-500 relative ${
                  path === "/favorite"
                    ? "bg-green-300 text-green-500"
                    : "text-gray-500"
                }`}
              >
                {!!favoriteData?.count && (
                  <span className="absolute -top-2.5 right-5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {favoriteData.count}
                  </span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              </Link>

              {/* cart */}
              <Link
                href="/cart"
                className={`p-2 rounded-3xl duration-200 cursor-pointer hover:bg-green-300 hover:text-green-500 relative ${
                  path === "/cart"
                    ? "bg-green-300 text-green-500"
                    : "text-gray-500"
                }`}
              >
                {!!cartData?.numOfCartItems && (
                  <span className="absolute -top-2.5 right-5 flex h-5 w-5 items-center justify-center rounded-full bg-green-400 text-xs text-white">
                    {cartData.numOfCartItems}
                  </span>
                )}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 15.7 45.9 37.4L118.5 55.6c0 .1 0 .1 0 .2c0-.1 0-.1 0-.2L127 100.1 148.5 216.9 176 359.4c1.7 8.9 9.5 15.1 18.6 13.9L448 344.9c11.2-1.3 20.3-9.4 22.6-20.4L521 96H176.2l-9-48H528c14.9 0 28.8 6.5 38.3 17.8s13.5 26.2 10.9 40.9L534.3 328.4c-4.7 27.6-27.3 48.6-55.2 51.2L214.4 405.5c-1.7 .2-3.4 .3-5.1 .3c-25.9 0-48.4-18.1-53.9-43.4L114.8 202.6 95.9 100.7 92.3 81.4c-.9-4.8-5-8.3-9.9-8.3H24C10.7 72 0 61.3 0 48V24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
              </Link>

              <button
                className="hidden xl:flex items-center cursor-pointer gap-2 ml-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold"
                onClick={handleLogOut}
              >
                <span>Log Out</span>
              </button>
            </>
          ) : (
            <>
              {" "}
              {/* sigin in  */}
              <Link
                className="hidden xl:flex items-center gap-2 ml-2 px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold"
                href="/login"
              >
                <svg
                  data-prefix="far"
                  data-icon="user"
                  className="h-4 w-4 shrink-0"
                  role="img"
                  viewBox="0 0 448 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z"
                  />
                </svg>
                <span>Sign In</span>
              </Link>{" "}
            </>
          )}

          {/* hidden buttom  */}
          <MobileMenu />
        </div>
      </div>
    </>
  );
}
