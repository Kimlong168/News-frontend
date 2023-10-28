import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="w-full h-[330px] shadow-xl border grid place-items-center font-bold text-red-600">
      <div className="h-full">
        <img className="w-full h-full" src={banner} />
      </div>
    </div>
  );
};

export default Banner;
