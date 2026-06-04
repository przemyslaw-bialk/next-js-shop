"use server";
import { revalidatePath } from "next/cache";
import { createProduct, deleteProduct } from "../services/product.services";

export async function createProductAction(formData: FormData) {
  const name = formData.get("name");
  const stock = Number(formData.get("stock"));
  const price = Number(formData.get("price"));
  const category = formData.get("category");

  if (!category || typeof category !== "string") {
    throw new Error("invalid category");
  }

  if (typeof name !== "string" || !name) {
    throw new Error("invalid product name");
  }

  if (Number.isNaN(stock)) {
    throw new Error("invalid stock");
  }

  if (Number.isNaN(price)) {
    throw new Error("invalid price");
  }

  await createProduct(name, stock, price, category);

  revalidatePath("/dashboard/products");
}

export async function deleteProductAction(id: string) {
  if (typeof id !== "string" || !id) {
    throw new Error("couldn't delete the product");
  }

  await deleteProduct(id);
  revalidatePath("/dashboard/products");
}
