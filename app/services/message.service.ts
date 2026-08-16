import dbConnect from "../lib/mongodb";
import Message from "../models/message.model";

export async function sendMessageFromUser(
  email: string,
  subject: string,
  message: string,
) {
  await dbConnect();

  if (!email || !subject || !message) return;

  return Message.create({
    email,
    subject,
    message,
  });
}
