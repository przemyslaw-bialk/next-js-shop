import Product from "../models/product.model";

// CREATE PRODUCT //
export async function createProduct(
  name: string,
  stock: number,
  price: number,
  category: string,
) {
  return Product.create({ name, stock, price, category });
}

// GET ALL PRODUCTS //
export async function getAllProducts() {
  const products = await Product.find();

  if (!products) {
    throw new Error("Products not found");
  }

  return products;
}

// DELETE PRODUCT //
export async function deleteProduct(id: string) {
  return Product.findByIdAndDelete(id);
}
