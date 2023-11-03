import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import NewsCard from "../components/NewsCard";
import NewsLabel from "../components/NewsLabel";
import bannerAds from "../assets/banner-ads.png";
import Carousel from "../components/Carousel";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
const Home = ({ postList, todayMatchList }) => {
  console.log("postList-home", postList);
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
            <div className=" shadow-xl border grid place-items-center font-bold  bg-white mx-2 md:mx-0">
              <Carousel todayMatchList={todayMatchList} />
            </div>
            <NewsLabel text="Latest News" path="/news" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-7 mt-5">
              {postList
                .map((post) => (
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
                ))
                .splice(0, 3)}
            </div>

            <NewsLabel text="Latest Sports News" path="/sport" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-7 mt-5">
              {postList
                .map((post) => (
                  <div key={post.id}>
                    <Link to={`/detail/${post.id}`}>
                      <NewsCard
                        coverImage={post.img}
                        title={post.title}
                        description={post.description}
                      />
                    </Link>
                  </div>
                ))
                .splice(3, 3)}
            </div>

            <div className="mt-10">
              <img src={bannerAds} alt="" />
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
};

export default Home;
