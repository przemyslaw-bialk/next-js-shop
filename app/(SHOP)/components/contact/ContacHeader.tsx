import ContactIcons from "./ContactIcons";

const ContactHeader = () => {
  return (
    <div>
      <span className="text-accent uppercase tracking-wider">contact</span>
      <h3 className="text-4xl font-semibold tracking-tight">
        get in touch <br />
        with us
      </h3>
      <p className="text-sm text-neutral-600">
        Do you have any questions related to order, products or are you looking
        for a cooperation? Let us know, we will respond as soon as possible.
      </p>
      <ContactIcons />
    </div>
  );
};

export default ContactHeader;
