"use server";

import { revalidatePath } from "next/cache";
import { deleteImage } from "../services/image.service";

export async function deleteImageAction(id: string) {
  await deleteImage(id);

  revalidatePath("/dashboard/images");
}
