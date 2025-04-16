import React, { useState, useEffect } from "react";
import "../assets/css/table.css";
const APIFetch = () => {
  const [webstiteData, setWebsiteData] = useState([]);
  const [search, setSearchData] = useState("");
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );
      const { products = [] } = await response.json();
      setWebsiteData(products);
    };
    fetchProduct();
  }, [search]);
  return (
    <div>
      <input
        placeholder="Search Product"
        onChange={(e) => setSearchData(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {webstiteData.length > 0 ? (
            webstiteData.map((product) => (
              <tr key={product?.id}>
                <td>{product?.title}</td>
                <td>{product?.price}</td>
                <td>{product?.category}</td>
                <td>{product?.stock}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>data not found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
  // Todo write the api in Table;
};

export default APIFetch;
