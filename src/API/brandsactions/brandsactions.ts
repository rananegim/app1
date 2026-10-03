import { BrandsResponse } from "@/types/brands";
import { Brand } from "@/types/productCart";

export async function getBrands(): Promise<Brand[]> {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/brands", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Failed to fetch brands");

  const json: BrandsResponse = await res.json();
  return json.data;
}

export async function getSpecificBrand(id: string) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/brands/${id}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Failed to fetch brand");
  const json = await res.json();
  return json.data; // { _id, name, slug, image }
}

export async function getBrandProducts(id: string) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?brand=${id}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  const json = await res.json();
  return json.data; // array of products
}