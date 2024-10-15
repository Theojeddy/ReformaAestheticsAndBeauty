import styles from "./Beauty.module.css";
import CardList from "../../components/CardList";
import ReformaLogo from "../../assets/ReformaLogo.svg";
import { useNavigate } from "react-router-dom";

interface BeautyProps {
  setTreatment: (treatmentName: string) => void; // Define the type for setTreatment
}

export default function Beauty({ setTreatment }: BeautyProps) {
  const navigate = useNavigate(); // Initialize the navigate function

  const cardData = [
    {
      name: "Eyelashes",
      description:
        "Eyelashes are a type of cosmetic procedure that can help enhance the appearance of your eyes.",
    },
    {
      name: "Eyebrows",
      description:
        "Eyebrows are a type of cosmetic procedure that can help enhance the appearance of your eyebrows.",
    },
    {
      name: "Body Waxing",
      description:
        "Body waxing is a type of cosmetic procedure that can help remove unwanted hair from your body.",
    },
    {
      name: "Mobile Spray Tans",
      description:
        "Mobile spray tans are a type of cosmetic procedure that can help give you a natural-looking tan.",
    },
    {
      name: "Packages And Deals",
      description:
        "Packages and deals are a type of cosmetic procedure that can help you save money on multiple treatments.",
    },
  ];

  const handleSelectTreatment = (treatmentName: string) => {
    console.log("Selected Treatment:", treatmentName); // Debugging line
    setTreatment(treatmentName);
    navigate("/pages/Treatment");
  };


  return (
    <div className={styles.pageContent}>
      <main className={styles.BeautyPageLayout}>
        {/* First Row */}
        <div className={styles.logoSection}>
          <img
            className={styles.mainLogo}
            src={ReformaLogo}
            alt="Reforma Logo"
          />
        </div>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>Reforma Beauty</h2>
        </div>

        {/* Card List */}
        <div className={styles.cardContainer}>
          <CardList data={cardData} onSelectTreatment={handleSelectTreatment} />
        </div>
      </main>
    </div>
  );
}
