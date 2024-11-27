import { useState } from "react";

export const List = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const addItem = () => {
    setItems([...items, input]);
    setInput("");
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Enter item"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <br />
      <br />
      <br />
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <br />
    </div>
  );
};
