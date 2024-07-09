import ProductForm from "../ProductForm";
import { Control, FieldValues } from "react-hook-form";

interface ProductDetail {
  id: string;
  price: string;
  control: Control<any, any>;
  action: () => void;
}

export default function ProductDetails({
  id,
  price,
  control,
  action,
}: ProductDetail) {
  return (
    <div className="flex flex-col space-y-4">
      <ProductForm price={price} control={control} action={action} />
    </div>
  );
}
