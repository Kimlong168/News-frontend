import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Sport from "./pages/Sport";
import Error404 from "./pages/Error404";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import DetailContent from "./pages/DetailContent";
export default function App() {
  const [postList, setPostList] = useState([]);
  const [authorList, setAuthorList] = useState([]);
  const [todayMatchList, setTodayMatchList] = useState([]);
  const [resultList, setResultList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    const postCollectionRef = collection(db, "posts");
    const authorCollectionRef = collection(db, "authors");
    const resultCollectionRef = collection(db, "results");
    const todayMatchCollectionRef = collection(db, "todayMatch");
    const categoryCollectionRef = collection(db, "categories");

    const getPosts = async () => {
      const authors = await getDocs(authorCollectionRef);
      const posts = await getDocs(postCollectionRef);
      const results = await getDocs(resultCollectionRef);
      const matches = await getDocs(todayMatchCollectionRef);
      const categories = await getDocs(categoryCollectionRef);

      console.log("posts", posts);
      console.log("auhtors", authors);
      console.log("football_results", results);
      console.log("today_match", matches);
      console.log("categories", categories);

      setAuthorList(authors.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setResultList(results.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setTodayMatchList(
        matches.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setPostList(posts.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setCategoryList(
        categories.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getPosts();
  }, []);


  return (
    <>
      <Router>
        <NavBar resultList={resultList} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                postList={postList}
                todayMatchList={todayMatchList}
                categoryList={categoryList}
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
            element={<DetailContent authorList={authorList} />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
