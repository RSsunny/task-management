import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { midealogin } = useAuth();
  const dandleMidea = (midea) => {
    midea()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center items-center gap-5 my-5 text-3xl">
      <FcGoogle
        onClick={() => dandleMidea(midealogin)}
        className="cursor-pointer hover:scale-125 duration-500 ease-linear"
      />
      <FaFacebook className="cursor-pointer hover:scale-125 duration-500 ease-linear" />
      <FaGithub className="cursor-pointer hover:scale-125 duration-500 ease-linear" />
    </div>
  );
};

export default SocialLogin;
