import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Sport from "./pages/Sport";
import NewDetail from "./pages/NewDetail";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import myData from "./data";
import { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(myData);
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/news" element={<News data={data} />} />
          <Route path="/sport" element={<Sport data={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<NewDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
