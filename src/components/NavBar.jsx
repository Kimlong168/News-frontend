import { NavLink } from "react-router-dom";
import Header from "./Header";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
const NavBar = ({ resultList }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY < 500) {
        setShowSearchBar(false);
      } else {
        setShowSearchBar(true);
      }
    });
  }, []);
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
          <SearchBar />
        </div>
      </nav>
      {showSearchBar && (
        <div className="md:hidden px-4 flex items-center justify-center gap-1 mt-2 smallScreen">
          <input
            type="search"
            placeholder="Search..."
            className="px-2 py-2 w-full border border-red-600 text-black bg-transparent rounded outline-none "
          />
          <button
            onClick={() => alert("Sorry! This feature is under maintenance...")}
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
};

export default NavBar;
