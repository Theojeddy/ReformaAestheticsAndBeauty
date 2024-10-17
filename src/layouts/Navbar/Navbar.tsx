import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";
import ReformaNavbarLogo from "../../assets/ReformaNavbarLogo.svg"; 

export default function Navbar() {
  // Setting the value of the navbar to closed by default
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    // Navbar positing of Logo image to the left, title offset to the right and burger menu to the left
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Logo on the left */}
        <div className={styles.logoContainer}>
          <img
            className={styles.navbarLogo}
            src={ReformaNavbarLogo}
            alt="Reforma Logo"
          />
        </div>
        <div>
          <h1 className={styles.navTitle}>Reforma Aesthetics & Beauty</h1>
        </div>
        <div>
          <a
            href="https://booking.styler.digital/?business=reforma_aesthetics_and_beauty"
            target="_blank" // This opens the link in a new tab
            rel="noopener noreferrer" // Adds security when opening in a new tab
          >
            <button>Book Now</button>
          </a>
        </div>

        {/* Burger menu icon when closed and cross for when open */}
        <div className={styles.burgerMenu} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Dropdown menu options and links */}
        {menuOpen && (
          <ul className={`${styles.navItems} ${menuOpen ? styles.open : ""}`}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/pages/Staff">Staff</a>
            </li>
            <li>
              <a href="/pages/ContactUs">Contact Us</a>
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
    </nav>
  );
}
