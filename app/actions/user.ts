import dbConnect from "../lib/mongodb";
import User from "../models/user.model";
import { UserRole } from "../types/user";
let role: UserRole = "user";
export const createOrUpdateUser = async (
  id: string,
  first_name: string,
  last_name: string,
  email_addresses: { email_address: string }[],
) => {
  await dbConnect();
  try {
    // creating admin role
    const admin_email = email_addresses[0].email_address;
    if (admin_email === process.env.ADMIN_MAIL) {
      role = "admin";
    } else {
      role = "user";
    }

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          email: email_addresses[0].email_address,
          role: role,
        },
      },
      { new: true, upsert: true },
    );

    return user;
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (id: string) => {
  await dbConnect();
  try {
    await User.findOneAndDelete({ clerkId: id });
  } catch (err) {
    console.log("error while deleting user :(", err);
  }
};

export const authorizeAdmin = async (id: string) => {
  await dbConnect();
  try {
    const user = await User.findOne({ clerkId: id });

    if (!user || user.role !== "admin") {
      return null;
    }
    return user;
  } catch (err) {
    console.log("couldnt authorize admin", err);
  }
};
