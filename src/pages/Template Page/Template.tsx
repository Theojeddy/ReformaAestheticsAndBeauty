import { useEffect, useState } from "react";
import styles from "./Template.module.css";
import ReformaLogo from "../../assets/ReformaLogo.svg";

export default function Template() {
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
      <main className={styles.ServicesPageLayout}>
        {/* First Row */}
        <div className={styles.logoSection}>
          <img
            className={styles.mainLogo}
            src={ReformaLogo}
            alt="Reforma Logo"
          />
        </div>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Our Services</h2>
        </div>

        {/* Service Sections */}
        <div className={styles.serviceSection}>
          {isSmallScreen ? (
            <div className={styles.serviceCard}>
              <h3>Anti-Wrinkle Treatments</h3>
              <p>
                Anti-wrinkle treatments are a non-surgical way to reduce the
                appearance of fine lines and wrinkles.
              </p>
            </div>
          ) : (
            <div className={styles.serviceCard}>
              <h3>Anti-Wrinkle Treatments</h3>
              <p>
                Anti-wrinkle treatments are a non-surgical way to reduce the
                appearance of fine lines and wrinkles.
              </p>
            </div>
          )}
        </div>

        {/* Repeat similar blocks for other services */}
        <div className={styles.serviceSection}>
          {isSmallScreen ? (
            <div className={styles.serviceCard}>
              <h3>Toxin Treatments</h3>
              <p>
                Toxin treatments are a type of cosmetic procedure that can help
                reduce the appearance of wrinkles and fine lines.
              </p>
            </div>
          ) : (
            <div className={styles.serviceCard}>
              <h3>Toxin Treatments</h3>
              <p>
                Toxin treatments are a type of cosmetic procedure that can help
                reduce the appearance of wrinkles and fine lines.
              </p>
            </div>
          )}
        </div>

        {/* Add more services as needed... */}
      </main>
    </div>
  );
}
