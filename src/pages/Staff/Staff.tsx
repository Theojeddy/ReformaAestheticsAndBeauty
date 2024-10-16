import { useEffect, useState } from "react";
import styles from "./Staff.module.css";
import ReformaLogo from "../../assets/ReformaLogo.svg";
import JenMTT from "../../assets/Staff/JenMTT.svg";
import BeckyMTT from "../../assets/Staff/BeckyMTT.svg";

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
      <main className={styles.StaffpageLayout}>
        {/* First Row */}
        <div className={styles.logoSection}>
          <img
            className={styles.mainLogo}
            src={ReformaLogo}
            alt="Reforma Logo"
          />
        </div>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Meet The Team</h2>
        </div>

        {/* Second Row - Becky */}
        <div className={styles.beckySection}>
          <div className={styles.beckyImageContainer}>
            <img
              className={styles.BeckyMTT}
              src={BeckyMTT}
              alt="Becky Meets the team"
            />
          </div>
          <div className={styles.beckyBioSection}>
            <h1 className={styles.bioTitle}>Becky Simpson</h1>
            <h3 className={styles.subtitle}>Director of Reforma Aesthetics</h3>
            <p>
              I am a loving mum to three amazing children and two cute doggos. A
              sports enthusiast and keen rugby player who enjoys living an
              active lifestyle. I have a passion for traveling and spending as
              much time as possible outdoors. Reforma to me is primarily about
              allowing individuals to gain confidence in their own skin.
              Confidence as we know, is one of the most attractive features a
              person can own. Reforma strives to create that confidence by
              guiding you to make informed choices on options available to
              enhance what already makes you beautiful in a professional and
              personal environment. I’m excited to grow my business and work
              with a wide range of people to achieve their own unique goals.
              Full confidentiality is always assured. I look forward to meeting
              you x✨
            </p>
          </div>
        </div>

        {/* Third Row - Jen */}
        <div className={styles.jenSection}>
          {isSmallScreen ? (
            <>
              <div className={styles.jenImageContainer}>
                <img
                  className={styles.JenMTT}
                  src={JenMTT}
                  alt="Jen Meets the team"
                />
              </div>
              <div className={styles.jenBioSection}>
                <h1 className={styles.bioTitle}>Jen Giltrow</h1>
                <h3 className={styles.subtitle}>Director of Reforma Beauty</h3>
                <p>
                  I am 23 years old and live a very chaotic lifestyle. My
                  full-time job is a SEMH HLTA at a local school and I also have
                  a passion for teaching dance and organizing events. I started
                  Gert Lashh in August 2021 and its continued to growing. I have
                  now joined forces with the lovely Becky and created Reforma
                  Aesthetics & Beauty. We have added lots of new treatments to
                  the service list using only the best products. Reforma for me
                  is all about boosting confidence and creating the perfect
                  outcomes for our clients. I love lashing and everything that
                  comes with it, and am super excited to grow the business with
                  its new name Reforma Beauty.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className={styles.jenBioSection}>
                <h1 className={styles.bioTitle}>Jen Giltrow</h1>
                <h3 className={styles.subtitle}>Director of Reforma Beauty</h3>
                <p>
                  I am 23 years old and live a very chaotic lifestyle. My
                  full-time job is a SEMH HLTA at a local school and I also have
                  a passion for teaching dance and organizing events. I started
                  Gert Lashh in August 2021 and its continued to growing. I have
                  now joined forces with the lovely Becky and created Reforma
                  Aesthetics & Beauty. We have added lots of new treatments to
                  the service list using only the best products. Reforma for me
                  is all about boosting confidence and creating the perfect
                  outcomes for our clients. I love lashing and everything that
                  comes with it, and am super excited to grow the business with
                  its new name Reforma Beauty.
                </p>
              </div>
              <div className={styles.jenImageContainer}>
                <img
                  className={styles.JenMTT}
                  src={JenMTT}
                  alt="Jen Meets the team"
                />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
