import { useState } from "react"

const UseSateOne = () => {
    const [count, setCount] = useState(5)
    function IncrementCounter  () {
        setCount(previous => previous + 1)
    }

    function DecrementCounter  () {
        setCount(previous => previous - 1)
    } 
  return (
    <div>
        <button onClick={IncrementCounter}>Increment</button>
        <p>{count}</p>
        <button onClick={DecrementCounter}>Decrement</button>
    </div>
  )
}

export default UseSateOne