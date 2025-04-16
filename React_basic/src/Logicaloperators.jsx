import React from "react";

const Logicaloperators = ({ cars }) => {
  return <div>{cars.length && <div>I have {cars.length} cars</div>}</div>;
};

export default Logicaloperators;

// logical operators fail when the value is 0 , null m undefined, ""
//Protypes can be used for above logical operator;
// mostly always use ternary operator

//rafce for snippet
