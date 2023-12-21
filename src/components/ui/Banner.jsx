import imageBG from "../../assets/image/banner.jpg";
import BannerList from "./BannerList";
const Banner = () => {
  return (
    <div className="grid grid-cols-12 gap-5 max-w-7xl mx-auto px-5 xl:px-0 mb-20 mt-5">
      <div className="col-span-3 rounded-xl border overflow-hidden h-[400px]">
        <BannerList />
      </div>
      <div
        className="bg-center bg-cover h-[400px] col-span-9 rounded-xl pl-10 pt-24 text-white"
        style={{ backgroundImage: `url("${imageBG}")` }}
      >
        <h1 className="text-2xl my-5">
          Master Your Day with Effortless Efficiency!
        </h1>
        <p>
          Unleash Productivity Excellence: Elevate Your Life <br /> with
          Intuitive Task Management. Seamlessly organize, prioritize, and <br />
          conquer your tasks with our powerful tools. Achieve more, stress less!
        </p>
      </div>
    </div>
  );
};

export default Banner;
