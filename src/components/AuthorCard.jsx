import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";
import kimlong from "../assets/kimlong.jpg";
import LinkIcon from "./LinkIcon";
// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../variants";
const AuthorCard = ({ fullName, profileImage, bio, links }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="rounded-3xl  shadow-3xl  bg-white shadow-xl pt-5">
        <div className="flex justify-center">
          <a href="https://kimlongchann.online/kimlong.jpg">
            <div className=" w-[150px] h-[150px]">
              <img
                src={profileImage}
                alt="profileImage"
                className="rounded-full cover w-full h-full shadow-xl border-solid border-[3px] "
              />
            </div>
          </a>
        </div>
        <div className="text-center px-3 pt-2 text-gray-500">
          <h3 className="text-gray-900 capitalize bold font-sans text-2xl text-semibold ">
            {fullName}
          </h3>
          <p className="mt-2 font-sans grid place-items-center h-[120px] mb-4  text-gray-900 w-[90%] md:w-[60%] mx-auto  line-clamp-5">
            {bio}
          </p>
        </div>
        <div className="flex justify-center pb-8 mt-4 ">
          <div className="flex justify-center space-x-6">
            {links &&
              links.map((link) => (
                <>
                  <a href={link.url}>
                    <LinkIcon title={link.title} />
                  </a>
                </>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AuthorCard;
