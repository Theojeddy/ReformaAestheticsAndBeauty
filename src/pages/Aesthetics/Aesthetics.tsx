import { useNavigate } from "react-router-dom";
import styles from "./Aesthetics.module.css";
import ReformaLogo from "../../assets/ReformaLogo.svg";

// Define an interface for the props
interface AestheticsProps {
  setTreatment: (treatmentName: string) => void; // Define the type for setTreatment
}

export default function Aesthetics({ setTreatment }: AestheticsProps) {
  const navigate = useNavigate(); // Initialize the navigate function

  const cardData = [
    {
      name: "Anti-Wrinkle Treatments",
      description:
        "Anti-wrinkle treatments are a non-surgical way to reduce the appearance of fine lines and wrinkles.",
    },
    {
      name: "Toxin Treatments",
      description:
        "Toxin treatments are a type of cosmetic procedure that can help reduce the appearance of wrinkles and fine lines.",
    },
    {
      name: "Facial Contouring",
      description:
        "Facial contouring is a cosmetic procedure that can help enhance the natural contours of your face.",
    },
    {
      name: "Dermal Filler",
      description:
        "Dermal fillers are a type of cosmetic procedure that can help reduce the appearance of fine lines and wrinkles.",
    },
    {
      name: "Fat Dissolving",
      description:
        "Fat dissolving injections are a type of cosmetic procedure that can help reduce the appearance of stubborn fat deposits.",
    },
    {
      name: "Micro Needling",
      description:
        "Microneedling is a type of cosmetic procedure that can help reduce the appearance of fine lines and wrinkles.",
    },
    {
      name: "Facials",
      description:
        "Facials are a type of cosmetic procedure that can help improve the appearance of your skin.",
    },
    {
      name: "Vitamin Intramuscular Injections",
      description:
        "Vitamin intramuscular injections are a type of cosmetic procedure that can help improve your overall health and well-being.",
    },
  ];

  const handleSelectTreatment = (treatmentName: string) => {
    console.log("Selected Treatment:", treatmentName); // Debugging line
    setTreatment(treatmentName);
    navigate("/pages/Treatment");
  };

  return (
    <div className={styles.pageContent}>
      <main className={styles.AestheticsPageLayout}>
        {/* First Row */}
        <div className={styles.logoSection}>
          <img
            className={styles.mainLogo}
            src={ReformaLogo}
            alt="Reforma Logo"
          />
        </div>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Reforma Aesthetics</h2>
        </div>

        {/* Manually creating cards */}
        <div className={styles.cardContainer}>
          {cardData.map((card, index) => (
            <div
              key={index}
              className={styles.serviceCard}
              onClick={() => handleSelectTreatment(card.name)}
            >
              <h3>{card.name}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
