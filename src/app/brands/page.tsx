import { getBrands } from "@/API/brandsactions/brandsactions";
import Link from "next/link";


export default async function Brands() {
  const brands = await getBrands();

  return (
    <>
      <div className="bg-[#8B49FF] p-8 pb-9">
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
          <Link href="/brands" className="text-white">
            Brands
          </Link>
        </span>

        <div className="flex gap-3 py-5">
          <div className="bg-purple-300/60 p-4 rounded-2xl w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-9 w-11 fill-current text-white"
            >
              <path
                fill="currentColor"
                d="M401.2 39.1L549.4 189.4c27.7 28.1 27.7 73.1 0 101.2L393 448.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L515.3 256.8c9.2-9.3 9.2-24.4 0-33.7L367 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM32.1 229.5L32.1 96c0-35.3 28.7-64 64-64l133.5 0c17 0 33.3 6.7 45.3 18.7l144 144c25 25 25 65.5 0 90.5L285.4 418.7c-25 25-65.5 25-90.5 0l-144-144c-12-12-18.7-28.3-18.7-45.3zm144-85.5a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"
              ></path>{" "}
            </svg>
          </div>

          <div>
            <h2 className="text-white font-bold text-5xl">Top Brands</h2>
            <p className="text-gray-300/90">Shop from your favorite brands</p>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="min-h-screen bg-slate-50 px-6 py-12">
          <div className="mx-auto max-w-7xl">

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
              {brands.map((brand) => (
                <Link
                  key={brand._id}
                  href={`/brands/${brand._id}`}
                  className="group flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-6
                         shadow-sm transition-all duration-300 ease-out
                         hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100"
                >
                  {/* Logo box */}
                  <div className="flex h-32 w-full items-center justify-center rounded-2xl bg-gray-50 p-4">
                    <div className="h-20 w-full bg-white">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3
                    className="mt-4 text-base font-semibold text-gray-900 transition-colors duration-300
                           group-hover:text-purple-600"
                  >
                    {brand.name}
                  </h3>

                  {/* View Products: hidden by default, appears on hover */}
                  <span
                    className="mt-1 flex max-h-0 items-center gap-1 overflow-hidden text-sm text-purple-600
                           opacity-0 transition-all duration-300 ease-out
                           group-hover:max-h-8 group-hover:opacity-100"
                  >
                    View Products
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
