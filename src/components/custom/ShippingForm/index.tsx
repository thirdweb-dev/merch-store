"use client";

import { Control } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ShippingFormType {
  price: string;
  control: Control<any, any>;
}

export default function ShippingForm({ price, control }: ShippingFormType) {
  return (
    <div className="flex flex-col space-y-8">
      <FormField
        control={control}
        name="method"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-bold">Shipping Method</FormLabel>
            <FormControl className="border border-border rounded-md">
              <RadioGroup
                className="flex flex-col space-y-0"
                defaultValue="free"
                {...field}
              >
                <div className="flex items-center space-x-2 p-4 border-b border-border">
                  <RadioGroupItem value="free" id="free" />
                  <Label htmlFor="free">Free Shipping</Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border-b border-border">
                  <RadioGroupItem value="normal" id="normal" />
                  <Label htmlFor="normal">Domestic Ground</Label>
                </div>
                <div className="flex items-center space-x-2 p-4">
                  <RadioGroupItem value="express" id="express" />
                  <Label htmlFor="express">Expedited</Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button
        type="submit"
        className="flex items-center justify-center bg-gradient-to-r from-[#f213a4] via-[#B20DAF] to-[#5204BF] rounded-full p-[0.1rem] text-primary text-center"
      >
        <h3 className="flex items-center justify-center w-full space-x-1 bg-gradient-to-r from-[#FDE3F4] to-[#EEE1F7] dark:from-[#260C1E] dark:to-[#180B20] rounded-full py-2 px-[10px] text-primary font-semibold">
          <span className="bg-gradient-to-r from-[#f213a4] via-[#B20DAF] to-[#5204BF] inline-block text-transparent bg-clip-text text-nowrap dark:text-white">
            {`Purchase for ${price} USDC`}
          </span>
        </h3>
      </Button>
    </div>
  );
}
