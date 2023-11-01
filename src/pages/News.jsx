import Loading from "../components/Loading";
import NewCardWithAuthor from "../components/NewCardWithAuthor";
import { useState } from "react";
import PropTypes from "prop-types";
const News = ({ postList, authorList }) => {
  const [visible, setVisible] = useState(6);

  const handleLoadMore = () => {
    setVisible((prev) => prev + 3);
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
                coverImage="https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/medium/1698033346.png"
                title={data.title}
                description={data.content}
                authorImg={author.profilePicture}
                authorName={author.fullName}
              />
            </div>
          );
        })}
      </div>
      {/* load more */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleLoadMore}
          className="text-white font-semibold bg-red-600 rounded px-3 py-2 hover:bg-white hover:text-red-600 border hover:border-red-600"
        >
          Load More...
        </button>
      </div>
    </div>
  );
};
News.propTypes = {
  postList: PropTypes.array.isRequired,
  authorList: PropTypes.array.isRequired,
};

export default News;
