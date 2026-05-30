"use client";
const Error = ({ error }: { error: Error }) => {
  return (
    <div>
      <h1 className="text-red-500 uppercase">something went wrong!</h1>
      <p>
        <span className="font-bold">message error:</span> {error.message}
      </p>
    </div>
  );
};

export default Error;
