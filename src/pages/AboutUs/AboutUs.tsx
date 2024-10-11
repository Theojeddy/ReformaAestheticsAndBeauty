import styles from "./AboutUs.module.css";
import ReformaLogo from "../../assets/ReformaLogo.svg";

export default function AboutUs() {
  return (
    <div>
      <header className={styles.headerCenter}>
        <img className={styles.mainLogo} src={ReformaLogo} alt="Reforma Logo" />
      </header>
      <main>
        <h1>About Us</h1>
        <p>Welcome to the About Us page of Reforma Beauty.</p>
      </main>
    </div>
  );
}
