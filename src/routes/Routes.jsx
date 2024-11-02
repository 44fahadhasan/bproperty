import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";

const routes = createBrowserRouter([
  // main layout routes
  {
    path: "/",
    element: <Main />,
    errorElement: "Error Page",
    children: [
      // public routes
      {
        index: true,
        element: "Home Page",
      },
    ],
  },
]);

export default routes;
