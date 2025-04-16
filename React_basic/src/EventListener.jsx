const EventListener = () => {
  //JS
  const drinks = ["coffee", "tea", "milk"];
  const genders = ["male", "female", "other"];
  const passwordChange = () => {
    alert(`${document.getElementById("password").value}`);
    console.log("test");
  };
  const updateResult = () => {
    const selected = drinks.filter(
      (drink) => document.getElementById(`chk${drink}`).checked
    );
    alert(selected.length ? selected : "None");
  };
  const genderSelected = () => {
    const genderRadio = document.querySelector('input[name="gender"]:checked');
    alert(genderRadio.value);
  };
  const dateChanged = (e) => {
    alert(e.target.value);
  };
  //HTML
  return (
    <>
      <input type="password" id="password" onChange={passwordChange}></input>
      <hr />
      <label for="drinks">Which Drink do you prefer?</label>
      {drinks.map((drink) => (
        <div>
          <input type="checkbox" id={`chk${drink}`} onChange={updateResult} />
          <label for={`chk${drink}`}>
            {drink.charAt(0).toUpperCase() + drink.slice(1)}
          </label>
        </div>
      ))}
      <hr />
      <label for="gender">Gender</label>
      {genders.map((gender) => (
        <div>
          <input
            type="radio"
            id={`r${gender}`}
            value={`${gender}`}
            name="gender"
            onChange={genderSelected}
            defaultChecked={gender === "male"}
          />
          <label for={`r${gender}`}>
            {gender.charAt(0).toUpperCase() + gender.slice(1)}
          </label>
        </div>
      ))}
      <hr />
      <input
        type="date"
        defaultValue={new Date().toISOString().split("T")[0]}
        onChange={(e) => dateChanged(e)}
      />
    </>
  );
};

export default EventListener;
