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
import LoginButton from "../LoginButton";

interface ProductFormType {
  price: string;
  colors: any[];
  form: any;
  action: () => void;
  account: any;
}

export default function ProductDetailsForm({
  price,
  colors,
  form,
  action,
  account,
}: ProductFormType) {
  return (
    <div className="flex flex-col space-y-6">
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
                    <div key={color} className="flex items-center space-x-2">
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
      {account ? (
        <Button
          onClick={action}
          className="flex items-center justify-center bg-gradient-to-r from-[#f213a4] via-[#B20DAF] to-[#5204BF] rounded-full p-[0.1rem] text-primary text-center"
        >
          <h3 className="flex items-center justify-center w-full space-x-1 bg-gradient-to-r from-[#FDE3F4] to-[#EEE1F7] dark:from-[#260C1E] dark:to-[#180B20] rounded-full py-2 px-[10px] text-primary font-semibold">
            <span className="bg-gradient-to-r from-[#f213a4] via-[#B20DAF] to-[#5204BF] inline-block text-transparent bg-clip-text text-nowrap dark:text-white">{`Buy Now for ${price} USDC`}</span>
          </h3>
        </Button>
      ) : (
        <LoginButton label="Log In to Purchase" />
      )}
    </div>
  );
}
