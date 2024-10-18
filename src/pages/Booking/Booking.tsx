import { useEffect, useState } from "react";
import styles from "./Booking.module.css";
import ReformaLogo from "../../assets/ReformaLogo.svg";
import Consultation1 from "../../assets/Booking/Consultation1.svg";
import PatchTest1 from "../../assets/Booking/PatchTest1.svg";

export default function Staff() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.pageContent}>
      <main className={styles.BookingpageLayout}>
        {/* First Row */}
        <div className={styles.logoSection}>
          <img
            className={styles.mainLogo}
            src={ReformaLogo}
            alt="Reforma Logo"
          />
        </div>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Booking</h2>
        </div>

        {/* Second Row - Consultation */}
        <div className={styles.ConsultationSection}>
          <div className={styles.ConsultationImageContainer}>
            <img
              className={styles.Consultation}
              src={Consultation1}
              alt="Consultation"
            />
          </div>
          <div className={styles.ConsultationTextSection}>
            <h1 className={styles.TextTitle}>Consultation</h1>
            <h3 className={styles.subtitle}>Free | 20 mins</h3>
            <p>
              Unsure of what treatment would benefit you? Or what's available,
              but would like to treat yourself and put that strut back into your
              step? Consultations are completely free. We understand there are
              many questions when it comes to aesthetics and we're happy to
              answer them all! We have plenty of options and packages we can put
              together to support your individual needs... or not, there's never
              any obligation and we will always uphold your privacy.
            </p>
          </div>
        </div>

        {/* Third Row - Patch Test */}
        <div className={styles.PatchTestSection}>
          {isSmallScreen ? (
            <>
              <div className={styles.PatchTestImageContainer}>
                <img
                  className={styles.PatchTest}
                  src={PatchTest1}
                  alt="Patch Test"
                />
              </div>
              <div className={styles.PatchTestTextSection}>
                <h1 className={styles.TextTitle}>Patch Test</h1>
                <h3 className={styles.subtitle}>Free | 20 mins</h3>
                <p>
                  Make sure to book a patch test appointment before your
                  treatment. This must be a minimum of 48 hours before your
                  booking. This is a legal requirement and your treatment will
                  not take place without a patch test.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className={styles.PatchTestTextSection}>
                <h1 className={styles.TextTitle}>Patch Test</h1>
                <h3 className={styles.subtitle}>Free | 20 mins</h3>
                <p>
                  Make sure to book a patch test appointment before your
                  treatment. This must be a minimum of 48 hours before your
                  booking. This is a legal requirement and your treatment will
                  not take place without a patch test.
                </p>
              </div>
              <div className={styles.PatchTestImageContainer}>
                <img
                  className={styles.PatchTest}
                  src={PatchTest1}
                  alt="Patch Test"
                />
              </div>
            </>
          )}
        </div>

        {/* Book Here Button */}
        <div className={styles.buttonContainer}>
          <a
            href="https://booking.styler.digital/?business=reforma_aesthetics_and_beauty"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonLink}
          >
            <button className={styles.bookButton}>Book Here</button>
          </a>
        </div>
      </main>
    </div>
  );
}
