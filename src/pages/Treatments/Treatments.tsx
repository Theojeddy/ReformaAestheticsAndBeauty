import styles from "./Treatments.module.css"; // Import your CSS module
import { treatmentsData } from "../../Data/TreatmentData"; // Import treatment data
import ReformaLogo from "../../assets/ReformaLogo.svg"; // Adjust the path to your logo image
import { useEffect, useState } from "react";

interface Treatment {
  name: string;
  description: string;
  images: string[]; // Array of image paths or URLs
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

    // Ensure details have images, or set a default empty array
    if (details) {
      setTreatmentDetails({ ...details, images: details.images || [] });
    } else {
      setTreatmentDetails(null);
    }
  }, [treatment]);

  if (!treatmentDetails) {
    return (
      <div className={styles.noTreatment}>
        <h1>No treatment selected</h1>
      </div>
    );
  }

  // Extract the first image and remaining images
  const [firstImage, ...remainingImages] = treatmentDetails.images;

  return (
    <div className={styles.pageContent}>
      <main className={styles.TreatmentPageLayout}>
        {/* First Row: Logo and Treatment Name */}
        <div className={styles.logoSection}>
          <img
            className={styles.mainLogo}
            src={ReformaLogo}
            alt="Reforma Logo"
          />
        </div>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>{treatmentDetails.name}</h1>
        </div>

        {/* Second Row: First Image */}
        <div className={styles.serviceImageSection}>
          {firstImage && (
            <img
              src={firstImage}
              alt={`${treatmentDetails.name} Image 1`}
              className={styles.treatmentImage}
            />
          )}
        </div>

        {/* Third Row: Description */}
        <div
          className={styles.descriptionSection}
          dangerouslySetInnerHTML={{ __html: treatmentDetails.description }}
        />

        {/* Fourth Row: Remaining Images in Columns */}
        <div className={styles.remainingImages}>
          {remainingImages.length > 0 &&
            remainingImages.map((image, index) => (
              <div key={index} className={styles.imageColumn}>
                <img
                  src={image}
                  alt={`${treatmentDetails.name} Image ${index + 2}`}
                  className={styles.treatmentImage}
                />
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
