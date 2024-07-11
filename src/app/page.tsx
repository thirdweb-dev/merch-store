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
    <main className="flex h-full flex-col space-y-8 p-4">
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 h-[800px]">
        {data.products.length === 1 ? (
          <>
            <div className="w-full h-3/4">
              <ProductCard
                key={data.products[0].id}
                id={data.products[0].id}
                frontImageUrl={data.products[0].previewUrl}
                title={data.products[0].title}
                productVariantOptions={data.products[0].productVariantOptions}
                variants={data.products[0].variants}
                price={"25"}
              />
            </div>
          </>
        ) : (
          <>
            <div className="w-full h-3/4 md:w-1/2 md:h-full">
              <ProductCard
                key={data.products[0].id}
                id={data.products[0].id}
                frontImageUrl={data.products[0].previewUrl}
                title={data.products[0].title}
                productVariantOptions={data.products[0].productVariantOptions}
                variants={data.products[0].variants}
                price={"25"}
              />
            </div>
            <div className="flex flex-col space-y-4 w-full md:w-1/2">
              <ProductCard
                key={data.products[1].id}
                id={data.products[1].id}
                frontImageUrl={data.products[1].previewUrl}
                title={data.products[1].title}
                productVariantOptions={data.products[1].productVariantOptions}
                variants={data.products[1].variants}
                price={"25"}
              />
              {data.products.length > 2 ? (
                <ProductCard
                  key={data.products[2].id}
                  id={data.products[2].id}
                  frontImageUrl={data.products[2].previewUrl}
                  title={data.products[2].title}
                  productVariantOptions={data.products[2].productVariantOptions}
                  variants={data.products[2].variants}
                  price={"25"}
                />
              ) : null}
            </div>
          </>
        )}
      </div>

      {data.products.length > 3 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.products.slice(2).map((product: any) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                frontImageUrl={product.previewUrl}
                title={product.title}
                productVariantOptions={product.productVariantOptions}
                variants={product.variants}
                price={"25"}
              />
            );
          })}
        </div>
      ) : null}
    </main>
  );
}
