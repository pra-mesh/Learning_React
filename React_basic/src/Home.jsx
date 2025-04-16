const Home = () => {
  //js Logic
  const submit = () => {
    console.log("Hello world");
  };
  //After return HTML
  return (
    <>
      Hello World
      <button onClick={submit}>Submit</button>
    </>
  ); //React Fragment (no Type no design; it is not HTML Element)
};

export default Home;
