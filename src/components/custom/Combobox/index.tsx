"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const triggers = [
  {
    value: "reservoir",
    label: "Reservoir",
    logoUrl:
      "https://pbs.twimg.com/profile_images/1485982788125925380/FcpJsspv_400x400.png",
  },
  {
    value: "thirdweb-pay",
    label: "thirdweb Pay",
    logoUrl:
      "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-pay.eb8d23a3.png&w=256&q=75",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? triggers.find((trigger) => trigger.value === value)?.label
            : "Select trigger..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search triggers..." />
          <CommandEmpty>No trigger found.</CommandEmpty>
          <CommandGroup>
            {triggers.map((trigger) => (
              <CommandItem
                key={trigger.value}
                value={trigger.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === trigger.value ? "opacity-100" : "opacity-0"
                  )}
                />
                <Image
                  src={trigger.logoUrl}
                  fill={true}
                  alt={`${trigger.label} logo`}
                />
                {trigger.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
