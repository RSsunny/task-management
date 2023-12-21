import { Outlet } from "react-router-dom";

const DashbordLayout = () => {
  return (
    <div className="grid grid-cols-12  min-h-screen ">
      <div className="col-span-3 border"></div>
      <div className="col-span-9 border md:p-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashbordLayout;
