import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import ReformaNavbarLogo from "../../assets/ReformaNavbarLogo.svg";
import NavbarList from "./NavbarList";

export default function Navbar() {

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <Link to="/" className={styles.navbarLogoLink}>
          <img
            className={styles.navbarLogo}
            src={ReformaNavbarLogo}
            alt="Reforma Logo"
          />
        </Link>

        <nav className={styles.navbarLinks}>
          <a href="/pages/Staff">Staff</a>
          <a href="/pages/Aesthetics">Reforma Aesthetics</a>
          <a href="/pages/Beauty">Reforma Beauty</a>
          <a href="/pages/Booking">Book Now</a>
        </nav>

        <NavbarList />

      </div>
    </header>
  );
}
