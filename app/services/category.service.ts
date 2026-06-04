import Category from "../models/category.model";

// CREATE PRODUCT //
export async function createCategory(name: string) {
  return Category.create({ name });
}

// GET CATEGORIES //
export async function getCategories() {
  const categories = await Category.find().lean();

  return categories.map((category) => ({
    _id: category._id.toString(),
    name: category.name,
  }));
}
