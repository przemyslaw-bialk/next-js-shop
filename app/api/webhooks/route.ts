import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";
import { createOrUpdateUser, deleteUser } from "../../services/user.service";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    console.log("Webhook payload:", evt.data);
    if (evt.type === "user.created" || evt.type === "user.updated") {
      console.log("user created:", evt.data);

      const { id, first_name, last_name, email_addresses } = evt?.data;

      if (!id || !first_name || !last_name || !email_addresses) {
        return new Response("Invalid data", { status: 400 });
      }

      try {
        await createOrUpdateUser(id, first_name, last_name, email_addresses);
        return new Response("user create or updated", { status: 200 });
      } catch (err) {
        console.log(err);
        return new Response("error occured :(", {
          status: 400,
        });
      }
    }
    if (evt.type === "user.deleted") {
      console.log("user deleted!");

      const { id } = evt?.data;

      if (!id) {
        return new Response("invalid id", { status: 200 });
      }
      try {
        await deleteUser(id);
        return new Response("user deleted", { status: 200 });
      } catch (err) {
        console.log(err);
        return new Response("error while deleting", {
          status: 400,
        });
      }
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
