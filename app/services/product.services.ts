import dbConnect from "../lib/mongodb";
import Product from "../models/product.model";

// CREATE PRODUCT //
export async function createProduct(
  name: string,
  stock: number,
  price: number,
  category: string,
  image: string,
  sizes: string[],
) {
  await dbConnect();

  return Product.create({
    name,
    stock,
    price,
    category,
    image,
    sizes,
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

// FIND PRODUCTS BY NAME IN A SEARCH BAR //
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

// FIND PRODUCT BY ID //
export async function findProductById(id: string) {
  await dbConnect();

  const product = await Product.findById(id).populate("image").lean();

  return product;
}
