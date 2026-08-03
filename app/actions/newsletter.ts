"use server";

import { revalidatePath } from "next/cache";
import {
  addToNewsletter,
  deleteFromNewsletter,
} from "../services/newsletter.service";

type NewsletterState = {
  success: boolean;
  message: string;
};

export async function addToNewsletterAction(
  prevState: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = formData.get("email");

  if (!email || typeof email !== "string") {
    return {
      success: false,
      message: "Invalid email",
    };
  }

  try {
    await addToNewsletter({ email });

    return {
      success: true,
      message: "You have been subscribed!",
    };
  } catch (err) {
    return {
      success: false,
      message: err instanceof Error ? err.message : "Something went wrong",
    };
  }
}

export async function deleteFromNewsletterAction(id: string) {
  await deleteFromNewsletter(id);
  revalidatePath("/dashboard/marketing");
}
