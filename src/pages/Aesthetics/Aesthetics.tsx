import styles from "./Aesthetics.module.css";
import CardList from "../../components/CardList";
import ReformaLogo from "../../assets/ReformaLogo.svg";

export default function Aesthetics() {
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

  return (
    <div>
      <header className={styles.headerCenter}>
        <img className={styles.mainLogo} src={ReformaLogo} alt="Reforma Logo" />
      </header>
      <main>
        <h1>Aesthetics Page</h1>
        <CardList data={cardData} />
      </main>
    </div>
  );
}
