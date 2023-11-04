import Loading from "../components/Loading";
import NewCardWithAuthor from "../components/NewCardWithAuthor";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
import GoToTop from "../components/GoToTop";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const News = ({ postList, authorList, categoryList }) => {
  const [visible, setVisible] = useState(3);
  const [newsList, setNewsList] = useState([]);
  const handleLoadMore = (numberToShow) => {
    setVisible((prev) => prev + numberToShow);
  };

  useEffect(() => {
    const categorySport = categoryList.map((data) => {
      if (
        data.categoryName.toLowerCase() == "sport" ||
        data.categoryName.toLowerCase() == "sports"
      ) {
        return data.id;
      }
    })[0];
    const elements = postList.map((data) => {
      if (data.categoryId != categorySport) {
        return data;
      }
    });

    setNewsList(elements.filter((data) => data)); //filter the undefined data
  }, [postList, categoryList]);

  if (postList.length === 0) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }
  return (
    <div className="container mt-16">
      <Helmet>
        <title>K-Newz | News</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-7 mt-5">
        {newsList.slice(0, visible).map((data) => {
          let author = authorList.filter(
            (author) => author.authorId == data.author.id
          )[0];
          console.log("author for card:", author);
          return (
            <div key={data.id}>
              <Link to={`/detail/${data.id}`}>
                <NewCardWithAuthor
                  coverImage={data.img}
                  title={data.title}
                  description={data.description}
                  authorImg={author.profilePicture}
                  authorName={author.fullName}
                />
              </Link>
            </div>
          );
        })}
      </div>
      {/* load more */}
      {visible < newsList.length ? (
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
      ) : (
        <GoToTop />
      )}
    </div>
  );
};
News.propTypes = {
  postList: PropTypes.array.isRequired,
  authorList: PropTypes.array.isRequired,
  categoryList: PropTypes.array.isRequired,
};

export default News;
