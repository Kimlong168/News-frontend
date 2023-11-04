import sponsor1 from "../assets/sponsor1.jpg";
import sponsor2 from "../assets/sponsor2.jpg";
import sponsor3 from "../assets/sponsor3.jpg";
const Banner = () => {
  return (
    <>
      <div className=" bg-white shadow-xl p-4">
        <div className="uppercase text-center font-bold text-md md:text-lg">
          Sponsored by
        </div>
        <div className="flex items-center justify-center gap-3">
          <div>
            <img className="w-[180px]" src={sponsor1} alt="" />
          </div>
          <div>
            <img className="w-[180px]" src={sponsor2} alt="" />
          </div>
          <div>
            <img className="w-[180px]" src={sponsor3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
