"use server";

import { revalidatePath } from "next/cache";
import { createCategory } from "../services/category.service";

export async function createCategoryAction(formData: FormData) {
  const name = formData.get("name");
  const image = formData.get("image") as string;

  if (typeof name !== "string" || !name) {
    throw new Error("invalid product category");
  }

  await createCategory({ name, image });

  revalidatePath("/dashboard/categories/new");
}
