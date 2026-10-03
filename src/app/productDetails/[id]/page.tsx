import React from "react";
import { prodType } from "../../interfaces/Product";
import ProductDetailsClient from "@/app/_components/ProductDetailsClient/ProductDetailsClient";

export default async function productDetails(props: {
  params: { id: string };
}) {
  let prams = await props.params;
  const { id } = prams;
  //console.log(id)

  async function getproductDetails(): Promise<prodType | null> {
    try {
      let request = await fetch(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      );
      let payload = await request.json();
      //  console.log(payload.data)
      return payload.data;
    } catch (error) {
      console.log("error");
      return null;
    }
  }

  const data = await getproductDetails();
  //console.log(data);
   if (!data) {
    return (
      <div className="container mx-auto px-4 py-16 text-center text-gray-500">
        Product not found.
      </div>
    );
  }

  return (
    <>
       <div className="bg-gray-100 min-h-screen">
      <ProductDetailsClient data={data} />
    </div>
    </>
    
  );
}
