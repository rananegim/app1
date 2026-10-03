"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { payCash } from "@/API/paymentactions/paycash.action";
import { payOnline } from "@/API/paymentactions/payonline.actions";

type PaymentMethod = "cash" | "online";
export default function CheckoutForm({cartId}:{cartId:string}) {
      const router = useRouter();
  const [method, setMethod] = React.useState<PaymentMethod>("cash");

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<shippingData>({
    defaultValues: { details: "", phone: "", city: "", postalCode: "" },
  });

  async function submitForm(data: shippingData) {
    try {
      const payload =
        method === "cash"
          ? await payCash(cartId, data)
          : await payOnline(cartId, data);

      if (payload.status == "success") {
        toast.add({ type: "success", description: "Order Created Successfully" });

        if (method === "online" && payload.session?.url) {
          window.location.href = payload.session.url;
          return;
        }
        router.push("/");
      } else {
        toast.add({ type: "error", description: "Order Failed" });
      }
    } catch (error) {
      toast.add({ type: "error", description: "Something went wrong" });
    }
  }



  return (
    <div className="w-1/2 mx-auto my-10 p-10 ">
      <h2 className="text-2xl font-extrabold">CheckOut </h2>

      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col gap-8 p-4 border-2 border-gray-200 rounded-2xl">
          <Controller
            name="details"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-md font-bold" htmlFor={field.name}>details</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your details"
                  autoComplete="on"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-md font-bold" htmlFor={field.name}>phone</FieldLabel>
                <Input
                  type="text"
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your phone"
                  autoComplete="on"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="city"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-md font-bold" htmlFor={field.name}>city</FieldLabel>
                <Input
                  type="text"
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your city"
                  autoComplete="on"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="postalCode"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-md font-bold" htmlFor={field.name}>postalCode</FieldLabel>
                <Input
                  type="text"
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your postalCode"
                  autoComplete="on"
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
        {/* <Button
          type="submit"
          className="w-full bg-green-600 my-4 hover:bg-green-600"
        >
          {" "}
          Login Now
        </Button> */}
         <div className="flex gap-4 my-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            onClick={() => setMethod("cash")}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            Pay Cash
          </Button>

          <Button
            type="submit"
            disabled={isSubmitting}
            onClick={() => setMethod("online")}
            className="flex-1 bg-blue-600 hover:bg-blue-700"
          >
            Pay Online
          </Button>
        </div>
      </form>
    </div>
  );
}

export interface shippingData {
  details: string;
  phone: string;
  city: string;
  postalCode: string;
}
