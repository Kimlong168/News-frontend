import banner from "../assets/banner.png";
import Carousel from "./Carousel";
const Banner = () => {
  return (
    <div className="w-full h-[330px] shadow-xl border grid place-items-center font-bold text-red-600 bg-red-500">
      {/* <div className="h-full">
        <img className="w-full h-full" src={banner} />
      </div> */}

      <Carousel />
    </div>
  );
};

export default Banner;
