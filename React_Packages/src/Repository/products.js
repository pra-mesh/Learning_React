import { axiosInstance } from "../utils/axios";

export const fetchProducts = async ({ controller, limit =1}) => {
  const {
    data: { products = [] },
  } = await axiosInstance.get(`/products?limit=${limit}`, {
    signal: controller,
  });
  return products;
};
