import dbConnect from "../lib/mongodb";
import { Newsletter } from "../models/newsletter.model";

type Email = {
  email: string;
};

export async function addToNewsletter({ email }: Email) {
  await dbConnect();

  const existingEmail = await Newsletter.findOne({ email });

  if (existingEmail) {
    throw new Error("Email is already taken!");
  }

  return Newsletter.create({ email });
}
