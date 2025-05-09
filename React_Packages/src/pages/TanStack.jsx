import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../Repository/products";

const TanStack = ({ limit = 1 }) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: ({ signal }) => fetchProducts({ controller: signal, limit }),
  });
  if (isError) return <span>{error}</span>;
  return <div>{isPending ? "Loading..." : JSON.stringify(data)}</div>;
};

export default TanStack;
