import { useState } from "react";

const UseState = () => {
  const name = "Shakil";
  const [myName, setMyName] = useState("");
  const handleAddName = () => {
    setMyName(name);
  };
  return (
    <div>
      <div>{myName}</div>
      <button onClick={handleAddName}> add Name</button>
    </div>
  );
};

export default UseState;
