import { Link } from "react-router-dom";
import Navlist from "./Navlist";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center gap-10 px-5 md:px-5 lg:px-0 py-5 max-w-7xl mx-auto  ">
      <div>
        <img
          className="w-20"
          src="https://i.ibb.co/GkgGZqL/Task-Logo-fullcol-Copy.png"
          alt=""
        />
      </div>
      <div className="hidden md:block">
        {" "}
        <Navlist />
      </div>
      <div>
        <Link
          to={"/dashboard"}
          className="px-10  py-2 font-bold border rounded-md"
        >
          Task
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
