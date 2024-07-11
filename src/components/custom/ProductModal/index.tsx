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
  colors,
  variants,
}: ProductModalType) {
  return (
    <Sheet>
      <SheetTrigger className="w-full h-full">{trigger}</SheetTrigger>
      <SheetContent className="flex flex-col items-center space-y-4 overflow-y-scroll">
        <MultiStepForm
          id={id}
          title={title}
          frontImageUrl={frontImageUrl}
          backImageUrl={backImageUrl}
          price={price}
          colors={colors}
          variants={variants}
        />
      </SheetContent>
    </Sheet>
  );
}
