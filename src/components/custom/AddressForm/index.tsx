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

      <h3 className="font-bold">Shipping Address</h3>
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
      <Button onClick={action}>Continue to Shipping</Button>
    </div>
  );
}
