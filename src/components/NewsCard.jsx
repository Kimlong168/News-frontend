// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../variants";
import PropType from "prop-types";
import noImage from "../assets/noImage.jpg";
const NewsCard = ({ coverImage, title, description }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <motion.div
      onClick={scrollTop}
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="mb-2 cursor-pointer z-10  md:h-[385px]"
    >
      <div className="w-full h-[240px] overflow-hidden">
        <img
          className="w-full h-full hover:scale-110 transition-all"
          src={coverImage ? coverImage : noImage}
        />
      </div>
      <div className="px-3 md:px-0">
        <div className="line-clamp-2 dark:text-white/80 font-semibold text-2xl my-4">
          {title}
        </div>
        <div className="line-clamp-2 text-sm text-gray-400">{description}</div>
      </div>
    </motion.div>
  );
};
NewsCard.propTypes = {
  coverImage: PropType.string,
  title: PropType.string,
  description: PropType.string,
};
export default NewsCard;
