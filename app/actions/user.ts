import dbConnect from "../lib/mongodb";
import User from "../models/user.model";
import { UserRole } from "../types/user";

export const createOrUpdateUser = async (
  id: string,
  first_name: string,
  last_name: string,
  email_addresses: { email_address: string }[],
) => {
  try {
    await dbConnect();

    // creating admin role
    let role: UserRole = "user";
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
  try {
    await dbConnect();
    await User.findOneAndDelete({ clerkId: id });
  } catch (err) {
    console.log("error while deleting user :(", err);
  }
};
