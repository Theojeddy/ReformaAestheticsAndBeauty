import styles from "./Beauty.module.css";
import CardList from "../../components/CardList";
import ReformaLogo from "../../assets/ReformaLogo.svg";

export default function Beauty() {
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

  return (
    <div>
      <header className={styles.headerCenter}>
        <img className={styles.mainLogo} src={ReformaLogo} alt="Reforma Logo" />
      </header>
      <main>
        <h1>Beauty</h1>
        <CardList data={cardData} />
      </main>
    </div>
  );
}
