import NoDependency from "./useEffect/NoDependency";
import HOC from "./HOC";
import State from "./useState/State";
import StateQuestion from "./useState/StateQuestion";
import UseEffect1 from "./useEffect/UseEffect1";
import UseEffect2 from "./useEffect/APIFetch";
import EmptyArray from "./useEffect/EmptyArray";
import APIFetchReceipes from "./useEffect/APIFetchReceipes";
import APIFetch from "./useEffect/APIFetch";
import HookFetch from "./useEffect/usingCustomHook/HookFetch";
import Debounce from "./useEffect/debounced/Debounce";
import SalesCountDown from "./useEffect/SalesCountDown";
import User from "./User";
import Theme from "./Theme";
import { ThemeContextProvidr } from "./contexts/ThemeContext";
import RefHook from "./useRef/RefHook";
import Transition from "./useTransition hook/Transition";
import FetchTransition from "./useTransition hook/FetchTransition";
import Callback from "./usecallback_memo/Callback";

function App() {
  return (
    <>
      {/* <State color={"red"} />
      <hr />
      <StateQuestion /> */}
      {/* <APIFetchReceipes />
      <hr />
      <APIFetch /> */}
      {/* <AuthContextProvider> */}
      <User />
      {/* </AuthContextProvider> */}
      {/* <SalesCountDown /> */}
      <hr />
      {/* <Debounce /> */}
      {/* <hr />
      <UseEffect1 /> */}
      {/* <hr />
      <UseEffect2 /> */}
      {/* <hr />
      <HOC /> */}

      {/* <ThemeContextProvidr>
        <Theme />
      </ThemeContextProvidr> */}
      {/* <RefHook /> */}
      {/* <Transition /> */}
      {/* <FetchTransition /> */}
      <Callback />
    </>
  );
}

export default App;
