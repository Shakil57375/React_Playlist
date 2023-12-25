import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        count: state.count + 1,
      };
    case ACTIONS.DECREMENT:
      return {
        count: state.count - 1,
      };
    default: {
      return state;
    }
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const Increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const Decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
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
