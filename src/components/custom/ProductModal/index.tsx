import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ProductCardType } from "../ProductCard";
import MultiStepForm from "../MultiStepForm";

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
  productVariantOptions,
  variants,
}: ProductModalType) {
  return (
    <Sheet>
      <SheetTrigger className="w-full h-full">{trigger}</SheetTrigger>
      <SheetContent className="flex flex-col items-center space-y-4 overflow-y-scroll rounded-lg m-4">
        <MultiStepForm
          id={id}
          title={title}
          frontImageUrl={frontImageUrl}
          backImageUrl={backImageUrl}
          price={price}
          productVariantOptions={productVariantOptions}
          variants={variants}
        />
      </SheetContent>
    </Sheet>
  );
}
