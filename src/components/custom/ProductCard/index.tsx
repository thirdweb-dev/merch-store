import Image from "next/image";
import ProductModal from "../ProductModal";
import ProductInfoBadge from "../ProductInfoBadge";

export interface ProductCardType {
  id: string;
  frontImageUrl: string;
  backImageUrl?: string;
  title: string;
  price: string;
  productVariantOptions: any[];
  variants: any[];
}

export default function ProductCard({
  id,
  frontImageUrl,
  backImageUrl,
  title,
  price,
  productVariantOptions,
  variants,
}: ProductCardType) {
  return (
    <ProductModal
      id={id}
      trigger={
        <div className="bg-border p-[.125rem] rounded-lg w-full h-full relative hover:bg-gradient-to-r from-[#f213a4] via-[#B20DAF] to-[#5204BF] transition-all hover:-translate-y-1">
          <div className="flex flex-col space-y-4 p-8 items-center justify-center bg-card rounded-lg w-full h-full relative">
            <div className="relative  w-[20rem] h-[20rem] aspect-square cursor-pointer rounded-lg overflow-hidden">
              <Image
                src={frontImageUrl}
                fill={true}
                alt={"t-shirt preview"}
                className={"absolute top-0 left-0"}
              />
            </div>
            <div className="absolute bottom-8 left-8">
              <ProductInfoBadge title={title} price={price} />
            </div>
          </div>
        </div>
      }
      frontImageUrl={frontImageUrl}
      backImageUrl={backImageUrl}
      title={title}
      price={price}
      productVariantOptions={productVariantOptions}
      variants={variants}
    />
  );
}
