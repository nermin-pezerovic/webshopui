import { Button, Card } from "react-bootstrap";
import { UseOwner } from "../context/OwnerProvider";
import { formatCurrency } from "../utilities/formatCurrency";

type ShopProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function OwnerShop({ id, name, price, imgUrl }: ShopProps) {

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          <Button className="w-100">
            Enter Shop
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
