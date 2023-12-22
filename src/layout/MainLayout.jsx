import { Outlet } from "react-router-dom";
import Hader from "../components/ui/Hader";

const MainLayout = () => {
  return (
    <div>
      <Hader />
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
