import { useState, useTransition } from "react";
const largeData = Array.from({ length: 100000 }, (_, i) => `Item ${i}`);
const Transition = () => {
  const [input, setInput] = useState("");
  const [filterdList, setFilteredList] = useState(largeData);
  const [isPending, startTransition] = useTransition();
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    setInput(value);
    startTransition(() => {
      const filtered = largeData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredList(filtered);
    });
  };

  return (
    <div>
      <input
        value={input}
        onChange={handleChange}
        placeholder="Search by items"
      />
      {isPending && <>loading...</>}

      <ul>
        {filterdList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Transition;
