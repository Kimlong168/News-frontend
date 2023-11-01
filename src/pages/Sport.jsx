import { useState } from "react";
import NewCardWithAuthor from "../components/NewCardWithAuthor";
import Loading from "../components/Loading";
import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
const Sport = ({ postList, authorList }) => {
  const [visible, setVisible] = useState(3);

  const handleLoadMore = (numberToShow) => {
    setVisible((prev) => prev + numberToShow);
  };
  if (postList.length === 0) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }
  return (
    <div className="container mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-7 mt-5">
        {postList.slice(0, visible).map((data) => {
          let author = authorList.filter(
            (author) => author.authorId == data.author.id
          )[0];
          console.log("author for card:", author);
          return (
            <div key={data.id}>
              <NewCardWithAuthor
                coverImage={data.img}
                title={data.title}
                description={data.description}
                authorImg={author.profilePicture}
                authorName={author.fullName}
              />
            </div>
          );
        })}
      </div>
      {/* load more */}
      {visible < postList.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => handleLoadMore(3)}
            className="text-white flex md:hidden lg:flex gap-1 items-center hover:gap-3 transition-all font-semibold bg-red-600 rounded px-3 py-2 hover:bg-white hover:text-red-600 border hover:border-red-600"
          >
            Load More <AiOutlineArrowRight />
          </button>
          <button
            onClick={() => handleLoadMore(2)}
            className="text-white hidden md:flex gap-1 hover:gap-3 items-center transition-all lg:hidden font-semibold bg-red-600 rounded px-3 py-2 hover:bg-white hover:text-red-600 border hover:border-red-600"
          >
            Load More <AiOutlineArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};
Sport.propTypes = {
  postList: PropTypes.array.isRequired,
  authorList: PropTypes.array.isRequired,
};
export default Sport;
