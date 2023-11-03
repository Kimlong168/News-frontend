import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
const DetailContent = ({ authorList }) => {
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
        <title>K-Newz | {data.title}</title>
      </Helmet>
      <div className="container px-4 md:p-0 min-h-screen">
        <div className=" flex flex-col md:flex-row gap-2 mt-3 md:mt-5 ">
          <div className="w-full md:w-[75%] mt-4 bg-white shadow-xl p-6 min-h-screen">
            <div className="text-gray-900 font-bold text-2xl md:text-3xl">{data.title}</div>
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
          <div className="flex flex-col items-center  gap-2 md:w-[25%] mt-4 md:min-h-screen bg-white shadow-xl p-6 text-2xl font-semibold ">
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
        <BackToPrevBtn previousUrl={prevUrl} />
        {/* goto top */}
        <GoToTop />
      </div>
    </>
  );
};
DetailContent.propTypes = {
  authorList: PropType.array.isRequired,
};
export default DetailContent;
