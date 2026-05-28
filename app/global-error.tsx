"use client";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const GlobalError = ({ error, reset }: GlobalErrorProps) => {
  return (
    <html>
      <body>
        <main>
          <h1>Something went wrong!</h1>

          <p>{error.message}</p>

          <button onClick={() => reset()}>Try again</button>
        </main>
      </body>
    </html>
  );
};
export default GlobalError;
