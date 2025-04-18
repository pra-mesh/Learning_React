import { useRef } from "react";
// const forRef ="";

const RefHook = () => {
  //   const emailRef = useRef(null);
  //   const passwordRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const email = emailRef.current.value;
    // const password = passwordRef.current.value;
    const rawFormData = formRef.current;
    const formData = new FormData(rawFormData);
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

  };
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        {/* <input ref={emailRef} />
        <input ref={passwordRef} /> */}
        <input name="email" />
        <input name="password" />
        <button type="submit">Sumbit</button>
      </form>
    </div>
  );
};

export default RefHook;
