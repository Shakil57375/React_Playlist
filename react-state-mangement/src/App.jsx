import { useState } from "react";
import "./App.css";
function App() {
  let [count, setCount] = useState(0);
  const IncreaseCount = () => {
    setCount(count + 1)
  };
  return (
    <div className="card">
      <button onClick={IncreaseCount}>count is {count}</button>
    </div>
  );
}

export default App;
