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
}

export default function AddressForm({ control, action }: ProductFormType) {
  return (
    <div className="flex flex-col space-y-4">
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-bold">Name</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Name" />
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
              <Input type="text" placeholder="Address 1" />
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
              <Input type="text" placeholder="Address 2" />
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
              <Input type="text" placeholder="City" />
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
            <FormLabel className="font-bold">City</FormLabel>
            <FormControl>
              <Input type="text" placeholder="State" />
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
            <FormLabel className="font-bold">City</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Zip Code" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button onClick={action}>Continue to Shipping</Button>
    </div>
  );
}
