import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type ShopProps = {
  id: number;
  first_name: string;
  last_name: number;
  shop_name: string;
};

export function WebShop({ shop_name, id }: ShopProps) {
  const navigate = useNavigate();

  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{shop_name}</span>
        </Card.Title>
        <Card.Img src="src/assets/react.svg"></Card.Img>
        <div className="mt-auto">
          <Button
            onClick={(e) => {
              e.preventDefault();
              navigate(`/shop/${id}`)
            }}
            className="w-100"
          >
            Enter Shop
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
