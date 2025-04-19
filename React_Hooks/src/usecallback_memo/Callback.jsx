import { useState, useCallback, memo } from "react";
const Parent = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const increment = () => {
    setCount((c) => c + 1);
  };
  const memoizedAddTodo = useCallback(() => {
    setTodos((prev) => [...prev, `I am ToDo no ${prev.length}`]);
  }, []);
  return (
    <div>
      <Child todos={todos} addTodo={memoizedAddTodo} />
      <hr />
      <p>Current Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};
const Child = memo(({ todos, addTodo }) => {
  console.log("child is rerender");
  return (
    <div>
      <p>{todos}</p>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
});
const Callback = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default Callback;
