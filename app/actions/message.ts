"use server";
import { sendMessageFromUser } from "../services/message.service";

export type MessageActionState = {
  status: "success" | "error" | null;
};
export async function sendMessageFromUserAction(
  prevState: MessageActionState,
  formData: FormData,
): Promise<MessageActionState> {
  try {
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!email || !subject || !message) {
      return {
        status: "error",
      };
    }

    await sendMessageFromUser(email, subject, message);

    return {
      status: "success",
    };
  } catch (err) {
    console.error(err);

    return {
      status: "error",
    };
  }
}
