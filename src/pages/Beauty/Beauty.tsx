import styles from "./Beauty.module.css";
import ReformaLogo from "../../assets/ReformaLogo.svg";
import { useNavigate } from "react-router-dom";

interface BeautyProps {
  setTreatment: (treatmentName: string) => void; // Define the type for setTreatment
}

export default function Beauty({ setTreatment }: BeautyProps) {
  const navigate = useNavigate(); // Initialize the navigate function

const cardData = [
  {
    name: "Classic Lashes",
    description:
      "Classic lash extensions enhance your eyes with a natural look. Each extension is applied to a natural lash, adding length and thickness, perfect for those seeking a subtle enhancement.",
  },
  {
    name: "Hybrid Lashes",
    description:
      "Hybrid lash extensions combine classic and volume techniques, providing a textured and multidimensional look. This option offers fullness and drama while maintaining an elegant balance.",
  },
  {
    name: "Russian Lashes",
    description:
      "Russian lash extensions involve applying multiple lightweight extensions to each natural lash. This technique creates maximum volume and a bold appearance, perfect for a glamorous look.",
  },
  {
    name: "Lash Lift & Tint",
    description:
      "Lash lift and tint treatments enhance your natural lashes, providing a lift and curl while adding color for a fuller, defined look without the need for mascara.",
  },
  {
    name: "Infills",
    description:
      "Lash infills are maintenance appointments for eyelash extensions. They fill gaps and replace shed extensions, ensuring a full and voluminous look, typically done every 2-3 weeks.",
  },
  {
    name: "Lash Removal",
    description:
      "Lash removal safely and gently removes eyelash extensions without damaging your natural lashes, ensuring a comfortable experience.",
  },
  {
    name: "Eyebrows",
    description:
      "Eyebrow treatments include waxing, tinting, and lamination, designed to enhance your brows' shape and color for a polished and defined appearance.",
  },
  {
    name: "Waxing",
    description:
      "Waxing provides long-lasting hair removal for various body areas, leaving your skin smooth and radiant without the hassle of shaving.",
  },
  {
    name: "Mobile Spray Tans",
    description:
      "Mobile spray tans offer a convenient way to achieve a natural-looking tan at home, using nourishing solutions for a sun-kissed glow.",
  },
  {
    name: "Packages And Deals",
    description:
      "Packages and deals allow you to save money on multiple treatments, making beauty maintenance more affordable.",
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
