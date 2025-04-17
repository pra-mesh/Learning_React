import React, { useState } from "react";

const Provinces = ({ provinces = [], onSelect }) => {
  return (
    <div>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select Provinces</option>
        {provinces.map((location) => (
          <option key={location}>{location}</option>
        ))}
      </select>
    </div>
  );
};

const Cities = ({ cities = [], onSelect }) => {
  return (
    <div>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option>Select city</option>
        {cities.map((city) => (
          <option>{city}</option>
        ))}
      </select>
    </div>
  );
};

const StateQuestions = () => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  const data = [
    { province: "bagmati", cities: ["banepa", "bhaktapur", "bharatpur"] },

    { province: "gandaki", cities: ["Pokhara", "Gorkha Bazar"] },
  ];

  const provinces = data.map((location) => location.province);
  const cities =
    data.find((location) => location.province === province).cities ?? [];

  return (
    <>
      <h1>Select Province to select city</h1>
      <div style={{ display: "flex", gap: "1 rem" }}>
        <Provinces provinces={provinces} onSelect={setProvince} />
        <Cities cities={cities} onSelect={setCity} />
        <div>Address is : {`${province}-${city}`}</div>
      </div>
    </>
  );
};

export default StateQuestions;
