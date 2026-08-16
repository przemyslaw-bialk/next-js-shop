"use server";

import { sendMessageFromUser } from "../services/message.service";

export async function sendMessageFromUserAction(formData: FormData) {
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  await sendMessageFromUser(email, subject, message);
}
