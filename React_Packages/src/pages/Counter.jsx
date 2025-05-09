import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../slices/counterSlice";
import { productList, setLimit } from "../slices/productSlice";
import { useCallback, useEffect } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const { products, limit, loading, error } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();
  const fetchProducts = useCallback(() => {
    dispatch(productList({ limit }));
  }, [limit, dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <div>
        Count is {count} <br />
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <br />
        <input
          placeholder="Enter a Number"
          type="number"
          defaultValue={0}
          onChange={(e) => dispatch(incrementByAmount(+e.target.value))}
        />
      </div>
      <div>
        Products are as follows <br />
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        <ol>
          {products.length > 0 &&
            products.map((p, id) => {
              return <li key={id}>{p?.title}</li>;
            })}
        </ol>
        <select
          value={limit}
          onChange={(e) => dispatch(setLimit(+e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
    </>
  );
};

export default Counter;
