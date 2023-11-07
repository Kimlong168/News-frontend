import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import NewsCard from "../components/NewsCard";
import NewsLabel from "../components/NewsLabel";
import Carousel from "../components/Carousel";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import StandingTable from "../components/StandingTable";
import { useState } from "react";
const Home = ({
  postList,
  todayMatchList,
  categoryList,
  clubList,
  groupList,
}) => {
  const [selectedGroup, setSelectedGroup] = useState("a");
  let count = 0;
  let count1 = 0;
  console.log("postList-home", postList);
  const categorySport = categoryList.map((data) => {
    if (
      data.categoryName.toLowerCase() == "sport" ||
      data.categoryName.toLowerCase() == "sports"
    ) {
      return data.id;
    }
  })[0];

  // const groupAId = groupList.map((data) => {
  //   if (data.groupName.toLowerCase() == "a") {
  //     return data.id;
  //   }
  // })[0];
  // const groupBId = groupList.map((data) => {
  //   if (data.groupName.toLowerCase() == "b") {
  //     return data.id;
  //   }
  // })[0];
  // const clubListA = clubList.map((data) => {
  //   if (data.group == groupAId) {
  //     return data;
  //   }
  // });
  // const clubListB = clubList.map((data) => {
  //   if (data.group == groupBId) {
  //     return data;
  //   }
  // });
  return (
    <>
      <Helmet>
        <title>Boyloy-News Official</title>
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

            <div className=" grid md:hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-7 mt-5">
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

            <div className="hidden md:grid lg:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-7 mt-5">
              {postList.map((post) => {
                if (post.categoryId == categorySport && count1 < 4) {
                  count1++;
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

            <div className="grid md:hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-7 mt-5">
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

            <div className="hidden md:grid lg:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-7 mt-5">
              {postList.map((post) => {
                if (post.categoryId != categorySport && count1 < 8) {
                  count1++;
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
            <div>
              <div>
                <div className="text-white font-semibold mb-5 bg-red-600 px-5 py-3 mt-16  rounded-sm flex items-center justify-between">
                  <small className="border-l-[5px] pl-5 border-white text-lg md:text-xl uppercase ">
                    Standing
                  </small>
                  <select
                  className="text-red-600 px-5 rounded outline-none cursor-pointer "
                    value={selectedGroup}
                    onChange={(e) => setSelectedGroup(e.target.value)}
                  >
                    <option value={"a"}>Group A</option>
                    <option value={"b"}>Group B</option>
                  </select>
                </div>
              </div>
              {selectedGroup == "a" ? (
                <StandingTable
                  clubList={clubList}
                  groupList={groupList}
                  group="A"
                />
              ) : (
                <StandingTable
                  clubList={clubList}
                  groupList={groupList}
                  group="B"
                />
              )}
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
  clubList: PropTypes.array.isRequired,
  groupList: PropTypes.array.isRequired,
};

export default Home;
