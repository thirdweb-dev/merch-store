"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SelectBox from "../Select";
import LoginButton from "../LoginButton";

interface ProductFormType {
  price: string;
  productVariantOptions: any[];
  form: any;
  action: () => void;
  account: any;
}

export default function ProductDetailsForm({
  price,
  productVariantOptions,
  form,
  action,
  account,
}: ProductFormType) {
  return (
    <div className="flex flex-col space-y-6">
      {productVariantOptions
        ? productVariantOptions.map((option) => {
            const options: any[] = [];

            option.values.forEach((value: string) =>
              options.push({ id: value, label: value, value })
            );

            return (
              <FormField
                control={form.control}
                name={option.name.toLowerCase()}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">{option.name}</FormLabel>
                    <FormControl>
                      <SelectBox
                        placeholder={`Select ${option.name}`}
                        field={field}
                        options={options}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })
        : null}
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
