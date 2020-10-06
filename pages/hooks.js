import { useEffect, useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    console.log("welcome!");
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onClick}>+1</button>
      <input onChange={onChange} value={value} />
    </>
  );
};

export default Hooks;
