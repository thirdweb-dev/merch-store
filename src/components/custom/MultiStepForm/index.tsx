"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import AddressForm from "../AddressForm";
import ShippingForm from "../ShippingForm";
import ProductDetailsForm from "../ProductDetailsForm";

import Image from "next/image";
import { getContract, sendTransaction } from "thirdweb";
import { THIRDWEB_CLIENT } from "@/lib/thirdweb";
import { polygon } from "thirdweb/chains";
import { transfer } from "thirdweb/extensions/erc20";
import { useActiveAccount } from "thirdweb/react";
import { submitPurchase } from "@/lib/submitPurchase";
import { orderData } from "@/lib/orderData";
import { generateOrderId, getProductUid } from "@/lib/gelato";
import Confirmation from "../Confirmation";

const steps = [
  "Product Details",
  "Shipping Address",
  "Shipping Method",
  "Confirmation",
];

const formSchema = z.object({
  size: z.string(),
  color: z.string(),
  email: z.string(),
  name: z.string(),
  address1: z.string(),
  address2: z.string(),
  city: z.string(),
  country: z.string(),
  state: z.string(),
  zipCode: z.string(),
  method: z.string(),
});

interface MultiStepFormType {
  id: string;
  title: string;
  frontImageUrl: string;
  backImageUrl?: string;
  price: string;
  productVariantOptions: any[];
  variants: any[];
}

export default function MultiStepForm({
  id,
  title,
  frontImageUrl,
  backImageUrl,
  price,
  productVariantOptions,
  variants,
}: MultiStepFormType) {
  const account = useActiveAccount();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      size: "M",
      color: "shadow",
      email: "",
      name: "",
      address1: "",
      address2: "",
      city: "",
      country: "",
      state: "",
      zipCode: "",
      method: "normal",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    if (!account) {
      return;
    }

    const contract = getContract({
      client: THIRDWEB_CLIENT,
      chain: polygon,
      address: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
    });

    const transaction = transfer({
      contract,
      to: "0xE443E285925CBF30a3AF2eAD6b2f3947764fFEB6",
      amount: parseFloat(price),
    });

    const result = await sendTransaction({ transaction, account });

    orderData.orderReferenceId = generateOrderId(account.address);
    orderData.customerReferenceId = account.address;
    orderData.shipmentMethodUid = values.method;
    orderData.items = [
      {
        itemReferenceId: id,
        productUid:
          variants.length > 1
            ? getProductUid(variants, values.size)
            : variants[0].productUid,
        files: [
          {
            type: "default",
            url: frontImageUrl,
          },
        ],
        quantity: 1,
      },
    ];

    orderData.shippingAddress = {
      firstName: values.name.split(/ (.*)/)[0],
      lastName: values.name.split(/ (.*)/)[1],
      addressLine1: values.address1,
      addressLine2: values.address2,
      state: values.state,
      city: values.city,
      postCode: values.zipCode,
      country: values.country,
      email: values.email,
    };

    await submitPurchase({
      chainId: polygon.id,
      transactionHash: result.transactionHash,
      purchaseData: orderData,
    });

    setLoading(false);

    goToNextStep();
  }

  const goToNextStep = () => {
    console.log(form.getValues());
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const goToPreviousStep = () => {
    console.log(form.getValues());
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      {currentStep == 0 || currentStep == 3 ? (
        <div className="flex flex-col space-y-2 items-center">
          <h3 className="font-bold">{title}</h3>
          <div className="relative w-full h-full aspect-square cursor-pointer rounded-lg overflow-hidden transition-all">
            <Image
              src={frontImageUrl}
              fill={true}
              alt={"t-shirt front preview"}
              className={"absolute top-0 left-0 "}
            />
          </div>
        </div>
      ) : (
        <div className="flex space-x-2 items-center border-b border-border pb-4 ">
          <div className="relative w-[3rem] h-[3rem] aspect-square cursor-pointer rounded-md overflow-hidden transition-all">
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
            <ProductDetailsForm
              price={price}
              productVariantOptions={productVariantOptions}
              form={form}
              action={goToNextStep}
              account={account}
            />
          )}
          {currentStep === 1 && (
            <AddressForm
              control={form.control}
              action={goToNextStep}
              back={goToPreviousStep}
            />
          )}
          {currentStep === 2 && (
            <ShippingForm
              price={price}
              control={form.control}
              loading={loading}
            />
          )}
          {currentStep === 3 && <Confirmation title={title} />}
        </form>
      </Form>
    </div>
  );
}
