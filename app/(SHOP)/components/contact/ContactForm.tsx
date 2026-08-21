"use client";

import {
  MessageActionState,
  sendMessageFromUserAction,
} from "@/app/actions/message";
import { useActionState, useEffect } from "react";
import { MdOutlineMail, MdSubject, MdSend } from "react-icons/md";
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
      toast.success("Message sent");
    }

    if (state.status === "error") {
      toast.error("Please fill in all the fields");
    }
  }, [state.status]);

  return (
    <form action={action} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium tracking-wider text-neutral-900"
        >
          E-mail address
        </label>

        <div className="flex items-center gap-3 rounded-xl border border-neutral-300 bg-neutral-50 px-4 transition-colors duration-200 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20">
          <MdOutlineMail className="shrink-0 text-xl text-accent" />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            className="h-12 text-sm text-neutral-900 outline-none placeholder:text-neutral-500"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="subject"
          className="text-sm font-medium tracking-wider text-neutral-900"
        >
          Subject
        </label>
        <div className="flex items-center gap-3 rounded-xl border border-neutral-300 bg-neutral-50 px-4 transition-colors duration-200 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20">
          <MdSubject className="shrink-0 text-xl text-accent" />
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Enter the subject"
            required
            className="h-12 w-full bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-500"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium tracking-wider text-neutral-900"
        >
          Message
        </label>

        <div className="rounded-xl border border-neutral-300 bg-neutral-50 px-4 py-3 transition-colors duration-200 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20">
          <textarea
            id="message"
            name="message"
            placeholder="Write a message..."
            required
            rows={6}
            className="min-w-md  text-sm text-neutral-900 outline-none placeholder:text-neutral-500"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="flex h-12 items-center justify-center gap-2 rounded-xl bg-accent px-6 font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <MdSend className="text-lg" />
        <span>{isPending ? "Sending..." : "Send message"}</span>
      </button>
    </form>
  );
};

export default ContactForm;
