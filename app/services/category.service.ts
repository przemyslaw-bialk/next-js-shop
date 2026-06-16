import dbConnect from "../lib/mongodb";
import Category from "../models/category.model";
import "../models/image.model";

// CREATE PRODUCT //
type CreateCategoryData = {
  name: string;
  image: string;
};

// CREATE CATEGORY
export async function createCategory({ name, image }: CreateCategoryData) {
  await dbConnect();

  return Category.create({
    name,
    image,
  });
}

// GET CATEGORIES //
export async function getCategories() {
  await dbConnect();
  const categories = await Category.find().populate("image").lean();

  return categories.map((category) => ({
    _id: category._id.toString(),
    name: category.name,
    image: category.image,
  }));
}
