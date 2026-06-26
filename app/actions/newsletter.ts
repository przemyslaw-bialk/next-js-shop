"use server";

import { addToNewsletter } from "../services/newsletter.service";

export async function addToNewsletterAction(formData: FormData) {
  const email = formData.get("email");

  if (!email || typeof email !== "string") {
    throw new Error("invalid product category");
  }

  await addToNewsletter({ email });
}
