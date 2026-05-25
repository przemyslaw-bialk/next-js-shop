import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";
import { createOrUpdateUser } from "../../actions/user";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;
    console.log(
      `Received webhook with ID ${id} and event type of ${eventType}`,
    );
    console.log("Webhook payload:", evt.data);
    if (evt.type === "user.created" || evt.type === "user.updated") {
      console.log("user created:", evt.data);

      const { id, first_name, last_name, email_addresses } = evt?.data;

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
      console.log("user deleted:", evt.data);
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
