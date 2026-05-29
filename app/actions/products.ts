"use server";
import { revalidatePath } from "next/cache";
import { createProduct } from "../services/product.services";

export async function createProductAction(formData: FormData) {
  const name = formData.get("name");

  if (typeof name !== "string" || !name) {
    throw new Error("invalid product name");
  }

  await createProduct(name);

  revalidatePath("/dashboard/products");
}
