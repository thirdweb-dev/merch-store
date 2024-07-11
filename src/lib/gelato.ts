export function generateOrderId(address: string) {
  const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
  return `${address}-${randomNumber}`;
}

export function getProductUid(variants: any[], size: string) {
  const variant = variants.filter((variant: any) =>
    variant.title.includes(size)
  )[0];
  return variant.productUid;
}
