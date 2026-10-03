import Link from "next/link";
import {
  getSpecificBrand,
  getBrandProducts,
} from "@/API/brandsactions/brandsactions";
import { prodType } from "@/app/interfaces/Product";
import WishlistBtn from "@/app/_components/WishlistBtn/WishlistBtn";
import AddBtn from "@/app/_components/AddBtn/AddBtn";

export default async function BrandDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [brand, products] = await Promise.all([
    getSpecificBrand(id),
    getBrandProducts(id),
  ]);

  return (
    <>
      {/* Header */}
      <div className="bg-linear-to-br from-green-500 to-green-400 p-8 pb-9">
        <span className="flex items-center gap-2 text-gray-100">
          <Link href="/" className="hover:text-white duration-150">
            Home
          </Link>
          <span>/</span>
          <Link href="/brands" className="hover:text-white duration-150">
            Brands
          </Link>
          <span>/</span>
          <span className="font-semibold text-white">{brand.name}</span>
        </span>

        <div className="flex items-center gap-4 py-5">
          <div className="rounded-2xl bg-white/30 p-4 shadow-lg">
            <img
              src={brand.image}
              alt={brand.name}
              className="h-12 w-16 bg-white object-contain"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold text-white">{brand.name}</h1>
            <p className="text-gray-100">Shop {brand.name} products</p>
          </div>
        </div>
      </div>

      <div className="container px-6 py-8">
        {/* Active filters */}
        <div className="flex items-center gap-3">
          <span className="text-gray-600">Active Filters:</span>
          <span className="flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-purple-700">
            {brand.name}
            <Link href="/brands" className="hover:text-purple-900">
              ✕
            </Link>
          </span>
          <Link href="/brands" className="text-gray-600 underline">
            Clear all
          </Link>
        </div>

        <p className="my-5 text-gray-500">Showing {products.length} products</p>

        {products.length === 0 ? (
          <p className="py-20 text-center text-gray-500">
            No products for this brand.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p: prodType) => {
              const hasDiscount = p.priceAfterDiscount !== undefined;
              const discount = hasDiscount
                ? Math.round(
                    ((p.price - p.priceAfterDiscount!) / p.price) * 100,
                  )
                : 0;

              return (
                <div
                  key={p._id}
                  className="relative bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-xl duration-200"
                >
                  {/* discount badge */}
                  {hasDiscount && (
                    <span className="absolute left-3 top-3 z-10 rounded bg-red-500 px-2 py-1 text-xs text-white">
                      -{discount}%
                    </span>
                  )}

                  {/* icons (bara el Link) */}
                  <div className="absolute right-3 top-3 z-10 flex flex-col space-y-2">
                    <WishlistBtn prodId={p._id} />

                    {/* compare: static, mafeesh onClick */}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M65.9 228.5c13.3-93 93.4-164.5 190.1-164.5 53 0 101 21.5 135.8 56.2 .2 .2 .4 .4 .6 .6l7.6 7.2-47.9 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 53.4-11.3-10.7C390.5 28.6 326.5 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-53 0-101-21.5-135.8-56.2-.2-.2-.4-.4-.6-.6l-7.6-7.2 47.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 320c-8.5 0-16.7 3.4-22.7 9.5S-.1 343.7 0 352.3l1 127c.1 17.7 14.6 31.9 32.3 31.7S65.2 496.4 65 478.7l-.4-51.5 10.7 10.1c46.3 46.1 110.2 74.7 180.7 74.7 129 0 235.7-95.4 253.4-219.5z"
                        />
                      </svg>
                    </span>

                    {/* view */}
                    <Link
                      href={`/productDetails/${p._id}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm hover:text-green-600"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 576 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z"
                        />
                      </svg>
                    </Link>
                  </div>

                  {/* sora + title = Link */}
                  <Link href={`/productDetails/${p._id}`} className="block">
                    <img
                      className="h-60 w-full bg-white object-contain"
                      alt={p.title}
                      src={p.imageCover}
                    />
                  </Link>

                  <div className="p-4">
                    <div className="mb-1 text-xs text-gray-500">
                      {p.category?.name}
                    </div>

                    <Link href={`/productDetails/${p._id}`} title={p.title}>
                      <h3 className="mb-1 line-clamp-2 font-medium">
                        {p.title}
                      </h3>
                    </Link>

                    {/* stars */}
                    <div className="flex items-center">
                      <div className="mr-2 flex text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className="h-4 w-4"
                            viewBox="0 0 576 512"
                            aria-hidden="true"
                          >
                            <path
                              fill={
                                i < Math.round(p.ratingsAverage || 0)
                                  ? "currentColor"
                                  : "none"
                              }
                              stroke="currentColor"
                              strokeWidth="32"
                              d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"
                            />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        {p.ratingsAverage} ({p.ratingsQuantity})
                      </span>
                    </div>

                    {/* price + add */}
                    <div className="mt-2 flex items-center justify-between">
                      <div>
                        <p
                          className={`text-lg font-bold ${hasDiscount ? "text-green-600" : "text-gray-800"}`}
                        >
                          {hasDiscount ? p.priceAfterDiscount : p.price} EGP
                        </p>
                        {hasDiscount && (
                          <p className="text-sm text-gray-400 line-through">
                            {p.price} EGP
                          </p>
                        )}
                      </div>

                      <AddBtn
                        prodId={p._id}
                        cls="h-10 w-10 rounded-full cursor-pointer flex items-center justify-center transition bg-green-600 text-white hover:bg-green-700 disabled:opacity-70"
                        child={
                          <svg
                            viewBox="0 0 448 512"
                            aria-hidden="true"
                            className="h-5 w-5"
                          >
                            <path
                              fill="currentColor"
                              d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"
                            />
                          </svg>
                        }
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
