import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import AuthorCard from "../components/AuthorCard";
const About = () => {
  return (
    <div className="container">
      <div className="flex gap-10 items-center justify-between my-10">
        <div className="flex-1">
          <div className="text-5xl italic text-red-600 pb-1 border-b-4 border-red-600 w-fit hover:w-[100%] transition-all mb-8 cursor-pointer">
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
        <div className="flex-1 flex justify-end">
          <img className="w-[80%]" src={mission} />
        </div>
      </div>

      <div className="flex gap-10 items-center justify-between my-10">
        <div className="flex-1 flex">
          <img className="w-[80%]" src={vision} />
        </div>
        <div className="flex-1">
          <div className="text-5xl italic text-red-600 pb-1 border-b-4 border-red-600 w-fit hover:w-[100%] transition-all mb-8 cursor-pointer">
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

      <div>
        <div className="text-5xl italic text-red-600 pb-1 border-b-4 border-red-600 w-fit transition-all mb-8 cursor-pointer  hover:w-[100%]">
          About the Authors
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-0">
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
        </div>
      </div>
    </div>
  );
};

export default About;
