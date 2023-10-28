import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Sport from "./pages/Sport";
import NewDetail from "./pages/NewDetail";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<NewDetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
