import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Sport from "./pages/Sport";
import Error404 from "./pages/Error404";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Popup5s from "./components/Popup5s";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebase-config";
import DetailContent from "./pages/DetailContent";
import Search from "./pages/Search";
export default function App() {
  const [postList, setPostList] = useState([]);
  const [authorList, setAuthorList] = useState([]);
  const [todayMatchList, setTodayMatchList] = useState([]);
  const [resultList, setResultList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [searchResultList, setSearchResultList] = useState(null);
  const [clubList, setClubList] = useState(null);
  const [groupList, setGroupList] = useState(null);
  const [theme, setTheme] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const postCollectionRef = collection(db, "posts");
    const authorCollectionRef = collection(db, "authors");
    const resultCollectionRef = collection(db, "results");
    const todayMatchCollectionRef = collection(db, "todayMatch");
    const categoryCollectionRef = collection(db, "categories");
    const clubCollectionRef = collection(db, "clubs");
    const groupCollectionRef = collection(db, "groups");

    const getPosts = async () => {
      const authors = await getDocs(authorCollectionRef);
      const posts = await getDocs(postCollectionRef);
      const results = await getDocs(resultCollectionRef);
      const matches = await getDocs(todayMatchCollectionRef);
      const categories = await getDocs(categoryCollectionRef);
      // const clubs = await getDocs(clubCollectionRef);
      const clubs = await getDocs(
        query(
          clubCollectionRef,
          // orderBy("point", "desc"),
          orderBy("numGD", "desc")
        )
      );
      const groups = await getDocs(groupCollectionRef);

      console.log("posts", posts);
      console.log("auhtors", authors);
      console.log("football_results", results);
      console.log("today_match", matches);
      console.log("categories", categories);
      console.log("clubs", clubs);
      console.log("groups", groups);

      setAuthorList(authors.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setResultList(results.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setTodayMatchList(
        matches.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setPostList(posts.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setCategoryList(
        categories.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setClubList(clubs.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setGroupList(groups.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  // set mode to dark if user's device is in dark mode
  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark");
  //     localStorage.setItem("mode", "dark");
  //   } else {
  //     setTheme("light");
  //     localStorage.setItem("mode", "light");
  //   }
  // }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (theme === "dark") {
      localStorage.setItem("mode", "light");
    } else {
      localStorage.setItem("mode", "dark");
    }
    setTheme(theme === "dark" ? "light" : "dark");
  };

  //show popup 5s

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(true);
      // document.body.style.overflow = 'hidden'; // unenable scrolling
    }, 1000);
    return () => clearTimeout(timeout);
  },[]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(false);
      // document.body.style.overflow = 'auto'; // Enable scrolling
    }, 46000);
    return () => clearTimeout(timeout);
  },[]);

  return (
    <div className="dark:bg-black ">
      {showPopup && <Popup5s setShowPopup={setShowPopup} />}

      <Router>
        <NavBar
          resultList={resultList}
          setSearchResultList={setSearchResultList}
          handleThemeSwitch={handleThemeSwitch}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                postList={postList}
                todayMatchList={todayMatchList}
                categoryList={categoryList}
                clubList={clubList}
                groupList={groupList}
              />
            }
          />
          <Route
            path="/news"
            element={
              <News
                postList={postList}
                authorList={authorList}
                categoryList={categoryList}
              />
            }
          />
          <Route
            path="/sport"
            element={
              <Sport
                postList={postList}
                authorList={authorList}
                categoryList={categoryList}
              />
            }
          />
          <Route path="/about" element={<About authorList={authorList} />} />
          <Route
            path="/detail/:id"
            element={
              <DetailContent authorList={authorList} postList={postList} />
            }
          />
          {searchResultList !== null && (
            <Route
              path="/search"
              element={
                <Search
                  searchResultList={searchResultList}
                  authorList={authorList}
                />
              }
            />
          )}

          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
