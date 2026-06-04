"use server";

import { revalidatePath } from "next/cache";
import { createCategory } from "../services/category.service";

export async function createCategoryAction(formData: FormData) {
  const name = formData.get("name");

  if (typeof name !== "string" || !name) {
    throw new Error("invalid product category");
  }

  await createCategory(name);

  revalidatePath("/dashboard/categories/new");
}
