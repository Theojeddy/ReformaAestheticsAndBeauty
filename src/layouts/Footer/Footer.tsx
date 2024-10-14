import { FaInstagram, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Social Media Section */}
        <div className={styles.socialMedia}>
          <FaInstagram className={styles.icon} /> {/* Instagram Icon */}
          <p>@ReformaAestheticsAndBeauty</p>
        </div>

        {/* Contact Info Section */}
        <div className={styles.contactInfo}>
          <FaPhone className={styles.icon} /> {/* Phone Icon */}
          <p>Becky 07........</p>
          <p>Jen 07443419656</p>
        </div>

        {/* Address Section */}
        <div className={styles.address}>
          <FaMapMarkerAlt className={styles.icon} /> {/* Location Icon */}
          <p>
            716 Portway, Bristol, Bristol City,
            <br />
            United Kingdom, BS11 9NX
          </p>
        </div>
      </div>
    </footer>
  );
}
