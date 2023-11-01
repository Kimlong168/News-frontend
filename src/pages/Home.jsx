import Banner from "../components/Banner";
import Loading from "../components/Loading";
import NewsCard from "../components/NewsCard";
import NewsLabel from "../components/NewsLabel";
import PropTypes from "prop-types";
const Home = ({ postList }) => {
  console.log("postList-home", postList);
  return (
    <>
      <div className="container mt-16">
        <Banner />
        {postList.length == 0 ? (
          <Loading />
        ) : (
          <>
            <NewsLabel text="Latest News" path="/news" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-7 mt-5">
              {postList
                .map((post) => (
                  <>
                    <div>
                      <NewsCard
                        coverImage={post.img}
                        title={post.title}
                        description={post.description}
                      />
                    </div>
                  </>
                ))
                .splice(0, 3)}
            </div>

            <NewsLabel text="Latest Sports News" path="/sport" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-7 mt-5">
              {postList
                .map((post) => (
                  <div key={post.id}>
                    <NewsCard
                      coverImage={post.img}
                      title={post.title}
                      description={post.description}
                    />
                  </div>
                ))
                .splice(0, 3)}
            </div>
          </>
        )}
      </div>
    </>
  );
};
Home.propTypes = {
  postList: PropTypes.array.isRequired,
};

export default Home;
