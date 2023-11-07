import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import NewsCard from "../components/NewsCard";
import NewsLabel from "../components/NewsLabel";
import Carousel from "../components/Carousel";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
const Home = ({ postList, todayMatchList, categoryList }) => {
  let count = 0;
  console.log("postList-home", postList);
  const categorySport = categoryList.map((data) => {
    if (
      data.categoryName.toLowerCase() == "sport" ||
      data.categoryName.toLowerCase() == "sports"
    ) {
      return data.id;
    }
  })[0];
  console.log("id category", categorySport);
  return (
    <>
      <Helmet>
        <title>K-Newz Official</title>
      </Helmet>
      <div className="container mt-16">
        {postList.length == 0 ? (
          <Loading />
        ) : (
          <>
            <div className=" shadow-xl border grid place-items-center font-bold dark:bg-black bg-white mx-2 md:mx-0">
              <Carousel todayMatchList={todayMatchList} />
            </div>
            <NewsLabel text="Latest Sport News" path="/sport" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-7 mt-5">
              {postList.map((post) => {
                if (post.categoryId == categorySport && count < 3) {
                  count++;
                  return (
                    <>
                      <div key={post.id}>
                        <Link to={`/detail/${post.id}`}>
                          <NewsCard
                            coverImage={post.img}
                            title={post.title}
                            description={post.description}
                          />
                        </Link>
                      </div>
                    </>
                  );
                }
              })}
            </div>

            <NewsLabel text="Latest Social News" path="/news" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-7 mt-5">
              {postList.map((post) => {
                if (post.categoryId != categorySport && count < 6) {
                  count++;
                  return (
                    <>
                      <div key={post.id}>
                        <Link to={`/detail/${post.id}`}>
                          <NewsCard
                            coverImage={post.img}
                            title={post.title}
                            description={post.description}
                          />
                        </Link>
                      </div>
                    </>
                  );
                }
              })}
            </div>
            <div className="mt-10 p-3 md:p-0">
              <Banner />
            </div>
          </>
        )}
      </div>
    </>
  );
};
Home.propTypes = {
  postList: PropTypes.array.isRequired,
  todayMatchList: PropTypes.array.isRequired,
  categoryList: PropTypes.array.isRequired,
};

export default Home;
