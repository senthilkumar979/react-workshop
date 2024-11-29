import { createContext, useState } from "react";
import { ContextChild } from "./context-child";
import { ContextChild2 } from "./context-child2";

export const TestContext = createContext();

export const ContextParent = () => {
  const [value, setValue] = useState("Hello");
  
  return (
    <TestContext.Provider value={{ value, setValue }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <ContextChild />
        <ContextChild2 />
      </div>
    </TestContext.Provider>
  );
};
