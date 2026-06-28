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
      <h1>List of subscribers:</h1>
      <ul>
        {emails.map((item) => (
          <li key={item._id}>{item.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsletterList;
