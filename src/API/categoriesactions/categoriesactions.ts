export async function getCategories() {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  const json = await res.json();
  return json.data; // [{ _id, name, slug, image }]
}

export async function getSpecificCategory(id: string) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${id}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Failed to fetch category");
  const json = await res.json();
  return json.data;
}

export async function getCategoryProducts(id: string) {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?category[in]=${id}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  const json = await res.json();
  return json.data;
}