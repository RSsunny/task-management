import { Link } from "react-router-dom";
import Navlist from "./Navlist";
import useAuth from "../../hooks/useAuth";
import { HiUserCircle } from "react-icons/hi";

const Navbar = () => {
  const { user, loding } = useAuth();

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
      <div className="flex items-center gap-5">
        <div>
          {user ? (
            <Link to={"/dashboard/profile"} className="avatar">
              <div className="w-12 rounded-full">
                <img src={user.photoURL} />
              </div>
            </Link>
          ) : (
            <Link to={"/signin"} className="avatar">
              <div className="w-12 rounded-full overflow-hidden">
                <HiUserCircle className="text-5xl" />
              </div>
            </Link>
          )}
        </div>
        <Link
          to={user ? "/dashboard/todo" : "/signin"}
          className="px-10  py-2 font-bold border rounded-md"
        >
          Task
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
