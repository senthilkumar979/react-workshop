import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useId,
} from "react";

export const Hooks = forwardRef((props, ref) => {
  const id = useId();
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <div>
      <h1>Hooks {id}</h1>
      <input {...props} ref={inputRef} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <br />
      <br />
      <h2>{count}</h2>
    </div>
  );
});
