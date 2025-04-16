import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const APIFetchReceipes = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const fetchRecipies = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://dummyjson.com/recipes/search?q=${search}`,
          {
            signal: controller.signal,
          }
        );
        const { recipes = [] } = await res.json();
        setRecipeData(recipes);
      } catch (e) {
        if (!e.toString().includes("AbortError")) setError(e.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchRecipies();
    return () => controller.abort();
  }, [search]);
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
          {recipeData.length > 0
            ? recipeData.map((recipes, idx) => {
                return <li key={idx}>{recipes?.name}</li>;
              })
            : "NO Recipes found"}
        </ol>
      )}
    </div>
  );
};

export default APIFetchReceipes;
