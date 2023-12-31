import PropTypes from "prop-types";
import LinkIcon from "./LinkIcon";
const Author = ({ fullName, profileImage, bio, links }) => {
  return (
    <div className=" mt-20">
      <div className="text-center text-xl uppercase font-bold">
        About the author
      </div>
      <div className="shadow-3xl my-3 p-5  ">
        <div className="flex justify-center text-gray-900">
          <a href={profileImage} className="w-[120px] h-[120px]">
            <img
              src={profileImage}
              alt="profileImage"
              className="rounded-full cover w-full h-full shadow-xl border-solid border-[3px] "
            />
          </a>
        </div>
        <div className="text-center md:px-3 pt-2">
          <h3 className=" bold font-sans text-2xl text-bold uppercase ">
            {fullName}
          </h3>
          <p className="mt-2 font-sans font-semibold w-full md:w-[60%] mx-auto block">
            {bio}
          </p>
        </div>
        <div className="flex justify-center  ">
          <div className="flex justify-center space-x-6 ">
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
    </div>
  );
};
Author.propTypes = {
  fullName: PropTypes.string,
  profileImage: PropTypes.string,
  bio: PropTypes.string,
  links: PropTypes.array,
};
export default Author;
