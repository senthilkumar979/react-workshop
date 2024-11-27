import { useContext } from "react";
import { TestContext } from "./context-parent";

export const ContextChild = () => {
  const { value, setValue } = useContext(TestContext);
  return (
    <div>
      <p>Context Value is {value}</p>

      <button onClick={() => setValue("World")}>Change Value</button>
    </div>
  );
};
