import Link from "next/link";
import {
  getSpecificCategory,
  getCategoryProducts,
} from "@/API/categoriesactions/categoriesactions";
import { prodType } from "@/app/interfaces/Product";
import ProductCard from "@/app/_components/ProductCard/ProductCard";


export default async function CategoryDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [category, products] = await Promise.all([
    getSpecificCategory(id),
    getCategoryProducts(id),
  ]);

  return (
    <>
      {/* Header */}
      <div className="bg-linear-to-br from-green-500 to-green-400 p-8 pb-9">
        <span className="flex items-center gap-2 text-gray-100">
          <Link href="/" className="hover:text-white duration-150">Home</Link>
          <span>/</span>
          <Link href="/categories" className="hover:text-white duration-150">Categories</Link>
          <span>/</span>
          <span className="font-semibold text-white">{category.name}</span>
        </span>

        <div className="flex items-center gap-4 py-5">
          <div className="rounded-2xl bg-white/30 p-3 shadow-lg">
            <img
              src={category.image}
              alt={category.name}
              className="h-14 w-14 rounded-lg object-cover"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold text-white">{category.name}</h1>
            <p className="text-gray-100">Browse products in {category.name}</p>
          </div>
        </div>
      </div>

      <div className="container px-6 py-8">
        {/* Active filters */}
        <div className="flex items-center gap-3">
          <span className="text-gray-600">Active Filters:</span>
          <span className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700">
            {category.name}
            <Link href="/categories" className="hover:text-green-900">✕</Link>
          </span>
          <Link href="/categories" className="text-gray-600 underline">Clear all</Link>
        </div>

        <p className="my-5 text-gray-500">Showing {products.length} products</p>

        {products.length === 0 ? (
          <p className="py-20 text-center text-gray-500">No products in this category.</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((p: prodType) => (
              <ProductCard key={p._id} p={p} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}