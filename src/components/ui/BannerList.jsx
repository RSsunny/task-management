import { Link } from "react-router-dom";
import { FcTodoList } from "react-icons/fc";
import { GrCompliance } from "react-icons/gr";
import { MdOutlineRunningWithErrors } from "react-icons/md";

const BannerList = () => {
  return (
    <div className="flex flex-col  ">
      <Link
        className="border-b pl-8 py-2  font-bold flex  items-center gap-5 hover:bg-gray-300"
        to={"/todo"}
      >
        <FcTodoList className="text-xl" />
        <span>To-Do</span>
      </Link>
      <Link
        className="border-b pl-8 py-2  font-bold flex  items-center gap-5 hover:bg-gray-300"
        to={"/todo"}
      >
        <MdOutlineRunningWithErrors className="text-xl" />
        <span>Ongoing</span>
      </Link>
      <Link
        className="border-b pl-8 py-2  font-bold flex  items-center gap-5 hover:bg-gray-300"
        to={"/todo"}
      >
        <GrCompliance className="text-xl" />
        <span>completed</span>
      </Link>
      <Link
        className="border-b pl-8 py-2  font-bold flex  items-center gap-5 hover:bg-gray-300"
        to={"/todo"}
      >
        <FcTodoList className="text-xl" />
        <span>To-Do</span>
      </Link>
      <Link
        className="border-b pl-8 py-2  font-bold flex  items-center gap-5 hover:bg-gray-300"
        to={"/todo"}
      >
        <MdOutlineRunningWithErrors className="text-xl" />
        <span>Ongoing</span>
      </Link>
      <Link
        className="border-b pl-8 py-2  font-bold flex  items-center gap-5 hover:bg-gray-300"
        to={"/todo"}
      >
        <GrCompliance className="text-xl" />
        <span>completed</span>
      </Link>
      <Link
        className="border-b pl-8 py-2  font-bold flex  items-center gap-5 hover:bg-gray-300"
        to={"/todo"}
      >
        <FcTodoList className="text-xl" />
        <span>To-Do</span>
      </Link>
      <Link
        className="border-b pl-8 py-2  font-bold flex  items-center gap-5 hover:bg-gray-300"
        to={"/todo"}
      >
        <MdOutlineRunningWithErrors className="text-xl" />
        <span>Ongoing</span>
      </Link>
      <Link
        className="border-b pl-8 py-2  font-bold flex  items-center gap-5 hover:bg-gray-300"
        to={"/todo"}
      >
        <GrCompliance className="text-xl" />
        <span>completed</span>
      </Link>
    </div>
  );
};

export default BannerList;
