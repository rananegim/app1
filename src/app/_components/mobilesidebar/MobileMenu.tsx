"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  function handleLogOut() {
    signOut({ redirect: true, callbackUrl: "/login" });
  }

  return (
    <>
      {/* hidden button */}
      <button className="lg:hidden block p-2" onClick={() => setOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="h-5 w-5 fill-current text-gray-500 hover:text-green-500 cursor-pointer"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM0 416c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z" />
        </svg>
      </button>

      {/* overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <span className="flex items-center gap-2 font-bold text-xl text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-6 w-6 fill-current text-green-600"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-33.8 0-63-23.8-69.9-56.9L77.4 74.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 68 0 57.3 0 44V24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
              FreshCart
            </span>
            <button
              onClick={() => setOpen(false)}
              className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="h-4 w-4 fill-current"
              >
                <path d="M342.6 41.4c12.5 12.5 12.5 32.8 0 45.3L237.3 192l105.4 105.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 237.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L146.7 192 41.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 146.7 297.4 41.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </button>
          </div>

          {/* search */}
          <div className="p-5">
            <div className="flex rounded-md overflow-hidden border border-gray-200">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-3 py-2 text-sm outline-none bg-gray-50"
              />
              <button className="bg-green-600 hover:bg-green-700 px-4 flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </button>
            </div>
          </div>

          {/* nav links */}
          <nav className="flex flex-col px-5 gap-1 border-b border-gray-100 pb-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="py-3 text-gray-700 hover:text-green-600"
            >
              Home
            </Link>
            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              className="py-3 text-gray-700 hover:text-green-600"
            >
              Shop
            </Link>
            <Link
              href="/categories"
              onClick={() => setOpen(false)}
              className="py-3 text-gray-700 hover:text-green-600"
            >
              Categories
            </Link>
            <Link
              href="/brands"
              onClick={() => setOpen(false)}
              className="py-3 text-gray-700 hover:text-green-600"
            >
              Brands
            </Link>
          </nav>

          {status === "authenticated" ? (
            <>
              {/* wishlist & cart */}
              <div className="flex flex-col px-5 py-4 gap-4 border-b border-gray-100">
                <Link
                  href="/favorite"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3"
                >
                  <span className="h-9 w-9 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 226 74.1l30 30 30-30c27.1-27.1 67.4-36.2 106.8-28.5C462 58.7 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.3-30.2-11.9z" />
                    </svg>
                  </span>
                  <span className="text-gray-800">Wishlist</span>
                </Link>
                <Link
                  href="/cart"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3"
                >
                  <span className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-33.8 0-63-23.8-69.9-56.9L77.4 74.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 68 0 57.3 0 44V24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                  </span>
                  <span className="text-gray-800">Cart</span>
                  <span className="ml-auto h-6 w-6 rounded-full bg-green-600 text-white text-xs flex items-center justify-center">
                    1
                  </span>
                </Link>
              </div>

              {/* logout */}
              <div className="px-5 py-4">
                <button
                  onClick={handleLogOut}
                  className="w-full text-center bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 cursor-pointer rounded-xl"
                >
                  LOG OUT
                </button>
              </div>
            </>
          ) : (
            <>
              {/* auth buttons */}
              <div className="flex gap-3 px-5 py-4">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="flex-1 text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-md"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="flex-1 text-center border border-green-600 text-green-600 hover:bg-green-50 font-medium py-2.5 rounded-md"
                >
                  Sign Up
                </Link>
              </div>
            </>
          )}

          {/* support */}
          <div className="px-5 mt-auto mb-5">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 bg-gray-50 rounded-lg p-4"
            >
              <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256V400c0 44.2 35.8 80 80 80h16c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H48V256c0-114.9 93.1-208 208-208s208 93.1 208 208v32H416c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h16c44.2 0 80-35.8 80-80V256C512 114.6 397.4 0 256 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-800 font-medium text-sm">Need Help?</p>
                <span className="text-green-600 text-sm font-medium">
                  Contact Support
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}