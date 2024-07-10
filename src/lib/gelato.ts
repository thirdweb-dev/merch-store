export function generateOrderId(address: string) {
  const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
  return `${address}-${randomNumber}`;
}

export function getProductUid(variants: any[], color: string, size: string) {
  console.log(variants);
  console.log(color);
  const colorVariants = variants.filter((variant: any) =>
    variant.title.includes(color)
  );
  console.log(colorVariants);
  const variant = colorVariants.filter((variant: any) =>
    variant.title.includes(size)
  )[0];
  return variant.productUid;
}
