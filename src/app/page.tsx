import ProductCard from "@/components/custom/ProductCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-8">
      <div className="grid grid-cols-2 lg:grid-cols-3">
        <ProductCard
          id={"1"}
          frontImageUrl={"/shirt-front.jpeg"}
          backImageUrl={"/shirt-back.jpeg"}
          title={"thirdweb Men's Oversized Logo T-Shirt"}
          price={"0.01"}
        />

        <ProductCard
          id={"2"}
          frontImageUrl={"/shirt-front.jpeg"}
          backImageUrl={"/shirt-back.jpeg"}
          title={"thirdweb Women's Oversized Logo T-Shirt"}
          price={"0.01"}
        />
        <ProductCard
          id={"3"}
          frontImageUrl={"/shirt-front.jpeg"}
          backImageUrl={"/shirt-back.jpeg"}
          title={"thirdweb Women's Oversized Logo T-Shirt"}
          price={"0.01"}
        />
        <ProductCard
          id={"4"}
          frontImageUrl={"/shirt-front.jpeg"}
          backImageUrl={"/shirt-back.jpeg"}
          title={"thirdweb Women's Oversized Logo T-Shirt"}
          price={"0.01"}
        />
      </div>
    </main>
  );
}
