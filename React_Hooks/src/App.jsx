import NoDependency from "./useEffect/NoDependency";
import HOC from "./HOC";
import State from "./State";
import StateQuestion from "./stateQuestion";
import UseEffect1 from "./useEffect/UseEffect1";
import UseEffect2 from "./useEffect/APIFetch";
import EmptyArray from "./useEffect/EmptyArray";
import APIFetchReceipes from "./useEffect/APIFetchReceipes";
import APIFetch from "./useEffect/APIFetch";

function App() {
  return (
    <>
      {/* <State color={"red"} />
      <hr />
      <StateQuestion /> */}
      <APIFetchReceipes />
      <hr />
      <APIFetch />
      {/* <hr />
      <UseEffect1 /> */}
      {/* <hr />
      <UseEffect2 /> */}
      {/* <hr />
      <HOC /> */}
    </>
  );
}

export default App;
