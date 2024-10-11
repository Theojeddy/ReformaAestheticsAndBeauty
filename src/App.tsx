import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Aesthetics from "./pages/Aesthetics/Aesthetics";
import Beauty from "./pages/Beauty/Beauty";
import Booking from "./pages/Booking/Booking";
import ContactUs from "./pages/ContactUs/ContactUs";
import Staff from "./pages/Staff/Staff";
import Navbar from "./layouts/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/about-us" element={<AboutUs />} />
        <Route path="/pages/aesthetics" element={<Aesthetics />} />
        <Route path="/pages/beauty" element={<Beauty />} />
        <Route path="/pages/booking" element={<Booking />} />
        <Route path="/pages/ontact-us" element={<ContactUs />} />
        <Route path="/pages/staff" element={<Staff />} />
      </Routes>
    </Router>
  );
};

export default App;
