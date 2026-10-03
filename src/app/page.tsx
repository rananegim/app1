"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { prodType } from "./interfaces/Product";
import { categoryType } from "./interfaces/category";
import AddBtn from "./_components/AddBtn/AddBtn";
import WishlistBtn from "./_components/WishlistBtn/WishlistBtn";

const slides = [
  {
    image: "homeSlider.png",
    title: "Fresh Products Delivered",
    titleLine2: "to your Door",
    subtitle: "Get 20% off your first order",
  },
  {
    image: "homeSlider.png",
    title: "premium Quality Guaranteed",
    subtitle: "fresh from farm to your table",
  },
  {
    image: "homeSlider.png",
    title: "Fast & free delivery",
    subtitle: "Up to 30% off this week only",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Products state
  const [products, setProducts] = useState<prodType[]>([]);
  const [loading, setLoading] = useState(true);

  // Categories state
  const [categories, setCategories] = useState<categoryType[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const slide = slides[current];

  // Fetch products
  useEffect(() => {
    async function GetAllProduct(): Promise<prodType[] | null> {
      try {
        const response = await fetch(
          "https://ecommerce.routemisr.com/api/v1/products",
        );
        const payload = await response.json();
        return payload.data;
      } catch (error) {
        console.error(error);
        return null;
      }
    }

    async function fetchData() {
      setLoading(true);
      const data = await GetAllProduct();
      if (data) {
        setProducts(data);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  // Fetch categories
  useEffect(() => {
    async function getShopCategories(): Promise<categoryType[] | null> {
      try {
        const response = await fetch(
          "https://ecommerce.routemisr.com/api/v1/categories",
        );
        if (!response.ok) throw new Error("API Error");
        const payload = await response.json();
        return payload.data;
      } catch (error) {
        console.error(error);
        return null;
      }
    }

    async function fetchCategories() {
      setCategoriesLoading(true);
      const data = await getShopCategories();
      if (data) {
        setCategories(data);
      }
      setCategoriesLoading(false);
    }

    fetchCategories();
  }, []);

  return (
    <>
      {/* frist two  */}
      <div>
        <div className="relative w-full overflow-hidden">
          {/* Slides */}
          <div className="relative w-full h-125">
            {slides.map((s, index) => (
              <div
                key={index}
                className={`absolute inset-0 h-125 w-full transition-opacity duration-700 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={s.image}
                  alt={`Slide ${index + 1}`}
                  className="absolute inset-0 h-125 w-full object-cover"
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-green-600/90 via-green-600/60 to-transparent" />
              </div>
            ))}

            {/* Text layer */}
            <div className="absolute inset-0 flex items-center">
              <div key={current} className="container">
                <div className="max-w-lg px-6">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight animate-slide-up [animation-delay:0ms]">
                    {slide.title}
                    <br />
                    {slide.titleLine2}
                  </h1>

                  <p className="text-white/90 text-lg mt-4 animate-slide-up [animation-delay:150ms]">
                    {slide.subtitle}
                  </p>

                  <div className="flex gap-3 mt-6 animate-slide-up [animation-delay:300ms]">
                    <Link
                      href="/shop"
                      className="bg-white text-green-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Shop Now
                    </Link>
                    <Link
                      href="/details"
                      className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prev button */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute top-0 bottom-0 left-0 flex items-center justify-center w-12 group"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white group-hover:bg-black/50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="h-4 w-4 fill-current"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={nextSlide}
            className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-12 group"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white group-hover:bg-black/50 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="h-4 w-4 fill-current"
              >
                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-192-192c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L178.7 256 9.4 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l192-192z" />
              </svg>
            </span>
            <span className="sr-only">Next</span>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current ? "w-6 bg-white" : "w-2 bg-white/60"
                }`}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-lg border-gray-500 my-4">
              <div className="bg-blue-50 text-blue-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  Free Shipping
                </h3>
                <p className="text-xs text-gray-500">On orders over 500 EGP</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-lg border-gray-500 my-4">
              <div className="bg-emerald-50 text-emerald-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  Secure Payment
                </h3>
                <p className="text-xs text-gray-500">
                  100% secure transactions
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-lg border-gray-500 my-4">
              <div className="bg-orange-50 text-orange-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M256 64c-56.8 0-107.9 24.7-143.1 64l47.1 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l0 54.7C110.9 33.6 179.5 0 256 0 397.4 0 512 114.6 512 256S397.4 512 256 512c-87 0-163.9-43.4-210.1-109.7-10.1-14.5-6.6-34.4 7.9-44.6s34.4-6.6 44.6 7.9c34.8 49.8 92.4 82.3 157.6 82.3 106 0 192-86 192-192S362 64 256 64z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  Easy Returns
                </h3>
                <p className="text-xs text-gray-500">14-day return policy</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-lg border-gray-500 my-4">
              <div className="bg-purple-50 text-purple-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  24/7 Support
                </h3>
                <p className="text-xs text-gray-500">Dedicated support team</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-12">
        <div className="container">
          {/* shop by cateories */}
          <div>
            <div className=" flex items-center justify-between">
              <div className="border-l-5 border-green-900 p-2 text-4xl font-extrabold ">
                Shop By <span className="text-green-800">Categories</span>
              </div>
              <Link
                href={"/categories"}
                className="text-green-700 font-medium flex gap-2 items-center"
              >
                View All Categories{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>{" "}
              </Link>
            </div>

            {/* cateories boxes  */}
            <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4 my-10">
              {categoriesLoading && (
                <p className="col-span-full text-center text-gray-500 py-10">
                  Loading categories...
                </p>
              )}

              {!categoriesLoading && categories.length === 0 && (
                <p className="col-span-full text-center text-gray-500 py-10">
                  No categories found.
                </p>
              )}

              {categories.map((cat) => (
                <div
                  key={cat._id}
                  className="border rounded-2xl border-gray-100 shadow-lg hover:translate-0.5 hover:shadow-2xl duration-200"
                >
                  <Link
                    href={`/categories/${cat._id}`}
                    className="flex flex-col justify-center items-center gap-2.5 p-3"
                  >
                    <img
                      className="rounded-full w-22 h-22 object-cover"
                      src={cat.image}
                      alt={cat.name}
                    />
                    <span className="font-md text-xl">{cat.name}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* two animated box  */}
          <div className="grid md:grid-cols-2 gap-6 my-14">
            {/* Deal of the Day */}
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-700 p-8 text-white">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                  <span>🔥</span>
                  <span>Deal of the Day</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Fresh Organic Fruits
                </h3>
                <p className="text-white/80 mb-4">
                  Get up to 40% off on selected organic fruits
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl font-bold">40% OFF</div>
                  <div className="text-sm text-white/70">
                    Use code:{" "}
                    <span className="font-bold text-white">ORGANIC40</span>
                  </div>
                </div>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Shop Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* New Arrivals */}
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-orange-400 to-rose-500 p-8 text-white">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                  <span>✨</span>
                  <span>New Arrivals</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Exotic Vegetables
                </h3>
                <p className="text-white/80 mb-4">
                  Discover our latest collection of premium vegetables
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl font-bold">25% OFF</div>
                  <div className="text-sm text-white/70">
                    Use code:{" "}
                    <span className="font-bold text-white">FRESH25</span>
                  </div>
                </div>

                <Link
                  href="/products?sort=newest"
                  className="inline-flex items-center gap-2 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* products */}
          <div>
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
              {products.map((prod) => {
                // NEW: discount logic
                const hasDiscount =
                  !!prod.priceAfterDiscount &&
                  prod.priceAfterDiscount < prod.price;
                const discount = hasDiscount
                  ? Math.round(
                      ((prod.price - prod.priceAfterDiscount!) / prod.price) *
                        100,
                    )
                  : 0;

                return (
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

                      {/* NEW: discount badge */}
                      {hasDiscount && (
                        <span className="absolute left-3 top-3 z-10 rounded bg-red-500 px-2 py-1 text-xs font-medium text-white">
                          -{discount}%
                        </span>
                      )}

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
                        {/* NEW: price with discount */}
                        <div>
                          <p
                            className={`text-lg font-bold ${
                              hasDiscount ? "text-green-600" : "text-gray-800"
                            }`}
                          >
                            {hasDiscount
                              ? prod.priceAfterDiscount
                              : prod.price}{" "}
                            EGP
                          </p>
                          {hasDiscount && (
                            <p className="text-sm text-gray-400 line-through">
                              {prod.price} EGP
                            </p>
                          )}
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
                );
              })}
            </div>
          </div>

          {/* last section  */}

          <div className="border-gray-300 shadow-2xl rounded-2xl my-5">
            <div className="grid lg:grid-cols-5 gap-8 p-8 lg:p-14">
              {/* Left */}
              <div className="lg:col-span-3 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center">
                    <svg
                      viewBox="0 0 512 512"
                      width="24"
                      height="24"
                      className="w-6 h-6 shrink-0 text-white"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-emerald-600 uppercase">
                      Newsletter
                    </h3>
                    <p className="text-xs text-gray-500">50,000+ subscribers</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Get the Freshest Updates{" "}
                    <span className="text-emerald-600">Delivered Free</span>
                  </h2>
                  <p className="text-gray-500 mt-2 text-lg">
                    Weekly recipes, seasonal offers & exclusive perks.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 bg-white border border-emerald-100 px-4 py-2 rounded-full text-sm text-gray-700">
                    <svg
                      viewBox="0 0 512 512"
                      width="16"
                      height="16"
                      className="w-4 h-4 shrink-0 text-emerald-600"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M471.3 6.7C477.7 .6 487-1.6 495.6 1.2 505.4 4.5 512 13.7 512 24l0 186.9c0 131.2-108.1 237.1-238.8 237.1-77 0-143.4-49.5-167.5-118.7-35.4 30.8-57.7 76.1-57.7 126.7 0 13.3-10.7 24-24 24S0 469.3 0 456C0 381.1 38.2 315.1 96.1 276.3 131.4 252.7 173.5 240 216 240l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-39.7 0-77.3 8.8-111 24.5 23.3-70 89.2-120.5 167-120.5 66.4 0 115.8-22.1 148.7-44 19.2-12.8 35.5-28.1 50.7-45.3z" />
                    </svg>
                    Fresh Picks Weekly
                  </span>
                  <span className="flex items-center gap-2 bg-white border border-emerald-100 px-4 py-2 rounded-full text-sm text-gray-700">
                    <svg
                      viewBox="0 0 576 512"
                      width="16"
                      height="16"
                      className="w-4 h-4 shrink-0 text-emerald-600"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                    </svg>
                    Free Delivery Codes
                  </span>
                  <span className="flex items-center gap-2 bg-white border border-emerald-100 px-4 py-2 rounded-full text-sm text-gray-700">
                    <svg
                      viewBox="0 0 512 512"
                      width="16"
                      height="16"
                      className="w-4 h-4 shrink-0 text-emerald-600"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M32.5 96l0 149.5c0 17 6.7 33.3 18.7 45.3l192 192c25 25 65.5 25 90.5 0L483.2 333.3c25-25 25-65.5 0-90.5l-192-192C279.2 38.7 263 32 246 32L96.5 32c-35.3 0-64 28.7-64 64zm112 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                    </svg>
                    Members-Only Deals
                  </span>
                </div>

                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="flex-1 px-5 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-500"
                  >
                    Subscribe
                    <svg
                      viewBox="0 0 512 512"
                      width="16"
                      height="16"
                      className="w-4 h-4 shrink-0"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Right */}
              <div className="lg:col-span-2 bg-gray-900 rounded-3xl p-8 text-white">
                <span className="inline-block bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full mb-4">
                  📱 MOBILE APP
                </span>
                <h3 className="text-2xl font-bold mb-2">
                  Shop Faster on Our App
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Get app-exclusive deals & 15% off your first order.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl hover:bg-white/15"
                  >
                    <svg
                      viewBox="0 0 384 512"
                      width="24"
                      height="24"
                      className="w-6 h-6 shrink-0"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M319.1 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7-55.8 .9-115.1 44.5-115.1 133.2 0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM262.5 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase">
                        Download on
                      </div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl hover:bg-white/15"
                  >
                    <svg
                      viewBox="0 0 448 512"
                      width="24"
                      height="24"
                      className="w-6 h-6 shrink-0"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M293.6 234.3L72.9 13 353.7 174.2 293.6 234.3zM15.3 0C2.3 6.8-6.4 19.2-6.4 35.3l0 441.3c0 16.1 8.7 28.5 21.7 35.3L271.9 255.9 15.3 0zM440.5 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM72.9 499L353.7 337.8 293.6 277.7 72.9 499z" />
                    </svg>
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase">
                        Get it on
                      </div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </a>
                </div>

                <div className="flex items-center gap-2 pt-4 text-sm text-gray-400">
                  <div className="flex items-center gap-0.5 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 576 512"
                        width="14"
                        height="14"
                        className="w-3.5 h-3.5 shrink-0"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z" />
                      </svg>
                    ))}
                  </div>
                  4.9 • 100K+ downloads
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}