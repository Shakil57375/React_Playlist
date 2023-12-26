import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import UseStateExplained from "../Pages/UseStateExplained/UseStateExplained";
import UseReducerExplained from "../Components/UseReducer/UseReducerExplained";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <UseStateExplained />,
      },
      {
        path: "/useReducer",
        element: <UseReducerExplained />,
      },
    ],
  },
]);

export default router;
