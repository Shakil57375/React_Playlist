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
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleUppercase}>make it uppercase</button>
    </div>
  );
};

export default UseStateTwo;
