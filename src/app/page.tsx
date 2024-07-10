import ProductCard from "@/components/custom/ProductCard";

async function getData() {
  const res = await fetch(
    `https://ecommerce.gelatoapis.com/v1/stores/${process.env.NEXT_PUBLIC_GELATO_STORE_ID}/products`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": process.env.NEXT_PUBLIC_GELATO_API_KEY!!,
      },
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col space-y-8">
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {data.products.map((product: any) => {
          return (
            <ProductCard
              id={product.id}
              frontImageUrl={product.previewUrl}
              backImageUrl={"/shirt-back.jpeg"}
              title={product.title}
              colors={product.productVariantOptions[1].values}
              variants={product.variants}
              price={"0.01"}
            />
          );
        })}
      </div>
    </main>
  );
}
