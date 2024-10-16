import { Card } from "react-bootstrap";
import styles from "./CardList.module.css";

interface CardData {
  name: string;
  description: string;
}

interface CardListProps {
  data: CardData[];
  onSelectTreatment: (treatmentName: string) => void;
}

export default function CardList({ data, onSelectTreatment }: CardListProps) {
  return (
    <div className={styles.cardContainer}>
      {data.map((item, index) => (
        <Card
          key={index}
          className={styles.serviceCard} // Ensure this matches your CSS
          onClick={() => onSelectTreatment(item.name)}
        >
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
