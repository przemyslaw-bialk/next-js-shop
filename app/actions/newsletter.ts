"use server";

import { revalidatePath } from "next/cache";
import {
  addToNewsletter,
  deleteFromNewsletter,
} from "../services/newsletter.service";

export async function addToNewsletterAction(formData: FormData) {
  const email = formData.get("email");

  if (!email || typeof email !== "string") {
    throw new Error("invalid email");
  }

  await addToNewsletter({ email });
}

export async function deleteFromNewsletterAction(id: string) {
  await deleteFromNewsletter(id);
  revalidatePath("/dashboard/marketing");
}
