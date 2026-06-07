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
  const products = await Product.find().populate("category");

  if (!products) {
    throw new Error("Products not found");
  }

  return products;
}

// DELETE PRODUCT //
export async function deleteProduct(id: string) {
  return Product.findByIdAndDelete(id);
}

// GET PRODUCTS BY CATEGORY //
export async function getProductsByCategory(categoryId: string) {
  const products = await Product.find({
    category: categoryId,
  }).populate("category");

  if (!products) {
    throw new Error("Products not found");
  }

  return products;
}
