import { useContext } from "react";
import { TestContext } from "./context-parent";

export const ContextChild2 = () => {
  const { value } = useContext(TestContext);
  return (
    <div>
      <p>Context Child 2 {value}</p>
    </div>
  );
};
