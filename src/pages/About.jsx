import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import AuthorCard from "../components/AuthorCard";
// motion
import { motion } from "framer-motion";
// vartants
import { fadeIn } from "../variants";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
const About = ({ authorList }) => {
  return (
    <div className="container p-4 md:p-0 overflow-hidden dark:text-white/80">
      <Helmet>
        <title>K-Newz | About</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-between my-10">
        <div className="flex-1">
          <div className=" text-3xl font-bold  italic text-red-600 pb-1 border-b-4 border-red-600 w-fit hover:w-[100%] transition-all mb-8 cursor-pointer">
            Mission
          </div>
          <p className="text-lg">
            At K-Newz, our mission is to deliver timely, accurate, and engaging
            sports news and analysis to sports enthusiasts and fans around the
            world. We are committed to providing comprehensive coverage of a
            wide range of sports, from popular mainstream events to niche and
            emerging sports. Our aim is to be a trusted source for all things
            sports-related, empowering our audience with knowledge and insights
            that enhance their passion for sports.
          </p>
        </div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex justify-end"
        >
          <img className="w-[80%]" src={mission} />
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center justify-between my-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex order-2 lg:order-1"
        >
          <img className="w-[80%]" src={vision} />
        </motion.div>
        <div className="flex-1 order-1 lg:order-2">
          <div className="text-3xl font-bold italic text-red-600 pb-1 border-b-4 border-red-600 w-fit hover:w-[100%] transition-all mb-8 cursor-pointer">
            Vision
          </div>
          <p className="text-lg">
            At K-Newz, our vision is to be the ultimate destination for sports
            enthusiasts, creating an online ecosystem that embodies the spirit
            of sports and fosters a global community united by their passion for
            athletics. We aspire to go beyond the ordinary, redefining the way
            people experience and engage with sports news, transcending borders,
            and celebrating the unifying power of sports.
          </p>
        </div>
      </div>

      <div className="pb-5">
        <div className="text-3xl font-bold italic text-red-600 pb-1 border-b-4 border-red-600 w-fit transition-all mb-8 cursor-pointer  hover:w-[100%]">
          About the Authors
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 px-5 md:px-0 ">
          {authorList.map((author) => (
            <>
              <AuthorCard
                key={author.id}
                fullName={author.fullName}
                profileImage={author.profilePicture}
                bio={author.bio}
                links={author.links}
                position={author.position}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
About.propTypes = {
  authorList: PropTypes.array.isRequired,
};
export default About;
