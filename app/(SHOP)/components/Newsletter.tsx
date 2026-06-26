import { addToNewsletterAction } from "@/app/actions/newsletter";

const Newsletter = () => {
  return (
    <div className="bg-[#F8F8F8] mt-6 p-6 rounded-2xl flex items-center justify-between gap-4 flex-col md:flex-row">
      <div>
        <h2 className="font-semibold text-2xl">Sign up for Newsletter</h2>
        <p className="text-neutral-600">dont miss news and promotions!</p>
      </div>
      <form
        className="flex items-center justify-center"
        action={addToNewsletterAction}
      >
        <input
          type="email"
          name="email"
          placeholder="Your email address"
          className="bg-white text-xs p-2 block shadow-xs md:min-w-xs outline-accent tracking-widest "
        />
        <button className="bg-primary text-secondary px-8 py-3 rounded-sm w-fit text-xs">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
