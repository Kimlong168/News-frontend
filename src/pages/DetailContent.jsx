import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState, useNavigate } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase-config";
import Markdown from "react-markdown";
import Loading from "../components/Loading";
import { BiSolidUser } from "react-icons/bi";
import { LuCalendarDays } from "react-icons/lu";
import Author from "../components/Author";
import PropType from "prop-types";
import SharingBtn from "../components/SharingBtn";
import GoToTop from "../components/GoToTop";
// import BackToPrevBtn from "../components/BackToPrevBtn";
const DetailContent = ({ authorList }) => {
  const { id: postParam } = useParams();

  const [data, setData] = useState(null);
  const [author, setAuthor] = useState(null);


  const currentURL = window.location.href;

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
      <div className="container p-4 md:p-0 min-h-screen">
        <div className=" flex flex-col md:flex-row gap-2 mt-5 ">
          <div className="w-full md:w-[75%] mt-4 bg-white shadow-xl p-6 min-h-screen">
            <div className="text-gray-900 font-bold text-3xl">{data.title}</div>
            <div className="flex items-center gap-8 py-5">
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
            <div className="break-words">
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
          <div className="grid md:w-[25%] mt-4 md:min-h-screen bg-white shadow-xl p-6  place-items-center text-3xl font-semibold ">
            <span className="md:rotate-90">SPONSOR</span>
          </div>
        </div>
        {/* <BackToPrevBtn previousUrl={handleGoBack} /> */}
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
