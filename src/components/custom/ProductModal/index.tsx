import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
}: ProductModalType) {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="flex flex-col items-center space-y-4 overflow-y-scroll">
        <MultiStepForm
          title={title}
          frontImageUrl={frontImageUrl}
          backImageUrl={backImageUrl}
          price={price}
        />
      </DialogContent>
    </Dialog>
  );
}
