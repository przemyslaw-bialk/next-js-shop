import dbConnect from "../lib/mongodb";
import User from "../models/user.model";

export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  email_addresses,
) => {
  try {
    await dbConnect();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          email: email_addresses[0].email_address,
        },
      },
      { new: true, upsert: true },
    );

    return user;
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (id) => {
  try {
    await dbConnect();
    await User.findOneAndDelete({ clerkId: id });
  } catch (err) {
    console.log("error while deleting user :(", err);
  }
};
