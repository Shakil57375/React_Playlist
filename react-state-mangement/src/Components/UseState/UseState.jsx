import { useState } from "react";

const UseState = () => {
  const name = "Shakil";
  const [myName, setMyName] = useState("hlw");
  const [age , setAge] = useState(23)
  const handleAddName = () => {
    setMyName(name);
    setAge(21)
  };
  return (
    <div>
      <div>{myName} is {age} </div>
      <button style={{backgroundColor : "blueviolet", padding : "10px 15px"}} onClick={handleAddName}> add Name</button>
    </div>
  );
};

export default UseState;
