import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase-config";
import Loading from "../components/Loading";

const DetailContent = () => {
  const { id: postParam } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const docRef = doc(db, "posts", postParam);

    const fetchData = async () => {
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();

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
  }, [postParam]);

  //loading
  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <>
      <div className="container p-4 md:p-0 min-h-screen">
        <div>{data.title}</div>
        <div>{data.date}</div>
        <div>{data.author.id}</div>
        <div>{data.description}</div>
        <div>
          <img src={data.img} alt="" />
        </div>
        <div>{data.content}</div>
      </div>
    </>
  );
};

export default DetailContent;
