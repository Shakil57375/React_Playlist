import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const Increment = () => {
    dispatch({ type: "increment" });
  };
  const Decrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div className="flex gap-5 items-center">
      <button className="btn btn-primary" onClick={Increment}>
        +
      </button>
      <span>{state.count}</span>
      <button className="btn btn-accent" onClick={Decrement}>
        -
      </button>
    </div>
  );
};

export default UseReducer;
