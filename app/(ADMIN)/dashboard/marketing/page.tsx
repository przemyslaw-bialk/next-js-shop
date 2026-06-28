import { getNewsletterSubscribers } from "@/app/services/newsletter.service";
import NewsletterList from "../../components/NewsletterList";

const MarketingPage = async () => {
  const emails = await getNewsletterSubscribers();

  console.log(emails);

  return (
    <div>
      <h2>marketing page</h2>
      <NewsletterList emails={emails} />
    </div>
  );
};

export default MarketingPage;
