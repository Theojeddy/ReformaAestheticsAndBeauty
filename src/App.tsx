import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Aesthetics from "./pages/Aesthetics/Aesthetics";
import Beauty from "./pages/Beauty/Beauty";
import Booking from "./pages/Booking/Booking";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import Staff from "./pages/Staff/Staff";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import Template from "./pages/Template Page/Template";
import "./App.css";
import Treatments from "./pages/Treatments/Treatments";

const App = () => {
  const [treatment, setTreatment] = useState<string>(""); // Set to string

  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <div className="contentContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/pages/Aesthetics"
            element={<Aesthetics setTreatment={setTreatment} />}
          />
          <Route
            path="/pages/Beauty"
            element={<Beauty setTreatment={setTreatment} />}
          />
          <Route path="/pages/Booking" element={<Booking />} />
          <Route path="/pages/ContactUs" element={<ContactUs />} />
          <Route path="/pages/Staff" element={<Staff />} />
          <Route
            path="/pages/Treatment"
            element={<Treatments treatment={treatment} />}
          />


          <Route path="/pages/Template" element={<Template />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};


export default App;
