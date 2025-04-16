import React, { useState } from "react";

const State = ({ color = "yellow" }) => {
  const [colors, setColors] = useState(color);
  const [user, setUser] = useState("user");
  const [student, setStudent] = useState({
    name: "Pramesh Pradhan",
    roll: "11",
    batch: 2011,
  });
  const [rowValue, setValue] = useState([1, 2, 3, 4]);
  return (
    <>
      {/* Level 0 */}
      Current color is {colors}
      <button onClick={() => setColors("black")}>Change Color</button>
      <br />
      Current User is {user}
      <button onClick={() => setUser("Pramesh")}> Get User</button>
      <hr />
      {/* Level 2 */}
      <input
        placeholder="Input your choice of color"
        onChange={(event) => setColors(event.target.value)}
      />
      <hr />
      <input
        placeholder="Current User"
        onChange={(e) => setUser(e.target.value)}
      />
      {/* Level 2 */}
      <hr />
      Student Data
      <br />
      Name: {student?.name} <br />
      Roll: {student?.roll} <br />
      Batch: {student?.batch}
      <br />
      <input
        placeholder="Roll Number"
        onChange={(e) => {
          setStudent((prevValue) => {
            return { ...prevValue, roll: e.target.value };
          });
        }}
      />
      <br />
      <input
        placeholder="batch"
        onChange={(e) => {
          setStudent((prevValue) => getValue(e, prevValue));
        }}
      />
      <hr />

      <select>
        <option value={""}>Default Value</option>
        {rowValue.map((v, idx) => (
          <option key={idx} value={v}>
            {v}
          </option>
        ))}
      </select>
      <br />
      
      <input
        type="Number"
        placeholder="Add by"
        onMouseOut={(e) => {
          setValue((prevValue) => {
            const newArray = [...prevValue];
            newArray[1] = newArray[1] + +e.target.value;
            return newArray;
            // return [...prevValue, (prevValue[1] = prevValue[1] + +e.target.value)]; creates mutation adding extra value
          });
        }}
      />
      
    </>
  );
};
const getValue = (e, prevValue) => {
  if (e.target.value === "") return { ...prevValue, batch: 2012 };
  return { ...prevValue, batch: e.target.value };
};

export default State;
