"use client";

import React, { useState } from "react";
import { prodType } from "../../interfaces/Product";
import RelatedProducts from "../Relatedproducts/Relatedproducts";
import AddBtn from "../AddBtn/AddBtn";
import WishlistDetailsBtn from "../WishlistBtn/WishlistDetailsBtn";

export default function ProductDetailsClient({ data }: { data: prodType }) {
  const images: string[] =
    data?.images && data.images.length > 0
      ? data.images
      : data?.imageCover
        ? [data.imageCover]
        : [];

  const [mainImage, setMainImage] = useState<string>(
    images[0] || data?.imageCover || "",
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<
    "details" | "reviews" | "shipping"
  >("details");

  const available = data?.quantity ?? 0;
  const rating = data?.ratingsAverage ?? 0;
  const reviewsCount = data?.ratingsQuantity ?? 0;
  const price = data?.price ?? 0;
  const totalPrice = (price * quantity).toFixed(2);
  const inStock = available > 0;

  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const increase = () =>
    setQuantity((q) => Math.min(available || q + 1, q + 1));

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-wrap -mx-4">
        {/* Product Images */}
        <div className="w-full md:w-2/5 px-4 mb-8">
          <div className="border rounded-lg overflow-hidden mb-4 bg-white">
            <img
              src={mainImage}
              alt={data?.title}
              className="w-full h-auto object-contain aspect-square"
            />
          </div>
          <div className="flex gap-3 justify-start overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(img)}
                className={`shrink-0 rounded-md overflow-hidden border-2 transition ${
                  mainImage === img
                    ? "border-gray-800"
                    : "border-gray-200 opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="size-16 sm:size-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-3/5 px-4">
          {/* Category / Brand badges */}
          <div className="flex gap-2 mb-3">
            {data?.category?.name && (
              <span className="text-xs font-medium bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full">
                {data.category.name}
              </span>
            )}
            {data?.brand?.name && (
              <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                {data.brand.name}
              </span>
            )}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-2">{data?.title}</h2>

          {/* Rating */}
          <div className="flex items-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`size-5 ${i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"}`}
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {rating.toFixed(1)} ({reviewsCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mb-3">
            <span className="text-2xl font-bold">{price} EGP</span>
          </div>

          {/* Stock */}
          <div className="mb-4">
            <span
              className={`inline-flex items-center gap-1.5 text-sm font-medium ${
                inStock ? "text-emerald-600" : "text-red-600"
              }`}
            >
              <span
                className={`size-2 rounded-full ${inStock ? "bg-emerald-500" : "bg-red-500"}`}
              />
              {inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <hr className="mb-4" />

          <p className="text-gray-600 mb-6">{data?.description}</p>

          {/* Quantity */}
          <div className="mb-6">
            <span className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </span>
            <div className="flex items-center gap-3">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={decrease}
                  className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-50"
                >
                  −
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button
                  onClick={increase}
                  className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-50"
                >
                  +
                </button>
              </div>
              <span className="text-sm text-gray-500">
                {available} available
              </span>
            </div>
          </div>

          {/* Total price */}
          <div className="flex items-center justify-between bg-gray-50 rounded-md px-4 py-3 mb-4">
            <span className="text-sm text-gray-600">Total Price</span>
            <span className="text-lg font-bold text-emerald-600">
              {totalPrice} EGP
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mb-3">

            <AddBtn
            prodId={data._id}
              cls={
                "flex-1 bg-emerald-600 cursor-pointer flex gap-2 items-center justify-center text-white px-6 py-2.5 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              }
              child={
                <>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  Add to Cart{" "}
                </>
              }
            />
            <button className="flex-1 cursor-pointer bg-gray-900 flex gap-2 items-center justify-center text-white px-6 py-2.5 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="size-5"
              >
                <path d="M11.983 1.907a.75.75 0 0 0-1.292-.657L3.106 12.75a.75.75 0 0 0 .53 1.28h6.114l-1.733 8.063a.75.75 0 0 0 1.292.657l7.585-11.5a.75.75 0 0 0-.53-1.28h-6.114l1.733-8.063Z" />
              </svg>
              Buy Now
            </button>
          </div>

          <WishlistDetailsBtn prodId={data._id} />

          {/* Feature icons */}
          <div className="grid grid-cols-3 gap-3 border-t pt-5">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center size-9 rounded-full bg-emerald-50 text-emerald-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h9m-9 0H3.375m14.625 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677"
                  />
                </svg>
              </span>
              <div className="text-xs">
                <p className="font-medium text-gray-800">Free Delivery</p>
                <p className="text-gray-500">Orders over 550</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center size-9 rounded-full bg-emerald-50 text-emerald-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </span>
              <div className="text-xs">
                <p className="font-medium text-gray-800">30 Days Return</p>
                <p className="text-gray-500">Money back</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center size-9 rounded-full bg-emerald-50 text-emerald-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </span>
              <div className="text-xs">
                <p className="font-medium text-gray-800">Secure Payment</p>
                <p className="text-gray-500">100% Protected</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 border rounded-lg bg-white">
        <div className="flex border-b px-4">
          <button
            onClick={() => setActiveTab("details")}
            className={`flex items-center gap-1.5 px-4 py-3 text-sm font-medium border-b-2 ${
              activeTab === "details"
                ? "border-emerald-600 text-emerald-700"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Product Details
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`flex items-center gap-1.5 px-4 py-3 text-sm font-medium border-b-2 ${
              activeTab === "reviews"
                ? "border-emerald-600 text-emerald-700"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Reviews ({reviewsCount})
          </button>
          <button
            onClick={() => setActiveTab("shipping")}
            className={`flex items-center gap-1.5 px-4 py-3 text-sm font-medium border-b-2 ${
              activeTab === "shipping"
                ? "border-emerald-600 text-emerald-700"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Shipping & Returns
          </button>
        </div>

        <div className="p-6">
          {activeTab === "details" && (
            <>
              <h3 className="font-semibold text-lg mb-1">About this Product</h3>
              <p className="text-gray-600 mb-6">{data?.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-md p-4">
                  <h4 className="font-medium text-gray-800 mb-3">
                    Product Information
                  </h4>
                  <dl className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Category</dt>
                      <dd className="font-medium">{data?.category?.name}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Subcategory</dt>
                      <dd className="font-medium">
                        {Array.isArray(data?.subcategory)
                          ? data.subcategory.map((s) => s.name).join(", ")
                          : ""}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Brand</dt>
                      <dd className="font-medium">{data?.brand?.name}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-500">Items Sold</dt>
                      <dd className="font-medium">{data?.sold}</dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3">
                    Key Features
                  </h4>
                  <ul className="text-sm space-y-2">
                    {[
                      "Premium Quality Product",
                      "100% Authentic Guarantee",
                      "Fast & Secure Packaging",
                      "Quality Tested",
                    ].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="size-4 text-emerald-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeTab === "reviews" && (
            <p className="text-gray-500 text-sm">Reviews will be shown here.</p>
          )}

          {activeTab === "shipping" && (
            <p className="text-gray-500 text-sm">
              Shipping & returns information will be shown here.
            </p>
          )}
        </div>
      </div>

      <RelatedProducts excludeId={data?._id} />
    </div>
  );
}
