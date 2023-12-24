/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

const Names = ({ names }) => {
  const [fdName, setFdNames] = useState(names);
  const [name , setName] = useState("")
  console.log(name)
  const  AddItem = () =>{
    setFdNames([...fdName, name]);
    setName("")
  }
  return (
    <div>
      {fdName.map((name) => (
        <li key={name}>{name}</li>
      ))}
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={AddItem}>add Item</button>
    </div>
  );
};

function Counter({ value }) {
  let initialValue = value;
  let [count, setCount] = useState(initialValue);
  const IncreaseCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={IncreaseCount}>count is {count}</button>
    </div>
  );
}

function App() {
  const names = ["saif", "javed", "faisal"];
  return (
    <div>
      <Names names={names} />
      <Counter value={3} />
    </div>
  );
}

export default App;
