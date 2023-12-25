import { useState } from "react";

const UseSateOne = ({ names }) => {
  const [fdNames, setFdNames] = useState(names);
  const [newFd, setNewFd] = useState("");
  console.log(newFd)
  const addFd = () => {
    setFdNames([...fdNames, newFd])
    setNewFd("")
  };
  return (
    <div>
      {fdNames.map((fdName) => (
        <ul key={fdName}>
          <li>{fdName}</li>
        </ul>
      ))}
      <input
        type="text"
        value={newFd}
        onChange={(e) => setNewFd(e.target.value)}
      />
      <button onClick={addFd}>add</button>
    </div>
  );
};

export default UseSateOne;
