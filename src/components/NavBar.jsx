import { NavLink } from "react-router-dom";
import Header from "./Header";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
const NavBar = ({ resultList }) => {
  return (
    <>
      <Header resultList={resultList} />
      <nav className="flex items-center justify-center gap-4 py-3 px-20 bg-red-600 text-white font-bold sticky top-0 z-50">
        <div className="flex items-center justify-center flex-1 gap-14 py-2 pl-10 uppercase text-md">
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
        </div>
        <div className="hidden md:block">
          <SearchBar />
        </div>

        <div className="md:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent  px-3.5 border-white "
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
        </div>
      </nav>
    </>
  );
};

NavBar.propTypes = {
  resultList: PropTypes.array.isRequired,
};

export default NavBar;
