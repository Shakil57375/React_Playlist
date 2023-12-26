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
    default:
      return {
        count: state,
      };
  }
};

const PracticeUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const Increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };
  const Decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };
  return (
    <div className="flex items-center gap-5">
      <button className="btn btn-success" onClick={Increment}> + </button>
      <p className="text-2xl font-bold"> {state.count} </p>
      <button className="btn btn-info" onClick={Decrement}> - </button>
    </div>
  );
};

export default PracticeUseReducer;
