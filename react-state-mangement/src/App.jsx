/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import UseState from "./Components/UseState/UseState";
import UseSateOne from "./Components/UseState/UseSateOne";
import UseStateTwo from "./Components/UseState/UseStateTwo";

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
        style={{ border: "1px solid green" }}
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
      <div>
        <p className="text-center text-5xl text-cyan-600 font-bold underline">use State</p>
      <div className="grid grid-cols-5 gap-3">
        <Names names={names} />
        <Counter value={3} />
        <UseState />
        <UseSateOne names={names} />
        <UseStateTwo />
      </div>
      </div>
    </div>
  );
}

export default App;
