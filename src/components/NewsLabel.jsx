// import { TbMathGreater } from "react-icons/tb";
import {BiSolidRightArrow} from "react-icons/bi"
import { Link } from "react-router-dom";

const NewsLabel = ({ text, path }) => {
  return (
    <div>
      <div className="text-white font-semibold  bg-red-600 px-5 py-3 mt-16  rounded-sm flex items-center justify-between">
        <small className="border-l-[5px] pl-5 border-white text-xl uppercase ">
          {text}
        </small>

        <Link to={path}>
          <div className="text-lg flex items-center gap-3">
            More
            <BiSolidRightArrow />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewsLabel;
