import { sendMessageFromUserAction } from "@/app/actions/message";

const ContactForm = () => {
  return (
    <form action={sendMessageFromUserAction}>
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="your mail" name="email" />
      <label htmlFor="subject">Subject</label>
      <input type="text" placeholder="enter the subject" name="subject" />
      <label htmlFor="message">Message</label>
      <textarea placeholder="write a message..." name="message"></textarea>
      <button className="bg-neutral-800 text-white">send message</button>
    </form>
  );
};

export default ContactForm;
