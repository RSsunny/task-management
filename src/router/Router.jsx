import { createBrowserRouter } from "react-router-dom";
import Home from "../app/Home/Home";
import About from "../app/About/About";
import DashbordLayout from "../layout/DashbordLayout";
import Dashboard from "../app/Dashboard/Dashboard";
import MainLayout from "../layout/MainLayout";
import Profile from "../app/Dashboard/Profile";
import Service from "../app/service/Service";
import Contact from "../app/contact/Contact";
import SignIn from "../app/registert/SignIn";
import SignUp from "../app/registert/SignUp";
import ToDo from "../app/Dashboard/ToDo";
import CreateToDo from "../app/Dashboard/CreateToDo";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashbordLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "todo",
        element: <ToDo />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "createtodo",
        element: <CreateToDo />,
      },
    ],
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

export default Router;
