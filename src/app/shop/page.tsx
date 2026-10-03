"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { prodType } from "./../interfaces/Product";
import AddBtn from "../_components/AddBtn/AddBtn";
import WishlistBtn from "../_components/WishlistBtn/WishlistBtn";


export default function Shop() {
  const router = useRouter();
  const [products, setProducts] = useState<prodType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function GetAllProduct() {
      try {
        const response = await fetch(
          "https://ecommerce.routemisr.com/api/v1/products",
        );
        const payload = await response.json();
        setProducts(payload.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    GetAllProduct();
  }, []);

  return (
    <>
      <div className="bg-[#1CB555] p-8 pb-9">
        <span className="flex gap-1 items-center">
          <Link
            href="/"
            className=" text-gray-300 hover:text-white duration-150 "
          >
            Home
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
            className="h-4 w-4 fill-current text-gray-300"
          >
            <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L178.7 256 41.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
          <Link href="/shop" className="text-white">
            Shop
          </Link>
        </span>

        <div className="flex gap-3 py-5">
          <div className="bg-green-300/60 p-4 rounded-2xl w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-11 w-11 fill-current text-white"
            >
              <path d="M560.3 237.2c10.4 11.8 28.3 14.4 41.8 5.5 14.7-9.8 18.7-29.7 8.9-44.4l-48-72c-2.8-4.2-6.6-7.7-11.1-10.2L351.4 4.7c-19.3-10.7-42.8-10.7-62.2 0L88.8 116c-5.4 3-9.7 7.4-12.6 12.8L27.7 218.7c-12.6 23.4-3.8 52.5 19.6 65.1l33 17.7 0 53.3c0 23 12.4 44.3 32.4 55.7l176 99.7c19.6 11.1 43.5 11.1 63.1 0l176-99.7c20.1-11.4 32.4-32.6 32.4-55.7l0-117.5zm-240-9.8L170.2 144 320.3 60.6 470.4 144 320.3 227.4zm-41.5 50.2l-21.3 46.2-165.8-88.8 25.4-47.2 161.7 89.8z" />
            </svg>
          </div>

          <div>
            <h2 className="text-white font-bold text-5xl">Shop</h2>
            <p className="text-gray-300/90">
              Browse all our products and find what you need.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
            {/* tittle */}
            <div className="flex items-center gap-3 my-8">
              <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full" />
              <h2 className="text-3xl font-bold text-gray-800">
                Featured <span className="text-emerald-600">Products</span>
              </h2>
            </div>

            {/* loading */}
            {loading && (
              <p className="text-center text-gray-500 py-10">
                Loading products...
              </p>
            )}

            {/* empty state */}
            {!loading && products.length === 0 && (
              <p className="text-center text-gray-500 py-10">
                No products found.
              </p>
            )}

            {/* boxes of product hereeeeeeeeeeeeeeeee */}
            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4">
              {products.map((prod) => (
                <Link
                  key={prod._id}
                  href={`/productDetails/${prod._id}`}
                  className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl duration-200"
                >
                  <div className="relative">
                    <img
                      className="w-full h-60 object-contain bg-white"
                      alt={prod.title}
                      src={prod.imageCover}
                    />
                    <div className="absolute top-3 right-3 flex flex-col space-y-2">
                      {/* favorite */}
                      <WishlistBtn prodId={prod._id} />

                      {/* rotate */}
                      <button
                        className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 shadow-sm"
                        onClick={(e) => e.preventDefault()}
                      >
                        <svg
                          data-prefix="fas"
                          data-icon="arrows-rotate"
                          className="svg-inline--fa fa-arrows-rotate w-5 h-5"
                          role="img"
                          viewBox="0 0 512 512"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-53 0-101-21.5-135.8-56.2-.2-.2-.4-.4-.6-.6l-7.6-7.2 47.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320c-8.5 0-16.7 3.4-22.7 9.5S-.1 343.7 0 352.3l1 127c.1 17.7 14.6 31.9 32.3 31.7S65.2 496.4 65 478.7l-.4-51.5 10.7 10.1c46.3 46.1 110.2 74.7 180.7 74.7 129 0 235.7-95.4 253.4-219.5z"
                          />
                        </svg>
                      </button>
                      {/* product view page */}
                      <Link
                        className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 shadow-sm"
                        href={`/productDetails/${prod._id}`}
                      >
                        <svg
                          data-prefix="far"
                          data-icon="eye"
                          className="svg-inline--fa fa-eye w-5 h-5"
                          role="img"
                          viewBox="0 0 576 512"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-gray-500 mb-1">
                      {prod.category?.name}
                    </div>
                    <h3
                      className="font-medium mb-1 cursor-pointer "
                      title={prod.title}
                    >
                      <span className="line-clamp-2">{prod.title}</span>
                    </h3>
                    <div className="flex items-center">
                      <div className="flex text-amber-400 mr-2 ">
                        <div className="text-yellow-400 flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                              key={i}
                              data-prefix={
                                i < Math.round(prod.ratingsAverage || 0)
                                  ? "fas"
                                  : "far"
                              }
                              data-icon="star"
                              className="w-4 h-4"
                              role="img"
                              viewBox="0 0 576 512"
                              aria-hidden="true"
                            >
                              <path
                                fill="currentColor"
                                d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"
                              />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">
                        {prod.ratingsAverage} ({prod.ratingsQuantity})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-800">
                          {prod.price} EGP
                        </span>
                      </div>

                      {/* add to cart */}
                      <AddBtn
                        prodId={prod._id}
                        cls={
                          "h-10 w-10 rounded-full cursor-pointer flex items-center justify-center transition bg-green-600 text-white hover:bg-green-700 disabled:opacity-70"
                        }
                        child={
                          <>
                            {" "}
                            <svg
                              viewBox="0 0 448 512"
                              aria-hidden="true"
                              className="h-5 w-5"
                            >
                              <path
                                fill="currentColor"
                                d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"
                              />
                            </svg>{" "}
                          </>
                        }
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
    </>
  );
}