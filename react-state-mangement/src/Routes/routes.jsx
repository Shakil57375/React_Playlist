import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import UseStateExplained from "../Pages/UseStateExplained/UseStateExplained";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <UseStateExplained />,
      },
    ],
  },
]);

export default router;
