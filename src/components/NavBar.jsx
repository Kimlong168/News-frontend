import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { getDocs, query, orderBy } from "@firebase/firestore";
import { collection } from "firebase/firestore";

import { db } from "../firebase-config";
const NavBar = ({ resultList, setSearchResultList }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const postCollectionRef = collection(db, "posts");
  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY < 500) {
        setShowSearchBar(false);
      } else {
        setShowSearchBar(true);
      }
    });
  }, []);

  const getPostsBySearch = async () => {
    const data = await getDocs(
      query(postCollectionRef, orderBy("title", "desc"))
    );
    console.log("data", data.docs);

    let result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    result = result.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (result.length !== 0) {
      setSearchResultList(result);
      navigate('/search');
    } else {
      alert("Search Not Found!");
    }
  };
  return (
    <>
      <Header resultList={resultList} />
      <nav className="flex items-center justify-center gap-4 py-3 px-20 bg-red-600 text-white font-bold sticky top-0 z-50">
        <div className="flex items-center justify-center flex-1 gap-6 md:gap-10 lg:gap-14 py-2 md:pl-10 uppercase text-md">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="hover:text-black transition-all"
          >
            Home
          </NavLink>
          <NavLink
            to="/news"
            activeClassName="active"
            className="hover:text-black transition-all"
          >
            News
          </NavLink>
          <NavLink
            to="/sport"
            activeClassName="active"
            className="hover:text-black transition-all"
          >
            Sports
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="active"
            className="hover:text-black transition-all"
          >
            About
          </NavLink>
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setShowSearchBar((prev) => !prev)}
          >
            <FiSearch color="white" />
          </div>
        </div>
        <div className="hidden md:block">
          <SearchBar setSearchResultList={setSearchResultList} />
        </div>
      </nav>
      {showSearchBar && (
        <div className="md:hidden px-4 flex items-center justify-center gap-1 mt-2 smallScreen">
          <input
            type="search"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            placeholder="Search..."
            className="px-2 py-2 w-full border border-red-600 text-black bg-transparent rounded outline-none "
          />
          <button
            onClick={getPostsBySearch}
            className="h-full border px-2 py-2 border-red-600 rounded text-red-600 hover:bg-red-600 hover:text-white"
          >
            Search
          </button>
        </div>
      )}
    </>
  );
};

NavBar.propTypes = {
  resultList: PropTypes.array.isRequired,
  setSearchResultList: PropTypes.func.isRequired,
};

export default NavBar;
