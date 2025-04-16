//Higher ordre component is an advanced techinque for reusing component logic
// It is a basically a fuction that takes a component and returns a new component with additional props, logic or output(behaviour)
// It is generally used for
/*
1. Code reuse across components (theming+css framework, authentication)
2. Inject props
3. Conditional rendering
4. Wrapping third-party component
*/
import React from "react";

const MyComponent = ({ extraInfo, test }) => {
  return (
    <>
      {extraInfo}
      {test}
    </>
  );
};
const withExtraInfo = (WRAP_) => {
  return (props) => {
    const extraInfo = "I am extra info";
    return <WRAP_ {...props} extraInfo={extraInfo} test={extraInfo} />;
  };
};
const HOC = withExtraInfo(MyComponent);
export default HOC;
