import { useState } from "react";
import { getDocs, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase-config";
import { collection } from "firebase/firestore";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const SearchBar = ({ setSearchResultList }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const postCollectionRef = collection(db, "posts");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    getPostsBySearch();
  };

  const getPostsBySearch = async () => {
    const data = await getDocs(
      query(postCollectionRef, orderBy("title", "desc"))
    );
    console.log("data", data.docs);

    let result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    result = result.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (result.length !== 0) {
      setSearchResultList(result);

      navigate("/search");
    } else {
      // search not found modal
      document.body.style.overflow = "hidden";
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Search Not Found!",
        confirmButtonText: "OK",
      });
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div>
      <div className="mx-auto ">
        <form action="" className="relative mx-auto" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            type="search"
            name="search"
            placeholder="Search..."
            className="peer cursor-pointer relative z-10 h-10 w-12 rounded-full border-none bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4 text-white"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-y-0 my-auto w-12 border-r border-transparent px-3.5 border-white "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </form>
      </div>
    </div>
  );
};
SearchBar.propTypes = {
  setSearchResultList: PropTypes.func,
};
export default SearchBar;
