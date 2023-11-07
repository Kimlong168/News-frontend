import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../firebase-config";
import Markdown from "markdown-to-jsx";
import Loading from "../components/Loading";
import { BiSolidUser } from "react-icons/bi";
import { LuCalendarDays } from "react-icons/lu";
import Author from "../components/Author";
import PropType from "prop-types";
import SharingBtn from "../components/SharingBtn";
import GoToTop from "../components/GoToTop";
import BackToPrevBtn from "../components/BackToPrevBtn";
import { Helmet } from "react-helmet";
import sponsor1 from "../assets/sponsor1.jpg";
import sponsor2 from "../assets/sponsor2.jpg";
import sponsor3 from "../assets/sponsor3.jpg";
import aba_qr from "../assets/aba_qr.jpg";
import NewCardWithAuthor from "../components/NewCardWithAuthor";
import Banner from "../components/Banner";
const DetailContent = ({ authorList, postList }) => {
  const { id: postParam } = useParams();

  const [data, setData] = useState(null);
  const [author, setAuthor] = useState(null);

  const currentURL = window.location.href;
  const prevUrl = window.history.state.prevUrl;
  useEffect(() => {
    const docRef = doc(db, "posts", postParam);

    const fetchData = async () => {
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();

          let authorData = null;
          authorList.map((aData) => {
            if (aData.authorId == data.author.id) {
              authorData = aData;
            }
          });

          setAuthor(authorData);

          setData(data);
          console.log("detail data", data);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, [postParam, authorList]);

  const relatedPost = postList.filter((post) => {
    return post.categoryId === data?.categoryId && post.id !== postParam;
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <>
      <Helmet>
        <meta property="og:image" content={data.img} />
        <meta name="og:description" content={data.description} />
        <title>Boyloy-News | {data.title}</title>
      </Helmet>
      <div className="container px-4 md:p-0 min-h-screen">
        <div className=" flex flex-col md:flex-row gap-2 mt-3 md:mt-5 ">
          <div className="w-full md:w-[75%] mt-4 bg-white shadow-xl p-6 min-h-screen">
            <div className="text-gray-900 font-bold text-2xl md:text-3xl">
              {data.title}
            </div>
            <div className="flex items-center gap-5 md:gap-8 py-5">
              <div className="flex items-center gap-2">
                <LuCalendarDays />
                {data.date}
              </div>
              <div className="flex items-center gap-2">
                <BiSolidUser /> {data.author.name}
              </div>
            </div>
            <div className="mb-5 font-semibold">{data.description}</div>
            <div className="mb-5 w-full">
              <img className="w-full" src={data.img} alt="" />
            </div>
            <div id="markdown" className="break-words">
              <Markdown>{data.content}</Markdown>
            </div>
            <div className="mt-10 mb-5">
              <SharingBtn url={currentURL} title={data.title} />
            </div>
            <hr />
            <div>
              {author && (
                <Author
                  fullName={author.fullName}
                  profileImage={author.profilePicture}
                  bio={author.bio}
                  links={author.links}
                />
              )}
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center  gap-2 md:w-[25%] mt-4 md:min-h-screen bg-white shadow-xl p-6 text-2xl font-semibold ">
            {/* <span className="md:rotate-90 text-3xl">SPONSOR</span> */}
            <span className="text-center uppercase">SPONSORED BY</span>
            <div>
              <img src={sponsor1} />
            </div>
            <div>
              <img src={sponsor2} />
            </div>
            <div>
              <img src={sponsor3} />
            </div>
            <div>
              <img src={aba_qr} />
            </div>
          </div>
        </div>
        {/* related content */}
        {relatedPost.length !== 0 && (
          <div>
            <div className="text-white font-semibold  bg-red-600 px-5 py-3 mt-8 rounded-sm flex items-center justify-between">
              <small className="border-l-[5px] pl-5 border-white text-lg md:text-xl uppercase ">
                Related Contents
              </small>
            </div>

            <div className="grid md:hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-7 mt-5">
              {relatedPost.slice(0, 3).map((data) => {
                let author = authorList.filter(
                  (author) => author.authorId == data.author.id
                )[0];
                console.log("author for card:", author);
                return (
                  <div key={data.id} onClick={scrollTop}>
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
            <div className="hidden md:grid lg:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-7 mt-5">
              {relatedPost.slice(0, 4).map((data) => {
                let author = authorList.filter(
                  (author) => author.authorId == data.author.id
                )[0];
                console.log("author for card:", author);
                return (
                  <div key={data.id} onClick={scrollTop}>
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
          </div>
        )}
        <div className="md:hidden block md:w-[25%] mt-4 md:min-h-screen  ">
          <div>
            <Banner />
          </div>
        </div>
        <BackToPrevBtn previousUrl={prevUrl} />
        {/* goto top */}
        <GoToTop />
      </div>
    </>
  );
};
DetailContent.propTypes = {
  authorList: PropType.array.isRequired,
  postList: PropType.array.isRequired,
};
export default DetailContent;
