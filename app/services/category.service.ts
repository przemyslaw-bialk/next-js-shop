import Category from "../models/category.model";

// CREATE PRODUCT //

export async function createCategory(category_name: string) {
  return Category.create({ category_name });
}
