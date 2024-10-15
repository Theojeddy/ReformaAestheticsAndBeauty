import styles from "./Treatments.module.css"; // Import your CSS module
import { treatmentsData } from "../../Data/TreatmentData"; // Import treatment data
import ReformaLogo from "../../assets/ReformaLogo.svg"; // Adjust the path to your logo image
import { useEffect, useState } from "react";

interface Treatment {
  name: string;
  description: string;
  // Add any other relevant fields you need
}
export default function Treatments({ treatment }: { treatment: string }) {
  const [treatmentDetails, setTreatmentDetails] = useState<Treatment | null>(
    null
  );

  useEffect(() => {
    // Check both aesthetics and beauty for the selected treatment
    const details =
      treatmentsData.aesthetics.find((item) => item.name === treatment) ||
      treatmentsData.beauty.find((item) => item.name === treatment);
    setTreatmentDetails(details || null);;
  }, [treatment]);

  if (!treatmentDetails) {
    return (
      <div className={styles.noTreatment}>
        <h1>No treatment selected</h1>
      </div>
    );
  }

  console.log("Selected Treatment Details:", treatmentDetails);

  return (
    <div className={styles.pageContent}>
      <main className={styles.TreatmentPageLayout}>
        {/* First Row */}
        <div className={styles.logoSection}>
          <img
            className={styles.mainLogo}
            src={ReformaLogo}
            alt="Reforma Logo"
          />
        </div>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Our Treatments</h2>
        </div>

        {/* Second Row */}
        <div className={styles.serviceSection}>
          <div className={styles.serviceCard}>
            <h3>{treatmentDetails.name}</h3>
            <p>{treatmentDetails.description}</p>
          </div>
          <div className={styles.serviceImageSection}>
            <img
              src={`/images/${treatmentDetails.name}.jpg`} // Ensure images are named correctly
              alt={treatmentDetails.name}
              className={styles.treatmentImage}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
