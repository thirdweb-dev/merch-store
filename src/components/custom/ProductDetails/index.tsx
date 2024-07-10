"use client";
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

interface ProductFormType {
  price: string;
  colors: any[];
  form: any;
  action: () => void;
}

export default function ProductDetails({
  price,
  colors,
  form,
  action,
}: ProductFormType) {
  return (
    <div className="flex flex-col space-y-4">
      <FormField
        control={form.control}
        name="size"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-bold">Size</FormLabel>
            <FormControl>
              <RadioGroup className="flex space-x-2" {...field}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="XS" id="XS" />
                  <Label htmlFor="size">XS</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="S" id="S" />
                  <Label htmlFor="size">S</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="M" id="M" />
                  <Label htmlFor="size">M</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="L" id="L" />
                  <Label htmlFor="size">L</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="XL" id="XL" />
                  <Label htmlFor="size">XL</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2XL" id="2XL" />
                  <Label htmlFor="size">XXL</Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="color"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-bold">Color</FormLabel>
            <FormControl>
              <RadioGroup className="flex space-x-2" {...field}>
                {colors.map((color: string) => {
                  return (
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={color} id={color.toLowerCase()} />
                      <Label htmlFor={color.toLowerCase()}>
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button onClick={action}>{`Buy Now for ${price} USDC`}</Button>
    </div>
  );
}
