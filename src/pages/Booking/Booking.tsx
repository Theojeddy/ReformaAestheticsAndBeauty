import styles from "./Booking.module.css";
import ReformaLogo from "../../assets/ReformaLogo.svg";


export default function Booking() {
  return (
    <div>
      <header className={styles.headerCenter}>
        <img className={styles.mainLogo} src={ReformaLogo} alt="Reforma Logo" />
      </header>
      <main>
        <h1>Booking</h1>
        <p>Book your appointment.</p>
      </main>
    </div>
  );
}
