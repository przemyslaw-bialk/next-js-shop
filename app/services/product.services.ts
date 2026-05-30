import Product from "../models/product.model";

export async function createProduct(
  name: string,
  stock: number,
  price: number,
) {
  return Product.create({ name, stock, price });
}

export async function getAllProducts() {
  const products = await Product.find();

  if (!products) {
    throw new Error("Products not found");
  }

  return products;
}

export async function deleteProduct(id: string) {
  return Product.findByIdAndDelete(id);
}
