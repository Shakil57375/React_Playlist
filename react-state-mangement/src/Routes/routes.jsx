import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import UseStateExplained from "../Pages/UseStateExplained/UseStateExplained";
import UseReducer from "../Components/UseReducer/UseReducer";

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
        element: <UseReducer />,
      },
    ],
  },
]);

export default router;
