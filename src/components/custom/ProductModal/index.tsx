import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

import { ProductCardType } from "../ProductCard";
import { Button } from "@/components/ui/button";

interface ProductModalType extends ProductCardType {
  trigger: React.ReactNode;
}

export default function ProductModal({
  trigger,
  id,
  frontImageUrl,
  backImageUrl,
  title,
  price,
}: ProductModalType) {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="flex flex-col items-center space-y-4">
        <h3 className="font-bold">{title}</h3>

        <div className="relative w-[25rem] h-[25rem] aspect-square cursor-pointer rounded-lg overflow-hidden">
          <Image
            src={frontImageUrl}
            fill={true}
            alt={"t-shirt preview"}
            className={
              "absolute top-0 left-0 transition-opacity duration-500 opacity-100 z-1 hover:opacity-0"
            }
          />
          {backImageUrl ? (
            <Image
              src={backImageUrl}
              fill={true}
              alt={"t-shirt preview"}
              className="absolute top-0 left-0 transition-opacity duration-500 opacity-0 z-0 hover:opacity-100"
            />
          ) : null}
        </div>

        <Button>{`Buy Now for ${price} USDC`}</Button>
      </DialogContent>
    </Dialog>
  );
}
