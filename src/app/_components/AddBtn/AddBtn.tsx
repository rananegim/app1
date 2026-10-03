'use client'
import { AddToCart } from "@/API/cartActions/addCart";
import { toast } from "@/components/ui/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";


export default function AddBtn({cls , child , prodId} :{cls:string , child:React.ReactNode , prodId:string}) {
 async function handleAddCart(e: React.MouseEvent<HTMLButtonElement>){
   e.preventDefault();
   mutate(prodId)

 }

const query = useQueryClient()
const {data , mutate} =  useMutation({
  mutationFn: AddToCart , 
  onSuccess: ()=> {toast.add({
      type:" success",
      description: "product added successfully"
    })
     query.invalidateQueries({queryKey:['getCart']})

  } , 
    onError:()=>{toast.add({
      type:" error",
      description: "login frist please "
    })
}
 })
  return (
    <>
      <button
        className={cls}
        tabIndex={0}
        onClick={handleAddCart}
      >
        {child}
       
      </button>

    </>
  );
}
