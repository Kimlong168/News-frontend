// import { TbMathGreater } from "react-icons/tb";
import { BiSolidRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const NewsLabel = ({ text, path }) => {
  return (
    <div>
      <div className="text-white font-semibold  bg-red-600 px-5 py-3 mt-16  rounded-sm flex items-center justify-between">
        <small className="border-l-[5px] pl-5 border-white text-lg md:text-xl uppercase ">
          {text}
        </small>

        <Link to={path}>
          <div className="text-lg flex items-center gap-3">
            <span className="hidden md:block">More</span>
            <BiSolidRightArrow />
          </div>
        </Link>
      </div>
    </div>
  );
};
NewsLabel.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
export default NewsLabel;
