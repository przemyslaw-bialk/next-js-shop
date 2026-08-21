import ContactHeader from "./ContacHeader";
import ContactForm from "./ContactForm";

const ContactWrapper = () => {
  return (
    <div className="flex">
      <ContactHeader />
      <ContactForm />
    </div>
  );
};

export default ContactWrapper;
