import { useState, useTransition } from "react";

const FetchTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const handler = startTransition(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          setMsg("Form Submitted");
          resolve("succes");
        }, 3000);
      });
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input />
        <input />
        <input />
        <input />
        <button type="submit" disabled={isPending}>
          Submit
        </button>
      </form>
      {msg ?? <div>{msg} </div>}
    </div>
  );
};

export default FetchTransition;
