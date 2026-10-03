import Link from "next/link";
import { getCategories } from "@/API/categoriesactions/categoriesactions";
import { categoryType } from "../interfaces/category";



export default async function Categories() {
  const categories: categoryType[] = await getCategories();

  return (
    <>
      {/* Header */}
      <div className="bg-linear-to-br from-green-500 to-green-400 p-8 pb-9">
        <span className="flex items-center gap-2 text-gray-100">
          <Link href="/" className="hover:text-white duration-150">Home</Link>
          <span>/</span>
          <span className="font-semibold text-white">Categories</span>
        </span>

        <div className="flex items-center gap-4 py-5">
          <div className="rounded-2xl bg-white/30 p-4 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-9 w-9 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 2 10 5-10 5L2 7z" />
              <path d="m2 12 10 5 10-5" />
              <path d="m2 17 10 5 10-5" />
            </svg>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-white">All Categories</h1>
            <p className="text-gray-100">Browse our wide range of product categories</p>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container px-6 py-10">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat) => (
            <Link
              key={cat._id}
              href={`/categories/${cat._id}`}
              className="group flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-4
                         shadow-sm transition-all duration-300 ease-out
                         hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-100"
            >
              <div className="h-72 w-full overflow-hidden rounded-2xl bg-gray-50">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 mb-6 font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-600">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
