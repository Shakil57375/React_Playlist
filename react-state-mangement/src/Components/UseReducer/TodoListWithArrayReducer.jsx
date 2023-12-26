import { useReducer, useState } from "react";
import Todos from "./Todos";
export const Actions = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
};
const reducer = (todos, action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [...todos, newTodo(action.payLoad.name)];
    case Actions.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payLoad.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case Actions.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payLoad.id);
    default:
      return todos;
  }
};

const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};

const TodoListWithArrayReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  console.log(name);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: Actions.ADD_TODO, payLoad: { name: name } });
    setName("");
  };
  console.log(todos);
  return (
    <div>
        <p className="text-green-600 text-center">todo list</p>
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Add Todos"
        className="input input-bordered input-success w-full max-w-xs"
        onChange={(e) => setName(e.target.value)}
      />
      {todos.map((todo) => (
        <Todos key={todo.id} todos={todo} dispatch={dispatch} />
      ))}
    </form>
    </div>
  );
};

export default TodoListWithArrayReducer;
