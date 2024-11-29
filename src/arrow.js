import { useState } from "react";

export const useUpdateName = () => {
  const [name, setName] = useState("Senthil");

  return {
    name,
    setName: setName,
  };
};
