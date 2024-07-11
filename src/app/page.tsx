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
    <main className="flex min-h-screen flex-col space-y-8 p-4">
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 h-[800px]">
        <div className="w-full h-3/4 md:w-1/2 md:h-full">
          <ProductCard
            key={data.products[0].id}
            id={data.products[0].id}
            frontImageUrl={data.products[0].previewUrl}
            title={data.products[0].title}
            colors={data.products[0].productVariantOptions[1].values}
            variants={data.products[0].variants}
            price={"25"}
          />
        </div>
        <div className="flex flex-col space-y-4 w-full md:w-1/2">
          <ProductCard
            key={data.products[0].id}
            id={data.products[0].id}
            frontImageUrl={data.products[0].previewUrl}
            title={data.products[0].title}
            colors={data.products[0].productVariantOptions[1].values}
            variants={data.products[0].variants}
            price={"25"}
          />
          <ProductCard
            key={data.products[0].id}
            id={data.products[0].id}
            frontImageUrl={data.products[0].previewUrl}
            title={data.products[0].title}
            colors={data.products[0].productVariantOptions[1].values}
            variants={data.products[0].variants}
            price={"25"}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3">
        {data.products.slice(2).map((product: any) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              frontImageUrl={product.previewUrl}
              title={product.title}
              colors={product.productVariantOptions[1].values}
              variants={product.variants}
              price={"25"}
            />
          );
        })}
      </div>
    </main>
  );
}
