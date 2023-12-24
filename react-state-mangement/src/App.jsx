import { useState } from "react";
import "./App.css";
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
  return (
    <div className="card">
      <Counter value={3} />
      <Counter value={0} />
    </div>
  );
}

export default App;
