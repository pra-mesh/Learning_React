import React, { useState } from "react";
import { useDebounce } from "./useDebounce";

const Debounce = () => {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 5000);
  return (
    <div>
      Debounce: {debouncedValue}
      <input onChange={(e) => setSearch(e.target.value)}></input>
    </div>
  );
};

export default Debounce;
