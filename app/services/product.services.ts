import dbConnect from "../lib/mongodb";
import Product from "../models/product.model";

// CREATE PRODUCT //
export async function createProduct(
  name: string,
  stock: number,
  price: number,
  category: string,
  image: string,
) {
  await dbConnect();

  return Product.create({
    name,
    stock,
    price,
    category,
    image,
  });
}

// GET ALL PRODUCTS //
export async function getAllProducts() {
  await dbConnect();

  const products = await Product.find().populate("category").populate("image");

  return products;
}

// DELETE PRODUCT //
export async function deleteProduct(id: string) {
  await dbConnect();

  return Product.findByIdAndDelete(id);
}

// GET PRODUCTS BY CATEGORY //
export async function getProductsByCategory(categoryId: string) {
  await dbConnect();

  const products = await Product.find({
    category: categoryId,
  }).populate("category");

  return products;
}

export async function findProduct(name: string) {
  await dbConnect();

  const products = await Product.find({
    name: {
      $regex: name,
      $options: "i",
    },
  })
    .limit(10)
    .populate("image");
  return products;
}
