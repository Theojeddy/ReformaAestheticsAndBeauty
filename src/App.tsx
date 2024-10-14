import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Aesthetics from "./pages/Aesthetics/Aesthetics";
import Beauty from "./pages/Beauty/Beauty";
import Booking from "./pages/Booking/Booking";
import ContactUs from "./pages/ContactUs/ContactUs";
import Staff from "./pages/Staff/Staff";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <header>
        <Navbar />
        </header>
      <div className="contentContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/AboutUs" element={<AboutUs />} />
          <Route path="/pages/Aesthetics" element={<Aesthetics />} />
          <Route path="/pages/Beauty" element={<Beauty />} />
          <Route path="/pages/Booking" element={<Booking />} />
          <Route path="/pages/ContactUs" element={<ContactUs />} />
          <Route path="/pages/Staff" element={<Staff />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
