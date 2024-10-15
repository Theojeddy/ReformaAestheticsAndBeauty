import { Card } from "react-bootstrap";

interface CardData {
  name: string;
  description: string;
}

interface CardListProps {
  data: CardData[];
  onSelectTreatment: (treatmentName: string) => void; // Add this line
}

export default function CardList({ data, onSelectTreatment }: CardListProps) {
  return (
    <div className="d-flex flex-wrap justify-content-center card-list">
      {data.map((item, index) => (
        <Card
          key={index}
          className="custom-card m-2"
          onClick={() => onSelectTreatment(item.name)} // Add this line
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
