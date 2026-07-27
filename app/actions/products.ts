"use server";
import { revalidatePath } from "next/cache";
import {
  createProduct,
  deleteProduct,
  findProduct,
  findProductById,
} from "../services/product.services";
import { Product } from "../types/products";

export async function createProductAction(formData: FormData) {
  const name = formData.get("name");
  const stock = Number(formData.get("stock"));
  const price = Number(formData.get("price"));
  const category = formData.get("category");
  const image = formData.get("image");

  if (!category || typeof category !== "string") {
    throw new Error("invalid category");
  }
  if (typeof image !== "string") {
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

  await createProduct(name, stock, price, category, image);

  revalidatePath("/dashboard/products");
}

export async function deleteProductAction(id: string) {
  if (typeof id !== "string" || !id) {
    throw new Error("couldn't delete the product");
  }

  await deleteProduct(id);
  revalidatePath("/dashboard/products");
}

export async function findProductAction(name: string) {
  const products = await findProduct(name);
  return JSON.parse(JSON.stringify(products));
}

export async function findProductByIdAction(
  id: string,
): Promise<Product | null> {
  return await findProductById(id);
}
