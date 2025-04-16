import React from "react";
import "./css/product.css";
const Products = ({ products = [] }) => {
  console.log(products);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product?.id}>
                <td>{product?.title}</td>
                <td>{product?.price}</td>
                <td>{product?.category}</td>
                <td>{product?.stock}</td>
                <td>
                  <button>Edit</button>
                  <i className="bi bi-edit"></i>
                </td>
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
};

export default Products;
