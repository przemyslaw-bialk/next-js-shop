import RemoveFromNewsletter from "./RemoveFromNewsletter";

type Emails = {
  email: string;
  _id: string;
};

type EmailsProp = {
  emails: Emails[];
};
const NewsletterList = ({ emails }: EmailsProp) => {
  return (
    <div>
      <h1 className="font-semibold">List of subscribers:</h1>
      <ul>
        {emails.map((item) => (
          <li key={item._id} className="flex items-center justify-between mt-1">
            <span>{item.email}</span>
            <RemoveFromNewsletter id={item._id.toString()} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsletterList;
