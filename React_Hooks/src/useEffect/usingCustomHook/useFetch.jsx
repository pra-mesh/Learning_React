import React, { useState, useEffect } from "react";
import { useDebounce } from "../debounced/useDebounce";

const useFetch = ({ url }) => {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const debouncedValue = useDebounce(search, 2000);
  useEffect(() => {
    const controller = new AbortController();
    const fetchRecipies = async () => {
      try {
        setError(null);
        setLoading(true);
        const res = await fetch(`${url}${debouncedValue}`, {
          signal: controller.signal,
        });
        console.log(res);
        const { recipes = [] } = await res.json();
        console.log(recipes);
        setResult(recipes);
      } catch (e) {
        if (!e.toString().includes("AbortError")) setError(e.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchRecipies();
    return () => controller.abort();
  }, [url, debouncedValue]);
  return { result, isLoading, error, setSearch };
};

export default useFetch;
