const Time = ({ min = 0 }) => {
  //JS
  const minToSec = (min) => min * 60;
  const currentDateTime = () => alert(`Current Date is ${new Date()}`);
  const add = (a, b) => alert(a + b);
  const userValueAdd = () => {
    const num1 = +document.getElementById("num1").value;
    const num2 = +document.getElementById("num2").value;
    alert(num1 + num2);
  };
  const selectedValue = () => {
    alert(`selected value is ${+document.getElementById("number").value}`);
  };
  const selectDropDown = (e) => {
    alert(e.target.value);
  };
  //HTML
  return (
    <>
      <p>
        {min} min is eqaul to {minToSec(min)} seconds.
      </p>
      {/* Level 0 No variable is passed */}
      <button onClick={currentDateTime}>Alter</button>
      <br />
      {/* Level 1 hard coded variable is passed */}
      <button onClick={() => add(1, 2)}>Add</button>
      <hr />
      {/* Level 2 User defined coded variable is passed */}
      <input placeholder="Enter number 1" id="num1" />
      <input placeholder="Enter number 2" id="num2" />
      <button onClick={userValueAdd}>Add</button>
      <hr />
      <select
        id="number"
        defaultValue={"0"}
        name="number"
        onChange={selectedValue}
      >
        <option disabled value="0">
          (Select number)
        </option>
        <option value="1">One</option>
        <option value="2">two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
        <option value="5">Five</option>
        <option value="6">Six</option>
        <option value="7">Seven</option>
        <option value="8">Eight</option>
        <option value="9">Nine</option>
        <option value="10">Ten</option>
      </select>
      <hr />
      <select
        name="number"
        defaultValue={"0"}
        onChange={(e) => selectDropDown(e)}
      >
        <option disabled value="0">
          (Select number)
        </option>
        <option value="1">One</option>
        <option value="2">two</option>
        <option value="3">Three</option>
      </select>
    </>
  );
};
export default Time;
