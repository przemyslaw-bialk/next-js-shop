import dbConnect from "../lib/mongodb";
import Category from "../models/category.model";

// CREATE PRODUCT //
export async function createCategory(name: string) {
  return Category.create({ name });
}

// GET CATEGORIES //
export async function getCategories() {
  await dbConnect();
  const categories = await Category.find().lean();

  return categories.map((category) => ({
    _id: category._id.toString(),
    name: category.name,
  }));
}
