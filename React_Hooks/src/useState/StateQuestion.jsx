import React, { useState } from "react";

const StateQuestion = () => {
  const [Province, setProvince] = useState("");
  const [City, setCities] = useState("");
  const data = [
    { province: "bagmati", cities: ["banepa", "bhaktapur", "Kathmandu"] },
    { province: "gandaki", cities: ["pokhara", "gorkha"] },
  ];
  const province = data.map((location) => location.province);
  const selectedProvince = data.find(
    (location) => location.province === Province
  );
  const citiesList = selectedProvince ? selectedProvince.cities : [];
  return (
    <div>
      <Provinces
        provinces={province}
        setProvince={setProvince}
        setCities={setCities}
      />
      <br />
      <br />

      <Cities cities={citiesList} setCities={setCities} />
    </div>
  );
};
const Provinces = ({ provinces = [], setProvince, setCities }) => (
  <select
    onChange={(e) => {
      setProvince(e.target.value);
      if (e.target.value === "") setCities("");
    }}
    defaultValue={""}
  >
    <option value="">Select Province</option>
    {provinces.map((location) => (
      <option key={location} value={location}>
        {location}
      </option>
    ))}
  </select>
);

const Cities = ({ cities = [], setCities }) => (
  <select
    onChange={(e) => setCities(e.target.value)}
    defaultValue={""}
    disabled={!cities.length}
  >
    <option value="">Select Cities</option>
    {cities.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
    {/* {province ? (
        <select>
          <option value="">Select Cities</option>
        </select>
      ) : (
        ""
      )} */}
  </select>
);
export default StateQuestion;
