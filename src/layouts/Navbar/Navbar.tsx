import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";
import ReformaNavbarLogo from "../../assets/ReformaNavbarLogo.svg"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-container"]}>
        {/* Logo on the left */}
        <div className={styles["logo-container"]}>
          <img
            className={styles["navbar-logo"]}
            src={ReformaNavbarLogo} // Use the imported variable here
            alt="Reforma Logo"
            width={100}
            height={50}
          />
        </div>
        <div className={styles["nav-title"]}>
          <h1>Reforma Aesthetics & Beauty</h1>
        </div>

        {/* Burger menu icon for mobile */}
        <div className={styles["burger-menu"]} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Dropdown menu */}
        {menuOpen && (
          <ul
            className={`${styles["nav-items"]} ${menuOpen ? styles.open : ""}`}
          >
            <li>
              <a href="/">Home</a> {/* Updated to standard anchor link */}
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
