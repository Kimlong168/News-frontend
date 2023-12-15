import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import PropTypes from "prop-types";
const BackToPrevBtn = ({ previousURL }) => {
  console.log(previousURL);
  return (
    <div>
      <Link to="/">
        <button className="uppercase text-gray-900 dark:text-white hover:text-yellow-500 transition-all gap-2 hover:gap-4 flex items-center mt-5">
          <AiOutlineArrowLeft /> previous
        </button>
      </Link>
    </div>
  );
};
BackToPrevBtn.propTypes = {
  previousURL: PropTypes.string.isRequired,
};
export default BackToPrevBtn;
