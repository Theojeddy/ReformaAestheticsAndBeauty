import styles from "./ContactUs.module.css";
import ReformaLogo from "../../assets/ReformaLogo.svg";

export default function ContactUs() {
  return (
    <div>
      <header className={styles.headerCenter}>
        <img className={styles.mainLogo} src={ReformaLogo} alt="Reforma Logo" />
      </header>
      <main>
        <h1>Contact Us</h1>
        <p>Get in touch with us through the Contact Us page.</p>
      </main>
    </div>
  );
}
