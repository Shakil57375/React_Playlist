/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

const Names = ({ names }) => {
  const [fdName, setNames] = useState(names);
  console.log(fdName);
  return (
    <div className="card">
      {fdName.map((name) => (
        <li key={name}>{name}</li>
      ))}
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
    <div className="card">
      <button onClick={IncreaseCount}>count is {count}</button>
    </div>
  );
}

function App() {
  const names = ["saif", "javed", "faisal"];
  return (
    <div className="card">
      <Counter value={3} />
      <Names names={names} />
    </div>
  );
}

export default App;
