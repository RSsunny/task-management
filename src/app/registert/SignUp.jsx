import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/ui/SocialLogin";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { userlogin, midealogin } = useAuth();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const res = await userlogin(data.email, data.password)
      .then((result) => {
        console.log(result?.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative h-screen flex justify-center items-center bg-blue-500 overflow-hidden">
      <div className="border w-[500px] px-5 py-10 bg-white rounded-xl z-50">
        <h1 className="absolute top-28 text-3xl font-bold  text-white text-center ml-20">
          TO-DO Your List...!
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-3xl font-bold text-center my-4">Sign Up</h2>
          <h1 className="font-medium mb-3">Email : </h1>
          <input
            {...register("email", { required: true })}
            type="text"
            className="outline-none border border-black w-full mb-5 p-3 rounded-md "
          ></input>
          <h1 className="font-medium mb-3">Password : </h1>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
            type="password"
            className="outline-none border border-black w-full mb-5 p-3 rounded-md "
          ></input>
          <button
            className="w-full text-xl font-cinzel font-bold bg-yellow-400 p-3 rounded-full  hover:bg-opacity-90 cursor-pointer"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div>
          <hr className="border-black my-8" />
          <SocialLogin />
        </div>
        <p className="text-xs pt-5 ">
          your have an account ?{" "}
          <Link
            to={"/signin"}
            state={{ from: location.state?.from }}
            className="text-primary_Colors font-bold"
          >
            SignIn
          </Link>
        </p>
      </div>
      <div className="absolute -top-40 -right-40">
        <img
          src="https://i.ibb.co/zRK1rtb/clock-in-shape-of-cogwheel-icon-time-management-vector-23812901-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="absolute -bottom-32 -right-60   lg:-right-40 ">
        <img
          className="w-[700px]"
          src="https://i.ibb.co/6sm86nF/istockphoto-483969580-612x612-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="absolute bg-white p-10 rounded-full -top-10 -left-20   ">
        <img
          className=" xl:w-[500px]"
          src="https://i.ibb.co/t3Nfj7K/images-2-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="absolute  -bottom-32 -left-32   ">
        <img
          className="rotate-45"
          src="https://i.ibb.co/m8KK2md/people-time-map-pin-shape-concept-logo-time-successful-health-logo-icon-vector-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SignUp;
