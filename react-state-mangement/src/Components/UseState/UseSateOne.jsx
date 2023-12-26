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
        <button className="btn btn-success" onClick={IncrementCounter}>Increment</button>
        <p>{count}</p>
        <button className="btn btn-secondary" onClick={DecrementCounter}>Decrement</button>
    </div>
  )
}

export default UseSateOne