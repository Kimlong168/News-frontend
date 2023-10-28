// import React, { useState } from "react";

const SearchBar = () => {
  // //   const [search, setSearch] = useState("");
  // //   const handleSubmit = (e) => {
  // //     e.preventDefault();
  // //     setSearchQuery(search);
  // //     setShowResult(true);
  // //   };
  return (
    <div>
      <div className="mx-auto ">
        <form action="" className="relative mx-auto">
          <input
            // onBlur={() => {
            //   setShowResult(false);
            // }}
            // onFocus={() => setShowResult(true)}
            // onChange={(e) => setSearch(e.target.value)}
            type="search"
            name="search"
            placeholder="Search..."
            className="peer cursor-pointer relative z-10 h-10 w-12 rounded-full  bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4 text-white"
            // className="peer relative z-10 rounded-full  border bg-transparent h-11 outline-none w-[200px] md:w-[230px] lg:w-full border-white pl-16 pr-4 text-white"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-y-0 my-auto w-12 border-r border-transparent  px-3.5 border-white "
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

export default SearchBar;
