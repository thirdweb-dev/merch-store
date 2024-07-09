"use client";
import { z } from "zod";
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
import { Control, FieldValues } from "react-hook-form";

interface ProductFormType {
  price: string;
  control: Control<FieldValues, any>;
  action: () => void;
}

export default function ProductForm({
  price,
  control,
  action,
}: ProductFormType) {
  return (
    <>
      <FormField
        control={control}
        name="size"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-bold">Size</FormLabel>
            <FormControl>
              <RadioGroup className="flex space-x-2" defaultValue="m">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="xs" id="xs" />
                  <Label htmlFor="xs">XS</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="s" id="s" />
                  <Label htmlFor="s">S</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="m" id="m" />
                  <Label htmlFor="m">M</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="l" id="l" />
                  <Label htmlFor="l">L</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="xl" id="xl" />
                  <Label htmlFor="xl">XL</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="xxl" id="xxl" />
                  <Label htmlFor="xxl">XXL</Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="color"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-bold">Color</FormLabel>
            <FormControl>
              <RadioGroup className="flex space-x-2" defaultValue="black">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="black" id="black" />
                  <Label htmlFor="black">Black</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="white" id="white" />
                  <Label htmlFor="white">White</Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button onClick={action}>{`Buy Now for ${price} USDC`}</Button>
    </>
  );
}
