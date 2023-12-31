import { useState } from "react";

const UseStateTwo = () => {
  const [message, setMessage] = useState("");
  const handleUppercase = () => {
    const uppercaseText = message.toUpperCase();
    setMessage(uppercaseText);
  };
  console.log(message);
  return (
    <div>
      <p>convert into uppercase</p>
      <input
        type="text"
        className="border-2 border-blue-600"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="btn btn-warning" onClick={handleUppercase}>make it uppercase</button>
    </div>
  );
};

export default UseStateTwo;
