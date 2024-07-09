"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import ProductDetails from "../ProductDetails";
import AddressForm from "../AddressForm";
import ShippingForm from "../ShippingForm";

import Image from "next/image";

const steps = [
  "Product Details",
  "Shipping Address",
  "Shipping Method",
  "Confirmation",
];

const formSchema = z.object({
  id: z.string(),
  size: z.string(),
  color: z.string(),
  name: z.string(),
  address1: z.string(),
  address2: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
});

interface MultiStepFormType {
  title: string;
  frontImageUrl: string;
  backImageUrl?: string;
  price: string;
}

export default function MultiStepForm({
  title,
  frontImageUrl,
  backImageUrl,
  price,
}: MultiStepFormType) {
  const [currentStep, setCurrentStep] = useState(0);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      size: "",
      color: "",
      name: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const goToNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      {currentStep == 0 ? (
        <>
          <h3 className="font-bold">{title}</h3>
          <div className="relative w-[25rem] h-[25rem] aspect-square cursor-pointer rounded-lg overflow-hidden transition-all">
            <Image
              src={frontImageUrl}
              fill={true}
              alt={"t-shirt front preview"}
              className={
                "absolute top-0 left-0 transition-opacity duration-500 opacity-100 z-1 hover:opacity-0"
              }
            />
            {backImageUrl ? (
              <Image
                src={backImageUrl}
                fill={true}
                alt={"t-shirt back preview"}
                className="absolute top-0 left-0 transition-opacity duration-500 opacity-0 z-0 hover:opacity-100"
              />
            ) : null}
          </div>
        </>
      ) : (
        <div className="flex space-x-2 items-center">
          <div className="relative w-[5rem] h-[5rem] aspect-square cursor-pointer rounded-lg overflow-hidden transition-all">
            <Image
              src={frontImageUrl}
              fill={true}
              alt={"t-shirt front preview"}
              className={"absolute top-0 left-0"}
            />
          </div>
          <h3 className="font-bold">{title}</h3>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {currentStep === 0 && (
            <ProductDetails
              price={price}
              control={form.control}
              action={goToNextStep}
            />
          )}
          {currentStep === 1 && (
            <AddressForm control={form.control} action={goToNextStep} />
          )}
          {currentStep === 2 && (
            <ShippingForm
              control={form.control}
              price={price}
              action={goToNextStep}
            />
          )}
        </form>
      </Form>
    </div>
  );
}
