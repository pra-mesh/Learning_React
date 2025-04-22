import { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios";

const Home = () => {
  const [data, setData] = useState([]);
  const fetchProducts = async (controller) => {
    const {
      data: { products = [] },
    } = await axiosInstance.get("/products?limit=1", {
      signal: controller.signal,
    });
    return products;
  };
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      const data = await fetchProducts(controller);
      setData(data);
    };
    fetchData();
    return () => controller.abort();
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default Home;
