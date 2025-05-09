import { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios";
import { useSelector } from "react-redux";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
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

  return (
    <div>
      <p>{count}</p>
      {JSON.stringify(data)}{" "}
    </div>
  );
};

export default Home;
