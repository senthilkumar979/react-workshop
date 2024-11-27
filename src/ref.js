import { useRef } from "react";

export const Ref = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.value = "Hello";
    inputRef.current.style.backgroundColor = "green";
    setTimeout(() => {
      inputRef.current.blur();
      inputRef.current.style.backgroundColor = "white";
    }, 2000);
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};
