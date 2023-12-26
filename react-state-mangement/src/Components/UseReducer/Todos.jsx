/* eslint-disable react/prop-types */
import { Actions } from "./TodoListWithArrayReducer";
const Todos = ({ todos, dispatch }) => {
  return (
    <div>
      <div>
        <p className={`${todos.complete ? "text-green-500" : "text-red-600"}`}>
          {todos.name}
        </p>
      </div>
      <button
        onClick={() =>
          dispatch({ type: Actions.TOGGLE_TODO, payLoad: { id: todos.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: Actions.DELETE_TODO, payLoad: { id: todos.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todos;
