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
import SelectBox from "../Select";

interface ProductFormType {
  price: string;
  colors: any[];
  form: any;
  action: () => void;
}

/*
  <RadioGroup className="flex space-x-2" {...field}>
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="XS" id="XS" />
                  </FormControl>
                  <FormLabel htmlFor="XS">XS</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="S" id="S" />
                  </FormControl>
                  <FormLabel htmlFor="S">S</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="M" id="M" />
                  </FormControl>
                  <FormLabel htmlFor="M">M</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="L" id="L" />
                  </FormControl>
                  <FormLabel htmlFor="L">L</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="XL" id="XL" />
                  </FormControl>
                  <FormLabel htmlFor="XL">XL</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <RadioGroupItem value="2XL" id="2XL" />
                  </FormControl>
                  <FormLabel htmlFor="2XL">XXL</FormLabel>
                </FormItem>
              </RadioGroup>
*/
export default function ProductDetailsForm({
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
              <SelectBox
                field={field}
                options={[
                  { id: "XS", label: "XS", value: "XS" },
                  { id: "S", label: "S", value: "S" },
                  { id: "M", label: "M", value: "M" },
                  { id: "L", label: "L", value: "L" },
                  { id: "XL", label: "XL", value: "XL" },
                  { id: "XXL", label: "XXL", value: "XXL" },
                ]}
              />
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