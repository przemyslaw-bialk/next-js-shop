"use server";

import { revalidatePath } from "next/cache";
import { createCategory } from "../services/category.service";

export async function createCategoryAction(formData: FormData) {
  const category_name = formData.get("category_name");

  if (typeof category_name !== "string" || !category_name) {
    throw new Error("invalid product category");
  }

  await createCategory(category_name);

  revalidatePath("/dashboard/categories/new");
}
