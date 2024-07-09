"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Control } from "react-hook-form";
import { z } from "zod";

import { ProductCardType } from "../ProductCard";
import ProductDetails from "../ProductDetails";
import AddressForm from "../AddressForm";

const steps = [
  "Product Details",
  "Shipping Address",
  "Shipping Method",
  "Confirmation",
];

const formSchema = z.object({
  id: z.string({}),
  size: z.string({}),
  color: z.string({}),
  name: z.string(),
  address1: z.string(),
  address2: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  method: z.string(),
});

export default function MultiStepForm({ id, price }: ProductCardType) {
  const [currentStep, setCurrentStep] = useState(0);
  const {
    control,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id,
      size: "s",
      color: "black",
      name: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
      method: "",
    },
  });

  const goToNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <>
      {currentStep === 0 && (
        <ProductDetails
          id={id}
          price={price}
          control={control}
          action={goToNextStep}
        />
      )}
      {currentStep === 1 && (
        <AddressForm
          control={control as Control<any, any>}
          action={goToNextStep}
        />
      )}
    </>
  );
}
