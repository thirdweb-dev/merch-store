import Image from "next/image";
import ProductModal from "../ProductModal";

export interface ProductCardType {
  id: string;
  frontImageUrl: string;
  backImageUrl?: string;
  title: string;
  price: string;
}

export default function ProductCard({
  id,
  frontImageUrl,
  backImageUrl,
  title,
  price,
}: ProductCardType) {
  return (
    <ProductModal
      id={id}
      trigger={
        <div className="flex flex-col space-y-4 items-center border-b md:border-r border-border p-8">
          <div className="relative  w-[25rem] h-[25rem] aspect-square cursor-pointer rounded-lg overflow-hidden">
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
          <h2 className="font-bold">{title}</h2>
          <h3>{`${price} USDC`}</h3>
        </div>
      }
      frontImageUrl={frontImageUrl}
      backImageUrl={backImageUrl}
      title={title}
      price={price}
    />
  );
}
