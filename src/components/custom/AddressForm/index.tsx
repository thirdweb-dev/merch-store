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
import { Input } from "@/components/ui/input";

interface ProductFormType {
  control: Control<any, any>;
  action: () => void;
  back: () => void;
}

export default function AddressForm({
  control,
  action,
  back,
}: ProductFormType) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-4 border-b border-border pt-4 pb-8 w-full">
        <h3 className="font-bold">Contact Information</h3>
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Email</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex flex-col space-y-4 py-4">
        <h3 className="font-bold ">Shipping Address</h3>
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Country</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Country" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="address1"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Address 1</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Address 1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="address2"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Address 2</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Address 2" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">City</FormLabel>
              <FormControl>
                <Input type="text" placeholder="City" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">State</FormLabel>
              <FormControl>
                <Input type="text" placeholder="State" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Zip Code</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Zip Code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <Button
        onClick={action}
        className="flex items-center justify-center bg-gradient-to-r from-[#f213a4] via-[#B20DAF] to-[#5204BF] rounded-full p-[0.1rem] text-primary text-center"
      >
        <h3 className="flex items-center justify-center w-full space-x-1 bg-gradient-to-r from-[#FDE3F4] to-[#EEE1F7] dark:from-[#260C1E] dark:to-[#180B20] rounded-full py-2 px-[10px] text-primary font-semibold">
          <span className="bg-gradient-to-r from-[#f213a4] via-[#B20DAF] to-[#5204BF] inline-block text-transparent bg-clip-text text-nowrap dark:text-white">
            Continue to Shipping
          </span>
        </h3>
      </Button>
      <Button variant={"outline"} onClick={back} className="rounded-full">
        Back
      </Button>
    </div>
  );
}
