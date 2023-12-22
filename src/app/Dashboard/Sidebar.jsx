import { Link, useNavigate } from "react-router-dom";
import Avater from "../../components/shared/Avater";
import useAuth from "../../hooks/useAuth";
import { FcTodoList } from "react-icons/fc";
import { BsPencilSquare } from "react-icons/bs";
import useTodo from "../../hooks/useTodo";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const { data, todotask, completetask, ongoingList } = useTodo();
  const handleSignout = () => {
    logOut();

    navigate("/");
  };
  return (
    <div>
      <div className="text-center mt-5 mb-20">
        <Avater size={"w-32"}></Avater>
        <h1 className="text-2xl font-bold">{user?.displayName}</h1>
      </div>
      <div>
        <Link
          className="border-b pl-8 xl:pl-20 py-2  font-bold flex  items-center  gap-5 hover:bg-gray-300"
          to={"/dashboard/todo"}
        >
          <FcTodoList className="text-xl" />
          <span>To-Do ({todotask?.length})</span>
        </Link>
        <Link
          className="border-b pl-8 xl:pl-20 py-2  font-bold flex  items-center  gap-5 hover:bg-gray-300"
          to={"/dashboard/ongoing"}
        >
          <FcTodoList className="text-xl" />
          <span>Ongoing ({ongoingList?.length})</span>
        </Link>
        <Link
          className="border-b pl-8 xl:pl-20 py-2  font-bold flex  items-center  gap-5 hover:bg-gray-300"
          to={"/dashboard/completetask"}
        >
          <FcTodoList className="text-xl" />
          <span>Complete ({completetask?.length})</span>
        </Link>
        <Link
          className="border-b pl-8 xl:pl-20 py-2  font-bold flex  items-center  gap-5 hover:bg-gray-300"
          to={"/dashboard/createtodo"}
        >
          <BsPencilSquare className="text-xl" />
          <span>Create To-Do </span>
        </Link>

        <Link
          className="border-b pl-8 xl:pl-20 py-2  font-bold flex  items-center  gap-5 hover:bg-gray-300"
          to={"/dashboard/profile"}
        >
          <BsPencilSquare className="text-xl" />
          <span>Profile </span>
        </Link>
        <Link
          className="border-b pl-8 xl:pl-20 py-2  font-bold flex  items-center  gap-5 hover:bg-gray-300"
          to={"/"}
        >
          <BsPencilSquare className="text-xl" />
          <span>Home </span>
        </Link>
      </div>

      <div className="text-center">
        <button
          onClick={handleSignout}
          className="text-center border px-6 rounded-full py-2 mt-10"
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
