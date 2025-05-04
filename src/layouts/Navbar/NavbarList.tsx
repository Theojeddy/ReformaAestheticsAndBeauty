import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function NavbarList() {
  // Setting the value of the navbar to closed by default
  const [menuOpen, setMenuOpen] = useState(false);
   const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div className={styles.navbarList}>
      {/* Book Here Button */}
      <div className={styles.Container}>
        <div>
          <Link to="Pages/Booking" className={styles.buttonLink}>
            <button className={styles.bookButton}>Book</button>
          </Link>
        </div>
        <div className={styles.burgerMenu} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Navigation Items */}
      {menuOpen && (
        <ul className={`${styles.navItems} ${menuOpen ? styles.open : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/pages/Staff">Staff</a>
          </li>
          <li>
            <a href="/pages/Aesthetics">Reforma Aesthetics</a>
          </li>
          <li>
            <a href="/pages/Beauty">Reforma Beauty</a>
          </li>
          <li>
            <a href="/pages/Booking">How To Book</a>
          </li>
        </ul>
      )}
    </div>
  );
}
