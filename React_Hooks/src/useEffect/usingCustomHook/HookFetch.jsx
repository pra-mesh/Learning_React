import React from "react";
import useFetch from "./useFetch";

const HookFetch = () => {
  const { isLoading, error, result, setSearch } = useFetch({
    url: "https://dummyjson.com/recipes/search?q=",
  });
  return (
    <div>
      <input
        placeholder="Search by Recipe Name"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      {isLoading && <>Loading...</>}
      {!isLoading && error && <>Error Loading</>}
      {!isLoading && !error && (
        <ol>
          {result.length > 0
            ? result.map((recipes, idx) => {
                return <li key={idx}>{recipes?.name}</li>;
              })
            : "NO Recipes found"}
        </ol>
      )}
    </div>
  );
};

export default HookFetch;
