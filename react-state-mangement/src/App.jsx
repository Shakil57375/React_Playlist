/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import UseState from "./Components/UseState/UseState";

function Names({ names }) {
  console.log(names);
  const [fr, setFr] = useState(names);
  const [newFd, setNewFd] = useState("");
  console.log(newFd);
  const AddFriend = () => {
    setFr([...fr, newFd]);
    setNewFd("");
  };
  return (
    <div>
      {fr.map((name) => (
        <ul key={name}>
          <li>{name}</li>
        </ul>
      ))}
      <input
        type="text"
        value={newFd}
        onChange={(e) => setNewFd(e.target.value)}
      />
      <button
        style={{ backgroundColor: "red", padding: "8px 16px" }}
        onClick={AddFriend}
      >
        Add Frd
      </button>
    </div>
  );
}

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
      <UseState />
    </div>
  );
}

export default App;
