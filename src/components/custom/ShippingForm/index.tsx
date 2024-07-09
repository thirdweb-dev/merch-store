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
              >
                <div className="flex items-center space-x-2 p-4 border-b border-border">
                  <RadioGroupItem value="free" id="free" />
                  <Label htmlFor="method">Free Shipping</Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border-b border-border">
                  <RadioGroupItem value="domestic" id="domestic" />
                  <Label htmlFor="domestic">Domestic Ground</Label>
                </div>
                <div className="flex items-center space-x-2 p-4">
                  <RadioGroupItem value="expedited" id="expedited" />
                  <Label htmlFor="expediated">Expedited</Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">{`Purchase for ${price} USDC`}</Button>
    </div>
  );
}
