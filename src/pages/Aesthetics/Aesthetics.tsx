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
    description: "Botulinum toxin injections, known as 'Botox,' relax facial muscles to smooth out lines and wrinkles. Effects last 3-4 months. Pricing varies by area treated, starting from £140 for one area. Consult for more information on treatment areas."
  },
  {
    name: "Toxin Nose",
    description: "Enhance your profile with nose slimming and bunny line treatments using botulinum toxin. These procedures reduce nostril flaring and minimize wrinkles around the nose, with effects lasting about 3 months. Pricing starts at £80 for targeted areas."
  },
  {
    name: "Toxin Chin/Jaw",
    description: "Achieve a smoother chin and jawline with botulinum toxin. Treatments can relax muscles causing chin pebbles and slim the jaw for a more refined look. Prices start at £80, lasting around 3-4 months."
  },
  {
    name: "Toxin Mouth",
    description: "Combat the downward pull of aging with botulinum toxin to improve your smile. This treatment targets DAO muscle for a happier resting face and reduces smokers' lines. Pricing starts at £65, effects last 3-4 months."
  },
  {
    name: "Toxin Other",
    description: "Address hyperhidrosis and achieve a lifted brow with botulinum toxin. This treatment helps control excessive sweating, smooths eye wrinkles, and lifts brows, lasting around 3-4 months. Prices start at £80 for specific treatments, inquire for details."
  },
  {
    name: "Skin Boosters",
    description: "Injectable hyaluronic acid skin boosters like Seventy Hyal enhance hydration for rejuvenated skin. Profhilo stimulates collagen for improved elasticity. Prices start at £120 for one session, with multiple sessions recommended for optimal results."
  },
  {
    name: "Facial Contouring",
    description: "Restore youthful volume and enhance facial features with fillers. Tailored packages can include cheeks, jaw, and chin. Pricing starts at £180 for 1ml, with consultation available for personalized treatment plans."
  },
  {
    name: "Dermal Filler",
    description: "Reduce signs of aging with dermal fillers for nasolabial lines and lips. Natural results last 12-18 months. Pricing for fillers starts at £140 for 0.5ml. Consultations can guide you through options for your desired look."
  },
  {
    name: "Fat Dissolving",
    description: "Target stubborn fat with Aqualyx and Lemon Bottle treatments. These injectable solutions work to eliminate fat cells, requiring multiple sessions for optimal results. Prices start at £90 for small areas, tailored to your needs."
  },
  {
    name: "Micro Needling",
    description: "Microneedling stimulates collagen and elastin production for rejuvenated skin. This minimally invasive procedure can improve fine lines and texture. Pricing starts at £50 for vitamin-infused sessions, with multiple sessions recommended."
  },
  {
    name: "Facials",
    description: "Enjoy various facial treatments including dermaplaning and chemical peels to enhance your skin's appearance. Prices start at £30 for basic facials, tailored for all skin types to achieve a radiant glow."
  },
  {
    name: "Vitamin Intramuscular Injections",
    description: "Vitamin B12 injections boost energy, mood, and overall health. Essential for red blood cell formation, these shots help combat fatigue and improve brain function. Pricing varies based on treatment, consult for details."
  }
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
