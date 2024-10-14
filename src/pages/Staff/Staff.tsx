import styles from "./Staff.module.css";
import ReformaLogo from "../../assets/ReformaLogo.svg";
import JenMTT from "../../assets/JenMTT.svg";
import BeckyMTT from "../../assets/BeckyMTT.svg";

export default function Staff() {
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
        <h1>Meet The Team</h1>

        {/* Second Row */}
        <h2>I’m Becky</h2>
        <div className={styles.BioSection}>
          <img className={styles.BeckyMTT} src={BeckyMTT} alt="Becky Meets the team" />
        </div>
        <p>
          I am a loving mum to three amazing children and two cute doggos. A
          sports enthusiast and keen rugby player who enjoys living an active
          lifestyle. I have a passion for traveling and spending as much time as
          possible outdoors. Reforma to me is primarily about allowing
          individuals to gain confidence in their own skin. Confidence as we
          know, is one of the most attractive features a person can own. Reforma
          strives to create that confidence by guiding you to make informed
          choices on options available to enhance what already makes you
          beautiful in a professional and personal environment. I’m excited to
          grow my business and work with a wide range of people to achieve their
          own unique goals. Full confidentiality is always assured. I look
          forward to meeting you x✨
        </p>
        {/* Third Row */}

        <h2>I’m Jen</h2>
        <div className={styles.BioSectionSection}>
          <img
            className={styles.JenMTT}
            src={JenMTT}
            alt="Jen Meets the team"
          />
        </div>
        <p>
          I am 23 years old and live a very chaotic lifestyle. My full-time job
          is a SEMH HLTA at a local school and I also have a passion for
          teaching dance and organizing events. I started Gert Lashh in August
          2021 and its continued to growing. I have now joined forces with the
          lovely Becky and created Reforma Aesthetics & Beauty. We have added
          lots of new treatments to the service list using only the best
          products. Reforma for me is all about boosting confidence and creating
          the perfect outcomes for our clients. I love lashing and everything
          that comes with it, and am super excited to grow the business with its
          new name Reforma Beauty.
        </p>
      </main>
    </div>
  );
}
