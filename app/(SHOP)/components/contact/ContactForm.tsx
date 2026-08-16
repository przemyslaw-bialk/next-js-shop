"use client";
import {
  MessageActionState,
  sendMessageFromUserAction,
} from "@/app/actions/message";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

const initialState: MessageActionState = {
  status: null,
};

const ContactForm = () => {
  const [state, action, isPending] = useActionState(
    sendMessageFromUserAction,
    initialState,
  );

  useEffect(() => {
    if (state.status === "success") {
      toast.success("message sent");
    }
    if (state.status === "error") {
      toast.error("please fill in all the fields");
    }
  }, [state.status]);

  return (
    <form action={action}>
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="your mail" name="email" />
      <label htmlFor="subject">Subject</label>
      <input type="text" placeholder="enter the subject" name="subject" />
      <label htmlFor="message">Message</label>
      <textarea placeholder="write a message..." name="message"></textarea>
      <button className="bg-neutral-800 text-white">
        {isPending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
};

export default ContactForm;
