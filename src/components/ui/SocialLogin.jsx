import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="flex justify-center items-center gap-5 my-5 text-3xl">
      <FcGoogle className="cursor-pointer hover:scale-125 duration-500 ease-linear" />
      <FaFacebook className="cursor-pointer hover:scale-125 duration-500 ease-linear" />
      <FaGithub className="cursor-pointer hover:scale-125 duration-500 ease-linear" />
    </div>
  );
};

export default SocialLogin;
