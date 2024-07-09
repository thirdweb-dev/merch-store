"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  method: z.string(),
});

interface ProductFormType {
  price: string;
}

export default function ProductForm({ price }: ProductFormType) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      method: "free",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-8"
      >
        <FormField
          control={form.control}
          name="method"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Size</FormLabel>
              <FormControl>
                <RadioGroup className="flex space-x-2" defaultValue="free">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="free" id="free" />
                    <Label htmlFor="method">Free Shipping</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="domestic" id="domestic" />
                    <Label htmlFor="s">Domestic Grond</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="expedited" id="expedited" />
                    <Label htmlFor="m">Expediated</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{`Purchase for ${price} USDC`}</Button>
      </form>
    </Form>
  );
}
