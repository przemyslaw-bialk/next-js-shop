import Product from "../models/product.model";

export async function createProduct(name: string) {
  return Product.create({ name });
}
