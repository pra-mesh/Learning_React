import axios from "axios";

const fetchProducts = async () => {
  const { data } = await axios.get("https://dummyjson.com/products?limit=1");
  console.log(data);
};
fetchProducts();
