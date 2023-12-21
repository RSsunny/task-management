import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../app/layout/MainLayout";
import Home from "../app/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default Router;
