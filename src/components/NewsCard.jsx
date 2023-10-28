// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../variants";
const NewsCard = ({ coverImage, title, description }) => {
  return (
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="mb-2 cursor-pointer z-10"
    >
      <div className="w-full h-[240px] overflow-hidden">
        <img className="w-full h-full hover:scale-110 transition-all" src={coverImage} />
      </div>
      <div className="line-clamp-2 font-semibold text-2xl my-4">{title}</div>
      <div className="line-clamp-2 text-sm text-gray-400">{description}</div>
    </motion.div>
  );
};

export default NewsCard;
